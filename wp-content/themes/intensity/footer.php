			<footer class="site-footer">
				<div class="container flex just-between">
					<div class="footer-nav-left"><?php wp_nav_menu( array( 'theme_location' => 'footer_left' ) ); ?></div>
					<div class="footer-nav-right"><?php wp_nav_menu( array( 'theme_location' => 'footer_right' ) ); ?></div>
					<div class="footer-center"><?php dynamic_sidebar( 'footer-center' ); ?></div>
					<div class="footer-right"><?php dynamic_sidebar( 'footer-right' ); ?></div>
				</div>
			</footer>

		<?php wp_footer(); ?>

	</body>
</html>