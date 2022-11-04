<?php
/*
Widget Name: LV Image Box
Description: Configurable boxes widget
Author: crusoemedia
Author URI: https://crusoemedia.com
*/

// add_filter( 'siteorigin_panels_widgets', 'add_my_widget_into_recommended_group', 12 );

function lv_image_box_banner_src( $banner_url, $widget_meta ) {
	if( $widget_meta['ID'] == 'lv-image-box') {
		$banner_url = plugin_dir_url(__FILE__) . 'images/colored-box-widget.jpg';
	}
	return $banner_url;
}
add_filter( 'siteorigin_widgets_widget_banner', 'lv_image_box_banner_src', 10, 2);

class LV_Image_Box_Widget extends SiteOrigin_Widget {
	function __construct() {

		parent::__construct(
			'lv-image-box',
			__('LV Image Box', 'lv-widgets'),
			array(
				'description' => __('Konfigurierbares Boxen Widget', 'lv-widgets'),
				'panels_icon' => 'dashicons dashicons-yes-alt',
			),
			array(

			),
			array(
				'box_color'  => array(
					'type'     => 'select',
					'label'    => __( 'Hingtergrundfarbe der Box', 'lv-widgets' ),
					'default'  => 'weiss',
					'options'  => array(
						'bg-transparent' =>  __( 'Transparent', 'lv-widgets' ),
						'bg-white' =>  __( 'White', 'lv-widgets' ),
						'bg-mint'  =>  __( 'Mint', 'lv-widgets' ),
						'bg-candy' =>  __( 'Candy', 'lv-widgets' ),
						'bg-sky'   =>  __( 'Sky', 'lv-widgets' ),
						'bg-space' =>  __( 'Space', 'lv-widgets' ),
						'bg-gray-light' =>  __( 'Gray Light', 'lv-widgets' ),
						'bg-gray-middle' =>  __( 'Gray Middle', 'lv-widgets' ),
						'bg-gray-dark' =>  __( 'Gray Dark', 'lv-widgets' ),
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
				'img_bottom'   => array(
					'type'     => 'checkbox',
					'label'    => __( 'Bild unten', 'lv-widgets' ),
					'default'  => false
				),
				'image' => array(
					'type'     => 'media',
					'label'    => __( 'Box Image', 'lv-widgets' ),
					'choose'   => __( 'Bild wählen', 'lv-widgets' ),
					'update'   => __( 'Bild wählen', 'lv-widgets' ),
					'library'  => 'image',
					'fallback' => true
				),
				'popular'    => array(
					'type'     => 'text',
					'placeholder' => __( 'Störer (rosa Textbox im Bild)' )
				),
				'show_boxtitle' => array(
					'type' 			=> 'checkbox',
					'label' 		=> __( 'Zeige Out Box title (H3 über der Box)' ),
					'default' 	=> false
				),
				'boxtitle' => array(
					'type' => 'text',
					'placeholder' => __( 'Out Box title (H3 über der Box)' )
				),
				'title' => array(
					'type' => 'text',
					'placeholder' => __( 'In Box title (unter dem Bild)' )
				),
				'text_small' => array(
					'type' 			=> 'checkbox',
					'label' 		=> __( 'kleinerer Text' ),
					'default' 	=> false
				),
				'tinymce_editor' => array(
					'type' => 'tinymce',
					'default' => '',
					'rows' => 10,
					'default_editor'    => 'html',
					'button_filters'    => array(
							'mce_buttons'   => array( $this, 'filter_mce_buttons' ),
							'mce_buttons_2' => array( $this, 'filter_mce_buttons_2' ),
							'mce_buttons_3' => array( $this, 'filter_mce_buttons_3' ),
							'mce_buttons_4' => array( $this, 'filter_mce_buttons_5' ),
							'quicktags_settings' => array( $this, 'filter_quicktags_settings' ),
					),
				),
				'btn_section' => array(
					'type'            => 'section',
					'label'           => __( 'Button 1' , 'lv-widgets' ),
					'hide'            => true,
					'fields'          => array(
						'button_text'   => array(
							'type'        => 'text',
							'placeholder' => 'Button Text'
						),
						'button_ziel'   => array(
							'type'        => 'link',
							'placeholder' => 'Button Ziel (URL)'
						),
						'button_color'  => array(
							'type'        => 'radio',
							'label'       => __( 'Button Farbe', 'lv-widgets' ),
							'default'     => 'mint',
							'options'     => array(
								'' =>  __( 'transparent', 'lv-widgets' ),
								'mint' =>  __( 'mint', 'lv-widgets' ),
								'space' =>  __( 'space', 'lv-widgets' ),
								'sky' =>  __( 'sky', 'lv-widgets' ),
								'sun' =>  __( 'sun', 'lv-widgets' ),
								'candy' =>  __( 'candy', 'lv-widgets' )
							),
						),
						'button_type'   => array(
							'type'        => 'radio',
							'label'       => __( 'Button Aussehen', 'lv-widgets' ),
							'default'     => 'outline',
							'options'     => array(
								'outline'   => __( 'outline', 'lv-widgets' ),
								'solid'     => __( 'solid', 'lv-widgets' ),
								'text-arrow' => __( 'Text mit Pfeil', 'lv-widgets' )
							),
						),
						'button_position'   => array(
							'type'        => 'radio',
							'label'       => __( 'Button Position', 'lv-widgets' ),
							'default'     => '',
							'options'     => array(
								'btn-left'   => __( 'Links', 'lv-widgets' ),
								'btn-right'     => __( 'Rechts', 'lv-widgets' ),
								'' => __( 'Zentriert', 'lv-widgets' )
							),
						),
						'button_arrow' => array(
							'type' 			=> 'checkbox',
							'label' 		=> __( 'Pfeil nach rechts' ),
							'default' 	=> false
						),
					),
				),
				'btn_section_2' => array(
					'type' => 'section',
					'label' => __( 'Button 2' , 'lv-widgets' ),
					'hide' => true,
					'fields' => array(
						'button_text_2' => array(
							'type' => 'text',
							'placeholder' => 'Button Text'
						),
						'button_ziel_2' => array(
							'type' => 'link',
							'placeholder' => 'Button Ziel (URL)'
						),
						'button_color_2' => array(
							'type' => 'radio',
							'label' => __( 'Button Farbe', 'lv-widgets' ),
							'default' => 'space',
							'options' => array(
								'' =>  __( 'transparent', 'lv-widgets' ),
								'mint' =>  __( 'mint', 'lv-widgets' ),
								'space' =>  __( 'space', 'lv-widgets' ),
								'sky' =>  __( 'sky', 'lv-widgets' ),
								'sun' =>  __( 'sun', 'lv-widgets' ),
								'candy' =>  __( 'candy', 'lv-widgets' )
							),
						),
						'button_type_2' => array(
							'type' => 'radio',
							'label' => __( 'Button Aussehen', 'lv-widgets' ),
							'default' => 'solid',
							'options' => array(
									'outline' =>  __( 'outline', 'lv-widgets' ),
									'solid' =>  __( 'solid', 'lv-widgets' ),
									'text-arrow' => __( 'Text mit Pfeil', 'lv-widgets' )
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
					'sow-lv-image-box',	plugin_dir_url( __FILE__ ) . 'styles/lv-image-box.css',
				),
			)
		);
	}

	function get_template_name($instance) {
		return 'lv-image-box-template';
	}

	function get_style_name($instance) {
	  return 'lv-image-box';
	}
}

siteorigin_widget_register('lv-image-box', __FILE__, 'LV_Image_Box_Widget');