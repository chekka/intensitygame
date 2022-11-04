<?php
	$header_width = 	" ".wp_kses_post($instance['header_width']);
  $header_color = 	wp_kses_post($instance['header_color']);
	$orientation = 		" ".wp_kses_post($instance['orientation']);
	$img_dimensions = " ".wp_kses_post($instance['image_dimensions']);
	$img_fullwidth =  wp_kses_post($instance['image_fullwidth']);
	$img_id =					$instance['image'];
	$subtitle = 			wp_kses_post($instance['subtitle']);
	$title = 					wp_kses_post($instance['title']);
	$editor = 				wp_kses_post($instance['tinymce_editor']);
    $stoerer = wp_kses_post($instance['stoerer']);
    $stoerer_title = wp_kses_post($instance['stoerer_title']);
    $stoerer_tinymce_editor = wp_kses_post($instance['stoerer_tinymce_editor']);
?>

<div class="so-header<?php echo $header_width; ?><?php echo $orientation; ?><?php echo $img_dimensions; ?><?php echo ' bg-'.$header_color; ?>">
  <div class="lvw-shell">
      <?php
        if( $img_id ) {
            $col_md_6 = 'col-md-6 col-lg-6';
        }
      ?>
    <div class="col-12 <?php echo $col_md_6; ?> lvw-intro-content">
		<?php if($subtitle != ''){echo '<p class="lvw-intro__subtitle">' . $subtitle . '</p>'; } ?>
		<?php if($title != ''){ echo '<h1 class="lvw-intro__title">' . $title . '</h1>'; } ?>
		<?php if($editor != ''){ echo '<div class="editor">' . $editor . '</div>'; } ?>
		</div>
      <?php if( $img_id ) { ?>
		<div class="col-12 <?php echo $col_md_6; ?> lvw-intro-image<?php if($img_fullwidth == true){ echo ' fullwidth'; } ?>">
			<?php if ($img_id != ''){
				$img_size = "custom-microsite-header-" . str_replace(' ', '', $img_dimensions);
				echo wp_get_attachment_image( $img_id, $img_size );
			} ?>
		</div>
      <?php } ?>
	</div>

    <?php if( $stoerer ) { ?>
        <div class="flying_next_post candy">
            <img src="<?php echo get_template_directory_uri(); ?>/resources/images/close.svg" alt="schließen" class="close" height="37" width="37">
            <div>
                <?php if( $stoerer_title ) { ?>
                    <h2><?php echo $stoerer_title; ?></h2>
                <?php } ?>

                <?php if( $stoerer_tinymce_editor ) { ?>
                    <div class="row mr-2 ml-2">
                        <?php echo $stoerer_tinymce_editor; ?>
                    </div>
                <?php } ?>
            </div>
        </div>
    <?php } ?>

</div>