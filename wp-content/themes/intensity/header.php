<!DOCTYPE html>

<html class="no-js" <?php language_attributes(); ?> id="ewp">

	<head>
  <title><?php wp_title(" | ", "echo", "right"); ?><?php bloginfo("name"); ?></title>
	 <meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="profile" href="https://gmpg.org/xfn/11">
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;1,500&display=swap" rel="stylesheet">
		<?php wp_head(); ?>
	</head>

	<body <?php body_class(); ?>>
		<header class="site-header">
			<div class="container flex just-between align-center">
				<div class="header-testimonial flex">
					<span class="stars">&starf;&starf;&starf;&starf;&starf;</span>
					<div>„Ein Spiel, das wirklich in die Tiefe geht.“<br><small>- Melanie -</small></div>
				</div>
				<div class="site-logo"><a href="/"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/intensity-logo.svg" width="140" height="74" /></a></div>
				<?php wp_nav_menu( array( 'theme_location' => 'primary_menu' ) ); ?>
			</div>
		</header>