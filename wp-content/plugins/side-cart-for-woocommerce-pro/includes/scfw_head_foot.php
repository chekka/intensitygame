<?php

if (!defined('ABSPATH'))
  exit;

if (!class_exists('SCFW_head_foot')) {

    class SCFW_head_foot {

        protected static $instance;

        public static function instance() {
            if (!isset(self::$instance)) {
                self::$instance = new self();
                self::$instance->init();
            }
             return self::$instance;
        }

        function init(){
            add_action('wp_head', array( $this, 'SCFW_craete_cart' ));
            add_action( 'wp_footer', array($this, 'SCFW_single_added_to_cart_event'));
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

                                $wfc_shipping_total = $woocommerce->cart->get_cart_shipping_total();
                               

                                $wg_prodrule_mtvtion_msg_final = str_replace("{shipping_total}", $wfc_shipping_total, $wg_prodrule_mtvtion_msg); ?>
                            <p style="color:<?php echo  $scfw_comman['wfc_header_shipping_text_color']; ?>"><?php echo $wg_prodrule_mtvtion_msg_final; ?></p>
                        </div>
                    <?php } ?>
                </div>
                <?php
                echo $this->SCFW_comman();
                ?>
               <?php
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
                        <div class='wfc_total_label'>
                            <span><?php echo $scfw_comman['wfc_subtotal_txt']; ?></span>
                        </div>

                        <?php
                        $item_taxs = $woocommerce->cart->get_cart();
                        $wfc_get_totals = WC()->cart->get_totals();
                        $wfc_shipping_total = $woocommerce->cart->get_cart_shipping_total();
                        $wfc_cart_total = $wfc_get_totals['subtotal'];
                        $wfc_cart_discount = $wfc_get_totals['discount_total'];
                        $wfc_final_subtotal = $wfc_cart_total - $wfc_cart_discount;

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
                                    <?php $iteeem = WC()->cart->get_tax_totals(); ?>
                                    <?php  foreach ($iteeem as $iteeem_tac ) {
                                        //print_R($iteeem_tac->amount);
                                   
                                            echo get_woocommerce_currency_symbol().number_format($iteeem_tac->amount, 2); 
                                        } 
                                   ?>
                                        
                                </span>
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

                    <div class='wfc_coupon'>
                        <div class='wfc_apply_coupon_link' style="color: <?php echo $scfw_comman['wfc_apply_cpn_ft_clr']; ?>">
                            <a href='#' id='wfc_apply_coupon'><?php echo $scfw_comman['wfc_apply_cpn_txt']; ?></a>
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
               <!--  </div> -->

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
                           diplay:none;
                    <?php }else { ?>
                        display:block;
                       
                    <?php } ?> ?>
                    height: <?php echo $scfw_comman[ 'wfc_basket_icn_size']."px" ?>;
                    width: <?php echo $scfw_comman[ 'wfc_basket_icn_size']."px" ?>;
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
                </div>
            </div>
            <?php
        }


    }
    SCFW_head_foot::instance();
}