<?php
/*
Widget Name: LV Dropdown
Description: Konfigurierbares Dropdown Widget mit Icon
Author: crusoemedia
Author URI: https://crusoemedia.com
*/

// add_filter( 'siteorigin_panels_widgets', 'add_my_widget_into_recommended_group', 12 );

function lv_dropdown_banner_src( $banner_url, $widget_meta ) {
	if( $widget_meta['ID'] == 'lv-dropdown') {
		$banner_url = plugin_dir_url(__FILE__) . 'images/dropdown.jpg';
	}
	return $banner_url;
}
add_filter( 'siteorigin_widgets_widget_banner', 'lv_dropdown_banner_src', 10, 2);

class LV_Dropdown_Widget extends SiteOrigin_Widget {
	function __construct() {

		parent::__construct(
			'lv-dropdown',
			__('LV Dropdown', 'lv-widgets'),
			array(
				'description' => __('Konfigurierbares Dropdown Widget mit Icon', 'lv-widgets'),
				'panels_icon' => 'dashicons dashicons-yes-alt',
			),
			array(

			),
			array(
				'icon' => array(
					'type' => 'icon'
				),
				'image' => array(
					'type' => 'media',
					'choose' => __( 'Bild wählen', 'lv-widgets' ),
					'update' => __( 'Bild wählen', 'lv-widgets' ),
					'library' => 'image',
					'fallback' => true
				),
				'box_shadow' => array(
					'type' => 'select',
					'label' => __( '', 'lv-widgets' ),
					'default' => '',
					'options' => array(
						'' =>  __( 'ohne Schatten', 'lv-widgets' ),
						'shadowed' =>  __( 'kleiner Schatten', 'lv-widgets' ),
						'shadowed-huge' =>  __( 'großer Schatten', 'lv-widgets' )
					),
				),
				'title' => array(
					'type' => 'text',
					'placeholder' => 'Dropdown title'
				),
				'title_small' => array(
					'type' => 'checkbox',
					'label' => __( 'kleinerer Titel', 'lv-widgets' ),
					'default' => false,
				),
				'text_small' => array(
					'type' => 'checkbox',
					'label' => __( 'kleinerer Text', 'lv-widgets' ),
					'default' => false,
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
			),
			plugin_dir_path(__FILE__)
		);

	}

	function initialize() {
		parent::initialize();
		$this->register_frontend_styles(
			array(
				array( 'sow-lv-dropdown',	plugin_dir_url( __FILE__ ) . 'styles/lv-dropdown.min.css', ),
			)
		);
		$this->register_frontend_scripts(
			array(
				array( 'sow-lv-dropdown', plugin_dir_url( __FILE__ ) . 'scripts/lv-dropdown.min.js', array( 'jquery' ), '1.0' ),
			)
	);
	}

	function get_template_name($instance) {
		return 'lv-dropdown-template';
	}

	function get_style_name($instance) {
	  return 'lv-dropdown';
	}
}

siteorigin_widget_register('lv-dropdown', __FILE__, 'LV_Dropdown_Widget');