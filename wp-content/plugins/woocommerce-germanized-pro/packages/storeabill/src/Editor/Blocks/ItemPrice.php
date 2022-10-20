<?php
/**
 * All products block.
 *
 * @package WooCommerce\Blocks
 */

namespace Vendidero\StoreaBill\Editor\Blocks;

use Vendidero\StoreaBill\Document\Document;
use Vendidero\StoreaBill\Document\Item;
use Vendidero\StoreaBill\Package;

defined( 'ABSPATH' ) || exit;

/**
 * AllProducts class.
 */
class ItemPrice extends ItemTableColumnBlock {

	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'item-price';

	public function get_attributes() {
		$attributes = parent::get_attributes();

		$attributes['discountTotalType'] = array(
			'type'    => 'string',
			'enum'    => array( 'before_discounts', 'after_discounts' ),
			'default' => 'before_discounts',
		);

		$attributes['showPricesIncludingTax'] = $this->get_schema_boolean( true );

		return $attributes;
	}

	/**
	 * Append frontend scripts when rendering the Product Categories List block.
	 *
	 * @param array  $attributes Block attributes. Default empty array.
	 * @param string $content    Block content. Default empty string.
	 * @return string Rendered block type output.
	 */
	public function render( $attributes = array(), $content = '' ) {
		self::maybe_setup_document();
		self::maybe_setup_document_item();

		if ( ! isset( $GLOBALS['document_item'] ) ) {
			return $content;
		}

		/**
		 * @var Item $document_item
		 */
		$document_item = $GLOBALS['document_item'];
		/**
		 * @var Document $document
		 */
		$document = $GLOBALS['document'];

		$attributes = $this->parse_attributes( $attributes );

		if ( is_a( $document_item, '\Vendidero\StoreaBill\Interfaces\Priceable' ) ) {
			$getter = $this->get_item_total_getter( 'price', $attributes['showPricesIncludingTax'], $attributes['discountTotalType'] );
			$output = '';

			if ( is_callable( array( $document_item, $getter ) ) ) {
				$output = $document_item->$getter();

				if ( is_callable( array( $document, 'get_formatted_price' ) ) ) {
					$output = $document->get_formatted_price( $output );
				} else {
					$output = sab_format_price( $output );
				}
			}

			return $this->wrap( $this->replace_placeholder( $content, $output ), $attributes );
		}

		return $content;
	}
}
