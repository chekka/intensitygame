<?php
$shadow =					wp_kses_post($instance['box_shadow']);
$icon = 					wp_kses_post($instance['icon']);
$img_bottom =			wp_kses_post($instance['img_bottom']);
$img_id =					$instance['image'];
$title = 					wp_kses_post($instance['title']);
$title_small	=		wp_kses_post($instance['title_small']);
$editor = 				wp_kses_post($instance['tinymce_editor']);
?>

<div class="p-3 box d-flex flex-column flex-wrap<?php if($box_color != ''){ echo ' bg-'.$box_color; } else {echo ' bg-white'; } ?><?php if ($shadow != 'true') { echo ' '.$shadow; } ?>">
	<div class="outer d-flex flex-row align-items-center">
		<div class="icon mr-4">
			<?php if ($icon != '') {
				echo $icon;
			} ?>
			<?php if ($img_id != '') {
				echo '<div class="card-image">' . wp_get_attachment_image($img_id, 'custom-service-cards-home') . '</div>';
			} ?>
		</div>
		<div class="pr-1 title<?php if($title_small == true){ echo ' small'; } ?>"><?php echo $title; ?></div>
		<?php if($editor != '') { ?>
		<div class="trigger ml-auto">
			<svg version="1.1" id="Ebene_1" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="14px" viewBox="0 0 24 14" style="enable-background:new 0 0 24 14;" xml:space="preserve"><path style="fill:#54626D;" d="M23.8,1.4l-1.1-1.1c-0.3-0.3-0.7-0.3-0.9,0L12,10.1L2.2,0.3c-0.3-0.3-0.7-0.3-0.9,0L0.2,1.4c-0.3,0.3-0.3,0.7,0,0.9l11.3,11.3c0.3,0.3,0.7,0.3,0.9,0L23.8,2.3C24.1,2.1,24.1,1.7,23.8,1.4L23.8,1.4z"/></svg>
		</div>
		<?php } ?>
	</div>
	<?php if ($editor != '') { ?>
	<div class="card-body hidden hyphens <?php if($title_small == true){ echo ' text-small'; } ?>">
		<?php echo $editor; ?>
	</div>
	<?php } ?>
</div>