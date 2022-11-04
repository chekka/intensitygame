<?php
	$btn_lnk_text =				wp_kses_post($instance['button_link_text']);
	$btn_lnk_url = 				wp_kses_post($instance['button_link_url']);
	$btn_lnk_type = 			wp_kses_post($instance['button_link_type']);
	$btn_lnk_big = 				wp_kses_post($instance['button_link_big']);
	$btn_bg_color =				wp_kses_post($instance['button_bg_color']);
	$btn_text_color =			wp_kses_post($instance['button_text_color']);
	$btn_outline_color =	wp_kses_post($instance['button_outline_color']);
	$btn_lnk_arrow = 			wp_kses_post($instance['button_link_arrow']);
	$btn_lnk_alignment =	wp_kses_post($instance['button_link_alignment']);
	$btn_lnk_shadow = 		wp_kses_post($instance['button_link_shadow']);
?>
<div class="so-widget-lv-button d-flex">
	<a href="<?php echo $btn_lnk_url ?>" class="<?php
		echo $btn_lnk_type;
		if($btn_lnk_shadow != ''){ echo ' shadowed'; }
		if($btn_bg_color != ''){ echo ' ' . $btn_bg_color; }
		if($btn_text_color != ''){ echo ' ' . $btn_text_color; }
		if($btn_outline_color != ''){ echo ' ' . $btn_outline_color; }
		if($btn_lnk_alignment != ''){ echo ' ' . $btn_lnk_alignment; }
		if($btn_lnk_arrow == true){ echo ' text-arrow'; } ?>">
		<span class="button-link-text"><?php echo $btn_lnk_text; ?></span>
	</a>
</div>