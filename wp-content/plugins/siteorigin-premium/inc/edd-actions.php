<?php

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Class SiteOrigin_Premium_EDD_Actions
 *
 * Encapsulates EDD related functionality. All EDD action calls should be added here.
 *
 * TODO: Still a couple of EDD actions happening elsewhere that should be moved here.
 *
 */
class SiteOrigin_Premium_EDD_Actions {

	const EDD_ACTIONS_ENDPOINT = 'https://siteorigin.com/wp-content/plugins/siteorigin-components/edd-actions.php';
	const EDD_ACTIONS_HOST = 'https://siteorigin.com/';
	const EDD_ITEM_ID = 23323;

	private $base_api_params = array();

	public function __construct() {

		$this->base_api_params = array(
			'item_id' => urlencode( self::EDD_ITEM_ID ),
			'url' => home_url(),
		);
	}

	/**
	 * Checks the status of a license key.
	 *
	 * @param $license_key The license key to check.
	 *
	 * @return array|mixed|object|stdClass The information about the status of the license.
	 */
	public function check_license( $license_key, $debug = false ) {

		return $this->get_license_data( array( 'edd_action' => 'check_license', 'license' => $license_key ), $debug );
	}

	/**
	 * Attempt to activate a license key.
	 *
	 * @param $license_key The license key to activate.
	 *
	 * @return array|mixed|object|stdClass The result of the activation attempt.
	 */
	public function activate_license( $license_key ) {
		return $this->get_license_data( array( 'edd_action' => 'activate_license', 'license' => $license_key ) );
	}


	/**
	 * Attempt to deactivate a license key.
	 *
	 * @param $license_key The license key to activate.
	 *
	 * @return array|mixed|object|stdClass The result of the deactivation attempt.
	 */
	public function deactivate_license( $license_key ) {
		return $this->get_license_data( array( 'edd_action' => 'deactivate_license', 'license' => $license_key ) );
	}


	/**
	 * Call SiteOrigin Premium server EDD API and parse result.
	 *
	 * @param $params
	 *
	 * @return array|mixed|object|stdClass
	 */
	private function get_license_data( $params, $debug = false ) {

		$params = array_merge( $this->base_api_params, $params );

		$request = array(
			'timeout'   => 15,
			'sslverify' => apply_filters(
				'siteorigin_premium_sslverify',
				get_option(
					'siteorigin_premium_sslverify',
					false
				)
			),
			'body'      => $params
		);

		// Used to help with debugging on our side.
		if ( isset( $_GET['debug-ua-remove'] ) ) {
			delete_option( 'siteorigin_premium_ua_debug' );
		} elseif ( isset( $_GET['debug-ua'] ) || get_option( 'siteorigin_premium_ua_debug', false ) ) {
			$request['user-agent'] = 'SiteOrigin Debug';
			update_option( 'siteorigin_premium_ua_debug', true );
		}

		$response = wp_remote_get( self::EDD_ACTIONS_ENDPOINT, $request );
		if ( is_wp_error( $response ) ) {
			$license_data = new stdClass();
			$license_data->license = 'invalid';
			$license_data->errors['wp'] = $response->get_error_message();

			// Check for `sslv3` related errors. These require `sslverify` to be enabled.
			if ( ! $request['sslverify'] && strpos( $license_data->errors['wp'], 'sslv3' ) !== false ) {
				// This request failed, but it should hopefully not fail in the future.
				update_option( 'siteorigin_premium_sslverify', true );
			}
		} else {
			$license_data = @ json_decode( wp_remote_retrieve_body( $response ) );
		}

		// If this is a debug request, store the request.
		if ( $debug ) {
			@ $license_data->response = $response;
		}

		// This is used to debug activation issues.
		if ( ! empty( $_GET['sow-debug'] ) ) {
			echo '<pre>';
			if ( is_wp_error( $response ) ) {
				print_r( $response->get_error_message() );
			}
			print_r( $license_data );
			print_r( $response );
			echo '</pre>';
			die();
		}

		return $license_data;
	}
}
