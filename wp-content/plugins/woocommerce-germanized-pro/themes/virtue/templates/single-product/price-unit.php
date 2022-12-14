<?php
/**
 * Single Product Price per Unit
 *
 * @author      Vendidero
 * @package     WooCommerceGermanized/Templates
 * @version     1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $product;
?>

<?php if ( wc_gzd_get_product( $product )->has_unit() ) : ?>
	<p class="price price-unit smaller headerfont"><?php echo wp_kses_post( wc_gzd_get_product( $product )->get_unit_price_html() ); ?></p>
<?php endif; ?>
