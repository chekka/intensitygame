<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Class WFFN_Role_Capability
 */
if ( ! class_exists( 'WFFN_Role_Capability' ) ) {
	class WFFN_Role_Capability {

		private static $ins = null;

		/**
		 * @return WFFN_Role_Capability|null
		 */
		public static function get_instance() {
			if ( null === self::$ins ) {
				self::$ins = new self;
			}

			return self::$ins;
		}

		/**
		 * check if user have funnel capabilities access
		 * @param $cap
		 * @param $access
		 *
		 * @return false|string
		 */
		public function user_access( $cap, $access ) {
			if ( ! is_user_logged_in() ) {
				return false;
			}

			$current_user = wp_get_current_user();

			// not logged in
			if ( $current_user->ID === 0 ) {
				return false;
			}

			$config = apply_filters( 'wffn_user_access_capabilities', [
				'administrator' => array(
					'menu'      => array( 'read', 'write' ),
					'funnel'    => array( 'read', 'write' ),
					'analytics' => array( 'read', 'write' )
				)
			] );

			$current_user_roles = $current_user->roles;
			if ( is_array( $current_user_roles ) ) {
				foreach ( $current_user_roles as $role ) {
					if ( isset( $config[ $role ] ) && isset( $config[ $role ][ $cap ] ) && in_array( $access, $config[ $role ][ $cap ], true ) ) {
						return $role;
					}
				}
			}

			return false;
		}

	}

	if ( class_exists( 'WFFN_Core' ) ) {
		WFFN_Core::register( 'role', 'WFFN_Role_Capability' );
	}
}
