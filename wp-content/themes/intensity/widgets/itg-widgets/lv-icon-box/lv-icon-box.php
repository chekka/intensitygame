<?php

/*
Widget Name: LV Icon Box
Description: Configurable boxes widget
Author: crusoemedia
Author URI: https://crusoemedia.com
*/

function lv_icon_box_banner_src( $banner_url, $widget_meta ) {
	if( $widget_meta['ID'] == 'lv-icon-box') {
		$banner_url = plugin_dir_url(__FILE__) . 'images/icon-box-widget.jpg';
	}
	return $banner_url;
}
add_filter( 'siteorigin_widgets_widget_banner', 'lv_icon_box_banner_src', 10, 2);

class LV_Icon_Box_Widget extends SiteOrigin_Widget {
	function __construct() {

		parent::__construct(
			'lv-icon-box',
			__('LV Icon Box', 'lv-widgets'),
			array(
				'description' => __('Konfigurierbares Boxen Widget', 'lv-widgets'),
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
				'icon_orientation' => array(
					'type' => 'radio',
					'label' => __( 'Icon Orientation', 'lv-widgets' ),
					'default' => 'flex-column',
					'options' => array(
							'flex-column' =>  __( 'Über dem Text', 'lv-widgets' ),
							'flex-row' =>  __( 'Links neben Text', 'lv-widgets' ),
							'flex-row-reverse' =>  __( 'Rechts neben Text', 'lv-widgets' )
					),
					'state_emitter' => array(
						'callback' => 'select',
						'args'     => array( 'icon_orientation' ),
					),
				),
				'icon_position' => array(
					'type' => 'radio',
					'label' => __( 'Icon position', 'lv-widgets' ),
					'default' => 'icon-center',
					'options' => array(
							'icon-left' =>  __( 'Links', 'lv-widgets' ),
							'icon-right' =>  __( 'Rechts', 'lv-widgets' ),
							'icon-center' =>  __( 'Zentriert', 'lv-widgets' )
					),
					'state_handler' => array(
						'icon_orientation[flex-column]' => array('show'),
						'icon_orientation[flex-row]' => array('hide'),
						'icon_orientation[flex-row-reverse]' => array('hide'),
					),
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
				'box_color' => array(
					'type' => 'select',
					'label' => __( 'Box color', 'lv-widgets' ),
					'default' => '',
					'options' => array(
						'' =>  __( 'none', 'lv-widgets' ),
						'mint' =>  __( 'mint', 'lv-widgets' ),
						'mint-light-ultra' =>  __( 'mint ultra light', 'lv-widgets' ),
						'space' =>  __( 'space', 'lv-widgets' ),
						'space-light' =>  __( 'space light', 'lv-widgets' ),
						'sky' =>  __( 'sky', 'lv-widgets' ),
						'sky-light' =>  __( 'sky light', 'lv-widgets' ),
						'sun' =>  __( 'sun', 'lv-widgets' ),
						'sun-light' =>  __( 'sun light', 'lv-widgets' ),
						'candy' =>  __( 'candy', 'lv-widgets' ),
						'candy-light' =>  __( 'candy light', 'lv-widgets' ),
						'white' =>  __( 'white', 'lv-widgets' )
					),
				),
				'header_color' => array(
					'type' => 'select',
					'label' => __( 'Header Farbe', 'lv-widgets' ),
					'default' => 'mint',
					'options' => array(
						'' =>  __( 'none', 'lv-widgets' ),
						'mint' =>  __( 'mint', 'lv-widgets' ),
						'space' =>  __( 'space', 'lv-widgets' ),
						'sky' =>  __( 'sky', 'lv-widgets' ),
						'sun' =>  __( 'sun', 'lv-widgets' ),
						'candy' =>  __( 'candy', 'lv-widgets' )
					),
				),
				'title' => array(
					'type' => 'text',
					'placeholder' => 'Box title (unter dem Bild)'
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
				'section_popup' => array(
					'type' => 'section',
					'label' => __( 'Popup' , 'lv-widgets' ),
					'hide' => true,
					'fields' => array(
						'popup_button' => array(
							'type' => 'checkbox',
							'label' => __( 'Is Popup', 'lv-widgets' ),
							'default' => false,
							'state_emitter' => array(
								'callback' => 'conditional',
								'args'     => array(
									'popup[yes]: val',
									'popup[no]: ! val',
								),
							),
						),
						'popup_content' => array(
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
							'state_handler' => array(
								'popup[yes]' => array( 'show' ),
								'popup[no]' => array( 'hide' ),
							),
						),
					),
				),
				'section_btn' => array(
					'type' => 'section',
					'label' => __( 'Button' , 'lv-widgets' ),
					'hide' => true,
					'fields' => array(
						'button_text' => array(
							'type' => 'text',
							'placeholder' => 'Button Text'
						),
						'button_ziel' => array(
							'type' => 'link',
							'placeholder' => 'Button Ziel (URL)'
						),
						'button_vermittlerID' => array(
							'type' => 'checkbox',
							'label' => __( 'Vermittler-ID anhängen', 'lv-widgets' ),
							'default' => false,
						),
						'button_type' => array(
							'type' => 'radio',
							'label' => __( 'Button Typ', 'lv-widgets' ),
							'default' => 'button-solid',
							'options' => array(
									'lvw-btn lvw-btn-primary' =>  __( 'Button solid', 'lv-widgets' ),
									'text-arrow' =>  __( 'Text mit Pfeil', 'lv-widgets' )
							),
						),
						'button_color' => array(
							'type' => 'radio',
							'label' => __( 'Button Farbe', 'lv-widgets' ),
							'default' => '',
							'options' => array(
								'' =>  __( 'transparent', 'lv-widgets' ),
								'mint' =>  __( 'mint', 'lv-widgets' ),
								'space' =>  __( 'space', 'lv-widgets' ),
								'sky' =>  __( 'sky', 'lv-widgets' ),
								'sun' =>  __( 'sun', 'lv-widgets' ),
								'candy' =>  __( 'candy', 'lv-widgets' )
							),
						),
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
					'sow-lv-icon-box',	plugin_dir_url( __FILE__ ) . 'styles/lv-icon-box.css',
				),
			)
		);
		$this->register_frontend_scripts(
			array(
				array(
					'sow-lv-icon-box',	plugin_dir_url( __FILE__ ) . 'scripts/lv-icon-box.js',
				),
			)
		);
	}

	function get_template_name($instance) {
		return 'lv-icon-box-template';
	}

	function get_style_name($instance) {
	  return 'lv-icon-box-style';
	}
}

siteorigin_widget_register('lv-icon-box', __FILE__, 'LV_Icon_Box_Widget');