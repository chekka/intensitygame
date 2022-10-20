<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class WFFN_Compatibility_With_WoodMart_Theme
 */
if ( ! class_exists( 'WFFN_Compatibility_With_WoodMart_Theme' ) ) {
	class WFFN_Compatibility_With_WoodMart_Theme {

		public function __construct() {
			add_action( 'wp', [ $this, 'register_elementor_widget' ], 150 );
		}

		public function is_enable() {
			if ( defined( 'WOODMART_THEME_DIR' ) ) {
				return true;
			}

			return false;
		}

		public function register_elementor_widget() {

			if ( true !== $this->is_enable() || is_admin() ) {
				return;
			}

			global $post;
			if ( is_null( $post ) || ! in_array( $post->post_type, array(
					'wfocu_offer',
					'wffn_landing',
					'wffn_ty',
					'wffn_optin',
					'wffn_oty',

				), true ) ) {
				return;
			}

			if ( false !== strpos( $post->page_template, '-canvas.php' ) ) {
				remove_action( 'wp_enqueue_scripts', 'woodmart_enqueue_base_styles', 10000 );
				remove_action( 'wp_footer', 'woodmart_sticky_toolbar_template' );
				remove_action( 'wp_enqueue_scripts', 'woodmart_dequeue_elementor_frontend', 6 );
			}
			if ( class_exists( 'Elementor\Plugin' ) ) {
				if ( class_exists( 'WFFN_Optin_Pages_Elementor' ) ) {
					$op_instance = WFFN_Optin_Pages_Elementor::get_instance();
					$op_instance->register_widgets();
				}
				if ( class_exists( 'WFFN_ThankYou_WC_Pages_Elementor' ) ) {
					$ty_instance = WFFN_ThankYou_WC_Pages_Elementor::get_instance();
					$ty_instance->register_widgets();
				}
				if ( class_exists( 'WFFN_Pro_Optin_Pages_Elementor' ) ) {
					$op_pro_instance = WFFN_Pro_Optin_Pages_Elementor::get_instance();
					$op_pro_instance->register_widgets();
				}

			}
		}

	}

	WFFN_Plugin_Compatibilities::register( new WFFN_Compatibility_With_WoodMart_Theme(), 'woodmart_theme' );
}