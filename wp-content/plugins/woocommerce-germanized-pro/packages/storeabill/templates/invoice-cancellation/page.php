<?php
/**
 * The Template for displaying all single cancellations
 *
 * This template can be overridden by copying it to yourtheme/storeabill/single-invoice.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://docs.woocommerce.com/document/template-structure/
 * @author      StoreaBill
 * @package     StoreaBill/Templates
 * @version     1.0.0
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * @var \Vendidero\StoreaBill\Invoice\Cancellation
 */
global $invoice_cancellation;
?>
	<!-- sab:wrapper_before -->
	<!doctype html>
	<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<?php sab_document_head(); ?>
	</head>
	<body <?php sab_document_body_class(); ?>>
	<!-- /sab:wrapper_before -->

	<!-- sab:header -->
	<?php sab_get_template( 'invoice-cancellation/header.php' ); ?>
	<!-- /sab:header -->

	<!-- sab:header_first_page -->
	<?php sab_get_template( 'invoice-cancellation/header-first-page.php' ); ?>
	<!-- /sab:header_first_page -->

	<!-- sab:content -->
	<?php
	/**
	 * storeabill_before_main_content hook.
	 *
	 * @hooked storeabill_output_content_wrapper - 10 (outputs opening divs for the content)
	 */
	do_action( 'storeabill_before_invoice_cancellation_content', $invoice_cancellation->get_id() );
	?>

	<?php sab_get_template( 'invoice-cancellation/content.php' ); ?>

	<?php
	/**
	 * storeabill_after_main_content hook.
	 *
	 * @hooked storeabill_output_content_wrapper_end - 10 (outputs closing divs for the content)
	 */
	do_action( 'storeabill_after_invoice_cancellation_content', $invoice_cancellation->get_id() );
	?>
	<!-- /sab:content -->

	<!-- sab:footer -->
	<?php sab_get_template( 'invoice-cancellation/footer.php' ); ?>
	<!-- /sab:footer -->

	<!-- sab:footer_first_page -->
	<?php sab_get_template( 'invoice-cancellation/footer-first-page.php' ); ?>
	<!-- /sab:footer_first_page -->

	<!-- sab:wrapper_after -->
	</body>
	</html>
	<!-- /sab:wrapper_after -->
<?php
/* Omit closing PHP tag at the end of PHP files to avoid "headers already sent" issues. */
