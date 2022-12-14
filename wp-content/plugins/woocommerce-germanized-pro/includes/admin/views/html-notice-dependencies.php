<?php
/**
 * Admin View: Dep notice
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * @var WC_GZDP_Dependencies $dependencies
 */
?>

<div id="message" class="error woocommerce-gzd-message wc-connect">
	<h3><?php esc_html_e( 'WooCommerce missing or outdated', 'woocommerce-germanized-pro' ); ?></h3>
	<p>
		<?php
		if ( ! $dependencies->is_woocommerce_activated() ) :
			$install_url     = wp_nonce_url(
				add_query_arg(
					array(
						'action' => 'install-plugin',
						'plugin' => 'woocommerce',
					),
					admin_url( 'update.php' )
				),
				'install-plugin_woocommerce'
			);
			$current_plugins = array_keys( get_plugins() );
			// translators: 1$-2$: opening and closing <strong> tags, 3$-4$: link tags, takes to woocommerce plugin on wp.org, 5$-6$: opening and closing link tags, leads to plugins.php in admin
			$text = sprintf( esc_html__( '%1$sGermanized Pro is inactive.%2$s The %3$sWooCommerce plugin%4$s must be active for Germanized Pro to work. Please %5$sinstall WooCommerce &raquo;%6$s', 'woocommerce-germanized-pro' ), '<strong>', '</strong>', '<a href="http://wordpress.org/extend/plugins/woocommerce/">', '</a>', '<a href="' . esc_url( $install_url ) . '">', '</a>' );

			if ( in_array( 'woocommerce/woocommerce.php', $current_plugins, true ) ) {
				$install_url = wp_nonce_url(
					add_query_arg(
						array(
							'action' => 'activate',
							'plugin' => rawurlencode( 'woocommerce/woocommerce.php' ),
						),
						admin_url( 'plugins.php' )
					),
					'activate-plugin_woocommerce/woocommerce.php'
				);
				// translators: 1$-2$: opening and closing <strong> tags, 3$-4$: link tags, takes to woocommerce plugin on wp.org, 5$-6$: opening and closing link tags, leads to plugins.php in admin
				$text = sprintf( esc_html__( '%1$sGermanized Pro is inactive.%2$s The %3$sWooCommerce plugin%4$s must be active for Germanized Pro to work. Please %5$sactivate WooCommerce &raquo;%6$s', 'woocommerce-germanized-pro' ), '<strong>', '</strong>', '<a href="http://wordpress.org/extend/plugins/woocommerce/">', '</a>', '<a href="' . esc_url( $install_url ) . '">', '</a>' );
			}

			echo wp_kses_post( $text );
		elseif ( $dependencies->is_woocommerce_outdated() ) :
			// translators: 1$-2$: opening and closing <strong> tags, 3$: minimum supported WooCommerce version, 4$-5$: opening and closing link tags, leads to plugin admin
			echo wp_kses_post( sprintf( esc_html__( '%1$sGermanized Pro is inactive.%2$s This version of Germanized Pro requires WooCommerce %3$s or newer. Please %4$supdate WooCommerce to version %3$s or newer &raquo;%5$s', 'woocommerce-germanized-pro' ), '<strong>', '</strong>', $dependencies->get_wc_min_version_required(), '<a href="' . esc_url( admin_url( 'plugins.php' ) ) . '">', '</a>' ) );
		endif;
		?>
	</p>
</div>
