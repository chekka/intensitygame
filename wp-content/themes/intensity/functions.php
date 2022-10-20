<?php 
function intensity_scripts_styles(){
    wp_enqueue_style('intensity', get_template_directory_uri() . '/assets/intensity.css', array(), null, 'all');
    wp_enqueue_script('intensity', get_template_directory_uri() . '/assets/intensity.js', array(), null, 'true' );
}
add_action('wp_enqueue_scripts', 'intensity_scripts_styles');

function intensity_widgets_init() {    
    register_sidebar(array(
        'name'          => __( 'Footer', 'intensity' ),
        'id'            => 'footer',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<div class="widget-title">',
        'after_title'   => '</div>',
    ));    
}
add_action('widgets_init', 'intensity_widgets_init');

function intensity_register_nav_menu(){
        register_nav_menus( array(
            'primary_menu' => __( 'Main Menu', 'intensity' ),
            'footer_left'  => __( 'Footer Left', 'intensity' ),
            'footer_right'  => __( 'Footer Right', 'intensity' ),
        ) );
    }
add_action( 'after_setup_theme', 'intensity_register_nav_menu', 0 );

function register_widgets() {
    register_sidebar( array(
         'name' => 'footer-center',
         'id' => 'footer-center',
         'before_widget' => '<div id="footer-center">',
         'after_widget' => '</div>',
         'before_title' => '',
         'after_title' => '',
     ) );
     register_sidebar( array(
         'name' => 'footer-right',
         'id' => 'footer-right',
         'before_widget' => '<div id="footer-right">',
         'after_widget' => '</div>',
         'before_title' => '',
         'after_title' => '',
     ) );
 }
 add_action( 'widgets_init', 'register_widgets' ); 

 /* WOOCOMMERCE */
 // add_filter( 'woocommerce_cart_item_thumbnail', '__return_false' );