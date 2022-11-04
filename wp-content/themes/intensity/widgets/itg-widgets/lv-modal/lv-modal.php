<?php
/*
Widget Name: LV Modal
Description: Configurable Modal widget
Author: crusoemedia
Author URI: https://crusoemedia.com
*/

// add_filter( 'siteorigin_panels_widgets', 'add_my_widget_into_recommended_group', 12 );

function lv_modal_banner_src( $banner_url, $widget_meta ) {
	if( $widget_meta['ID'] == 'lv-modal') {
		$banner_url = plugin_dir_url(__FILE__) . 'images/lv-modal-banner.svg';
	}
	return $banner_url;
}
add_filter( 'siteorigin_widgets_widget_banner', 'lv_modal_banner_src', 10, 2);

class LV_Modal_Widget extends SiteOrigin_Widget {
	function __construct() {

		parent::__construct(
			'lv-modal',
			__('LV Modal', 'lv-widgets'),
			array(
				'description' => __('Konfigurierbares modales Widget', 'lv-widgets'),
				'panels_icon' => 'dashicons dashicons-yes-alt',
			),
			array(

			),
			array(
				'image' => array(
					'type'     => 'media',
					'label'    => __( 'Box Image', 'lv-widgets' ),
					'choose'   => __( 'Bild wählen', 'lv-widgets' ),
					'update'   => __( 'Bild wählen', 'lv-widgets' ),
					'library'  => 'image',
					'fallback' => true
				),
				'overlay_image' => array(
					'type'     => 'media',
					'label'    => __( 'Overlay Image', 'lv-widgets' ),
					'choose'   => __( 'Bild wählen', 'lv-widgets' ),
					'update'   => __( 'Bild wählen', 'lv-widgets' ),
					'library'  => 'image',
					'fallback' => true
				),
				'overlay_size' => array(
					'type' => 'text',
					'placeholder' => 'Overlay size',
					'description' => 'Hier einen bliebigen CSS Wert eingeben (z. B.: 70px, 50%, 12em)',
				),
				'page_builder' => array(
					'type' => 'builder',
					'label' => __( 'Modaler Inhalt', 'lv-widgets' ),
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
					'sow-lv-modal',	plugin_dir_url( __FILE__ ) . 'styles/lv-modal.min.css',
				),
			)
		);
		$this->register_frontend_scripts(
			array(
				array( 'sow-lv-modal', plugin_dir_url( __FILE__ ) . 'scripts/lv-modal.min.js', array( 'jquery' ), '1.0' ),
			)
		);

	}

	function get_template_name($instance) {
		return 'lv-modal-template';
	}

	function get_style_name($instance) {
	  return 'lv-modal';
	}
}

siteorigin_widget_register('lv-modal', __FILE__, 'LV_Modal_Widget');