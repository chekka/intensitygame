<?php

namespace Vendidero\StoreaBill\WooCommerce;

use Vendidero\StoreaBill\Invoice\TaxableItem;
use Vendidero\StoreaBill\Interfaces\SyncableReferenceItem;
use Vendidero\StoreaBill\TaxRate;
use WC_Order_Item;

defined( 'ABSPATH' ) || exit;

/**
 * WooOrderItemTaxable class
 */
class OrderItemTaxable extends OrderItem {

	/**
	 * @var TaxRate[]
	 */
	protected $item_tax_rates = array();

	/**
	 * @param TaxableItem $document_item
	 */
	public function sync( &$document_item, $args = array() ) {

		$args = wp_parse_args(
			$args,
			array(
				'prices_include_tax' => false,
				'order_tax_rates'    => array(),
				'line_total'         => '',
				'line_subtotal'      => '',
			)
		);

		parent::sync( $document_item, $args );

		$this->sync_tax_rates( $document_item, $args['order_tax_rates'] );
	}

	/**
	 * @param TaxableItem $document_item
	 * @param TaxRate[]   $order_tax_rates
	 */
	protected function sync_tax_rates( &$document_item, $order_tax_rates ) {
		$rates      = array();
		$item_taxes = $this->get_order_item()->get_taxes();

		/**
		 * Order item taxes might include the tax rate key but still are empty (and thus considered as not used).
		 */
		$item_tax_rates = array_filter(
			$order_tax_rates,
			function( $tax_rate ) use ( $item_taxes ) {
				foreach ( $tax_rate->get_reference_ids() as $ref_id ) {
					if ( ( array_key_exists( $ref_id, $item_taxes['total'] ) && ! empty( $item_taxes['total'][ $ref_id ] ) ) || ( array_key_exists( 'subtotal', $item_taxes ) && array_key_exists( $ref_id, $item_taxes['subtotal'] ) && ! empty( $item_taxes['subtotal'][ $ref_id ] ) ) ) {
						return true;
					}

					/**
					 * Special case for items which do not include taxes (e.g. free shipping) but may include
					 * taxes during refunds, e.g. refunding a negative amount to add shipping costs on refunding items.
					 */
					if ( $order = $this->get_order_item()->get_order() ) {
						$refunded_tax_total = (float) $order->get_tax_refunded_for_item( $this->get_order_item()->get_id(), $ref_id, $this->get_order_item()->get_type() );

						if ( $refunded_tax_total < 0.0 ) {
							return true;
						}
					}
				}

				return false;
			}
		);

		if ( is_a( $document_item, '\Vendidero\StoreaBill\Interfaces\SplitTaxable' ) ) {
			// If a shipping order item contains more than one tax rate enable split tax calculation.
			if ( count( $item_tax_rates ) > 1 ) {
				$document_item->set_enable_split_tax( true );
			}
		}

		foreach ( $item_tax_rates as $tax_rate ) {
			if ( ! $document_item->contains_tax_rate( $tax_rate ) ) {
				$document_item->add_tax_rate( $tax_rate );
			}

			$rates[] = $tax_rate->get_merge_key();
		}

		// Remove unused tax rates
		foreach ( $document_item->get_tax_rates() as $tax_rate ) {
			if ( ! in_array( $tax_rate->get_merge_key(), $rates, true ) ) {
				$document_item->remove_tax_rate( $tax_rate->get_merge_key() );
			}
		}
	}
}
