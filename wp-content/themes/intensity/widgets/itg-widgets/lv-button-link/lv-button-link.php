<?php
/*
Widget Name: LV Button Link
Description: Konfigurierbares Widget für Buttons und Links
Author: crusoemedia
Author URI: https://crusoemedia.com
*/

function lv_button_link_banner_src( $banner_url, $widget_meta ) {
	if( $widget_meta['ID'] == 'lv-button-link') {
		$banner_url = plugin_dir_url(__FILE__) . 'images/lv-button-link-banner.svg';
	}
	return $banner_url;
}
add_filter( 'siteorigin_widgets_widget_banner', 'lv_button_link_banner_src', 10, 2);

class LV_Button_Link_Widget extends SiteOrigin_Widget {
	function __construct() {

		parent::__construct(
			'lv-button-link',
			__('LV Button Link', 'lv-widgets'),
			array(
				'description' => __('Konfigurierbares Widget für Buttons und Links ', 'lv-widgets'),
				'panels_icon' => 'dashicons dashicons-yes-alt',
			),
			array(

			),
			array(
				'button_link_text' => array(
					'type' => 'text',
					'placeholder' => 'Button/Link Text'
				),
				'button_link_url' => array(
					'type' => 'link',
					'label' => __('Button/Link URL', 'lv-widgets' )
				),
				'button_link_arrow' => array(
					'type' => 'checkbox',
					'label' => __('Pfeil nach Text', 'lv-widgets' )
				),
				'button_link_type' => array(
					'type' => 'select',
					'label' => __( 'Button/Link Typ', 'lv-widgets' ),
					'default' => 'lvw-btn',
					'options' => array(
						'' =>  __( 'Text Link', 'lv-widgets' ),
						'lvw-btn' =>  __( 'Button', 'lv-widgets' ),
						'lvw-btn-big' =>  __( 'Button Big', 'lv-widgets' )
					),
				),
				'button_bg_color' => array(
					'type' => 'select',
					'label' => __( 'Button Hintergrund', 'lv-widgets' ),
					'default' => 'transparent',
					'options' => array(
						'bg-none' =>  __( 'transparent', 'lv-widgets' ),
						'bg-white' =>  __( 'white', 'lv-widgets' ),
						'bg-black' =>  __( 'black', 'lv-widgets' ),
						'bg-mint' =>  __( 'mint', 'lv-widgets' ),
						'bg-candy' =>  __( 'candy', 'lv-widgets' ),
						'bg-space' =>  __( 'space', 'lv-widgets' ),
						'bg-sky' =>  __( 'sky', 'lv-widgets' ),
						'bg-sun' =>  __( 'sun', 'lv-widgets' ),
					),
				),
				'button_text_color' => array(
					'type' => 'select',
					'label' => __( 'Button Text Farbe', 'lv-widgets' ),
					'default' => 'transparent',
					'options' => array(
						'txt-white' =>  __( 'white', 'lv-widgets' ),
						'txt-black' =>  __( 'black', 'lv-widgets' ),
						'txt-mint' =>  __( 'mint', 'lv-widgets' ),
						'txt-candy' =>  __( 'candy', 'lv-widgets' ),
						'txt-space' =>  __( 'space', 'lv-widgets' ),
						'txt-sky' =>  __( 'sky', 'lv-widgets' ),
						'txt-sun' =>  __( 'sun', 'lv-widgets' ),
					),
				),
				'button_outline_color' => array(
					'type' => 'select',
					'label' => __( 'Button Outline Farbe', 'lv-widgets' ),
					'default' => 'transparent',
					'options' => array(
						'outl-none' =>  __( 'transparent', 'lv-widgets' ),
						'outl-white' =>  __( 'white', 'lv-widgets' ),
						'outl-black' =>  __( 'black', 'lv-widgets' ),
						'outl-mint' =>  __( 'mint', 'lv-widgets' ),
						'outl-candy' =>  __( 'candy', 'lv-widgets' ),
						'outl-space' =>  __( 'space', 'lv-widgets' ),
						'outl-sky' =>  __( 'sky', 'lv-widgets' ),
						'outl-sun' =>  __( 'sun', 'lv-widgets' ),
					),
				),
				'button_link_alignment' => array(
					'type' => 'select',
					'label' => __( 'Button Ausrichtung', 'lv-widgets' ),
					'default' => '',
					'options' => array(
						'' =>  __( 'Links (default)', 'lv-widgets' ),
						'btn-right' =>  __( 'Rechts', 'lv-widgets' ),
						'btn-center' =>  __( 'Zentriert', 'lv-widgets' )
					),
				),
				'button_link_shadow' => array(
					'type' => 'select',
					'label' => __( '', 'lv-widgets' ),
					'default' => '',
					'options' => array(
						'' =>  __( 'ohne Schatten', 'lv-widgets' ),
						'shadowed' =>  __( 'kleiner Schatten', 'lv-widgets' ),
						'shadowed-huge' =>  __( 'großer Schatten', 'lv-widgets' )
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
				array( 'sow-lv-button-link',	plugin_dir_url( __FILE__ ) . 'styles/lv-button-link.min.css', ),
			)
		);
	}

	function get_template_name($instance) {
		return 'lv-button-link-template';
	}

	function get_style_name($instance) {
	  return 'lv-button-link';
	}
}

siteorigin_widget_register('lv-button-link', __FILE__, 'LV_Button_Link_Widget');