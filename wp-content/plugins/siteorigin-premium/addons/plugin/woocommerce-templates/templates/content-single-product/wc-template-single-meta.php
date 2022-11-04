<?php

class SiteOrigin_Premium_WooCommerce_Template_Single_Meta extends WP_Widget {

	public function __construct() {
		parent::__construct(
			'so-wc-template-single-meta',
			__( 'Product Meta', 'siteorigin-premium' ),
			array( 'description' => __( 'Display the product category and SKU.', 'siteorigin-premium' ) ),
			array()
		);
	}

	public function widget( $args, $instance ) {
		echo $args['before_widget'];
		if ( function_exists( 'woocommerce_template_single_meta' ) ) {
			do_action( 'siteorigin_premium_addon_wctb_single_product_meta_before' );
			woocommerce_template_single_meta();
			do_action( 'siteorigin_premium_addon_wctb_single_product_meta_after' );
		}
		echo $args['after_widget'];
	}

}

register_widget( 'SiteOrigin_Premium_WooCommerce_Template_Single_Meta' );
