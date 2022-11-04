<?php
	$img_id =					$instance['image'];
	$overlay_img_id =	$instance['overlay_image'];
	$overlay_size =		wp_kses_post($instance['overlay_size']);
	$page_builder =		wp_kses_post($instance['page_builder']);

?>

<?php if ($show_boxtitle == true){
	echo '<h3>';
		if ($boxtitle != ''){ echo $boxtitle; } else { echo '&nbsp;'; }
 	echo '</h3>';
} ?>
<div class="box">
	<div class="image"><?php echo wp_get_attachment_image( $img_id,'custom-service-cards-home'); ?>
		<?php if ($overlay_img_id != ''){ echo '<div class="overlay-image" style="width:' . $overlay_size . ';height:auto">' . wp_get_attachment_image( $overlay_img_id,'full') . '</div>'; } ?>
	</div>
	<div class="lv-modal hidden">
	<?php
	if( function_exists( 'siteorigin_panels_render' ) ) {
    $content_builder_id = substr( md5( json_encode( $content ) ), 0, 8 );
    echo siteorigin_panels_render( 'w'.$content_builder_id, true, $instance['page_builder'] );
  }
	?>
</div>
</div>