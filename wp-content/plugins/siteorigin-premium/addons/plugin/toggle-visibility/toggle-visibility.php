<?php
/*
Plugin Name: SiteOrigin Toggle Visibility
Description: Toggle the visibility of Page Builder rows and widgets based on device or logged-in status. Schedule content to show or hide.
Version: 1.0.0
Author: SiteOrigin
Author URI: https://siteorigin.com
License: GPL3
License URI: https://www.gnu.org/licenses/gpl-3.0.txt
Documentation: https://siteorigin.com/premium-documentation/plugin-addons/toggle-visibility
Tags: Page Builder
Requires: siteorigin-panels
*/

class SiteOrigin_Premium_Plugin_Toggle_Visibility {
	private $toggleSchedulingLegacy;

	function __construct() {
		add_filter( 'siteorigin_panels_row_style_groups', array($this, 'style_group'), 10, 3 );
		add_filter( 'siteorigin_panels_row_style_fields', array( $this, 'style_fields' ), 10, 3 );
		add_filter( 'siteorigin_panels_widget_style_groups', array($this, 'style_group'), 10, 3 );
		add_filter( 'siteorigin_panels_widget_style_fields', array($this, 'style_fields'), 10, 3 );
		add_filter( 'siteorigin_panels_css_object', array( $this, 'add_row_widget_visibility_css' ), 10, 4 );

		if (
			defined( 'SITEORIGIN_PANELS_VERSION' ) &&
			version_compare( SITEORIGIN_PANELS_VERSION, '2.16.7', '>' )
		) {
			add_filter( 'siteorigin_panels_output_row', array( $this, 'maybe_hide_row_widget' ), 10, 2 );
			add_filter( 'siteorigin_panels_output_widget', array( $this, 'maybe_hide_row_widget' ), 10, 2 );
		} else {
			add_filter( 'siteorigin_panels_layout_data', array( $this, 'layout_data_filter' ), 10, 2 );
		}

		add_action( 'admin_print_scripts-post-new.php', array( $this, 'enqueue_admin_assets' ), 20 );
		add_action( 'admin_print_scripts-post.php', array( $this, 'enqueue_admin_assets' ), 20 );
		add_action( 'admin_print_scripts-appearance_page_so_panels_home_page', array( $this, 'enqueue_admin_assets' ), 20 );
		add_action( 'admin_print_scripts-widgets.php', array( $this, 'enqueue_admin_assets' ), 20 );

		// If a newer version of PB is active, we need to migrate the schedule related settings.
		if (
			defined( 'SITEORIGIN_PANELS_VERSION' ) &&
			version_compare( SITEORIGIN_PANELS_VERSION, '2.17.0', '>=' )
		) {
			$this->toggleSchedulingLegacy = true;
			add_filter( 'siteorigin_panels_general_current_styles', array( $this, 'setting_migration' ), 10, 4 );
			add_filter( 'siteorigin_panels_general_style_fields', array( $this, 'setting_migration_pre_save' ) );
			add_filter( 'siteorigin_panels_data_pre_save', array( $this, 'setting_migration_save' ), 10, 4 );
		}

		add_shortcode( 'toggle_visibility', array( $this, 'shortcode' ) );
	}

	public static function single() {
		static $single;

		return empty( $single ) ? $single = new self() : $single;
	}

	function enqueue_admin_assets() {
		if ( ! wp_script_is( 'sowb-pikaday-jquery' ) ) {
			// WB isn't active, load fallback scripts.
			wp_register_script(
				'sowb-pikaday',
				SITEORIGIN_PREMIUM_URL . 'js/pikaday' . SITEORIGIN_PREMIUM_JS_SUFFIX . '.js',
				array(),
				'1.6.1'
			);
			wp_register_script(
				'sowb-pikaday-jquery',
				SITEORIGIN_PREMIUM_URL . 'js/pikaday.jquery' . SITEORIGIN_PREMIUM_JS_SUFFIX . '.js',
				array( 'sowb-pikaday' ),
				'1.6.1'
			);

			wp_register_style(
				'sowb-pikaday-fallback',
				SITEORIGIN_PREMIUM_URL . 'css/pikaday-fallback.css',
				array()
			);

			wp_register_style(
				'sowb-pikaday',
				SITEORIGIN_PREMIUM_URL . 'css/pikaday.css',
				array( 'sowb-pikaday-fallback' ),
				'1.6.1'
			);
		}
		wp_enqueue_script( 'sowb-pikaday' );
		wp_enqueue_script( 'sowb-pikaday-jquery' );
		wp_enqueue_style( 'sowb-pikaday' );

		wp_enqueue_script(
			'siteorigin-premium-toggle-visibility-addon',
			plugin_dir_url( __FILE__ ) . 'js/script' . SITEORIGIN_PREMIUM_JS_SUFFIX . '.js',
			array( 'jquery', 'sowb-pikaday', 'sowb-pikaday-jquery' ),
			SITEORIGIN_PREMIUM_VERSION
		);

		if ( ! empty( $this->toggleSchedulingLegacy ) ) {
			wp_add_inline_script(
				'siteorigin-premium-toggle-visibility-addon',
				'var siteoriginPremiumToggleUseToggle = true;',
				'before'
			);
		}

		wp_localize_script(
			'siteorigin-premium-toggle-visibility-addon',
			'soPremiumToggleVisibilityAddon',
			array(
				'isRTL' => is_rtl(),
				'i18n' => include( SITEORIGIN_PREMIUM_DIR . 'inc/datapickeri18n.php' ),
			)
		);
	}

	function style_group( $groups, $post_id, $args ) {
		$groups['toggle'] = array(
			'name' => __( 'Toggle Visibility', 'siteorigin-premium' ),
			'priority' => 30
		);

		return $groups;
	}

	function style_fields( $fields, $post_id, $args ) {
		if ( current_filter() == 'siteorigin_panels_row_style_fields' ) {
			$fields['disable_row'] = array(
				// Adding empty 'name' field to avoid 'Undefined index' notices in PB due to always expecting
				// name 'field' in siteorigin-panels\inc\styles-admin.php:L145.
				'name' => '',
				'label' => __( 'Hide Row on All Devices', 'siteorigin-premium' ),
				'type' => 'checkbox',
				'group' => 'toggle',
				'priority' => 10,
			);
		} else {
			$fields['disable_widget'] = array(
				'name' => '',
				'label' => __( 'Hide Widget on All Devices', 'siteorigin-premium' ),
				'type' => 'checkbox',
				'group' => 'toggle',
				'priority' => 10,
			);
		}

		$fields['disable_desktop'] = array(
			'name' => '',
			'label' => __( 'Hide on Desktop', 'siteorigin-premium' ),
			'type' => 'checkbox',
			'group' => 'toggle',
			'priority' => 20,
		);

		$fields['disable_tablet'] = array(
			'name' => '',
			'label' => __( 'Hide on Tablet', 'siteorigin-premium' ),
			'type' => 'checkbox',
			'group' => 'toggle',
			'priority' => 30,
		);

		$fields['disable_mobile'] = array(
			'name' => '',
			'label' => __( 'Hide on Mobile', 'siteorigin-premium' ),
			'type' => 'checkbox',
			'group' => 'toggle',
			'priority' => 40,
		);

		$fields['disable_logged_out'] = array(
			'name' => '',
			'label' => __( 'Hide When Logged Out', 'siteorigin-premium' ),
			'type' => 'checkbox',
			'group' => 'toggle',
			'priority' => 50,
		);

		$fields['disable_logged_in'] = array(
			'name' => '',
			'label' => __( 'Hide When Logged In', 'siteorigin-premium' ),
			'type' => 'checkbox',
			'group' => 'toggle',
			'priority' => 60,
		);

		$fields['toggle_scheduling'] = array(
			'name' => __( 'Scheduling', 'siteorigin-premium' ),
			'type' => 'checkbox',
			'group' => 'toggle',
			'priority' => 70,
		);
		$toggle_fields = array();

		$toggle_fields['toggle_display'] = array(
			'name' => __( 'Display', 'siteorigin-premium' ),
			'type' => 'radio',
			'group' => 'toggle',
			'default' => 'show',
			'priority' => 80,
			'options' => array(
				'show' => 'Show',
				'hide' => 'Hide',
			),
		);

		$toggle_fields['toggle_date_from'] = array(
			'name' => __( 'Date From', 'siteorigin-premium' ),
			'type' => 'text',
			'group' => 'toggle',
			'priority' => 90,
		);

		$toggle_fields['toggle_date_to'] = array(
			'name' => __( 'Date To', 'siteorigin-premium' ),
			'type' => 'text',
			'group' => 'toggle',
			'priority' => 100,
		);

		// Is a version of Page Builder that supports the Toggle field active?
		if ( ! empty( $this->toggleSchedulingLegacy ) ) {
			$fields['toggle_scheduling']['type'] = 'toggle';
			$fields['toggle_scheduling']['fields'] = $toggle_fields;
		} else {
			$fields['toggle_scheduling']['label'] = __( 'Enable', 'siteorigin-premium' );
			$fields = array_merge(
				$fields,
				$toggle_fields
			);
		}

		return $fields;
	}

	function setting_migration( $style, $post_id = 0, $type = null, $args = array() ) {
		if (
			! empty( $style['toggle_display'] ) ||
			! empty( $style['toggle_date_from'] ) ||
			! empty( $style['toggle_date_to'] )
		) {
			$style['toggle_scheduling_toggle_display'] = $style['toggle_display'];
			$style['toggle_scheduling_toggle_date_from'] = ! empty( $style['toggle_date_from'] ) ? $style['toggle_date_from'] : '';
			$style['toggle_scheduling_toggle_date_to'] = ! empty( $style['toggle_date_to'] ) ? $style['toggle_date_to'] : '';
			if ( ! empty( $_POST ) ) {
				unset( $style['toggle_display'] );
				unset( $style['toggle_date_from'] );
				unset( $style['toggle_date_to'] );
			}
		}

		return $style;
	}

	/**
	 * We have to temporarily add the legacy fields during save or we won't be able to save the
	 * new settings if the user doesn't open the row or widget. This is required by Page Builder
	 * as it will disregard any non-valid fields.
	 */
	function setting_migration_pre_save( $fields ) {
		if (
			! empty( $_POST ) &&
			! empty( $_POST['action'] ) &&
			$_POST['action'] != 'so_panels_style_form' &&
			! empty( $fields['toggle_scheduling'] )
		) {
			$fields['toggle_display'] = $fields['toggle_scheduling']['fields']['toggle_display'];
			$fields['toggle_date_from'] = $fields['toggle_scheduling']['fields']['toggle_date_from'];
			$fields['toggle_date_to'] = $fields['toggle_scheduling']['fields']['toggle_date_to'];
		}

		return $fields;
	}

	function setting_migration_save( $panels_data, $post, $post_id ) {
		if (
			! empty( $panels_data['widgets'] ) ||
			! empty( $panels_data['grids'] )
		) {
			if ( ! empty( $panels_data['grids'] ) ) {
				foreach ( $panels_data['grids'] as $k => $row ) {
					$panels_data['grids'][ $k ]['style'] = $this->setting_migration( $panels_data['grids'][ $k ]['style'] );
				}
			}

			if ( ! empty( $panels_data['widgets'] ) ) {
				foreach ( $panels_data['widgets'] as $k => $row ) {
					$panels_data['widgets'][ $k ]['panels_info']['style'] = $this->setting_migration( $panels_data['widgets'][ $k ]['panels_info']['style'] );
				}
			}
		}
		return $panels_data;
	}

	/**
	 * Add row/widget CSS for device specific visibility.
	 */
	function add_row_widget_visibility_css( $css, $panels_data, $post_id, $layout_data ) {
		$panels_tablet_width = siteorigin_panels_setting( 'tablet-width' );
		$panels_mobile_width = siteorigin_panels_setting( 'mobile-width' );
		$desktop_breakpoint = ( $panels_tablet_width === '' ? $panels_mobile_width : $panels_tablet_width ) + 1;
		$tablet_min_width = $panels_mobile_width + 1;

		foreach ( $layout_data as $ri => $row ) {
			// Check if row is disabled on desktop.
			if ( ! empty( $row['style']['disable_desktop'] ) ) {
				$css->add_row_css( $post_id, $ri, null, array(
					'display' => 'none',
				), ":$desktop_breakpoint" );
			}

			// Check if row is disabled on tablet.
			if ( ! empty( $row['style']['disable_tablet'] ) && $panels_tablet_width > $panels_mobile_width ) {
				$css->add_row_css( $post_id, $ri, null, array(
					'display' => 'none',
				), "$panels_tablet_width:$tablet_min_width" );
			}

			// Check if row is disabled on mobile.
			if ( ! empty( $row['style']['disable_mobile'] ) ) {
				$css->add_row_css( $post_id, $ri, null, array(
					'display' => 'none',
				), $panels_mobile_width );
			}

			foreach ( $row['cells'] as $ci => $cell ) {
				foreach ( $cell['widgets'] as $wi => $widget ) {
					// Check if widget is disabled on desktop.
					if ( ! empty( $widget['panels_info']['style']['disable_desktop'] ) ) {
						$css->add_widget_css( $post_id, $ri, $ci, $wi, null, array(
							'display' => 'none',
						), ":$desktop_breakpoint" );
					}

					// Check if widget is disabled on tablet.
					if ( ! empty( $widget['panels_info']['style']['disable_tablet'] ) && $panels_tablet_width > $panels_mobile_width ) {
						$css->add_widget_css( $post_id, $ri, $ci, $wi, null, array(
							'display' => 'none',
						), "$panels_tablet_width:$tablet_min_width" );
					}

					// Check if widget is disabled on mobile.
					if ( ! empty( $widget['panels_info']['style']['disable_mobile'] ) ) {
						$css->add_widget_css( $post_id, $ri, $ci, $wi, null, array(
							'display' => 'none',
						), $panels_mobile_width );
					}
				}
			}
		}
		return $css;
	}

	/**
	 * Check if row/widget is scheduled to show or hide.
	 */
	private function check_scheduling( $styles ) {
		if ( ! empty( $this->toggleSchedulingLegacy ) ) {
			$date_from_name = 'toggle_scheduling_toggle_date_from';
			$date_to_name = 'toggle_scheduling_toggle_date_to';
			// Migrate legacy scheduling settings.
			$styles = $this->setting_migration( $styles );
		} else {
			$date_from_name = 'toggle_date_from';
			$date_to_name = 'toggle_date_to';
		}

		if ( empty( $styles[ $date_from_name ] ) && empty( $styles[ $date_to_name ] ) ) {
			return false;
		}

		$scheduled = false;
		$current_time = new DateTime( 'now', new DateTimeZone( wp_timezone_string() ) );
		$from = ! empty( $styles[ $date_from_name ] ) ? new DateTime( $styles[ $date_from_name ], new DateTimeZone( wp_timezone_string() ) ) : '';
		$to = ! empty( $styles[ $date_to_name ] ) ? new DateTime( $styles[ $date_to_name ] . ' 23:59', new DateTimeZone( wp_timezone_string() ) ) : '';

		if ( ! empty( $from ) && ! empty( $to ) ) {
			if ( empty( $from ) && $to < $current_time) {
				$scheduled = true;
			} elseif ( $current_time > $from && $current_time < $to ) {
				$scheduled = true;
			}
		} elseif ( ! empty( $from ) && $current_time > $from ) {
				$scheduled = true;
		} elseif ( ! empty( $to ) && $current_time < $to ) {
			$scheduled = true;
		}
		$toggle_display_value = ! empty( $this->toggleSchedulingLegacy ) ? $styles['toggle_scheduling_toggle_display'] : $styles['toggle_display'];
		return $toggle_display_value == 'show' ? ! $scheduled : $scheduled;
	}

	/**
	 * Conditionally filter a row/widget from the layout based on visibility settings.
	 * LEGACY: Used if Page Builder version is newer than 2.16.7. 
	 */
	function maybe_hide_row_widget( $output, $data ) {
		if ( current_filter() == 'siteorigin_panels_output_row' ) {
			if (
				! empty( $data['style']['disable_row'] ) ||
				$this->check_scheduling( $data['style'] ) ||
				(
					! empty( $data['style']['disable_logged_out'] ) &&
					! is_user_logged_in()
				) ||
				(
					! empty( $data['style']['disable_logged_in'] ) &&
					is_user_logged_in()
				)
			) {
				// Prevent row output.
				$output = false;
			}
		} else if ( current_filter() == 'siteorigin_panels_output_widget' ) {
			if (
				! empty( $data['panels_info'] ) ||
				! empty( $data['panels_info']['style'] )
			) {
				if (
					! empty( $data['panels_info']['style']['disable_widget'] ) ||
					$this->check_scheduling( $data['panels_info']['style'] ) ||
					(
						! empty( $data['panels_info']['style']['disable_logged_out'] ) &&
						! is_user_logged_in()
					) ||
					(
						! empty( $data['panels_info']['style']['disable_logged_in'] ) &&
						is_user_logged_in()
					)
				) {
					// Prevent widget output.
					$output = false;
				}
			}
		}

		return $output;
	}

	/**
	 * Conditionally filter a row/widget from the layout based on visibility settings.
	 * LEGACY: Used if Page Builder version is older than 2.16.8. 
	 */
	function layout_data_filter( $layout_data, $post_id ) {
		// Row Visibility.
		foreach ( $layout_data as $ri => $row ) {
			if (
				! empty( $row['style']['disable_row'] ) ||
				$this->check_scheduling( $row['style'] ) ||
				(
					! empty( $row['style']['disable_logged_out'] ) &&
					! is_user_logged_in()
				) ||
				(
					! empty( $row['style']['disable_logged_in'] ) &&
					is_user_logged_in()
				)
			) {
				// Prevent row output.
				unset( $layout_data[ $ri ] );
			}

			foreach ( $row['cells'] as $ci => $cell ) {
				// Widget Visibility.
				foreach ( $cell['widgets'] as $wi => $widget ) {
					if (
						! isset( $widget['panels_info'] ) ||
						! isset( $widget['panels_info']['style'] )
					) {
						continue;
					}

					if (
						! empty( $widget['panels_info']['style']['disable_widget'] ) ||
						$this->check_scheduling( $widget['panels_info']['style'] ) ||
						(
							! empty( $widget['panels_info']['style']['disable_logged_out'] ) &&
							! is_user_logged_in()
						) ||
						(
							! empty( $widget['panels_info']['style']['disable_logged_in'] ) &&
							is_user_logged_in()
						)
					) {
						// Prevent widget output.
						unset( $layout_data[ $ri ]['cells'][ $ci ]['widgets'][ $wi ] );
					}
				}
			}
		}

		return $layout_data;
	}

	public function shortcode( $atts, $content = '' ) {
		$atts = shortcode_atts(
			array(
				// Logged defaults to `in` to avoid a situation where something
				// is unintentionally publicly visible.
				'logged' => 'in',
			),
			$atts,
			'toggle_visibility'
		);

		if (
			( $atts['logged'] == 'in' && ! is_user_logged_in() ) ||
			( $atts['logged'] == 'out' && is_user_logged_in() )
		) {
			$content = '';
		}

		return $content;
	}
}
