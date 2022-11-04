<?php
	$icon =       	 siteorigin_widget_get_icon( $instance['icon'], $icon_styles );
	$img_id =				 $instance['image'];
	$icon_orientation = wp_kses_post($instance['icon_orientation']);
  $icon_position = wp_kses_post($instance['icon_position']);
	$shadow =			 	 wp_kses_post($instance['box_shadow']);
	$box_color = 		 wp_kses_post($instance['box_color']);
	$header_color =  wp_kses_post($instance['header_color']);
  $title =      	 wp_kses_post($instance['title']);
	$btn_text =   	 wp_kses_post($instance['section_btn']['button_text']);
	$btn_ziel	=   	 sow_esc_url($instance['section_btn']['button_ziel']);
	$vermittlerID	=  wp_kses_post($instance['section_btn']['button_vermittlerID']);
  $rand = rand(0, 100000);
  $vermittlerIDbutton = "vermittlerIDbutton" . $rand;
	$btn_type = 	 	 wp_kses_post($instance['section_btn']['button_type']);
	$btn_color = 	   wp_kses_post($instance['section_btn']['button_color']);
	$is_popup =      wp_kses_post($instance['section_popup']['popup_button']);
	$popup_content = wp_kses_post($instance['section_popup']['popup_content']);
	$editor = 		 	 wp_kses_post($instance['tinymce_editor']);
?>

<?php
if ( $btn_type == 'text-arrow'){
    $flex =  'justify-content-between align-items-center ';
    $margin = 'm-0';
} else {
    $margin_top = 'mt-auto pb-3';
}
?>

<div class="d-flex <?php echo $icon_orientation; ?> h-100 <?php
    echo $flex;
	if (($header_color == '') && ($box_color == '')){ echo ' lvw-callout'; }
	if($box_color != ''){ echo 'bg-'.$box_color; }
	if ($shadow != 'true') { echo ' '.$shadow; }
	if($is_popup == true){ echo ' popup '; }
	?>">
	<?php if ($img_id != ''){ ?>
	<div class="card-image<?php if($header_color != ''){ echo ' header-color '.$header_color.'-light'; } ?><?php echo ' '.$icon_position; ?>">
		<?php echo wp_get_attachment_image( $img_id,'full'); ?>
	</div>

	<?php } elseif ($icon != ''){ ?>
	<div class="card-icon">
		<?php echo $icon; ?>
	</div>
	<?php } ?>

    <?php if ($title != '' || $editor != ''){ ?>
        <div class="card-body pr-4">
            <?php if ($title != ''){ echo '<h3 class="lv-widget-title">' .$title . '</h3>'; } ?>
            <?php if ($editor != ''){ echo '<div class="editor hyphens">' . $editor . '</div>'; } ?>
        </div>
    <?php } ?>

	<?php if($btn_ziel != "" || $is_popup == true){ ?>
		<div class="lvw-callout__actions pr-4 text-right <?php echo $margin_top ?>">
			<a href="<?php if($is_popup == false){ echo $btn_ziel; } else { echo '#'; } ?>" class="<?php if($is_popup == true){ echo 'popup '; } ?><?php echo $btn_type; ?><?php echo $btn_color; ?> <?php if($vermittlerID){ echo $vermittlerIDbutton; }?>"><?php if($btn_text != ''){ echo $btn_text; } else { echo '&nbsp;'; } ?></a>
		</div>
	<?php } ?>
	<?php if($is_popup == true){ ?>
  <div class="popup-content hyphens">
    <?php echo $popup_content; ?>
	</div>
	<?php } ?>
</div>


<?php

if( $vermittlerID ) {
    require_once(get_template_directory() . "/includes/lvlogin.php");
    $data = isAuthenticated();
    $benutzerkennung = $data->benutzerkennung;

    $result = explode('_',$benutzerkennung);

    ?>
    <script>

        var encrypted=btoa(CryptoJS.AES.encrypt(("<?php echo $result[0] ?>").trim(), "Mpowt23K7c"));
        var link = jQuery(".<?php echo $vermittlerIDbutton ?>").attr('href');
        jQuery(".<?php echo $vermittlerIDbutton ?>").prop('href', link + encrypted);

    </script>
    <?php
}
?>