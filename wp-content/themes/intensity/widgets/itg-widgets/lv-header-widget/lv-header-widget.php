<?php

/*
Widget Name: LV Header Section
Description: Configurable header widget
Author: crusoemedia
Author URI: https://crusoemedia.com
*/

function lv_header_widget_banner_img_src( $banner_url, $widget_meta ) {
	if( $widget_meta['ID'] == 'lv-header-widget') {
		$banner_url = plugin_dir_url(__FILE__) . 'images/lv-header-banner.svg';
	}
	return $banner_url;
}
add_filter( 'siteorigin_widgets_widget_banner', 'lv_header_widget_banner_img_src', 10, 2);

class LV_Header_Widget extends SiteOrigin_Widget {
	function __construct() {

		parent::__construct(
			'lv-header-widget',
			__('LV Header Section', 'lv-widgets'),
			array(
				'description' => __('A totally awesome widget.', 'lv-widgets'),
			),
			array(

			),
			array(
				'header_width' => array(
					'type' => 'radio',
					'label' => __( 'Header Breite', 'lv-widgets' ),
					'default' => 'width-content',
					'options' => array(
						'width-content' =>  __( 'Content Breite', 'lv-widgets' ),
						'width-page' =>  __( 'Seiten Breite', 'lv-widgets' )
					),
				),
				'header_color' => array(
					'type' => 'select',
					'label' => __( 'Header Farbe', 'lv-widgets' ),
					'default' => 'mint',
					'options' => array(
						'none' =>  __( 'transparent', 'lv-widgets' ),
						'mint' =>  __( 'mint', 'lv-widgets' ),
						'space' =>  __( 'space', 'lv-widgets' ),
						'sky' =>  __( 'sky', 'lv-widgets' ),
						'sun' =>  __( 'sun', 'lv-widgets' ),
						'candy' =>  __( 'candy', 'lv-widgets' )
					),
				),
				'image_fullwidth' => array(
						'type' => 'checkbox',
						'label' => __( 'Box Image Fullwidth (Bild liegt auf ganzer Breite hinter dem Text)', 'lv-widgets' )
				),
				'image' => array(
					'type' => 'media',
					'label' => __( 'Box Image', 'lv-widgets' ),
					'choose' => __( 'Bild wählen', 'lv-widgets' ),
					'update' => __( 'Bild wählen', 'lv-widgets' ),
					'library' => 'image',
					'fallback' => true
				),
				'image_dimensions' => array(
					'type' => 'radio',
					'label' => __( 'Bildgröße', 'lv-widgets' ),
					'default' => '',
					'options' => array(
							'' =>  __( 'Responsive (WP default)', 'lv-widgets' ),
							'half' =>  __( 'Bild halbe Breite', 'lv-widgets' ),
							'full' =>  __( 'Bild volle Breite', 'lv-widgets' )
					),
				),
				'orientation' => array(
					'type' => 'radio',
					'label' => __( 'Ausrichtung', 'lv-widgets' ),
					'default' => 'img-right',
					'options' => array(
							'img-right' =>  __( 'Bild rechts', 'lv-widgets' ),
							'img-left' =>  __( 'Bild links', 'lv-widgets' )
					),
				),
				'subtitle' => array(
					'type' => 'text',
					'placeholder' => 'Subtitle (über der Headline)'
				),
				'title' => array(
					'type' => 'text',
					'placeholder' => 'H1 Title'
				),
				'tinymce_editor' => array(
					'type' => 'tinymce',
					'default' => '',
					'rows' => 10,
					'default_editor' => 'html',
					'button_filters' => array(
							'mce_buttons' => array( $this, 'filter_mce_buttons' ),
							'mce_buttons_2' => array( $this, 'filter_mce_buttons_2' ),
							'mce_buttons_3' => array( $this, 'filter_mce_buttons_3' ),
							'mce_buttons_4' => array( $this, 'filter_mce_buttons_5' ),
							'quicktags_settings' => array( $this, 'filter_quicktags_settings' ),
					),
				),
                'stoerer' => array(
                    'type' => 'checkbox',
                    'label' => __( 'Seite Störer' )
                ),
                'stoerer_title' => array(
                    'type' => 'text',
                    'placeholder' => 'Störer Title'
                ),
                'stoerer_tinymce_editor' => array(
                    'type' => 'tinymce',
                    'default' => '',
                    'rows' => 3,
                    'default_editor' => 'html',
                    'button_filters' => array(
                        'mce_buttons' => array( $this, 'filter_mce_buttons' ),
                        'mce_buttons_2' => array( $this, 'filter_mce_buttons_2' ),
                        'mce_buttons_3' => array( $this, 'filter_mce_buttons_3' ),
                        'mce_buttons_4' => array( $this, 'filter_mce_buttons_5' ),
                        'quicktags_settings' => array( $this, 'filter_quicktags_settings' ),
                    ),
                ),
			),
			plugin_dir_path(__FILE__)
		);
	}

	function initialize() {
		parent::initialize();
		$this->register_frontend_styles(
			array(
				array(
					'sow-lv-header',	plugin_dir_url( __FILE__ ) . 'styles/lv-header.css',
				),
			)
		);
		$this->register_frontend_scripts(
			array(
				array(
					'sow-lv-header',	plugin_dir_url( __FILE__ ) . 'scripts/lv-header.min.js',
				),
			)
		);
	}

	function get_template_name($instance) {
		return 'lv-header-template';
	}

	function get_style_name($instance) {
		// return 'lv-header-widget-style';
	}
}

siteorigin_widget_register('lv-header-widget', __FILE__, 'LV_Header_Widget');