<?php 
add_theme_support( 'woocommerce' );

function intensity_scripts_styles(){
    wp_enqueue_style('slick', get_template_directory_uri() . '/assets/slick/slick.css', array(), null, 'all');
    wp_enqueue_style('slick-theme', get_template_directory_uri() . '/assets/slick/slick-theme.css', array(), null, 'all');
    wp_enqueue_script('slick', get_template_directory_uri() . '/assets/slick/slick.js', array(), null, 'true' );


    wp_enqueue_style('intensity', get_template_directory_uri() . '/assets/intensity.css', array(), null, 'all');
    wp_enqueue_script('intensity', get_template_directory_uri() . '/assets/intensity.js', array(), null, 'true' );
}
add_action('wp_enqueue_scripts', 'intensity_scripts_styles');

function intensity_admin_style() {
    wp_enqueue_style( 'admin-styles', get_stylesheet_directory_uri() . '/assets/backend.css' );
  }
add_action( 'admin_enqueue_scripts', 'intensity_admin_style' );

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
 /*
 * WooCommerce Product Reviews Shortcode
 */

add_filter( 'woocommerce_product_get_rating_html',function ( $html, $rating, $count){
	$label = sprintf( __( 'Rated %s out of 5', 'woocommerce' ), $rating );
	$html  ='<div class="star-rating" role="img" data-rating="' . esc_attr( $rating ) . '">' . wc_get_star_rating_html( $rating, $count ) . '</div>';
	return $html;
}, 9999, 3 );



function intensity_product_reviews_shortcode( $atts ) {
    if ( empty( $atts ) ) return '';
    if ( ! isset( $atts['id'] ) ) return '';
       
    $comments = get_comments( 'post_id=' . $atts['id'] );
    $product = wc_get_product( $atts['id'] );
    $average = round($product->average_rating, 0);

    print_r($get_comment_meta);

    if ( ! $comments ) return '';
    $html .= '<div id="reviews" class="slick-reviews">';
    $count = 1;

    foreach ( $comments as $comment ) {
        if($comment->comment_approved == "1"){

            $d = "d.m.Y";
            $comment_date = get_comment_date( $d, $comment->comment_ID );            
            
            $rating = intval( get_comment_meta( $comment->comment_ID, 'rating', true ) );
            $html .= '<div class="review" data-count="' . $count++ .  '">';
            // $html .= get_avatar( $comment, '120' );
            $html .= '<div class="woo-review--author">' . $comment->comment_author . '</div>';            
            if ( $rating ) $html .= wc_get_rating_html( $rating );
            $html .= '<div class="comment-date">' . $comment_date . '</div>'; 
            $html .= '<div class="woo-review--description">' . $comment->comment_content . '</div>';
            $html .= '</div>';
        }

    }
    $html .= '</div><div class="slick-count"><div class="count--current"></div><div class="count--all"></div></div>';
    return $html;
}
add_shortcode( 'product_reviews', 'intensity_product_reviews_shortcode' );

/* Enable Paypal Stanard */
add_filter( 'woocommerce_should_load_paypal_standard', '__return_true' );

/* Translate sidecart strings */
function translate_sidecard_strings( $translated_text, $text, $domain ) {
	switch ( $translated_text ) {
		case 'Have a Promo Code?' :
			$translated_text = __( 'Gutscheincode vorhanden?', 'side-cart-woocommerce' );
			break;
		case 'Add' :
			$translated_text = __( 'Hinzuf&uuml;gen', 'side-cart-woocommerce' );
			break;
		case 'Apply Coupon' :
			$translated_text = __( 'Coupon anwenden', 'side-cart-woocommerce' );
			break;
        case 'Enter Promo Code' :
            $translated_text = __( 'Code eingeben', 'side-cart-woocommerce' );
            break;
        case 'Submit' :
            $translated_text = __( 'Absenden', 'side-cart-woocommerce' );
            break;
        case 'Total' :
            $translated_text = __( 'Gesamtsumme', 'side-cart-woocommerce' );
            break;
	}
	return $translated_text;
}
add_filter( 'gettext', 'translate_sidecard_strings', 20, 3 );

/* Add custom siteorigin widgets */
function itg_widgets_collection( $folders ) {
    $folders[] = '/www/htdocs/w009570d/KUNDEN/intensitythegame/htdocs/wp-content/themes/intensity/widgets/itg-widgets/';
    return $folders;
}
add_filter( 'siteorigin_widgets_widget_folders', 'itg_widgets_collection' );