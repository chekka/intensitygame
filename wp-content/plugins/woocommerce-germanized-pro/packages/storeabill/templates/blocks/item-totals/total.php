<?php
/**
 * @version 1.1.0
 */
defined( 'ABSPATH' ) || exit;

/**
 * @var \Vendidero\StoreaBill\Document\Document $document
 */
global $document;
?>

<tr class="<?php sab_print_html_classes( $classes ); ?>" style="<?php sab_print_styles( $styles ); ?>">
	<td class="sab-item-total-heading" style="<?php sab_print_styles( $styles ); ?>">
		<?php echo wp_kses_post( $formatted_label ); ?>
	</td>
	<td class="sab-item-total-data" style="<?php sab_print_styles( $styles ); ?>">
		<span class="sab-price"><?php echo wp_kses_post( $formatted_total ); ?></span>
	</td>
</tr>
