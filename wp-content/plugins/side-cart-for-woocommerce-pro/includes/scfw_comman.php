<?php

if (!defined('ABSPATH'))
  exit;

if (!class_exists('SCFW_comman')) {

    class SCFW_comman {

        protected static $instance;

        public static function instance() {
            if (!isset(self::$instance)) {
                self::$instance = new self();
                self::$instance->init();
            }
             return self::$instance;
        }

        function init() {
            global $scfw_comman;
            $optionget = array(
              
                'wfc_footer_button_row' => 'three',
                'wfc_basket_position' => 'bottom',
                'wfc_cart_option' => 'yes',
                'wfc_checkout_option' => 'yes',
                'wfc_conshipping_option' => 'yes',
                'wfc_show_cart_icn' => 'yes',
                'wfc_product_cnt' => 'yes',
                'wfc_loop_img' => 'yes',
                'wfc_loop_product_name' => 'yes',
                'wfc_loop_product_price' => 'yes',
                'wfc_loop_total' => 'yes',
                'wfc_loop_variation' => 'yes',
                'wfc_loop_link' => 'yes',
                'wfc_loop_delete' => 'yes',
                'wfc_checkout_option'=>'yes',
                'wfc_conshipping_option'=>'yes',
                'wfc_coupon_field_mobile'=>'yes',
                'wfc_prodslider_desktop'=>'yes',
                'wfc_total_all_option'=>'yes',
                'wfc_prodslider_mobile'=>'yes',
                'wfc_mobile'=>'yes',
                'wfc_product_cnt'=>'yes',
                'wfc_qty_box' => 'yes', 
                'wfc_show_cart_icn'=>'yes',
                'wfc_total_tax_option'=>'yes',
                'wfc_cart_option'=>'yes',
                'wfc_cart_check_page'=>'yes',
                'wfc_total_shipping_option'=>'yes',
                'wfc_discount_show_cart' => 'yes',
                'wfc_auto_open' => 'yes',
                'wfc_ajax_cart' => 'yes',
                'wfc_header_cart_icon' => 'yes',
                'wfc_header_close_icon' => 'yes',
                'wfc_qty_text' => 'QTY', 
                'wfc_product_ft_clr' => '#000000', 
                'wfc_product_ft_size' => '16', 
                'wfc_sidecart_width' => '350', 
                'wfc_head_ft_size' => '20', 
                'wfc_head_ft_clr' => '#000000', 
                'wfc_emptycart_link' => '#',
                'wfc_conshipping_link'=>'#',
                'wfc_on_pages'=>'',
                'wfc_freeshiping_then_herder_txt' =>'Congrats! You get free shipping.',
                'wfc_discount_text_trans'=>'Discount',
                'wfc_apply_cpn_ft_clr'=>'#000000',
                'wfc_cart_empty_hide_show'=>'show',
                'wfc_applybtn_cpn_ft_clr'=>'#ffffff',
                'wfc_product_cnt_type' => 'sum_qty',
                'wfc_applybtn_cpn_bg_clr'=>'#000000',
                'wfc_sld_product_ft_size'=>'18',
                'wfc_sld_product_ft_clr'=>'#000000',
                'wfc_ft_btn_clr'=>'#766f6f',
                'wfc_ft_btn_txt_clr'=>'#ffffff',
                'wfc_ft_btn_mrgin'=>'5',
                'wfc_basket_icn_size'=>'60',
                'wfc_slider_atcbtn_txt'=>'Add to cart',
                'wfc_cart_txt'=>'View Cart',
                'wfc_apply_total_text'=>'Total',
                'wfc_shipping_text_trans'=>'Shipping',
                'wfc_apply_taxt_testx'=>'Tax',
                'wfc_conshipping_txt'=>'Continue Shopping',
                'wfc_checkout_txt'=>'Checkout',
                'wfc_subtotal_txt'=>'Subtotal',
                'wfc_slider_vwoptbtn_txt'=>'View Options',
                'wfc_coupon_applied_suc_txt'=>'Coupon Applied Successfully.',
                'wfc_coupon_removed_suc_txt'=>'Coupon Removed Successfully',
                'wfc_invalid_coupon_txt'=>'Invalid code entered. Please try again.',
                'wfc_head_title'=>'Your Cart',
                'wfc_cart_is_empty'=>'Cart is empty',
                'wfc_apply_cpn_plchldr_txt'=>'Enter your promo code',
                'wfc_apply_cpn_apbtn_txt'=>'APPLY',
                'wfc_cpnfield_empty_txt'=>'Coupon Code Field is Empty!',
                'wfc_apply_cpn_txt'=>'Apply Coupon',
                'wfc_cpn_alapplied_txt'=>'Coupon Code Already Applied.',
                'wfc_basket_bg_clr'=>'#cccccc',
                'wfc_cnt_bg_clr'=>'#000000',
                'wfc_cnt_txt_clr'=>'#ffffff',
                'wfc_cnt_txt_size'=>'15',
                'wfc_ship_ft_size'=>'16',
                'wfc_ship_ft_clr'=>'#000000',
                'wfc_ship_txt'=>'To find out your shipping cost , Please proceed to checkout.',
                'wfc_cart_ordering' => 'asc',
                'wfc_cart_show_hide'=>'wfc_cart_show',
                'wfc_basket_off_vertical' => '0',
                'wfc_basket_off_horizontal' => '0',
                'wfc_cart_height' => 'full',
                'wfc_orgcheckout_link'=>'',
                'wfc_orgcart_link'=>'',
                'wfc_cart_open_from'=>'right',
                'wfc_basket_count_position'=>'top-left',
                'ocwqv_scfw_icon'=>'ocwqv_qscfw_icon',
                'wfc_basket_clr'=>'#000000',
                'oscfw_delete_icon'=>'ocwqv_trash',
                'oscfw_shop_icon'=>'shop_icon_1',
                'wfc_delect_icon_clr'=>'#000000',
                'wfc_header_cart_icon_clr'=>'#000000',
                'oscfw_close_icon'=>'close_icon',
                'wfc_header_close_icon_clr'=>'#000000',
                'wfc_basket_shape'=>'square',
                'wfc_freeshiping_herder'=>'yes',
                'wfc_trigger_class'=>'',
                'wfc_freeshiping_herder_txt'=>'You are {shipping_total} away from free shipping.',
                'wfc_header_shipping_text_color'=>'#000000',
                'scfw_coupon_icon'=>'coupon',
                'wfc_apply_cpn_icon_clr'=>'#000000',
                'wfc_ship_txt' => 'To find out your shipping cost , Please proceed to checkout.'
            );
           
            foreach ($optionget as $key_optionget => $value_optionget) {
               $scfw_comman[$key_optionget] = get_option( $key_optionget,$value_optionget );
            }
        }
    }
    SCFW_comman::instance();
}