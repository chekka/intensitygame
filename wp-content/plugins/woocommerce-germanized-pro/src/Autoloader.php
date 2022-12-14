<?php
/**
 * Includes the composer Autoloader used for packages and classes in the src/ directory.
 *
 * @package Vendidero/Germanized/Pro
 */

namespace Vendidero\Germanized\Pro;

defined( 'ABSPATH' ) || exit;

/**
 * Autoloader class.
 *
 * @since 3.7.0
 */
class Autoloader {

	/**
	 * Static-only class.
	 */
	private function __construct() {}

	/**
	 * Require the autoloader and return the result.
	 *
	 * If the autoloader is not present, let's log the failure and display a nice admin notice.
	 *
	 * @return boolean
	 */
	public static function init() {
		$autoloader = dirname( __DIR__ ) . '/vendor/autoload_packages.php';

		if ( ! is_readable( $autoloader ) ) {
			self::missing_autoloader();

			return false;
		}

		return require $autoloader;
	}

	/**
	 * If the autoloader is missing, add an admin notice.
	 */
	protected static function missing_autoloader() {
		if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
			error_log(  // phpcs:ignore
				esc_html__( 'Your installation of Germanized Pro is incomplete. If you installed Germanized from GitHub, please refer to this document to set up your development environment: https://github.com/vendidero/woocommerce-germanized/wiki/How-to-set-up-a-Germanized-development-environment', 'woocommerce-germanized-pro' )
			);
		}
		add_action(
			'admin_notices',
			function () {
				?>
				<div class="notice notice-error">
					<p>
						<?php
						printf(
						/* translators: 1: is a link to a support document. 2: closing link */
							esc_html__( 'Your installation of Germanized Pro is incomplete. If you installed Germanized from GitHub, %1$splease refer to this document%2$s to set up your development environment.', 'woocommerce-germanized-pro' ),
							'<a href="' . esc_url( 'https://github.com/vendidero/woocommerce-germanized/wiki/How-to-set-up-a-Germanized-development-environment' ) . '" target="_blank" rel="noopener noreferrer">',
							'</a>'
						);
						?>
					</p>
				</div>
				<?php
			}
		);
	}
}
