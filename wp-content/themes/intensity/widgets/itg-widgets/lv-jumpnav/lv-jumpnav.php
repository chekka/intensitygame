<?php
/*
Widget Name: LV Jumpnav
Description: Configurable automatic jumpnav widget
Author: crusoemedia
Author URI: https://crusoemedia.com
*/

// add_filter( 'siteorigin_panels_widgets', 'add_my_widget_into_recommended_group', 12 );

function lv_jumpnav_banner_src( $banner_url, $widget_meta ) {
	if( $widget_meta['ID'] == 'lv-jumpnav') {
		$banner_url = plugin_dir_url(__FILE__) . 'images/lv-jumpnav-banner.svg';
	}
	return $banner_url;
}
add_filter( 'siteorigin_widgets_widget_banner', 'lvjumpnav_banner_src', 10, 2);

class LV_Jumpnav_Widget extends SiteOrigin_Widget {
	function __construct() {

		parent::__construct(
			'lv-jumpnav',
			__('LV Jumpnav', 'lv-widgets'),
			array(
				'description' => __('Konfigurierbares Jumpnav Widget', 'lv-widgets'),
				'panels_icon' => 'dashicons dashicons-yes-alt',
			),
			array(

			),
			array(
				'bg_color' => array(
					'type' => 'select',
					'label' => __( 'Hintergrundfarbe', 'lv-widgets' ),
					'default' => '',
					'options' => array(
						'' =>  __( 'none', 'lv-widgets' ),
						'white' =>  __( 'white', 'lv-widgets' ),
						'mint' =>  __( 'mint', 'lv-widgets' ),
						'mint-light-ultra' =>  __( 'mint ultra light', 'lv-widgets' ),
						'space' =>  __( 'space', 'lv-widgets' ),
						'space-light' =>  __( 'space light', 'lv-widgets' ),
						'sky' =>  __( 'sky', 'lv-widgets' ),
						'sky-light' =>  __( 'sky light', 'lv-widgets' ),
						'sun' =>  __( 'sun', 'lv-widgets' ),
						'sun-light' =>  __( 'sun light', 'lv-widgets' ),
						'candy' =>  __( 'candy', 'lv-widgets' ),
						'candy-light' =>  __( 'candy light', 'lv-widgets' )
					),
				),
				'txt_color' => array(
					'type' => 'select',
					'label' => __( 'Textfarbe', 'lv-widgets' ),
					'default' => '',
					'options' => array(
						'black' =>  __( 'none', 'lv-widgets' ),
						'white' =>  __( 'white', 'lv-widgets' ),
						'mint' =>  __( 'mint', 'lv-widgets' ),
						'mint-light-ultra' =>  __( 'mint ultra light', 'lv-widgets' ),
						'space' =>  __( 'space', 'lv-widgets' ),
						'space-light' =>  __( 'space light', 'lv-widgets' ),
						'sky' =>  __( 'sky', 'lv-widgets' ),
						'sky-light' =>  __( 'sky light', 'lv-widgets' ),
						'sun' =>  __( 'sun', 'lv-widgets' ),
						'sun-light' =>  __( 'sun light', 'lv-widgets' ),
						'candy' =>  __( 'candy', 'lv-widgets' ),
						'candy-light' =>  __( 'candy light', 'lv-widgets' )
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
					'sow-lv-jumpnav',	plugin_dir_url( __FILE__ ) . 'styles/lv-jumpnav.min.css',
				),
			)
		);
		$this->register_frontend_scripts(
			array(
				array( 'sow-lv-jumpnav', plugin_dir_url( __FILE__ ) . 'scripts/lv-jumpnav.min.js', array( 'jquery' ), '1.0' ),
			)
		);

	}

	function get_template_name($instance) {
		return 'lv-jumpnav-template';
	}

	function get_style_name($instance) {
	  return 'lv-jumpnav';
	}
}

siteorigin_widget_register('lv-jumpnav', __FILE__, 'LV_Jumpnav_Widget');