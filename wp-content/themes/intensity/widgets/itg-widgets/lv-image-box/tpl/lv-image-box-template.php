<?php
	$box_color = 			wp_kses_post($instance['box_color']);
	$shadow =					wp_kses_post($instance['box_shadow']);
	$img_bottom =			wp_kses_post($instance['img_bottom']);
	$img_id =					$instance['image'];
  $popular =				wp_kses_post($instance['popular']);
	$show_boxtitle =	wp_kses_post($instance['show_boxtitle']);
	$boxtitle = 			wp_kses_post($instance['boxtitle']);
	$title = 					wp_kses_post($instance['title']);
	$text_small = 		wp_kses_post($instance['text_small']);
	$editor = 				wp_kses_post($instance['tinymce_editor']);
	$btn_text = 			wp_kses_post($instance['btn_section']['button_text']);
	$btn_ziel	= 			sow_esc_url($instance['btn_section']['button_ziel']);
	$btn_color =	 		wp_kses_post($instance['btn_section']['button_color']);
	$btn_type	= 			wp_kses_post($instance['btn_section']['button_type']);
	$btn_arrow	= 		wp_kses_post($instance['btn_section']['button_arrow']);
	$btn_position	= 	' '.wp_kses_post($instance['btn_section']['button_position']);
	$btn_text_2 = 		wp_kses_post($instance['btn_section_2']['button_text_2']);
	$btn_ziel_2	= 		sow_esc_url($instance['btn_section_2']['button_ziel_2']);
	$btn_color_2	= 	wp_kses_post($instance['btn_section_2']['button_color_2']);
	$btn_type_2	= 		wp_kses_post($instance['btn_section_2']['button_type_2']);
?>

<?php if ($show_boxtitle == true){
	echo '<h3>';
		if ($boxtitle != ''){ echo $boxtitle; } else { echo '&nbsp;'; }
 	echo '</h3>';
} ?>
<div class="box <?php echo $box_color;
	if($shadow != 'true') { echo ' '.$shadow; }
	if($img_bottom == true){ echo ' d-flex flex-column image-bottom'; }
	if($text_small == true){ echo ' text-small'; } ?>">
	<?php if ($popular != ''){ echo '<div class="popular">' .$popular . '</div>'; } ?>
	<?php if ($img_id != ''){ echo '<div class="card-image">' . wp_get_attachment_image( $img_id,'custom-service-cards-home') . '</div>'; } ?>
	<div class="card-body">
		<?php if ($title != ''){ echo '<p class="lv-widget-title">' .$title . '</p>'; } ?>
		<?php echo $editor; ?>
		<?php if($btn_ziel != ""){ ?>
		<div class="lvw-callout__actions<?php echo $btn_position; ?>">
			<a href="<?php echo $btn_ziel; ?>" class="<?php if($btn_type == 'text-arrow'){ echo 'text-arrow'; } else { echo 'lvw-btn lvw-btn-primary'; } ?>" btn-color="<?php echo $btn_color; ?>" btn-type="<?php echo $btn_type; ?>" <?php if($btn_text_2 != ''){ echo 'btn-first="true"'; } ?>>
				<?php echo $btn_text; ?>
				<?php if($btn_arrow == true){ echo '<i class="lv-icon-arrow-right"></i>'; } ?>
			</a>
		</div>
		<?php } ?>
		<?php if($btn_ziel_2 != ""){ ?>
		<div class="lvw-callout__actions">
			<a href="<?php echo $btn_ziel_2; ?>" class="<?php if($btn_type == 'text-arrow'){ echo 'text-arrow'; } else { echo 'lvw-btn lvw-btn-primary'; } ?>" btn-color="<?php echo $btn_color_2; ?>" btn-type="<?php echo $btn_type_2; ?>"><?php echo $btn_text_2; ?></a>
		</div>
		<?php } ?>
	</div>
</div>