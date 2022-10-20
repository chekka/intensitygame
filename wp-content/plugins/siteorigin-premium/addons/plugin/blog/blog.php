<?php
/*
Plugin Name: SiteOrigin Blog
Description: Additional settings and styles for the SiteOrigin Blog Widget.
Version: 1.0.0
Author: SiteOrigin
Author URI: https://siteorigin.com
License: GPL3
License URI: https://www.gnu.org/licenses/gpl-3.0.txt
Documentation: https://siteorigin.com/premium-documentation/plugin-addons/blog
Tags: Widgets Bundle
Video: 
Requires: so-widgets-bundle/blog
*/

function SiteOrigin_premium_blog_addon_ajax() {
	if (
		empty( $_REQUEST['_widgets_nonce'] ) ||
		! wp_verify_nonce( $_REQUEST['_widgets_nonce'], 'so-blog-addon-ajax' )
	) {
		die();
	}

	$template_vars = array();
	if ( ! empty( $_GET['instance_hash'] ) ) {
		$instance_hash = $_GET['instance_hash'];
		global $wp_widget_factory;
		/** @var SiteOrigin_Widget $widget */
		$widget = ! empty ( $wp_widget_factory->widgets['SiteOrigin_Widget_Blog_Widget'] ) ? $wp_widget_factory->widgets['SiteOrigin_Widget_Blog_Widget'] : null;

		if ( ! empty( $widget ) ) {
			$instance = $widget->get_stored_instance( $instance_hash );
			$instance['paged'] = (int) $_GET['paged'];
			$template_vars = $widget->get_template_variables( $instance, array() );
		}
	}

	// Don't output anything if there are no posts to return;
	if ( ! empty( $template_vars['posts']->posts ) ) {
		ob_start();
		extract( $template_vars );
		$widget->override_read_more( $settings );
		while( $posts->have_posts() ) {
			$posts->the_post();
			include plugin_dir_path( SOW_BUNDLE_BASE_FILE ) . 'widgets/blog/tpl/' . $instance['template'] . '.php';
		}
		wp_reset_postdata();
		$result = array( 'html' => ob_get_clean() );
		header( 'content-type: application/json' );
		echo json_encode( $result );
	}
	die();
}
add_action( 'wp_ajax_sow_blog_load_posts', 'SiteOrigin_premium_blog_addon_ajax' );
add_action( 'wp_ajax_nopriv_sow_blog_load_posts', 'SiteOrigin_premium_blog_addon_ajax' );

class SiteOrigin_Premium_Plugin_Blog {
	var $excerpt_trim_indicator;

	function __construct() {
		add_action( 'init', array( $this, 'setup' ) );
	}

	static function single() {
		static $single;
		return empty( $single ) ? $single = new self() : $single;
	}

	public function setup() {
		if ( class_exists( 'SiteOrigin_Widget_Blog_Widget' ) ) {
			add_action( 'siteorigin_widgets_enqueue_frontend_scripts_sow-blog', array( $this, 'enqueue_assets' ), 10, 2 );
			add_filter( 'siteorigin_widgets_form_options_sow-blog', array( $this, 'add_form_options' ), 10, 2 );
			add_filter( 'siteorigin_widgets_less_variables_sow-blog', array( $this, 'add_less_variables' ), 1, 3 );
			add_filter( 'siteorigin_widgets_less_vars_sow-blog', array( $this, 'add_less' ), 20, 3 );
			add_filter( 'siteorigin_widgets_template_variables_sow-blog', array( $this, 'add_template_variables' ), 10, 4 );
			add_filter( 'siteorigin_widgets_blog_pagination_markup', array( $this, 'paginate_links' ), 10, 4 );
			add_action( 'siteorigin_widgets_blog_output_before', array( $this, 'before_output' ) );
			add_action( 'siteorigin_widgets_blog_output_after', array( $this, 'after_output' ) );
		}
	}

	function enqueue_assets() {
		wp_enqueue_style( 'siteorigin-premium-blog-addon', plugin_dir_url( __FILE__ ) . 'css/style.css' );
		wp_register_script( 'siteorigin-premium-blog-addon', plugin_dir_url( __FILE__ ) . 'js/script' . SITEORIGIN_PREMIUM_JS_SUFFIX . '.js', array( 'jquery' ) );
		wp_localize_script(
			'siteorigin-premium-blog-addon',
			'sowBlogAddon',
			array(
				'ajax-url' => sow_esc_url( wp_nonce_url( admin_url( 'admin-ajax.php' ), 'so-blog-addon-ajax', '_widgets_nonce' ) ),
			)
		);
	}

	public function add_form_options( $form_options, $widget ) {
		if ( empty( $form_options ) ) {
			return $form_options;
		}

		// Excerpt trim & Read more text.
		siteorigin_widgets_array_insert(
			$form_options['settings']['fields'],
			'date',
			array(
				'excerpt_trim' => array(
					'type' => 'text',
					'label' => __( 'Excerpt Trim Indicator', 'siteorigin-premium' ),
					'placeholder' => '...',
					'state_handler' => array(
						'content_type[excerpt]' => array( 'show' ),
						'_else[content_type]' => array( 'hide' ),
					),
				),
				'read_more_text' => array(
					'type' => 'text',
					'label' => __( 'Post Read More Link Text', 'siteorigin-premium' ),
					'placeholder' => __( 'Continue reading', 'siteorigin-premium' ),
				),
			)
		);

		// Post date format.
		$form_options['settings']['fields']['date']['state_emitter'] = array(
			'callback' => 'conditional',
			'args' => array(
				'date[enabled]: val',
				'date[disabled]: ! val',
			),
		);

		siteorigin_widgets_array_insert(
			$form_options['settings']['fields'],
			'author',
			array(
				'date_format' => array(
					'type' => 'select',
					'label' => __( 'Post Date Format', 'siteorigin-premium' ),
					'default' => 'default',
					'state_handler' => array(
						'active_template[standard,masonry,grid,offset,alternate]' => array( 'slideDown' ),
						'_else[active_template]' => array( 'slideUp' ),
					),
					'options' => array(
						'' => sprintf( __( 'Default (%s)', 'siteorigin-premium' ), date( get_option( 'date_format' ) ) ),
						'Y-m-d' => sprintf( __( 'yyyy-mm-dd (%s)', 'siteorigin-premium' ), date( 'Y/m/d' ) ),
						'm/d/Y' => sprintf( __( 'mm/dd/yyyy (%s)', 'siteorigin-premium' ), date( 'm/d/Y' ) ),
						'd/m/Y' => sprintf( __( 'dd/mm/yyyy (%s)', 'siteorigin-premium' ), date( 'd/m/Y' ) ),
					),
				),
			)
		);

		// Pagination.
		$form_options['settings']['fields']['pagination'] = array(
			'type' => 'select',
			'default' => 'standard',
			'label' => __( 'Pagination', 'siteorigin-premium' ),
			'state_emitter' => array(
				'callback' => 'select',
				'args' => array( 'pagination' ),
			),
			'options' => array(
				'standard' => 'Standard',
				'links' => __( 'Previous - Next', 'siteorigin-premium' ),
				'load' => __( 'Load More', 'siteorigin-premium' ),
				'infinite' => __( 'Infinite Scrolling', 'siteorigin-premium' ),
			)
		);

		$form_options['settings']['fields']['pagination_reload'] = array(
			'type' => 'select',
			'default' => 'standard',
			'label' => __( 'Pagination Page Reload', 'siteorigin-premium' ),
			'state_handler' => array(
				'pagination[standard,links]' => array( 'slideDown' ),
				'_else[pagination]' => array( 'slideUp' ),
			),
			'options' => array(
				'standard' => __( 'Standard', 'siteorigin-premium' ),
				'ajax' => __( 'Ajax', 'siteorigin-premium' ),
			),
		);

		// Hide Standard pagination settings in favour of premium settings.
		$form_options['design']['fields']['pagination']['state_handler'] = array(
			'pagination[standard]' => array( 'show' ),
			'_else[pagination]' => array( 'hide' ),
		);

		// Inject premium pagination design settings.
		$form_options['design']['fields']['pagination_premium'] = array(
			'type' => 'section',
			'label' => __( 'Pagination', 'siteorigin-premium' ),
			'hide' => true,
			'state_handler' => array(
				'pagination[links,load,infinite]' => array( 'show' ),
				'_else[pagination]' => array( 'hide' ),
			),
			'fields' => array(
				'top_margin' => array(
					'type' => 'measurement',
					'label' => __( 'Top Margin', 'siteorigin-premium' ),
					'default' => '30px',
				),
				'border_color' => array(
					'type' => 'color',
					'label' => __( 'Border Color', 'siteorigin-premium' ),
					'default' => '#2d2d2d',
				),
				'border_hover_color' => array(
					'type' => 'color',
					'label' => __( 'Border Hover Color', 'siteorigin-premium' ),
					'default' => '#f14e4e',
				),
				'border_width' => array(
					'type' => 'measurement',
					'label' => __( 'Border Width', 'siteorigin-premium' ),
					'units' => array( 'px', 'vh', 'vw', 'vmin', 'vmax' ),
					'default' => '2px',
				),
				'border_radius' => array(
					'type' => 'slider',
					'label' => __( 'Border Radius', 'siteorigin-premium' ),
					'default' => '0px',
					'max' => 50,
					'min' => 0,
					'step' => 1,
				),
				'background' => array(
					'type' => 'color',
					'label' => __( 'Background', 'siteorigin-premium' ),
				),
				'background_hover' => array(
					'type' => 'color',
					'label' => __( 'Hover Background', 'siteorigin-premium' ),
				),
				'font' => array(
					'type' => 'font',
					'label' => __( 'Font', 'siteorigin-premium' ),
				),
				'font_size' => array(
					'type' => 'measurement',
					'label' => __( 'Font Size', 'siteorigin-premium' ),
					'default' => '13px',
				),
				'letter_spacing' => array(
					'type' => 'measurement',
					'label' => __( 'Letter Spacing', 'siteorigin-premium' ),
					'default' => '1px',
				),
				'capitalize_links' => array(
					'type' => 'checkbox',
					'label' => __( 'Capitalize Links', 'siteorigin-premium' ),
					'default' => true,
				),
				'link_color' => array(
					'type' => 'color',
					'label' => __( 'Link Color', 'siteorigin-premium' ),
					'default' => '#2d2d2d',
				),
				'link_color_hover' => array(
					'type' => 'color',
					'label' => __( 'Link Hover Color', 'siteorigin-premium' ),
					'default' => '#f14e4e',
				),
				'padding' => array(
					'type' => 'multi-measurement',
					'label' => __( 'Padding', 'siteorigin-premium' ),
					'default' => '9px 25px 9px 25px',
					'measurements' => array(
						 'top' => array(
							'label' => __( 'Top', 'siteorigin-premium' ),
							'units' => array( 'px', '%' ),
						),
						'right' => array(
							'label' => __( 'Right', 'siteorigin-premium' ),
							'units' => array( 'px', '%' ),
						),
						'bottom' => array(
							'label' => __( 'Bottom', 'siteorigin-premium' ),
							'units' => array( 'px', '%' ),
						),
						'left' => array(
							'label' => __( 'Left', 'siteorigin-premium' ),
							'units' => array( 'px', '%' ),
						),
					)
				),
			)
		);

		return $form_options;
	}

	public function add_less_variables( $less_vars, $instance, $widget ) {
		if ( empty( $instance['design'] ) || empty( $instance['design']['pagination_premium'] ) ) {
			return $less_vars;
		}

		// Clear unused base variables.
		$less_vars['pagination_type'] = $instance['settings']['pagination'];
		if ( $less_vars['pagination_type'] != 'standard' ) {
			unset( $less_vars['pagination_link_margin'] );
			unset( $less_vars['pagination_dots_color'] );
			unset( $less_vars['pagination_width'] );
			unset( $less_vars['pagination_height'] );
		}

		$less_vars['pagination_top_margin'] = ! empty( $instance['design']['pagination_premium']['top_margin'] ) ? $instance['design']['pagination_premium']['top_margin'] : '30px';
		$less_vars['pagination_border_color'] = ! empty( $instance['design']['pagination_premium']['border_color'] ) ? $instance['design']['pagination_premium']['border_color'] : '#2d2d2d';
		$less_vars['pagination_border_color_hover'] = ! empty( $instance['design']['pagination_premium']['border_color_hover'] ) ? $instance['design']['pagination_premium']['border_color_hover'] : '#f14e4e';
		$less_vars['pagination_border_width'] = ! empty( $instance['design']['pagination_premium']['border_width'] ) ? $instance['design']['pagination_premium']['border_width'] : '2px';
		$less_vars['pagination_border_radius'] = ! empty( $instance['design']['pagination_premium']['border_radius'] ) ? $instance['design']['pagination_premium']['border_radius'] . 'px' : '';
		$less_vars['pagination_background'] = ! empty( $instance['design']['pagination_premium']['background'] ) ? $instance['design']['pagination_premium']['background'] : 'transparent';
		$less_vars['pagination_background_hover'] = ! empty( $instance['design']['pagination_premium']['background_hover'] ) ? $instance['design']['pagination_premium']['background_hover'] : 'transparent';
		if ( ! empty( $instance['design']['pagination_premium']['font'] ) ) {
			$font = siteorigin_widget_get_font( $instance['design']['pagination_premium']['font'] );
			$less_vars['pagination_font'] = $font['family'];
			if ( ! empty( $font['weight'] ) ) {
				$less_vars['pagination_font_style'] = $font['style'];
				$less_vars['pagination_font_weight'] = $font['weight_raw'];
			}
		}
		$less_vars['pagination_font_size'] = ! empty( $instance['design']['pagination_premium']['font_size'] ) ? $instance['design']['pagination_premium']['font_size'] : '13px';
		$less_vars['pagination_letter_spacing'] = ! empty( $instance['design']['pagination_premium']['letter_spacing'] ) ? $instance['design']['pagination_premium']['letter_spacing'] : '1px';
		$less_vars['pagination_capitalize_links'] = ! empty( $instance['design']['pagination_premium']['capitalize_links'] ) ? 'uppercase' : 'none';
		$less_vars['pagination_link_color'] = ! empty( $instance['design']['pagination_premium']['link_color'] ) ? $instance['design']['pagination_premium']['link_color'] : '#2d2d2d';
		$less_vars['pagination_link_color_hover'] = ! empty( $instance['design']['pagination_premium']['link_color_hover'] ) ? $instance['design']['pagination_premium']['link_color_hover'] : '#f14e4e';
		$less_vars['pagination_padding'] = ! empty( $instance['design']['pagination_premium']['padding'] ) ? $instance['design']['pagination_premium']['padding'] : '9px 25px 9px 25px';

		return $less_vars;
	}

	public function add_less( $less, $vars, $instance ) {
		if ( !empty( $instance['design'] ) || empty( $instance['design']['pagination_premium'] ) ) {
			$less .= file_get_contents( plugin_dir_path( __FILE__ ) . 'less/pagination.less' );
		}

		return $less;
	}

	public function add_template_variables( $template_variables, $instance, $args, $widget ) {
		if ( empty( $instance ) ) {
			return array();
		}

		// Is Pagination Ajax enabled, or is the pagination set to Load or Infinite?
		if (
			isset( $instance['settings']['pagination_reload'] ) && 
			(
				$instance['settings']['pagination'] == 'load' ||
				$instance['settings']['pagination'] == 'infinite' ||
				$instance['settings']['pagination_reload'] == 'ajax'
			)
		) {
			wp_enqueue_script( 'siteorigin-premium-blog-addon' );
		}
		return $template_variables;
	}

	public function paginate_links( $markup, $settings, $posts, $instance ) {
		if ( ! isset( $settings['pagination'] ) || $settings['pagination'] == 'standard' ) {
			return;
		}

		if ( $settings['pagination'] == 'links' ) {
			if ( $posts->query['paged'] > 1 || $settings['pagination_reload'] == 'ajax' ) {
				$markup .= '<a href="' . add_query_arg( 'sow-' . $instance['paged_id'], $posts->query['paged'] - 1 ) . '" class="sow-previous"><span>&larr;</span>'. esc_html__( 'Previous', 'siteorigin-premium' ) . '</a>';
			}

			// Don't output next page if this is the final page - always output it if it's Ajax powered.
			if ( $posts->max_num_pages != $posts->query['paged'] || $settings['pagination_reload'] == 'ajax' ) {
				$markup .= '<a href="' . add_query_arg( 'sow-' . $instance['paged_id'], $posts->query['paged'] + 1 ) . '" class="sow-next">'. esc_html__( 'Next', 'siteorigin-premium' ) . '<span>&rarr;</span></a>';
			}
		} else {
			global $wp;
			$markup = '<a class="sow-blog-'. ( $settings['pagination'] == 'load' ? 'load-more' : 'infinite' ) . '"
				data-url="' . esc_url( home_url( $wp->request ) ) . '"
				data-id="' . 'sow-' . $instance['paged_id'] . '"
				href="' . add_query_arg( 'sow-' . $instance['paged_id'], $posts->query['paged'] + 1 ) . '"
			>' . esc_html__( 'Load More', 'siteorigin-premium' ) . '</a>';
		}

		return $markup;
	}

	public function before_output( $settings ) {
		if ( ! empty( $settings['excerpt_trim'] ) ) {
			$this->excerpt_trim_indicator = $settings['excerpt_trim'];
			add_filter( 'siteorigin_widgets_blog_excerpt_trim', array( $this, 'alter_excerpt_trim_indicator' ), 9 );
		}

		if (
			(
				! empty( $settings['pagination_reload'] ) &&
				$settings['pagination_reload'] == 'ajax'
			) ||
			(
				! empty( $settings['pagination'] ) &&
				(
					$settings['pagination'] == 'load' ||
					$settings['pagination'] == 'infinite'
				)
			)
		) {
			?>
			<div class="sow-blog-ajax-loader" style="display: none;">
				<div class="sow-blog-ajax-loader-icon"><div></div><div></div><div></div><div></div></div>
			</div>
			<?php
		}
	}

	public function after_output( $settings ) {
		if ( ! empty( $settings['excerpt_trim'] ) ) {
			remove_filter( 'siteorigin_widgets_blog_excerpt_trim', array( $this, 'alter_excerpt_trim_indicator' ), 9 );
		}
	}

	public function alter_excerpt_trim_indicator( $indicator ) {
		return esc_html( $this->excerpt_trim_indicator );
	}

}
