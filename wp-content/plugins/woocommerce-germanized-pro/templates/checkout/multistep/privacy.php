<?php
/**
 * The Template for displaying a privacy checkbox within the first step of the multistep checkout.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce-germanized-pro/checkout/multistep/privacy.php.
 *
 * HOWEVER, on occasion Germanized will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://vendidero.de/dokument/template-struktur-templates-im-theme-ueberschreiben
 * @package Germanized/Pro/Templates
 * @version 1.0.3
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
?>

<?php
/**
 * Terms and conditions hook used to inject content.
 */
do_action( 'woocommerce_gzdp_checkout_before_privacy_policy' );
?>
<p class="form-row legal data-privacy validate-required">
	<label for="gzdp-privacy-policy" class="woocommerce-form__label <?php echo esc_attr( ( 'yes' === get_option( 'woocommerce_gzdp_checkout_privacy_policy_checkbox' ) ? 'woocommerce-form__label-for-checkbox checkbox' : '' ) ); ?>">
		<?php if ( 'yes' === get_option( 'woocommerce_gzdp_checkout_privacy_policy_checkbox' ) ) : ?>
			<input type="checkbox" class="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox" name="gzdp_privacy_policy" id="gzdp-privacy-policy" />
		<?php endif; ?>
		<span class="woocommerce-gzdp-multistep-privacy-policy-checkbox-text"><?php echo wp_kses_post( wc_gzdp_get_privacy_policy_text() ); ?></span>
		<?php if ( 'yes' === get_option( 'woocommerce_gzdp_checkout_privacy_policy_checkbox' ) ) : ?>
			&nbsp;<abbr class="required" title="<?php echo esc_attr__( 'required', 'woocommerce-germanized-pro' ); ?>">*</abbr>
		<?php endif; ?>
	</label>
</p>
