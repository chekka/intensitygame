<?php
/**
 * Booster Plus for WooCommerce - Module - Cart Custom Info
 *
 * @version 5.6.4
 * @author  Pluggabl LLC.
 * @package Booster_Plus_For_WooCommerce/includes.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'WCJ_Cart' ) ) :

	/**
	 * WCJ_Cart.
	 *
	 * @version 5.6.4
	 */
	class WCJ_Cart extends WCJ_Module {

		/**
		 * Constructor.
		 *
		 * @version 5.6.4
		 */
		public function __construct() {

			$this->id         = 'cart';
			$this->short_desc = __( 'Cart Custom Info', 'woocommerce-jetpack' );
			$this->desc       = __( 'Add custom info to the cart page (1 cart block allowed in free version).', 'woocommerce-jetpack' );
			$this->desc_pro   = __( 'Add custom info to the cart page.', 'woocommerce-jetpack' );
			$this->link_slug  = 'woocommerce-cart-custom-info';
			parent::__construct();

			if ( $this->is_enabled() ) {
				// Cart items table custom info.
				add_filter( 'woocommerce_cart_item_name', array( $this, 'add_custom_info_to_cart_item_name' ), PHP_INT_MAX, 3 );
				// Cart custom info.
				$total_number = apply_filters( 'booster_option', 1, wcj_get_option( 'wcj_cart_custom_info_total_number', 1 ) );
				for ( $i = 1; $i <= $total_number; $i++ ) {
					add_action(
						get_option( 'wcj_cart_custom_info_hook_' . $i, 'woocommerce_after_cart_totals' ),
						array( $this, 'add_cart_custom_info' ),
						get_option( 'wcj_cart_custom_info_priority_' . $i, 10 )
					);
				}
			}
		}

		/**
		 * Add_custom_info_to_cart_item_name.
		 *
		 * @version 5.6.4
		 * @since  2.7.0
		 * @todo    (maybe) `wc_setup_product_data( $post );`
		 * @param string $product_title defines the product_title.
		 * @param string $cart_item defines the cart_item.
		 * @param string $cart_item_key defines the product_title.
		 */
		public function add_custom_info_to_cart_item_name( $product_title, $cart_item, $cart_item_key ) {
			$custom_content = wcj_get_option( 'wcj_cart_custom_info_item' );
			if ( '' !== $custom_content ) {
				global $post;
				$product_id = ( ! empty( $cart_item['variation_id'] ) ? $cart_item['variation_id'] : $cart_item['product_id'] );
				$posts      = get_post( $product_id );
				setup_postdata( $posts );
				$product_title .= do_shortcode( $custom_content );
				wp_reset_postdata();
			}
			return $product_title;
		}

		/**
		 * Add_cart_custom_info.
		 *
		 * @version 5.6.4
		 */
		public function add_cart_custom_info() {
			$current_filter          = current_filter();
			$current_filter_priority = wcj_current_filter_priority();
			settype( $current_filter_priority, 'string' );

			$total_number = apply_filters( 'booster_option', 1, wcj_get_option( 'wcj_cart_custom_info_total_number', 1 ) );
			for ( $i = 1; $i <= $total_number; $i++ ) {
				if (
				'' !== wcj_get_option( 'wcj_cart_custom_info_content_' . $i ) &&
				wcj_get_option( 'wcj_cart_custom_info_hook_' . $i, 'woocommerce_after_cart_totals' ) === $current_filter &&
				wcj_get_option( 'wcj_cart_custom_info_priority_' . $i, 10 ) === $current_filter_priority
				) {
					echo do_shortcode( wcj_get_option( 'wcj_cart_custom_info_content_' . $i ) );
				}
			}
		}

	}

endif;

return new WCJ_Cart();
