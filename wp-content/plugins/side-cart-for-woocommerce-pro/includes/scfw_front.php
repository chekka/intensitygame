<?php

if (!defined('ABSPATH'))
  exit;

if (!class_exists('SCFW_front')) {

    class SCFW_front {

        protected static $instance;

        public static function instance() {
            if (!isset(self::$instance)) {
                self::$instance = new self();
                self::$instance->init();
            }
             return self::$instance;
        }

        function init() {
            add_action('wp_head', array( $this, 'SCFW_craete_cart' ));
            add_filter( 'woocommerce_add_to_cart_fragments', array( $this, 'SCFW_cart_count_fragments' ), 10, 1 );
            add_action( 'wp_ajax_change_qty', array( $this, 'SCFW_change_qty_cust') );
            add_action( 'wp_ajax_nopriv_change_qty', array( $this, 'SCFW_change_qty_cust') );
            add_action( 'wp_ajax_product_remove', array( $this, 'SCFW_ajax_product_remove') );
            add_action( 'wp_ajax_nopriv_product_remove', array( $this, 'SCFW_ajax_product_remove') );
            add_action( 'wp_ajax_coupon_ajax_call', array( $this, 'SCFW_coupon_ajax_call_func') );
            add_action( 'wp_ajax_nopriv_coupon_ajax_call', array( $this, 'SCFW_coupon_ajax_call_func') );
            add_action( 'wp_ajax_remove_applied_coupon_ajax_call', array( $this, 'SCFW_remove_applied_coupon_ajax_call_func') );
            add_action( 'wp_ajax_nopriv_remove_applied_coupon_ajax_call', array( $this, 'SCFW_remove_applied_coupon_ajax_call_func') );
            add_action( 'wp_footer', array($this, 'SCFW_single_added_to_cart_event'));
            add_action( 'wp_ajax_wfc_prod_slider_ajax_atc', array( $this, 'SCFW_prod_slider_ajax_atc') );
            add_action( 'wp_ajax_nopriv_wfc_prod_slider_ajax_atc', array( $this, 'SCFW_prod_slider_ajax_atc') );
            add_action( 'wp_ajax_wfc_get_refresh_fragments', array( $this, 'SCFW_get_refreshed_fragments' ) );
            add_action( 'wp_ajax_nopriv_wfc_get_refresh_fragments', array( $this, 'SCFW_get_refreshed_fragments' ) );
        }
        

        function SCFW_get_refreshed_fragments(){
            WC_AJAX::get_refreshed_fragments();
        }
        

        function SCFW_cart_create() {

            WC()->cart->calculate_totals();

            WC()->cart->maybe_set_cart_cookies();

            global $woocommerce,$scfw_comman, $ocwqv_qscfw_icon;

            $wfc_sidecart_width = $scfw_comman['wfc_sidecart_width'].'px';

            ?>
            <div class="wfc_container" >
                <div class="wfc_header">
                    <div class="top_wfc_herder">
                        <?php
                        if($scfw_comman['wfc_header_cart_icon']=='yes'){
                        ?>
                        <span class="wfc_cart_icon">

                            <?php
                            if($scfw_comman['oscfw_shop_icon'] == "shop_icon_2"){
                                echo  $ocwqv_qscfw_icon['shop_icon_2'];
                            }elseif($scfw_comman['oscfw_shop_icon'] == "shop_icon_3"){
                                echo  $ocwqv_qscfw_icon['shop_icon_3'];
                            }elseif($scfw_comman['oscfw_shop_icon'] == "shop_icon_4"){
                                echo  $ocwqv_qscfw_icon['shop_icon_4'];
                            }elseif($scfw_comman['oscfw_shop_icon'] == "shop_icon_5"){
                                echo  $ocwqv_qscfw_icon['shop_icon_5'];
                            }elseif($scfw_comman['oscfw_shop_icon'] == "shop_icon_6"){
                                echo  $ocwqv_qscfw_icon['shop_icon_6'];
                            }else{
                                 echo  $ocwqv_qscfw_icon['shop_icon_1'];
                            }
                            ?>
                        </span>
                        <?php
                        }
                        ?>
                        <h3 class="wfc_header_title" ><?php echo $scfw_comman['wfc_head_title']; ?></h3>
                        <?php
                        if($scfw_comman['wfc_header_close_icon']=='yes'){
                        ?>
                        <span class="wfc_close_cart">
                           <?php
                            if($scfw_comman['oscfw_close_icon'] == "close_icon_1"){
                                echo  $ocwqv_qscfw_icon['close_icon_1'];
                            }elseif($scfw_comman['oscfw_close_icon'] == "close_icon_2"){
                                echo  $ocwqv_qscfw_icon['close_icon_2'];
                            }elseif($scfw_comman['oscfw_close_icon'] == "close_icon_3"){
                                echo  $ocwqv_qscfw_icon['close_icon_3'];
                            }elseif($scfw_comman['oscfw_close_icon'] == "close_icon_4"){
                                echo  $ocwqv_qscfw_icon['close_icon_4'];
                            }elseif($scfw_comman['oscfw_close_icon'] == "close_icon_5"){
                                echo  $ocwqv_qscfw_icon['close_icon_5'];
                            }else{
                                 echo  $ocwqv_qscfw_icon['close_icon'];
                            }
                            ?>
                        </span>
                        <?php
                        }
                        ?>
                    </div>
                    <?php if ($scfw_comman['wfc_freeshiping_herder'] == "yes" ){ ?>
                        <div class="top_wfc_bottom">
                            <?php 

                                $wg_prodrule_mtvtion_msg = $scfw_comman['wfc_freeshiping_herder_txt'];
                                // $WC_Cart =  WC()->cart->get_cart();;
                               
                                $shiiping_total  = WC()->cart->get_shipping_total();
                                  $wfc_subtotla       =  WC()->cart->get_subtotal();
                                // print_r($shiiping_total);
                               
                                // $finr_amount = floatval( preg_replace( '#[^\d.]#', '',$shiiping_total ) );

                                if($shiiping_total >  $wfc_subtotla){

                                     $wfc_shipping_total =  get_woocommerce_currency_symbol().number_format(($shiiping_total - $wfc_subtotla ), 2 );
                                       
                                       $wg_prodrule_mtvtion_msg_final = str_replace("{shipping_total}", $wfc_shipping_total, $wg_prodrule_mtvtion_msg);
                                }else{
                                     $wg_prodrule_mtvtion_msg_final =  $scfw_comman['wfc_freeshiping_then_herder_txt'];
                                }?>

                            <p style="color:<?php echo  $scfw_comman['wfc_header_shipping_text_color']; ?>"><?php echo $wg_prodrule_mtvtion_msg_final; ?></p>
                        </div>
                    <?php } ?>
                </div>
                <?php
                echo $this->SCFW_comman();
                    $showCouponField = 'true';
                    if(wp_is_mobile()) {
                        if($scfw_comman['wfc_coupon_field_mobile'] == 'no') {
                            $showCouponField = 'false';
                        }
                    }

                    if($showCouponField == 'true') {
                    ?>
                    <div class="wfc_trcpn">
                        <div class='wfc_total_tr'>
                            <div class='wfc_total_tr_inner'>
                                <div class='wfc_total_label'>
                                    <span><?php echo $scfw_comman['wfc_subtotal_txt']; ?></span>
                                </div>
                                <?php
                                $item_taxs = $woocommerce->cart->get_cart();
                                $wfc_get_totals = WC()->cart->get_totals();
                                $wfc_shipping_total = $woocommerce->cart->get_cart_shipping_total();
                                $wfc_cart_total = $wfc_get_totals['subtotal'];
                                $wfc_cart_discount = $wfc_get_totals['discount_total'];
                                // print_R($wfc_cart_total);
                                 //print_r($wfc_cart_discount);
                                $wfc_final_subtotal = $wfc_cart_total ;
                                ?>
                                    <div class='wfc_total_amount'>
                                        <span class='wfc_fragtotal'><?php echo get_woocommerce_currency_symbol().number_format($wfc_final_subtotal, 2); ?></span>
                                    </div>
                                <?php  if ($scfw_comman['wfc_total_shipping_option']== "yes" ) { ?>
                                    <div class='wfc_total_label'>
                                        <span><?php echo $scfw_comman['wfc_shipping_text_trans']; ?></span>
                                    </div>
                                    <div class='wfc_total_amountt'>
                                        <span class='wfc_fragtotall'><?php echo  $wfc_shipping_total; ?></span>
                                    </div>
                                <?php } ?>
                                <?php  if ($scfw_comman['wfc_total_tax_option'] == "yes" ) { ?>
                                    

                                    <div class="wfc_total_label">
                                         <span><?php echo $scfw_comman['wfc_apply_taxt_testx']; ?></span>
                                    </div>
                                    <div class="wfc_total_innwer">
                                        <span class='wfc_fragtotall'> 
                                            <?php $iteeem = WC()->cart->get_tax_totals();
                                              if(!empty($iteeem)){

                                                 foreach ($iteeem as $iteeem_tac ) {
                                              
                                                    if(!empty($iteeem_tac->amount)){

                                                        echo get_woocommerce_currency_symbol().number_format($iteeem_tac->amount, 2); 

                                                    }
                                                    
                                                } 
                                           
                                              }else{
                                             
                                                        echo get_woocommerce_currency_symbol().number_format(0, 2);
                                                    
                                              } ?>
                                            
                                                
                                        </span>
                                    </div> 
                                     
                                <?php } ?>
                                <?php  if ($scfw_comman['wfc_discount_show_cart']== "yes" ) { ?>
                                    <div class="wfc_oc_discount_oc">
                                    <?php
                                    if(($wfc_cart_discount) != 0) {   ?>
                                        <div class="wfc_discount_label">
                                             <span><?php echo $scfw_comman['wfc_discount_text_trans']; ?></span>
                                        </div>
                                        <div class="wfc_discount_innwer_full">
                                            <span class='wfc_discount_full'><?php echo get_woocommerce_currency_symbol().number_format( $wfc_cart_discount, 2); ?></span>
                                        </div>
                                    <?php }  ?>
                                 </div>
                                <?php } ?>
                                <?php  if ($scfw_comman['wfc_total_all_option'] == "yes" ) { ?>
                                    <div class="wfc_oc_total_oc">
                                        <div class="wfc_total_label">
                                             <span><?php echo $scfw_comman['wfc_apply_total_text']; ?></span>
                                        </div>
                                        <div class="wfc_total_innwer_full">
                                            <span class='wfc_fragtotall_full'><?php echo get_woocommerce_currency_symbol().number_format(WC()->cart->total, 2); ?></span>
                                        </div>
                                    </div>
                                <?php } ?>
                            </div>
                        </div>

                        <div class='wfc_coupon'>
                            <div class='wfc_apply_coupon_link' style="color: <?php echo $scfw_comman['wfc_apply_cpn_ft_clr']; ?>">
                                <a href='#' id='wfc_apply_coupon'>
                                    <?php if($scfw_comman['scfw_coupon_icon']== 'coupon_1'){
                                        echo  $ocwqv_qscfw_icon['coupon_1']; 
                                    }elseif($scfw_comman['scfw_coupon_icon']== 'coupon_2'){
                                        echo  $ocwqv_qscfw_icon['coupon_2']; 
                                    }elseif($scfw_comman['scfw_coupon_icon']== 'coupon_3'){
                                        echo  $ocwqv_qscfw_icon['coupon_3']; 
                                    }elseif($scfw_comman['scfw_coupon_icon']== 'coupon_4'){
                                        echo  $ocwqv_qscfw_icon['coupon_4']; 
                                    }elseif($scfw_comman['scfw_coupon_icon']== 'coupon_5'){
                                        echo  $ocwqv_qscfw_icon['coupon_5']; 
                                    }else{
                                        echo  $ocwqv_qscfw_icon['coupon']; 
                                    }
                                    ?> 
                                        <?php echo $scfw_comman['wfc_apply_cpn_txt']; ?>
                                </a>
                                
                            </div>
                            <div class="wfc_coupon_field">
                                <input type="text" id="wfc_coupon_code" placeholder="<?php echo $scfw_comman['wfc_apply_cpn_plchldr_txt']; ?>">
                                <span class="wfc_coupon_submit" style="background-color: <?php echo $scfw_comman[ 'wfc_applybtn_cpn_bg_clr']; ?>; color: <?php echo $scfw_comman['wfc_applybtn_cpn_ft_clr']; ?>;"><?php echo $scfw_comman['wfc_apply_cpn_apbtn_txt']; ?></span>
                            </div>

                            <?php
                            $applied_coupons = WC()->cart->get_applied_coupons();

                            if(!empty($applied_coupons)) {
                            ?>
                                <ul class='wfc_applied_cpns'>
                                    <?php
                                        foreach($applied_coupons as $cpns ) {
                                        ?>    
                                        <li class='wfc_remove_cpn' cpcode='<?php echo $cpns; ?>'><?php echo $cpns; ?><span class='dashicons dashicons-no'></span></li>
                                        
                                        <?php
                                        }
                                    ?>    
                                </ul>
                            <?php
                            }
                            ?>
                        </div>
                    </div>
                    <?php
                    }
                    ?>

                    <?php
                    $showSlider = 'true';
                    if(wp_is_mobile()) {
                        if($scfw_comman['wfc_prodslider_mobile'] == 'yes') {
                           // $showSlider = 'false';
                            ?>
                            <div class="wfc_slider">
                                <div class="wfc_slider_inn owl-carousel owl-theme">
                                <?php 
                                        foreach ($productsa as $value) {
                                            $productc = wc_get_product( $value );
                                            $title = $productc->get_name();
                                            $price = $productc->get_price();
                                            $cart_product_ids = array();
                                            foreach( WC()->cart->get_cart() as $cart_item ){
                                                // compatibility with WC +3
                                                if( version_compare( WC_VERSION, '3.0', '<' ) ) {
                                                    $cart_product_ids[] = $cart_item['data']->id; // Before version 3.0
                                                } else {
                                                    $cart_product_ids[] = $cart_item['data']->get_id(); // For version 3 or more
                                                }
                                            }

                                            if (!in_array($value, $cart_product_ids)) {

                                            ?>
                                                <div class="item wfc_gift_product">
                                                    <a href="<?php echo get_permalink( $productc->get_id() ); ?>">

                                                        <div class="wfc_left_div"><?php echo $productc->get_image(); ?></div>
                                                        <div class="wfc_right_div">
                                                            <h3 style="color: <?php echo $scfw_comman['wfc_sld_product_ft_clr']; ?>;font-size: <?php echo $scfw_comman['wfc_sld_product_ft_size']; ?>px;"><?php echo $title; ?></h3>
                                                            <span style="color: <?php echo $scfw_comman['wfc_sld_product_ft_clr']; ?>;font-size: <?php echo$scfw_comman[ 'wfc_sld_product_ft_size']; ?>px;"><?php echo wc_price($price); ?></span>

                                                            <?php

                                                            if ($productc->get_type() == 'simple') {
                                                                echo "<a href='?add-to-cart=".$value."' data-quantity='1' class='wfc_pslide_atc' data-product_id='".$value."' style='background-color: ".$scfw_comman['wfc_ft_btn_clr']."; color: ".$scfw_comman[ 'wfc_ft_btn_txt_clr'].";'>".$scfw_comman[ 'wfc_slider_vwoptbtn_txt']."</a>";
                                                            } elseif ($productc->get_type() == 'variable' ) {
                                                                echo "<a href='".get_permalink($value)."' data-quantity='1' class='wfc_pslide_prodpage' data-product_id='".$value."' style='background-color: ".$scfw_comman[ 'wfc_ft_btn_clr']."; color: ".$scfw_comman[ 'wfc_ft_btn_txt_clr'].";'>".$scfw_comman[ 'wfc_slider_vwoptbtn_txt']."</a>";
                                                            } elseif ($productc->get_type() == 'variation') {
                                                                $prod_id = $productc->get_parent_id();
                                                                echo "<a href='?add-to-cart=".$value."' data-quantity='1' class='wfc_pslide_atc' data-product_id='".$prod_id."' variation-id='".$value."' style='background-color: ".$scfw_comman[ 'wfc_ft_btn_clr']."; color: ".$scfw_comman['wfc_ft_btn_txt_clr' ].";'>".$scfw_comman['wfc_slider_vwoptbtn_txt']."</a>";
                                                            }
                                                            ?>
                                                        </div>
                                                    </a>

                                                </div>
                                            <?php
                                            }
                                        }
                                    
                                ?>
                                </div>
                            </div>
                        
                        <?php }
                    }

                    if ($showSlider == 'true') {
                        $productsa = get_option('wfc_select2');
                        if(!empty($productsa)) {
                    ?>
                    
                        
                        <?php  if($scfw_comman['wfc_prodslider_desktop'] == 'yes') { ?>
                            <div class="wfc_slider desktop_oc">
                                <div class="wfc_slider_inn  owl-carousel owl-theme ">
                                <?php 
                                    
                                        foreach ($productsa as $value) {
                                            $productc = wc_get_product( $value );
                                            $title = $productc->get_name();
                                            $price = $productc->get_price();
                                            $cart_product_ids = array();
                                            foreach( WC()->cart->get_cart() as $cart_item ){
                                                // compatibility with WC +3
                                                if( version_compare( WC_VERSION, '3.0', '<' ) ) {
                                                    $cart_product_ids[] = $cart_item['data']->id; // Before version 3.0
                                                } else {
                                                    $cart_product_ids[] = $cart_item['data']->get_id(); // For version 3 or more
                                                }
                                            }

                                            if (!in_array($value, $cart_product_ids)) {

                                            ?>
                                                <div class="item wfc_gift_product">
                                                     <div class="inner_mainf">
                                                    <a href="<?php echo get_permalink( $productc->get_id() ); ?>">
                                                       
                                                            <div class="wfc_left_div"><?php echo $productc->get_image(); ?></div>
                                                            <div class="wfc_right_div">
                                                                <h3 style="color: <?php echo $scfw_comman['wfc_sld_product_ft_clr']; ?>;font-size: <?php echo $scfw_comman['wfc_sld_product_ft_size']; ?>px;"><?php echo $title; ?></h3>
                                                                <span style="color: <?php echo $scfw_comman[ 'wfc_sld_product_ft_clr'] ?>;font-size: <?php echo$scfw_comman[ 'wfc_sld_product_ft_size']; ?>px;"><?php echo wc_price($price); ?></span>

                                                                <?php

                                                                if ($productc->get_type() == 'simple') {
                                                                    echo "<a href='?add-to-cart=".$value."' data-quantity='1' class='wfc_pslide_atc' data-product_id='".$value."' style='background-color: ".$scfw_comman[ 'wfc_ft_btn_clr']."; color: ".$scfw_comman['wfc_ft_btn_txt_clr'].";'>".$scfw_comman[ 'wfc_slider_vwoptbtn_txt']."</a>";
                                                                } elseif ($productc->get_type() == 'variable' ) {
                                                                    echo "<a href='".get_permalink($value)."' data-quantity='1' class='wfc_pslide_prodpage' data-product_id='".$value."' style='background-color: ".$scfw_comman[ 'wfc_ft_btn_clr']."; color: ".$scfw_comman[ 'wfc_ft_btn_txt_clr'].";'>".$scfw_comman['wfc_slider_vwoptbtn_txt']."</a>";
                                                                } elseif ($productc->get_type() == 'variation') {
                                                                    $prod_id = $productc->get_parent_id();
                                                                    echo "<a href='?add-to-cart=".$value."' data-quantity='1' class='wfc_pslide_atc' data-product_id='".$prod_id."' variation-id='".$value."' style='background-color: ".$scfw_comman[ 'wfc_ft_btn_clr']."; color: ".$scfw_comman[ 'wfc_ft_btn_txt_clr'].";'>".$scfw_comman[ 'wfc_slider_vwoptbtn_txt']."</a>";
                                                                }
                                                                ?>
                                                            </div>
                                                      
                                                    </a>
                                                      </div>

                                                </div>
                                            <?php
                                            }
                                        }  
                                ?>
                                </div>
                            </div>
                        <?php } ?>

                    <?php

                        }
                    }
                    ?>

                    <div class="wfc_footer">
                        <div class="wfc_ship_txt" style="color: <?php echo $scfw_comman['wfc_ship_ft_clr'] ?>;font-size: <?php echo $scfw_comman[ 'wfc_ship_ft_size']."px" ?>;"><?php echo $scfw_comman['wfc_ship_txt']; ?></div>
                        <?php

                        ?>
                        <div class="wfc_button_fort wfc_dyamic_<?php echo $scfw_comman['wfc_footer_button_row']; ?>">
                        <?php  if($scfw_comman['wfc_cart_option']== "yes") { ?>
                            <a  class="wfc_bn_1" href="<?php if(!empty($scfw_comman['wfc_orgcart_link'])){echo $scfw_comman['wfc_orgcart_link']; }else{  echo wc_get_cart_url(); }?>" style="background-color: <?php echo $scfw_comman['wfc_ft_btn_clr'] ?>;margin: <?php echo $scfw_comman['wfc_ft_btn_mrgin']."px" ?>;color: <?php echo $scfw_comman['wfc_ft_btn_txt_clr'] ?>;">
                                <?php echo $scfw_comman['wfc_cart_txt']; ?>
                            </a>
                        <?php } ?>
                        <?php  if($scfw_comman['wfc_checkout_option'] == "yes"){ ?>
                            <a class="wfc_bn_2" href="<?php if(!empty($scfw_comman['wfc_orgcheckout_link'])){echo $scfw_comman['wfc_orgcheckout_link'];}else{echo wc_get_checkout_url();} ?>" style="background-color: <?php echo $scfw_comman['wfc_ft_btn_clr'] ?>;margin: <?php echo $scfw_comman['wfc_ft_btn_mrgin']."px" ?>;color: <?php echo $scfw_comman[ 'wfc_ft_btn_txt_clr'] ?>;">
                                <?php echo $scfw_comman['wfc_checkout_txt']; ?>
                            </a>
                        <?php } ?>
                        <?php  if($scfw_comman['wfc_conshipping_option'] == "yes"){ ?>
                            <a class="wfc_bn_3" href="<?php echo $scfw_comman['wfc_conshipping_link'] ?>" style="background-color: <?php echo $scfw_comman[ 'wfc_ft_btn_clr'] ?>;margin: <?php echo $scfw_comman['wfc_ft_btn_mrgin']."px" ?>;color: <?php echo $scfw_comman['wfc_ft_btn_txt_clr'] ?>;">
                                <?php echo $scfw_comman['wfc_conshipping_txt']; ?>
                            </a>
                        <?php } ?>
                        </div>
                    </div>

               
            </div>
            <div class="wfc_container_overlay">
            </div>

            <?php if($scfw_comman['wfc_show_cart_icn'] == "yes"){ ?>

                <div class="wfc_cart_basket">
                    <div class="cart_box">
                       
                        <?php if($scfw_comman['ocwqv_scfw_icon'] == 'ocwqv_scfw_icon_1'){ ?>

                           <?php echo  $ocwqv_qscfw_icon['ocwqv_scfw_icon_1']; ?>

                        <?php }else if($scfw_comman['ocwqv_scfw_icon'] == 'ocwqv_scfw_icon_2'){ ?>

                            <?php echo  $ocwqv_qscfw_icon['ocwqv_scfw_icon_2']; ?>

                        <?php }else if($scfw_comman['ocwqv_scfw_icon'] == 'ocwqv_scfw_icon_3'){ ?>

                            <?php echo  $ocwqv_qscfw_icon['ocwqv_scfw_icon_3']; ?>

                        <?php }else if($scfw_comman['ocwqv_scfw_icon'] == 'ocwqv_scfw_icon_4'){ ?>

                            <?php echo  $ocwqv_qscfw_icon['ocwqv_scfw_icon_4']; ?>

                        <?php }else if($scfw_comman['ocwqv_scfw_icon'] == 'ocwqv_scfw_icon_5'){ ?>

                            <?php echo  $ocwqv_qscfw_icon['ocwqv_scfw_icon_5']; ?>

                        <?php }else if($scfw_comman['ocwqv_scfw_icon'] == 'ocwqv_scfw_icon_6'){ ?>

                            <?php echo  $ocwqv_qscfw_icon['shop_icon_4']; ?>

                        <?php }else{ ?>

                              <?php echo  $ocwqv_qscfw_icon['ocwqv_qscfw_icon']; ?>

                        <?php } ?>
                        
                    </div>
                    <?php if($scfw_comman['wfc_product_cnt'] == "yes"){ ?>
                        <div class="wfc_item_count" >
                            <?php
                            echo $this->SCFW_counter_value();
                            ?>
                        </div>
                    <?php } ?>
                </div>
                <?php
            }
        }
     
        function SCFW_craete_cart(){
             global $scfw_comman,$ocwqv_qscfw_icon;
            ?>
            <style>

                <?php
                if($scfw_comman['wfc_cart_open_from']=='left'){?>

                    .wfc_container{
                    width: <?php echo $scfw_comman[ 'wfc_sidecart_width'].'px'; ?>;

                    left: -<?php echo $scfw_comman[ 'wfc_sidecart_width'].'px'; ?>;
                 }

                <?php }else{ ?>

                .wfc_container{
                    width: <?php echo $scfw_comman[ 'wfc_sidecart_width'].'px'; ?>;

                    right: -<?php echo $scfw_comman[ 'wfc_sidecart_width'].'px'; ?>;
                }

                <?php }
                if($scfw_comman['wfc_cart_height']=='auto'){
                ?>
                 .wfc_container{
                    top:auto;
                    max-height: 100%;
                 }
                <?php
                }
                ?>
                .wfc_item_count{
                        background-color: <?php echo $scfw_comman[ 'wfc_cnt_bg_clr'] ?>;
                        color: <?php echo $scfw_comman['wfc_cnt_txt_clr'] ?>;
                        font-size: <?php echo $scfw_comman['wfc_cnt_txt_size']."px" ?>;
                    <?php if($scfw_comman['wfc_basket_count_position'] == "top-right"){?>
                        top: -10px;
                        right: -12px;
                    <?php }elseif($scfw_comman['wfc_basket_count_position'] == "bottom-left"){ ?>
                        bottom: -10px;
                        left: -12px;
                    <?php }elseif($scfw_comman['wfc_basket_count_position'] == "bottom-right"){ ?>
                        bottom: -10px;
                        right: -12px;
                    <?php }else{ ?>
                        top: -10px;
                        left: -12px;
                    <?php } ?>
                }
                .wfc_cart_basket{
                    <?php 
                    if($scfw_comman['wfc_basket_position'] == "top"){ ?>
                    top: 15px;
                    <?php }elseif($scfw_comman['wfc_basket_position']== "bottom") { ?>
                    bottom: 15px;
                    <?php } 
                    if($scfw_comman['wfc_cart_open_from'] == "left"){ ?>
                        left: 15px;
                    <?php }else { ?>
                    right: 15px;
                    <?php }
                    if($scfw_comman['wfc_basket_shape'] == "round"){ ?>
                           border-radius: 100%;
                    <?php }else { ?>
                        border-radius: 10px;
                    <?php } 
                     if($scfw_comman['wfc_cart_show_hide'] == "wfc_cart_hide"){ ?>
                           display: none;
                    <?php }else { ?>
                        display:block;
                       
                    <?php } ?>
                      
                    max-height: <?php echo $scfw_comman[ 'wfc_basket_icn_size']."px" ?>;
                    max-width: <?php echo $scfw_comman[ 'wfc_basket_icn_size']."px" ?>;
                    background-color: <?php echo $scfw_comman['wfc_basket_bg_clr'] ?>;
                    margin-bottom: <?php echo $scfw_comman['wfc_basket_off_vertical'];?>px;
                    margin-right: <?php echo $scfw_comman['wfc_basket_off_horizontal'];?>px;
                }
                .wfc_container .wfc_header_title{
                    color: <?php echo $scfw_comman['wfc_head_ft_clr']; ?>;
                    font-size: <?php echo $scfw_comman['wfc_head_ft_size']."px"; ?>;
                }
                
                .wfc_prodline_title_inner ,.wfc_prodline_title_inner a, .wfc_qupdiv{
                    color: <?php echo $scfw_comman['wfc_product_ft_clr'];?>;
                    font-size: <?php echo $scfw_comman['wfc_product_ft_size'];?>px;
                }
                .cart_box svg {
                    fill : <?php echo $scfw_comman[ 'wfc_basket_clr']; ?> ;
                }
                .wfc_remove svg {
                fill : <?php echo $scfw_comman[ 'wfc_delect_icon_clr']; ?> ;

                }
                .wfc_cart_icon svg{
                fill : <?php echo $scfw_comman[ 'wfc_header_cart_icon_clr']; ?> ;
                }
                .wfc_close_cart svg{
                fill : <?php echo $scfw_comman[ 'wfc_header_close_icon_clr']; ?> ;
                }
                #wfc_apply_coupon svg{
                fill : <?php echo $scfw_comman[ 'wfc_apply_cpn_icon_clr']; ?> ;
                }

                
            </style>
            <?php
            $wcf_page_ids = explode(",",$scfw_comman[ 'wfc_on_pages']);
            $wcf_crnt_page = get_the_ID();
            if (!in_array($wcf_crnt_page, $wcf_page_ids)) {
                if(wp_is_mobile() ){
                    if($scfw_comman[ 'wfc_mobile'] == "yes") {
                        if(is_checkout() || is_cart()){
                            if($scfw_comman[ 'wfc_cart_check_page'] == "yes") {
                                add_filter( 'wp_footer', array($this, 'SCFW_cart_create'));
                            }
                        } else {
                            add_filter( 'wp_footer', array($this, 'SCFW_cart_create'));
                        }
                    }
                } else {
                    if(is_checkout() || is_cart()){
                        if($scfw_comman[ 'wfc_cart_check_page']== "yes") {
                            add_filter( 'wp_footer', array($this, 'SCFW_cart_create'));
                        }
                    } else {
                        add_filter( 'wp_footer', array($this, 'SCFW_cart_create'));
                    }
                }
            }
        }
        
        function SCFW_comman(){
            global $scfw_comman, $ocwqv_qscfw_icon;

            $html = '<div class="wfc_body">';
            if ( ! WC()->cart->is_empty() ) {

                    $html .= "<div class='wfc_cust_mini_cart'>";
                    global $woocommerce;
                    if($scfw_comman['wfc_cart_ordering']=='asc'){
                        $items = WC()->cart->get_cart(); 
                    }else{
                        $items = array_reverse(WC()->cart->get_cart()); 
                    }
                    
                        foreach($items as $item => $values) { 
                           $_product = apply_filters( 'woocommerce_cart_item_product', $values['data'], $values, $item );

                            $html .= "<div class='wfc_cart_prods' product_id='".$values['product_id']."' c_key='".$values['key']."'>";
                            $html .= "<div class='wfc_cart_prods_inner'>";
                            
                            $product_id   = apply_filters( 'woocommerce_cart_item_product_id', $values['product_id'], $values, $item );
                            $getProductDetail = wc_get_product( $values['product_id'] );
                            if($scfw_comman['wfc_loop_img']=='yes'){
                                $html .= "<div class='image_div'>";
                                $html .= $getProductDetail->get_image('thumbnail');
                                $html .= '</div>';  
                            }
                           
                            $html .= "<div class='description_div'>";
                         
                     
                            if($scfw_comman['oscfw_delete_icon'] == 'trash_1'){
                                $scfw_delete_icon =  $ocwqv_qscfw_icon['trash_1'];
                            }elseif($scfw_comman['oscfw_delete_icon'] == 'trash_2'){
                                $scfw_delete_icon =  $ocwqv_qscfw_icon['trash_2'];
                            }elseif($scfw_comman['oscfw_delete_icon'] == 'trash_3'){
                                $scfw_delete_icon =  $ocwqv_qscfw_icon['trash_3'];
                            }elseif($scfw_comman['oscfw_delete_icon'] == 'trash_4'){
                                $scfw_delete_icon =  $ocwqv_qscfw_icon['trash_4'];
                            }elseif($scfw_comman['oscfw_delete_icon'] == 'trash_5'){
                                $scfw_delete_icon =  $ocwqv_qscfw_icon['trash_5'];
                            }elseif($scfw_comman['oscfw_delete_icon'] == 'trash_6'){
                                $scfw_delete_icon =  $ocwqv_qscfw_icon['trash_6'];
                            }else{
                                $scfw_delete_icon =  $ocwqv_qscfw_icon['ocwqv_trash'];
                            }
                            

                            if($scfw_comman['wfc_loop_delete']=='yes'){
                                $html .= "<div class='wfc_prcdel_div'>";
                                $html .= apply_filters('woocommerce_cart_item_remove_link', sprintf('<a href="%s" class="wfc_remove"  aria-label="%s" data-product_id="%s" data-product_sku="%s" data-cart_item_key="%s">'.$scfw_delete_icon.'</a>', 
                                        esc_url(wc_get_cart_remove_url($item)), 
                                        esc_html__('Remove this item', 'evolve'),
                                        esc_attr( $product_id ),
                                        esc_attr( $_product->get_sku() ),
                                        esc_attr( $item )
                                        ), $item);
                                $html .= "</div>";
                            }

                            
                            $html .= "<div class='wfc_prodline_title' >";
                            
                            $product_permalink = apply_filters( 'woocommerce_cart_item_permalink', $_product->is_visible() ? $_product->get_permalink( $values ) : '', $values, $item );
                                    if ( $_product && $_product->exists() && $values['quantity'] > 0 && apply_filters( 'woocommerce_checkout_cart_item_visible', true, $values, $item ) ) {
                                        $html .= "<div class='wfc_prodline_title_inner' >";
                                        if($scfw_comman['wfc_loop_product_name']=='yes'){
                                            if($scfw_comman['wfc_loop_link']=='yes'){
                                                $html .= apply_filters( 'woocommerce_cart_item_name', sprintf( '<a href="%s">%s</a>', esc_url( $product_permalink ), $_product->get_name() ), $values, $item )  . '&nbsp;'; 
                                            }else{
                                                $html .= apply_filters( 'woocommerce_cart_item_name', $_product->get_name(), $values, $item ) . '&nbsp;'; 
                                            }
                                           
                                        }
                                        $html .= "</div>";
                                        $html .= "<div class='oc_metadata'>"; 

                                        $html .= wc_get_formatted_cart_item_data( $values ); 
                                            
                                        $html .= "</div>";
                                        if($scfw_comman['wfc_loop_product_price']=='yes'){
                                            $html .= "<div class='wfc_price_single'>".wc_price($_product->get_price())."</div>"; 
                                        }   
                                    }

                            $html .= "</div>";

                            $html .= "<div class='wfc_prodline_qty'>";
                            $html .= '<div class="wfc_qupdiv">';
                            if ($scfw_comman['wfc_qty_box'] == "yes" ) {
                               /* $html .= $values['quantity'];*/
                                $html .= '<button type="button" class="wfc_minus" >-</button>';
                                $html .= '<input type="text" class="wfc_update_qty" name="update_qty" value="'.$values['quantity'].'">';
                                $html .= '<button type="button" class="wfc_plus" >+</button>';
                                
                            }else {
                                $html .= $scfw_comman['wfc_qty_text']." : ".$values['quantity'];
                            }
                            $html .= '</div>';
                            if ($scfw_comman['wfc_loop_total'] == "yes" ) {
                                $html .= "<div class='wfc_prodline_price'>";

                                $wfc_product = $values['data'];
                                $wfc_product_subtotal = WC()->cart->get_product_subtotal( $wfc_product, $values['quantity'] );

                                $html .= $wfc_product_subtotal;

                                $html .= "</div>";
                            }

                            $html .= "</div>";
                            $html .= "</div>";
                            $html .= "</div>";
                            $html .= "</div>";
                        }

                    $html .= "</div>";

                }else{
                        if($scfw_comman['wfc_emptycart_link']!=''){
                             $html .= "<h3 class='empty_cart_text'><a href='".$scfw_comman['wfc_emptycart_link']."'>".$scfw_comman[ 'wfc_cart_is_empty']."</a></h3>";
                        }else{
                         $html .= "<h3 class='empty_cart_text'>".$scfw_comman['wfc_cart_is_empty']."</h3>";
                        }
                }

            $html .= '</div>';
            return $html;
        }

        function SCFW_counter_value(){
            global $scfw_comman;
            if( $scfw_comman['wfc_product_cnt_type']=='sum_qty'){
                return '<span class="float_countc">'.WC()->cart->get_cart_contents_count().'</span>';
            }else{
                return '<span class="float_countc">'.count(WC()->cart->get_cart()).'</span>';
            }
            
        }

        function SCFW_cart_count_fragments( $fragments ) {
            global $scfw_comman,$ocwqv_qscfw_icon;;
            WC()->cart->calculate_totals();
            WC()->cart->maybe_set_cart_cookies();

            $fragments['div.wfc_body'] = $this->SCFW_comman();

            if ($scfw_comman['wfc_freeshiping_herder'] == "yes" ){ 
                       $wfc_shiping = '<div class="top_wfc_bottom">';
                            

                                $wg_prodrule_mtvtion_msg = $scfw_comman['wfc_freeshiping_herder_txt'];
                                                               // 
                                   $shiiping_total  = WC()->cart->get_shipping_total();
                                  $wfc_subtotla       =  WC()->cart->get_subtotal();

                                if($shiiping_total >  $wfc_subtotla){
                                       $wfc_shipping_total =  get_woocommerce_currency_symbol().number_format(($shiiping_total - $wfc_subtotla ), 2 );
                                       $wg_prodrule_mtvtion_msg_final = str_replace("{shipping_total}", $wfc_shipping_total, $wg_prodrule_mtvtion_msg);
                                }else{
                                     $wg_prodrule_mtvtion_msg_final =  $scfw_comman['wfc_freeshiping_then_herder_txt'];
                                }
                                
                             $wfc_shiping .='<p style="color:'.$scfw_comman['wfc_header_shipping_text_color'].'">'.$wg_prodrule_mtvtion_msg_final.'</p>' ;
                           
                        $wfc_shiping .= '</div>';
             } 

            $fragments['.top_wfc_bottom p'] = $wfc_shiping;
            $fragments['span.float_countc'] = $this->SCFW_counter_value();
            $item_taxs =WC()->cart->get_cart();
            $iteeem = WC()->cart->get_tax_totals();
            $wfc_get_totals = WC()->cart->get_totals();
            $wfc_shipping_total =  WC()->cart->get_cart_shipping_total();
            $wfc_cart_total = $wfc_get_totals['subtotal'];
            $wfc_cart_discount = $wfc_get_totals['discount_total'];
            $wfc_final_subtotal = $wfc_cart_total ;
            
            $wfc_fragtotal = "<div class='wfc_total_amount'>".get_woocommerce_currency_symbol().number_format($wfc_final_subtotal, 2)."</div>";
            $wfc_fulltotal = "<div class='wfc_total_innwer_full'>".get_woocommerce_currency_symbol().number_format(WC()->cart->total, 2)."</div>";
            
            // print_R($wfc_cart_discount);
            $wfc_fulldicount = "<div class='wfc_oc_discount_oc'>";
                if ( $wfc_cart_discount != 0 ){

                    $wfc_fulldicount .= "<div class='wfc_discount_label'><span>".$scfw_comman['wfc_discount_text_trans']."</span></div><div class='wfc_discount_innwer_full'> <span class='wfc_discount_full'>".get_woocommerce_currency_symbol().number_format( $wfc_cart_discount, 2)."</span></div>";   

                }
            $wfc_fulldicount .= "</div>";

            $wfc_total_amountt = "<div class='wfc_total_amountt'>".$wfc_shipping_total."</div>";



            $wfc_total_innwer = "<span class='wfc_fragtotall'>";  
             if(!empty($iteeem)){             
                foreach ($iteeem as $iteeem_tac ) {
                    if(!empty($iteeem_tac->amount)){
                           $wfc_total_innwer .= get_woocommerce_currency_symbol().number_format($iteeem_tac->amount, 2); 
                    }
                }
            }else{     
                   $wfc_total_innwer .=  get_woocommerce_currency_symbol().number_format(0, 2);                         
            }
            $wfc_total_innwer .= "</span>";
             ob_start();
            if($scfw_comman['wfc_cart_empty_hide_show'] == "hide" && WC()->cart->is_empty() ){ ?>
                <script type="text/javascript">
                    jQuery( ".wfc_container" ).addClass( "wfc_cart_empty" );
                </script>

            <?php }else{ ?>
                 <script type="text/javascript">
                    jQuery( ".wfc_container" ).removeClass( "wfc_cart_empty" );
                </script>
                
            <?php }
            $wfc_total_innwerscript = ob_get_clean();
            $wfc_total_innwer .= $wfc_total_innwerscript;
            $fragments['div.wfc_total_innwer_full'] = $wfc_fulltotal;
            $fragments['div.wfc_total_amount'] = $wfc_fragtotal;
            $fragments['div.wfc_total_amountt'] = $wfc_total_amountt;
            $fragments['span.wfc_fragtotall'] = $wfc_total_innwer;
            $fragments['div.wfc_oc_discount_oc'] = $wfc_fulldicount;
            ob_start();
            ?>
            <div class="wfc_slider_inn owl-carousel owl-theme">
                <?php 
                    $productsa = get_option('wfc_select2');
                    
                    if(!empty($productsa)) {

                        foreach ($productsa as $value) {
                            $productc = wc_get_product( $value );
                            $title = $productc->get_name();
                            $price = $productc->get_price();

                            $cart_product_ids = array();

                            foreach( WC()->cart->get_cart() as $cart_item ){
							    // compatibility with WC +3
							    if( version_compare( WC_VERSION, '3.0', '<' ) ){
							        $cart_product_ids[] = $cart_item['data']->id; // Before version 3.0
							    } else {
							        $cart_product_ids[] = $cart_item['data']->get_id(); // For version 3 or more
							    }
							}

							if (!in_array($value, $cart_product_ids)) {

                            ?>
                                <div class="item wfc_gift_product">
                                    <div class="inner_mainf">
                                    <a href="<?php echo get_permalink( $productc->get_id() ); ?>">
                                        
                                            <div class="wfc_left_div"><?php echo $productc->get_image(); ?></div>
                                            <div class="wfc_right_div">
                                                <h3 style="color: <?php echo $scfw_comman[ 'wfc_sld_product_ft_clr']; ?>;font-size: <?php echo $scfw_comman[ 'wfc_sld_product_ft_size']; ?>px;"><?php echo $title; ?></h3>
                                                <span style="color: <?php echo $scfw_comman['wfc_sld_product_ft_clr']; ?>;font-size: <?php echo $scfw_comman['wfc_sld_product_ft_size']; ?>px;"><?php echo wc_price($price); ?></span>

                                                <?php

                                               	if ($productc->get_type() == 'simple') {
                                               		echo "<a href='?add-to-cart=".$value."' data-quantity='1' class='wfc_pslide_atc' data-product_id='".$value."' style='background-color: ".$scfw_comman['wfc_ft_btn_clr']."; color: ".$scfw_comman[ 'wfc_ft_btn_txt_clr'].";'>".$scfw_comman['wfc_slider_atcbtn_txt']."</a>";
                                               	} elseif ($productc->get_type() == 'variable' ) {
                                               		echo "<a href='".get_permalink($value)."' data-quantity='1' class='wfc_pslide_prodpage' data-product_id='".$value."' style='background-color: ".$scfw_comman[ 'wfc_ft_btn_clr']."; color: ".$scfw_comman[ 'wfc_ft_btn_txt_clr'].";'>".$scfw_comman['wfc_slider_vwoptbtn_txt']."</a>";
                                               	} elseif ($productc->get_type() == 'variation') {
                                               		$prod_id = $productc->get_parent_id();
                                               		echo "<a href='?add-to-cart=".$value."' data-quantity='1' class='wfc_pslide_atc' data-product_id='".$prod_id."' variation-id='".$value."' style='background-color: ".$scfw_comman[ 'wfc_ft_btn_clr']."; color: ".$scfw_comman[ 'wfc_ft_btn_txt_clr'].";'>".$scfw_comman[ 'wfc_slider_atcbtn_txt']."</a>";
                                                    
                                               	}
                                                ?>
                                            </div>

                                    </a>
                                     </div>
                                </div>
                            <?php
                            }
                        }

                    }
                ?>
            </div>

            <script type="text/javascript">
            	var leftArrow = '<?php echo SCFW_PLUGIN_DIR; ?>' + '/images/left-arrow.svg';
    			var rightArrow = '<?php echo SCFW_PLUGIN_DIR; ?>' + '/images/right-arrow.svg';

            	jQuery('.wfc_slider_inn').owlCarousel({
			        loop:true,
			        margin:10,
			        nav:true,
			        navText:["<img src='"+leftArrow+"'>", "<img src='"+rightArrow+"'>"],
			        navClass:['owl-prev', 'owl-next'],
			        dots: false,
			        autoplay:true,
			        autoplayTimeout:3000,
			        autoplayHoverPause:true,
			        responsive:{
			            0:{
			                items:1
			            },
			            600:{
			                items:1
			            },
			            1000:{
			                items:1
			            }
			        }
			    })
            </script>
            <?php

            $wfc_fragslider = ob_get_clean();
            $fragments['div.wfc_slider_inn'] = $wfc_fragslider;

            $wfc_coupon_html = "<div class='wfc_coupon'>";
            $wfc_coupon_html .= "<div class='wfc_apply_coupon_link'>";
  
            if($scfw_comman['scfw_coupon_icon'] == 'coupon_1'){
                        $scfw_qscfw_icon =$ocwqv_qscfw_icon['coupon_1']; 
                    }elseif($scfw_comman['scfw_coupon_icon']== 'coupon_2'){
                        $scfw_qscfw_icon =$ocwqv_qscfw_icon['coupon_2']; 
                    }elseif($scfw_comman['scfw_coupon_icon']== 'coupon_3'){
                        $scfw_qscfw_icon =$ocwqv_qscfw_icon['coupon_3']; 
                    }elseif($scfw_comman['scfw_coupon_icon']== 'coupon_4'){
                        $scfw_qscfw_icon =$ocwqv_qscfw_icon['coupon_4']; 
                    }elseif($scfw_comman['scfw_coupon_icon']== 'coupon_5'){
                        $scfw_qscfw_icon = $ocwqv_qscfw_icon['coupon_5']; 
                    }else{
                        $scfw_qscfw_icon =$ocwqv_qscfw_icon['coupon']; 
                    }
            $wfc_coupon_html .= "<a href='#' style='color:".$scfw_comman[ 'wfc_apply_cpn_ft_clr']."' id='wfc_apply_coupon'>".$scfw_qscfw_icon."".$scfw_comman['wfc_apply_cpn_txt']."</a>";
            $wfc_coupon_html .= "</div>";
            $wfc_coupon_html .= '<div class="wfc_coupon_field">';
            $wfc_coupon_html .= '<input type="text" id="wfc_coupon_code" placeholder="'.$scfw_comman[ 'wfc_apply_cpn_plchldr_txt'].'">';
            $wfc_coupon_html .= '<span class="wfc_coupon_submit" style="background-color: '.$scfw_comman[ 'wfc_applybtn_cpn_bg_clr'].'; color: '.$scfw_comman[ 'wfc_applybtn_cpn_ft_clr'].';">'.$scfw_comman[ 'wfc_apply_cpn_apbtn_txt'].'</span>';
            $wfc_coupon_html .= '</div>';

            $applied_coupons = WC()->cart->get_applied_coupons();
            if(!empty($applied_coupons)) {
                $wfc_coupon_html .= "<ul class='wfc_applied_cpns'>";

                foreach($applied_coupons as $cpns ) {

                    $wfc_coupon_html .= "<li class='wfc_remove_cpn' cpcode='".$cpns."'>".$cpns." <span class='dashicons dashicons-no'></span></li>";
                    
                }

                $wfc_coupon_html .= "</ul>";
            }

            $wfc_coupon_html .= "</div>";

            $fragments['div.wfc_coupon'] = $wfc_coupon_html;

            return $fragments;
        }


        function SCFW_ajax_product_remove() {
            ob_start();
            foreach (WC()->cart->get_cart() as $cart_item_key => $cart_item) {
                if($cart_item['product_id'] == $_POST['product_id'] && $cart_item_key == $_POST['cart_item_key'] )
                {
                    WC()->cart->remove_cart_item($cart_item_key);
                }
            }

            WC()->cart->calculate_totals();
            WC()->cart->maybe_set_cart_cookies();

            woocommerce_mini_cart();

            $mini_cart = ob_get_clean();

            // Fragments and mini cart are returned
            $data = array(
                'fragments' => apply_filters( 'woocommerce_add_to_cart_fragments', array(
                        'div.widget_shopping_cart_content' => '<div class="widget_shopping_cart_content">' . $mini_cart . '</div>'
                    )
                ),
                'cart_hash' => apply_filters( 'woocommerce_add_to_cart_hash', WC()->cart->get_cart_for_session() ? md5( json_encode( WC()->cart->get_cart_for_session() ) ) : '', WC()->cart->get_cart_for_session() )
            );

            wp_send_json( $data );

            die();
        }
        
        function SCFW_change_qty_cust() {

            $c_key = sanitize_text_field($_REQUEST['c_key']);
            $qty = sanitize_text_field($_REQUEST['qty']);
            WC()->cart->set_quantity($c_key, $qty, true);
            WC()->cart->set_session();
            exit();
        }

        function SCFW_coupon_ajax_call_func() {
            global $scfw_comman;
            $code = $_REQUEST['coupon_code'];
            $code = strtolower($code);

            // Check coupon code to make sure is not empty
            if( empty( $code ) || !isset( $code ) ) {

                $wfc_cpnfield_empty_txt = $scfw_comman[ 'wfc_cpnfield_empty_txt'];
                // Build our response
                $response = array(
                    'result'    => 'empty',
                    'message'   => $wfc_cpnfield_empty_txt
                );

                header( 'Content-Type: application/json' );
                echo json_encode( $response );

                // Always exit when doing ajax
                WC()->cart->calculate_totals();
                WC()->cart->maybe_set_cart_cookies();
                WC()->cart->set_session();
                exit();
            }

            // Create an instance of WC_Coupon with our code
            $coupon = new WC_Coupon( $code );

            if (in_array($code, WC()->cart->get_applied_coupons())) {

                $wfc_cpn_alapplied_txt =$scfw_comman['wfc_cpn_alapplied_txt'];

                $response = array(
                    'result'    => 'already applied',
                    'message'   => $wfc_cpn_alapplied_txt
                );

                header( 'Content-Type: application/json' );
                echo json_encode( $response );

                // Always exit when doing ajax
                WC()->cart->calculate_totals();
                WC()->cart->maybe_set_cart_cookies();
                WC()->cart->set_session();
                exit();

            } elseif( !$coupon->is_valid() ) {

                $wfc_invalid_coupon_txt = $scfw_comman[ 'wfc_invalid_coupon_txt'];
                // Build our response
                $response = array(
                    'result'    => 'not valid',
                    'message'   => $wfc_invalid_coupon_txt
                );

                header( 'Content-Type: application/json' );
                echo json_encode( $response );

                // Always exit when doing ajax
                WC()->cart->calculate_totals();
                WC()->cart->maybe_set_cart_cookies();
                WC()->cart->set_session();
                exit();

            } else {
                
                WC()->cart->apply_coupon( $code );

                $wfc_coupon_applied_suc_txt = $scfw_comman[ 'wfc_coupon_applied_suc_txt'];
                // Build our response
                $response = array(
                    'result'    => 'success',
                    'message'      => $wfc_coupon_applied_suc_txt
                );

                header( 'Content-Type: application/json' );
                echo json_encode( $response );

                // Always exit when doing ajax
                WC()->cart->calculate_totals();
                WC()->cart->maybe_set_cart_cookies();
                WC()->cart->set_session();
                wc_clear_notices();
                exit();

            }
        }


        function SCFW_remove_applied_coupon_ajax_call_func() {
            global $scfw_comman;
            $code = $_REQUEST['remove_code'];
            
            $wfc_coupon_removed_suc_txt =$scfw_comman['wfc_coupon_removed_suc_txt'];

            if(WC()->cart->remove_coupon( $code )) {
                echo $wfc_coupon_removed_suc_txt;
            }
            WC()->cart->calculate_totals();
            WC()->cart->maybe_set_cart_cookies();
            WC()->cart->set_session();
            exit();
        }



        function SCFW_single_added_to_cart_event(){
            global $scfw_comman;
            if( isset($_POST['add-to-cart']) && isset($_POST['quantity']) ) {?>
                <script>

                    jQuery(function($){

                        jQuery('.wfc_cart_basket').click();

                    });

                </script>
                <?php
            }

            ?>
            <?php $wfc_sidecart_width = $scfw_comman[ 'wfc_sidecart_width'].'px'; ?>
            <div class="wfc_coupon_response" style="left: calc(100% - <?php echo $wfc_sidecart_width ; ?>);">
                <div class="wfc_inner_div" style="width:<?php echo $wfc_sidecart_width ; ?>;">
                    <span id="wfc_cpn_resp" style="width:<?php echo $wfc_sidecart_width ; ?>;"></span>
                </div>w
            </div>
            <?php
        }


        function SCFW_prod_slider_ajax_atc() {

            $product_id = apply_filters('woocommerce_add_to_cart_product_id', absint($_POST['product_id']));
            $quantity = empty($_POST['quantity']) ? 1 : wc_stock_amount($_POST['quantity']);
            $variation_id = absint($_POST['variation_id']);
            $passed_validation = apply_filters('woocommerce_add_to_cart_validation', true, $product_id, $quantity);
            $product_status = get_post_status($product_id);

            if ($passed_validation && WC()->cart->add_to_cart($product_id, $quantity, $variation_id) && 'publish' === $product_status) {

                do_action('woocommerce_ajax_added_to_cart', $product_id);

                if ('yes' === $scfw_comman['woocommerce_cart_redirect_after_add']) {
                    wc_add_to_cart_message(array($product_id => $quantity), true);
                }

                WC_AJAX :: get_refreshed_fragments();
            } else {

                $data = array(
                    'error' => true,
                    'product_url' => apply_filters('woocommerce_cart_redirect_after_error', get_permalink($product_id), $product_id));

                echo wp_send_json($data);
            }

            wp_die();
        }

    }
    SCFW_front::instance();
}