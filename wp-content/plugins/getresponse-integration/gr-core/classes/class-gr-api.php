<?php
namespace Getresponse\WordPress;

use DateTime;

defined( 'ABSPATH' ) || exit;

/**
 * Class Api
 * @package Getresponse\WordPress
 */
class Api {

	const API_URL_360_COM = 'https://api3.getresponse360.com/v3';
	const API_URL_360_PL = 'https://api3.getresponse360.pl/v3';
	const API_URL = 'https://api.getresponse.com/v3';
	const TIMEOUT = 30;
	const AUTH_ERROR_FIRST_OCCURRENCE_TIMESTAMP = 'auth_error_first_occurrence_timestamp';

    const STATUS_CONNECTED = 'connected';
    const STATUS_DISCONNECTED = 'disconnected';
    const STATUS_ERROR = 'error';

	private $unauthorized_response_codes = [1014, 1018, 1017];

	/** @var string */
	private $api_key;

	/** @var string */
	private $url;

	/** @var string */
	private $domain;

	/**
	 * @param string $api_key
	 * @param string string $url
	 * @param string string $domain
	 */
	public function __construct( $api_key, $url = '', $domain = '' ) {

		$this->api_key = $api_key;
		$this->url     = empty( $url ) ? self::API_URL : $url;
		$this->domain  = $domain;
	}

    /**
     * @return array
     * @throws ApiException
     */
	public function connect() {

		$account_details = $this->call( 'accounts/' );

		if ( ! isset( $account_details['accountId'] ) ) {
			throw ApiException::create_for_invalid_response_status();
		}

		return $account_details;
	}

    /**
     * @return array
     * @throws ApiException
     */
	public function get_campaigns() {
		return $this->call( 'campaigns' );
	}

    /**
     * @param $params
     * @return array
     * @throws ApiException
     */
	public function add_contact( $params ) {
		return $this->call( 'contacts', 'POST', $params );
	}

    /**
     * @param array $params
     * @return array
     * @throws ApiException
     */
	public function get_contacts( $params = array() ) {
		return $this->call( 'contacts?' . $this->setParams( $params ) );
	}

	/**
	 * @param string $contact_id
	 * @param array $params
	 *
	 * @return array
	 * @throws ApiException
	 */
	public function update_contact( $contact_id, $params = array() ) {
		return $this->call( 'contacts/' . $contact_id, 'POST', $params );
	}

	/**
	 * @param array $params
	 *
	 * @return array
	 * @throws ApiException
	 */
	public function get_custom_fields( $params = array() ) {
		return $this->call( 'custom-fields?' . $this->setParams( $params ) );
	}

	/**
	 * @param array $params
	 *
	 * @return array
	 * @throws ApiException
	 */
	public function add_custom_field( $params = array() ) {
		return $this->call( 'custom-fields', 'POST', $params );
	}

	/**
	 * @param string $web_form_id
	 *
	 * @return array
	 * @throws ApiException
	 */
	public function get_web_form( $web_form_id ) {
		return $this->call( 'webforms/' . $web_form_id );
	}

	/**
	 * @param array $params
	 *
	 * @return array
	 * @throws ApiException
	 */
	public function get_web_forms( $params = array() ) {
		return $this->call( 'webforms?' . $this->setParams( $params ) );
	}


	/**
	 * @param string $form_id
	 *
	 * @return array
	 * @throws ApiException
	 */
	public function get_form( $form_id ) {
		return $this->call( 'forms/' . $form_id );
	}

	/**
	 * @param array $params
	 *
	 * @return array
	 * @throws ApiException
	 */
	public function get_forms( $params = array() ) {
		return $this->call( 'forms?' . $this->setParams( $params ) );
	}

	/**
	 * @param string $form_id
	 *
	 * @return array
	 * @throws ApiException
	 */
	public function get_form_variants( $form_id ) {
		return $this->call( 'forms/' . $form_id . '/variants' );
	}

	/**
	 * @param array $params
     * @return array
	 * @throws ApiException
	 */
	public function get_landing_pages( $params = array() ) {
		return $this->call( 'landing-pages?' . $this->setParams( $params ) );
	}

	/**
	 * @param string $page_id
	 * @param array $params
	 * @return array
	 * @throws ApiException
	 */
	public function get_landing_page($page_id, $params = array() ) {
		return $this->call( 'landing-pages/' . $page_id . '?' . $this->setParams( $params ) );
	}

	/** E-COMMERCE */

	/**
	 * @return array
	 * @throws ApiException
	 */
	public function get_shops() {
		return (array) $this->call( 'shops' );
	}

    /**
     * @param string $store_id
     * @param array $order
     * @param bool $skip_automation
     * @return array
     * @throws ApiException
     */
	public function create_order($store_id, $order, $skip_automation = false) {

	    $url = 'shops/' . $store_id . '/orders';
        if ($skip_automation) {
            $url .= '?additionalFlags=skipAutomation';
        }

		return $this->call($url, 'POST', $order);
	}

	/**
	 * @param string $store_id
	 * @param array $cart
	 *
	 * @return array
	 * @throws ApiException
	 */
	public function create_cart( $store_id, $cart ) {
		return $this->call( 'shops/' . $store_id . '/carts', 'POST', $cart );
	}

	/**
	 * @param string $store_id
	 * @param array $product
	 *
	 * @return array
	 * @throws ApiException
	 */
	public function create_product( $store_id, $product ) {
		return $this->call( 'shops/' . $store_id . '/products', 'POST', $product );
	}

	/**
	 * @param string $store_id
	 * @param string $order_id
	 *
	 * @return array
	 * @throws ApiException
	 */
	public function get_order( $store_id, $order_id ) {
		return $this->call( 'shops/' . $store_id . '/orders/' . $order_id, 'GET' );
	}

	/**
	 * @param string $store_id
	 * @param string $cart_id
	 *
	 * @return array
	 * @throws ApiException
	 */
	public function remove_cart( $store_id, $cart_id ) {
		return $this->call( 'shops/' . $store_id . '/carts/' . $cart_id, 'DELETE' );
	}

	/**
	 * @param string $store_id
	 * @param array $params
	 *
	 * @return array
	 * @throws ApiException
	 */
	public function get_carts( $store_id, $params = array() ) {
		return $this->call( 'shops/' . $store_id . '/carts?' . $this->setParams( $params ) );
	}


	/**
	 * @param string $cart_id
	 * @param string $store_id
	 * @param array $cart
	 *
	 * @return array
	 * @throws ApiException
	 */
	public function update_cart( $cart_id, $store_id, $cart ) {
		return $this->call(
			'shops/' . $store_id . '/carts/' . $cart_id,
			'POST',
			$cart
		);
	}

    /**
     * @param string $order_id
     * @param string $store_id
     * @param array $order
     * @param bool $skip_automation
     * @return array
     * @throws ApiException
     */
	public function update_order( $order_id, $store_id, $order, $skip_automation = false) {

	    $url = 'shops/' . $store_id . '/orders/' . $order_id;
	    if ($skip_automation) {
	        $url .= '?additionalFlags=skipAutomation';
        }

		return (array) $this->call($url, 'POST', $order );
	}

	/**
	 * @param string $store_id
	 * @param string $product_id
	 * @param array $product
	 *
	 * @return array
	 * @throws ApiException
	 */
	public function update_product( $store_id, $product_id, $product ) {
		return (array) $this->call( 'shops/' . $store_id . '/products/' . $product_id, 'POST', $product );
	}

	/**
	 * @param string $store_id
	 * @param string $product_id
	 *
	 * @return array
	 * @throws ApiException
	 */
	public function get_product( $store_id, $product_id ) {
		return $this->call( 'shops/' . $store_id . '/products/' . $product_id, 'GET' );
	}

	/**
	 * @param string $shop_id
	 *
	 * @return array
	 * @throws ApiException
	 */
	public function delete_shop( $shop_id ) {
		return $this->call( 'shops/' . $shop_id, 'DELETE' );
	}

	/**
	 * @param string $shop_name
	 * @param string $locale
	 * @param string $currency
	 *
	 * @return array
	 * @throws ApiException
	 */
	public function add_shop( $shop_name, $locale, $currency ) {
		return $this->call( 'shops', 'POST', array(
			'name'     => $shop_name,
			'locale'   => $locale,
			'currency' => $currency
		) );
	}

	/**
	 * @return array
	 * @throws ApiException
	 */
	public function get_features() {
		return (array) $this->call( 'accounts/features', 'GET' );
	}

	/**
	 * @return array
	 * @throws ApiException
	 */
	public function get_tracking_code() {
		return $this->call( 'tracking', 'GET' );
	}

	/**
	 * @param array $params
	 *
	 * @return array
	 * @throws ApiException
	 */
	public function get_autoresponders( $params ) {
		return $this->call( 'autoresponders?' . $this->setParams( $params ) );
	}

	/**
	 * @param string $api_method
	 * @param string $http_method
	 * @param array $params
	 *
	 * @return array
	 * @throws ApiException
	 */
	protected function call( $api_method = null, $http_method = 'GET', $params = array() ) {

		if ( empty( $api_method ) ) {
			return array(
				'httpStatus'      => '400',
				'code'            => '1010',
				'codeDescription' => 'Error in external resources',
				'message'         => 'Invalid api method'
			);
		}

        $json_params = wp_json_encode( $params );

        // mb_convert_encoding accepts array as params only in PHP 7.2 and newer versions.
        if ($json_params === false && function_exists('mb_convert_encoding') && defined('PHP_VERSION_ID') && PHP_VERSION_ID >= 70200) {
            $json_params = wp_json_encode(mb_convert_encoding($params, 'UTF-8', 'auto'));
        }

		$url = $this->url . '/' . $api_method;

		$headers = array(
			'X-Auth-Token' =>  'api-key ' . $this->api_key,
			'Content-Type' => 'application/json',
			'User-Agent' => 'Wordpress plugin ver:' . GR_PLUGIN_VERSION,
			'X-APP-ID' => '823fc1e6-ef10-4965-9e66-fa389685be22'
		);

		// for GetResponse 360
		if ( isset( $this->domain ) ) {
			$headers['X-Domain'] = $this->domain;
		}

        $args = array(
            'headers' => $headers,
            'timeout' => self::TIMEOUT
        );

		if ( $http_method === 'POST' ) {
            $args['body'] = $json_params;
			$response = wp_remote_post($url, $args);
		} else if ( $http_method === 'DELETE' ) {
            $args['method'] = 'DELETE';
            $response = wp_remote_request($url, $args);
		} else { // GET request
            $response = wp_remote_get($url, $args);
        }

        $body = json_decode(wp_remote_retrieve_body($response), true);
        $http_code = wp_remote_retrieve_response_code( $response );

        if ( 400 <= $http_code ) {
            throw ApiException::create_for_invalid_api_response_code($body['message'], $body['httpStatus']);
        }

        $this->handleAuthorizationResponse($body);

		return $body;
	}

	/**
	 * @param array $params
	 *
	 * @return string
	 */
	private function setParams( $params = array() ) {
		$result = array();
		if ( is_array( $params ) ) {
			foreach ( $params as $key => $value ) {
				$result[ $key ] = $value;
			}
		}

		return http_build_query( $result );
	}

    private function handleAuthorizationResponse($response)
    {
        if (!isset($response['code']) || !in_array($response['code'], $this->unauthorized_response_codes, true)) {
            gr_delete_option(self::AUTH_ERROR_FIRST_OCCURRENCE_TIMESTAMP);
            return;
        }

        $first_occurrence = gr_get_option(self::AUTH_ERROR_FIRST_OCCURRENCE_TIMESTAMP);

        if (empty($first_occurrence)) {
            gr_update_option(self::AUTH_ERROR_FIRST_OCCURRENCE_TIMESTAMP, time());
            return;
        }

        $now = new DateTime('now');
        $previous = (new DateTime())->setTimestamp($first_occurrence);

        if($now->diff($previous)->days > 3) {
            gr()->disconnect_integration();
        }
    }
}
