<?php

defined( 'ABSPATH' ) || exit;

?>

<h4><?php _e( 'To add a GetResponse form to your site:', 'Gr_Integration' ); ?></h4>
<ol>
	<li> In the <a href="<?php echo esc_url(admin_url( 'widgets.php' ))?>">
            <strong><?php __( 'Widgets', 'Gr_Integration' ) ?></strong>
        </a> tab, locate the <strong>GetResponse Form Widget</strong>.
		<div class="gr-tooltip2">
		  <span class="gr-tooltip2-text">
			<img src="<?php echo esc_url(gr()->asset_path . '/img/getresponse-web-form-widget.png') ?>" alt="GetResponse Web Form Widget" />
		  </span>
		</div>
	</li>
	<li><?php _e( 'Drag it to where you want it to appear in the sidebar, footer, or header. (Or click it, select where you want it to appear, and click the <strong>Add Widget</strong> button.)', 'Gr_Integration' ); ?>
		<div class="gr-tooltip2">
		  <span class="gr-tooltip2-text">
			<img src="<?php echo esc_url(gr()->asset_path . '/img/getresponse-add-widget.png') ?>" alt="GetResponse Add Widget" />
		  </span>
		</div>
	</li>
	<li><?php _e( 'Select a form and specify its layout and placement (<strong>Note:</strong> The WordPress layout is available only for legacy web forms.)', 'Gr_Integration' ); ?></li>
    <li><?php _e( 'Click <strong>Save</strong>.', 'Gr_Integration' ); ?></li>
</ol>
