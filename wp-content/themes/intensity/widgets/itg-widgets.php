<?php

/*
Plugin Name: Intensity SiteOrigin Widgets
Description: Plugin to extend the SiteOrigin Widgets Bundle for Intensity the game.
Version: 0.1
Author: Johannes Tassilo Gruber
Author URI: https://chekka.de
License: only for use at intensitythegame.org
*/

function itg_widgets_collection($folders){
	$folders[] = plugin_dir_path(__FILE__).'itg-widgets/';
	return $folders;
}
add_filter('siteorigin_widgets_widget_folders', 'itg_widgets_collection');

function itg_fields_class_prefixes( $class_prefixes ) {
	$class_prefixes[] = 'My_Custom_Field_';
	return $class_prefixes;
}
add_filter( 'siteorigin_widgets_field_class_prefixes', 'itg_fields_class_prefixes' );

function itg_fields_class_paths( $class_paths ) {
	$class_paths[] = plugin_dir_path( __FILE__ ) . 'custom-fields/';
	return $class_paths;
}
add_filter( 'siteorigin_widgets_field_class_paths', 'itg_fields_class_paths' );

/* Pagebuilder Widget Group */
function itg_add_widget_tabs($tabs) {
	$tabs[] = array(
		'title' => __('Intensity Widgets', 'itg-widgets'),
		'filter' => array(
				'groups' => array('itg_widgets')
		)
	);
	return $tabs;
}
add_filter('siteorigin_panels_widget_dialog_tabs', 'itg_add_widget_tabs', 20);

/* Add widgets to ITG widget group */
function itg_widget_group( $widgets ) {
	$widgets['itg_Image_Box_Widget']['groups'] = array('itg_widgets');
	$widgets['itg_Icon_Box_Widget']['groups'] = array('itg_widgets');
	$widgets['itg_Header_Widget']['groups'] = array('itg_widgets');
	return $widgets;
}
add_filter( 'siteorigin_panels_widgets', 'itg_widget_group', 12 );