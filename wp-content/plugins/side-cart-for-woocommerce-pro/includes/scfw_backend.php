<?php

if (!defined('ABSPATH'))
  exit;

if (!class_exists('SCFW_admin_menu')) {

    class SCFW_admin_menu {

        protected static $SCFW_instance;

        function scfw_submenu_page() {
            add_submenu_page( 'woocommerce', 'Floating Cart', 'Floating Cart', 'manage_options', 'floating-cart',array($this, 'scfw_callback'));
        }

        

        function scfw_callback() {
            global $scfw_comman , $ocwqv_qscfw_icon;?>

                <div class="wrap">
                    <h2>Cart Setting</h2>
                    <?php if(isset($_REQUEST['message'])  && $_REQUEST['message'] == 'success'){ ?>
                        <div class="notice notice-success is-dismissible"> 
                            <p><strong>Record updated successfully.</strong></p>
                        </div>
                    <?php } ?>
                </div>
                <div class="wfc-container">
                    <form method="post" >
                        <?php wp_nonce_field( 'wfc_nonce_action', 'wfc_nonce_field' ); ?>
                        <ul class="tabs">
                            <li class="tab-link current" data-tab="wfc-tab-general"><?php echo __( 'General Settings', SCFW_DOMAIN );?></li>
                            <li class="tab-link" data-tab="wfc-tab-other"><?php echo __( 'Custom Style', SCFW_DOMAIN );?></li>
                            <li class="tab-link" data-tab="wfc-tab-translations"><?php echo __( 'Translations', SCFW_DOMAIN );?></li>
                        </ul>
                        <div id="wfc-tab-general" class="tab-content current">
                            <div class="cover_div">
                                <h2>Side cart</h2>
                                <table class="data_table">
                                    <tr>
                                        <th>Ajax Add To Cart</th>
                                        <td>
                                            <input type="checkbox" name="scfw_comman[wfc_ajax_cart]" value="yes" <?php if ($scfw_comman['wfc_ajax_cart'] == "yes" ) { echo 'checked="checked"'; } ?>>
                                            <strong>Add to cart without page refresh.</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Auto Open Cart</th>
                                        <td>
                                            <input type="checkbox" name="scfw_comman[wfc_auto_open]" value="yes" <?php if ($scfw_comman['wfc_auto_open'] == "yes" ) { echo 'checked="checked"'; } ?>>
                                            <strong>After Add to Cart Immeditaliy Open</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Trigger to class open cart </th>
                                        <td>
                                            <input type="checkbox" name="scfw_comman[wfc_trigger_class]" value="yes" <?php if ($scfw_comman['wfc_trigger_class'] == "yes" ) { echo 'checked="checked"'; } ?>>
                                            <strong>After Enable trigger then side cart open automatically</strong>
                                            <p class="wfc-tips">Note:If Enable then You need to add this class <strong>wfc_trigger</strong> where you want to add triggers.</p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div class="cover_div">
                                <h2>Cart Header</h2>
                                <table class="data_table">
                                    <tr>
                                        <th>Show in Header</th>
                                        <td>
                                            <input type="checkbox" name="scfw_comman[wfc_header_cart_icon]" value="yes" <?php if ($scfw_comman['wfc_header_cart_icon'] == "yes" ) { echo 'checked="checked"'; } ?>>
                                            <strong>Basket Icon</strong><br/>
                                            <input type="checkbox" name="scfw_comman[wfc_header_close_icon]" value="yes" <?php if ($scfw_comman['wfc_header_close_icon'] == "yes" ) { echo 'checked="checked"'; } ?>>
                                            <strong>Close Icon</strong><br/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Show Freeshipping in Header</th>
                                        <td>
                                            <input type="checkbox" name="scfw_comman[wfc_freeshiping_herder]" value="yes" <?php if ($scfw_comman['wfc_freeshiping_herder'] == "yes" ) { echo 'checked="checked"'; } ?>>
                                            <strong>Basket Icon</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Show after Freeshipping Text in Header</th>
                                        <td>
                                            <input type="text" name="scfw_comman[wfc_freeshiping_herder_txt]" value="<?php echo $scfw_comman['wfc_freeshiping_herder_txt']; ?>" >
                                            <span class="ocwg_desc">Use tag <strong>{shipping_total}</strong> for Shipping rate</span>
                                                                                
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Show Freeshipping Text in Header</th>
                                        <td>
                                            <input type="text" name="scfw_comman[wfc_freeshiping_then_herder_txt]" value="<?php echo $scfw_comman['wfc_freeshiping_then_herder_txt']; ?>" >
                                            <span class="ocwg_desc">get Freeshipping text</span>
                                                                                
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div class="cover_div">
                                <h2>Cart Loop</h2>
                                <table class="data_table">
                                    <tr>
                                        <th>Show in Loop</th>
                                        <td>
                                            <input type="checkbox" name="scfw_comman[wfc_loop_img]" value="yes" <?php if ($scfw_comman['wfc_loop_img'] == "yes" ) { echo 'checked="checked"'; } ?>>
                                            <strong>Product Image</strong><br/>
                                            <input type="checkbox" name="scfw_comman[wfc_loop_product_name]" value="yes" <?php if ($scfw_comman['wfc_loop_product_name'] == "yes" ) { echo 'checked="checked"'; } ?>>
                                            <strong>Product Name</strong><br/>
                                            <input type="checkbox" name="scfw_comman[wfc_loop_product_price]" value="yes" <?php if ($scfw_comman['wfc_loop_product_price'] == "yes" ) { echo 'checked="checked"'; } ?>>
                                            <strong>Product Price</strong><br/>
                                            <input type="checkbox" name="scfw_comman[wfc_loop_total]" value="yes" <?php if ($scfw_comman['wfc_loop_total'] == "yes" ) { echo 'checked="checked"'; } ?>>
                                            <strong>Product Total</strong><br/>
                                            <input type="checkbox" name="scfw_comman[wfc_loop_variation]" value="yes" <?php if ($scfw_comman['wfc_loop_variation'] == "yes" ) { echo 'checked="checked"'; } ?>>
                                            <strong>Product Variations</strong><br/>
                                            <input type="checkbox" name="scfw_comman[wfc_loop_link]" value="yes" <?php if ($scfw_comman['wfc_loop_link'] == "yes" ) { echo 'checked="checked"'; } ?>>
                                            <strong>Link to Product Page</strong><br/>
                                            <input type="checkbox" name="scfw_comman[wfc_loop_delete]" value="yes" <?php if ($scfw_comman['wfc_loop_delete'] == "yes" ) { echo 'checked="checked"'; } ?>>
                                            <strong>Delete Product</strong><br/>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>Display Qty Box</th>
                                        <td>
                                            <input type="checkbox" name="scfw_comman[wfc_qty_box]" value="yes" <?php if ($scfw_comman['wfc_qty_box'] == "yes" ) { echo 'checked="checked"'; } ?>>
                                            <strong>Display Product Qty box.</strong>
                                        </td>
                                    </tr>
                                    
                                </table>
                            </div>
                            <div class="cover_div">
                                <h2>Footer Settings</h2>
                                <table class="data_table">
                                    <tr>
                                        <th>Show Shipping Total </th>
                                        <td>
                                            <input type="checkbox" name="scfw_comman[wfc_total_shipping_option]" value="yes" <?php if ($scfw_comman['wfc_total_shipping_option'] == "yes" ) { echo 'checked="checked"'; } ?>>
                                            <strong>Show Shipping Total.</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Show Discount </th>
                                        <td>
                                            <input type="checkbox" name="scfw_comman[wfc_discount_show_cart]" value="yes" <?php if ($scfw_comman['wfc_discount_show_cart'] == "yes" ) { echo 'checked="checked"'; } ?>>
                                            <strong>Show Discount in cart</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Show Tax Total </th>
                                        <td>
                                            <input type="checkbox" name="scfw_comman[wfc_total_tax_option]" value="yes" <?php if ($scfw_comman['wfc_total_tax_option'] == "yes" ) { echo 'checked="checked"'; } ?>>
                                            <strong>Show Tax Total.</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Show All Total </th>
                                        <td>
                                            <input type="checkbox" name="scfw_comman[wfc_total_all_option]" value="yes" <?php if ($scfw_comman['wfc_total_all_option'] == "yes" ) { echo 'checked="checked"'; } ?>>
                                            <strong>Show All Total.</strong>
                                        </td>
                                    </tr>
                                    
                                    
                                    <tr>
                                        <th>Show ViewCart Button</th>
                                        <td>
                                            <input type="checkbox" name="scfw_comman[wfc_cart_option]" value="yes" <?php if ($scfw_comman['wfc_cart_option'] == "yes" ) { echo 'checked="checked"'; } ?>>
                                            <strong>Show Viewcart Button.</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Show Checkout Button</th>
                                        <td>
                                            <input type="checkbox" name="scfw_comman[wfc_checkout_option]" value="yes" <?php if ($scfw_comman['wfc_checkout_option'] == "yes" ) { echo 'checked="checked"'; } ?>>
                                            <strong>Show Checkout Button.</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Show Continue Shopping Button</th>
                                        <td>
                                            <input type="checkbox" name="scfw_comman[wfc_conshipping_option]" value="yes" <?php if ($scfw_comman['wfc_conshipping_option'] == "yes" ) { echo 'checked="checked"'; } ?>>
                                            <strong>Show Continue Shipping Button.</strong>
                                        </td>
                                    </tr>
                                    
                                </table>
                            </div>
                            <div class="cover_div">
                                <h2>Coupon Field</h2>
                                <table class="data_table">
                                    <tr>
                                        <th>Coupon Field on Mobile</th>
                                        <td>
                                            <input type="checkbox" name="scfw_comman[wfc_coupon_field_mobile]" value="yes" <?php if ($scfw_comman['wfc_coupon_field_mobile'] == "yes" ) { echo 'checked="checked"'; } ?>>
                                            <strong>Enable Coupon Field on Mobile</strong>
                                        </td>
                                    </tr> 
                                    
                                </table>
                            </div>
                            <div class="cover_div">
                                <h2>Cart Product Slider</h2>
                                <table class="data_table">
                                     <tr>
                                        <th>Product Slider on Desktop</th>
                                        <td>
                                            <input type="checkbox" name="scfw_comman[wfc_prodslider_desktop]" value="yes" <?php if ($scfw_comman['wfc_prodslider_desktop'] == "yes" ) { echo 'checked="checked"'; } ?>>
                                            <strong>Enable Product Slider on Desktop</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Product Slider on Mobile</th>
                                        <td>
                                            <input type="checkbox" name="scfw_comman[wfc_prodslider_mobile]" value="yes" <?php if ($scfw_comman['wfc_prodslider_mobile'] == "yes" ) { echo 'checked="checked"'; } ?>>
                                            <strong>Enable Product Slider on Mobile</strong>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>Select Product</th>
                                        <td>
                                            <select id="wfc_select_product" name="wfc_select2[]" multiple="multiple" style="width:100%;max-width:15em;">
                                                <?php 
                                                    $productsa = get_option('wfc_select2');
                                                    foreach ($productsa as $value) {
                                                        $productc = wc_get_product( $value );
                                                        if ( $productc && $productc->is_in_stock() && $productc->is_purchasable() ) {
                                                            $title = $productc->get_name();
                                                            ?>
                                                                <option value="<?php echo $value; ?>" selected="selected"><?php echo $title; ?></option>
                                                            <?php   
                                                        }
                                                    }
                                                ?>
                                           </select> 
                                        </td>
                                    </tr>   
                                </table>
                            </div>
                            <div class="cover_div">
                                <h2>Cart basket</h2>
                                <table class="data_table">
                                    <tr>
                                        <th>Enable </th>
                                        <td>
                                            <select name="scfw_comman[wfc_cart_show_hide]">
                                                    <option value="wfc_cart_show" <?php if ($scfw_comman['wfc_cart_show_hide'] == "wfc_cart_show" ) { echo 'selected'; } ?>>Always Show</option>
                                                    <option value="wfc_cart_hide" <?php if ($scfw_comman['wfc_cart_show_hide'] == "wfc_cart_hide" ) { echo 'selected'; } ?>>Always Hide</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Cart Icon</th>
                                        <td>
                                            <input type="checkbox" name="scfw_comman[wfc_show_cart_icn]" value="yes" <?php if ($scfw_comman['wfc_show_cart_icn'] == "yes" ) { echo 'checked="checked"'; } ?>>
                                            <strong>Show Cart Icon</strong>
                                        </td>
                                    </tr>   
                                    <tr>
                                        <th>On Cart & Checkout Page</th>
                                        <td>
                                            <input type="checkbox" name="scfw_comman[wfc_cart_check_page]" value="yes" <?php if ($scfw_comman['wfc_cart_check_page'] == "yes" ) { echo 'checked="checked"'; } ?>>
                                            <strong>Show Cart Basket on cart and checkout pages.</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Cart on Mobile</th>
                                        <td>
                                            <input type="checkbox" name="scfw_comman[wfc_mobile]" value="yes" <?php if ($scfw_comman['wfc_mobile'] == "yes" ) { echo 'checked="checked"'; } ?>>
                                            <strong>Show Cart on mobile device.</strong>
                                        </td>
                                    </tr> 
                                    <tr>
                                        <th>Product Count</th>
                                        <td>
                                            <input type="checkbox" name="scfw_comman[wfc_product_cnt]" value="yes" <?php if ($scfw_comman['wfc_product_cnt'] == "yes" ) { echo 'checked="checked"'; } ?>>
                                            <strong>Show Product Count.</strong>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>Basket Count Type</th>
                                        <td>
                                            <select name="scfw_comman[wfc_product_cnt_type]">
                                                    <option value="sum_qty" <?php if ($scfw_comman['wfc_product_cnt_type'] == "sum_qty" ) { echo 'selected'; } ?>>Sum of Quantity of all the products</option>
                                                    <option value="num_qty" <?php if ($scfw_comman['wfc_product_cnt_type'] == "num_qty" ) { echo 'selected'; } ?>>Number of products</option>
                                            </select>
                                        </td>
                                    </tr> 
                                    <tr>
                                        <th>Basket Product ordering</th>
                                        <td>
                                            <select name="scfw_comman[wfc_cart_ordering]">
                                                    <option value="asc" <?php if ($scfw_comman['wfc_cart_ordering'] == "asc" ) { echo 'selected'; } ?>>Recently added item at last (Asc)</option>
                                                    <option value="desc" <?php if ($scfw_comman['wfc_cart_ordering'] == "desc" ) { echo 'selected'; } ?>>Recently added item on top (Desc)</option>
                                            </select>
                                        </td>
                                    </tr> 
                                    <tr>
                                        <th>Hide Basket Pages</th>
                                        <td>
                                            <input type="text" name="scfw_comman[wfc_on_pages]" value="<?php echo $scfw_comman['wfc_on_pages'] ?>">
                                            <strong>Do not show basket on pages.</strong>
                                            <strong>Use page id separated by comma. For eg: 31,41,51</strong>
                                        </td>
                                    </tr> 
                                </table>
                            </div> 
                            <div class="cover_div">
                                <table class="data_table">
                                    <h2>All Urls Set</h2>
                                    <tr>
                                        <th>Continue Shopping Button Link</th>
                                        <td>
                                            <input type="text" name="scfw_comman[wfc_conshipping_link]" value="<?php echo $scfw_comman['wfc_conshipping_link']; ?>">
                                            <strong>Use "#" for the same page</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Empty Cart Button Link</th>
                                        <td>
                                            <input type="text" name="scfw_comman[wfc_emptycart_link]" value="<?php echo $scfw_comman['wfc_emptycart_link']; ?>">
                                            <strong>Use "#" for the same page</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Custom Cart Button Link</th>
                                        <td>
                                            <input type="text" name="scfw_comman[wfc_orgcart_link]" value="<?php echo $scfw_comman['wfc_orgcart_link']; ?>">
                                            <strong>if is empty then going cart page</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Custom checkout Button Link</th>
                                        <td>
                                            <input type="text" name="scfw_comman[wfc_orgcheckout_link]" value="<?php echo $scfw_comman['wfc_orgcheckout_link']; ?>">
                                            <strong>if is empty then going checkout page</strong>
                                        </td>
                                    </tr>
                                    
                                </table>
                            </div>  
                        </div>
                        <div id="wfc-tab-other" class="tab-content">
                            <div class="cover_div">
                                <h2>Important Setting</h2>
                                <table class="data_table">
                                    <tr>
                                        <th>Side Cart Width</th>
                                        <td>
                                            <input type="text" name="scfw_comman[wfc_sidecart_width]" value="<?php echo $scfw_comman['wfc_sidecart_width']; ?>">
                                            <strong>(in px - eg. 350)</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Side Cart Height</th>
                                        <td>
                                            <select name="scfw_comman[wfc_cart_height]">
                                                    <option value="full" <?php if ($scfw_comman['wfc_cart_height'] == "full" ) { echo 'selected'; } ?>>Full</option>
                                                    <option value="auto" <?php if ($scfw_comman['wfc_cart_height'] == "auto" ) { echo 'selected'; } ?>>Auto</option>
                                            </select>
                                        </td>
                                    </tr>
                                     <tr>
                                        <th>Open Side Cart From</th>
                                        <td>
                                            <select name="scfw_comman[wfc_cart_open_from]">
                                                    <option value="right" <?php if ($scfw_comman['wfc_cart_open_from'] == "right" ) { echo 'selected'; } ?>>Right</option>
                                                    <option value="left" <?php if ($scfw_comman['wfc_cart_open_from'] == "left" ) { echo 'selected'; } ?>>Left</option>
                                            </select>
                                        </td>
                                    </tr>

                                </table>
                            </div>
                            <div class="cover_div">
                                <h2>Header Setting</h2>
                                <table class="data_table">
                                    <tr>
                                        <th>Header Font Size</th>
                                        <td>
                                            <input type="number" name="scfw_comman[wfc_head_ft_size]" value="<?php echo $scfw_comman['wfc_head_ft_size']; ?>">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Header Font Color</th>
                                        <td>
                                            <input type="text" class="color-picker" data-alpha="true" data-default-color="<?php echo $scfw_comman['wfc_head_ft_clr'];?>" name="scfw_comman[wfc_head_ft_clr]" value="<?php echo $scfw_comman['wfc_head_ft_clr'];?>"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Header cart icon</th>
                                        <td class="ocwqv_icon_choice">
                                                
                                                <input type="radio" name="scfw_comman[oscfw_shop_icon]" value="shop_icon_1" <?php if ($scfw_comman['oscfw_shop_icon'] == "shop_icon_1" ) { echo 'checked'; } ?>>
                                                <label>
                                                   <?php echo  $ocwqv_qscfw_icon['shop_icon_1']; ?>
                                                </label>
                        
                                                <input type="radio" name="scfw_comman[oscfw_shop_icon]" value="shop_icon_2" <?php if ($scfw_comman['oscfw_shop_icon'] == "shop_icon_2" ) { echo 'checked'; } ?>>
                                                <label>
                                                      <?php echo  $ocwqv_qscfw_icon['shop_icon_2']; ?>
                                                </label>

                                                <input type="radio" name="scfw_comman[oscfw_shop_icon]" value="shop_icon_3"  <?php if ($scfw_comman['oscfw_shop_icon'] == "shop_icon_3" ) { echo 'checked'; } ?>>
                                                <label>
                                                      <?php echo $ocwqv_qscfw_icon['shop_icon_3']; ?>
                                                </label>
                                            
                                                <input type="radio" name="scfw_comman[oscfw_shop_icon]" value="shop_icon_4" <?php if ($scfw_comman['oscfw_shop_icon'] == "shop_icon_4" ) { echo 'checked'; } ?>>
                                                <label>
                                                     <?php echo  $ocwqv_qscfw_icon['shop_icon_4']; ?>
                                                </label>

                                                <input type="radio" name="scfw_comman[oscfw_shop_icon]" value="shop_icon_5"  <?php if ($scfw_comman['oscfw_shop_icon'] == "shop_icon_5" ) { echo 'checked'; } ?>>
                                                <label>
                                                   <?php echo  $ocwqv_qscfw_icon['shop_icon_5']; ?>
                                                </label> 

                                                <input type="radio" name="scfw_comman[oscfw_shop_icon]" value="shop_icon_6"  <?php if ($scfw_comman['oscfw_shop_icon'] == "shop_icon_6" ) { echo 'checked'; } ?>>
                                                <label>
                                                    <?php echo  $ocwqv_qscfw_icon['shop_icon_6']; ?>
                                                </label>
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <th>Header cart icon Color</th>
                                        <td>
                                            <input type="text" class="color-picker" data-alpha="true" data-default-color="<?php echo $scfw_comman['wfc_header_cart_icon_clr']; ?>" name="scfw_comman[wfc_header_cart_icon_clr]" value="<?php echo $scfw_comman['wfc_header_cart_icon_clr']; ?>"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Header cart icon</th>
                                        <td class="ocwqv_icon_choice_close">
                                                
                                                <input type="radio" name="scfw_comman[oscfw_close_icon]" value="close_icon" <?php if ($scfw_comman['oscfw_close_icon'] == "close_icon" ) { echo 'checked'; } ?>>
                                                <label>
                                                   <?php echo  $ocwqv_qscfw_icon['close_icon']; ?>
                                                </label>
                        
                                                <input type="radio" name="scfw_comman[oscfw_close_icon]" value="close_icon_1" <?php if ($scfw_comman['oscfw_close_icon'] == "close_icon_1" ) { echo 'checked'; } ?>>
                                                <label>
                                                      <?php echo  $ocwqv_qscfw_icon['close_icon_1']; ?>
                                                </label>

                                                <input type="radio" name="scfw_comman[oscfw_close_icon]" value="close_icon_2"  <?php if ($scfw_comman['oscfw_close_icon'] == "close_icon_2" ) { echo 'checked'; } ?>>
                                                <label>
                                                      <?php echo $ocwqv_qscfw_icon['close_icon_2']; ?>
                                                </label>
                                            
                                                <input type="radio" name="scfw_comman[oscfw_close_icon]" value="close_icon_3" <?php if ($scfw_comman['oscfw_close_icon'] == "close_icon_3" ) { echo 'checked'; } ?>>
                                                <label>
                                                     <?php echo  $ocwqv_qscfw_icon['close_icon_3']; ?>
                                                </label>

                                                <input type="radio" name="scfw_comman[oscfw_close_icon]" value="close_icon_4"  <?php if ($scfw_comman['oscfw_close_icon'] == "close_icon_4" ) { echo 'checked'; } ?>>
                                                <label>
                                                   <?php echo  $ocwqv_qscfw_icon['close_icon_4']; ?>
                                                </label> 
                                                <input type="radio" name="scfw_comman[oscfw_close_icon]" value="close_icon_5"  <?php if ($scfw_comman['oscfw_close_icon'] == "close_icon_5" ) { echo 'checked'; } ?>>
                                                <label>
                                                   <?php echo  $ocwqv_qscfw_icon['close_icon_5']; ?>
                                                </label> 

                                        </td>
                                        
                                    </tr>
                                     <tr>
                                        <th>Header Close icon Color</th>
                                        <td>
                                            <input type="text" class="color-picker" data-alpha="true" data-default-color="<?php echo $scfw_comman['wfc_header_close_icon_clr']; ?>" name="scfw_comman[wfc_header_close_icon_clr]" value="<?php echo $scfw_comman['wfc_header_close_icon_clr']; ?>"/>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>Show Freeshipping Text in Header color</th>
                                        <td>
                                            <input type="text" class="color-picker" data-alpha="true" data-default-color="<?php echo $scfw_comman['wfc_header_shipping_text_color']; ?>" name="scfw_comman[wfc_header_shipping_text_color]" value="<?php echo $scfw_comman['wfc_header_shipping_text_color']; ?>"/>
                                        </td>
                                    </tr>
                                    

                                </table>
                            </div>
                            <div class="cover_div">
                                <h2>Cart Loop Setting</h2>
                                <table class="data_table">
                                    <tr>
                                        <th>Product Title Font Size</th>
                                        <td>
                                            <input type="number" name="scfw_comman[wfc_product_ft_size]" value="<?php echo $scfw_comman['wfc_product_ft_size']; ?>">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Product Title Font Color</th>
                                        <td>
                                            <input type="text" class="color-picker" data-alpha="true" data-default-color="<?php echo $scfw_comman['wfc_product_ft_clr']; ?>" name="scfw_comman[wfc_product_ft_clr]" value="<?php echo $scfw_comman['wfc_product_ft_clr']; ?>"/>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                             <div class="cover_div">
                                <h2>Empty Cart</h2>
                                <table class="data_table">
                                    <tr>
                                        <th>Cart Empty show/hide all cart detail</th>
                                        <td>
                                            <select name="scfw_comman[wfc_cart_empty_hide_show]">
                                                    <option value="show" <?php if ($scfw_comman['wfc_cart_empty_hide_show'] == "show" ) { echo 'selected'; } ?>>Show All Detail</option>
                                                    <option value="hide" <?php if ($scfw_comman['wfc_cart_empty_hide_show'] == "hide" ) { echo 'selected'; } ?>>Hide All Detail</option>
                                            </select>
                                        </td>
                                    </tr>
                                
                                </table>
                            </div>
                            <div class="cover_div">
                                <h2>Side cart</h2>
                                <table class="data_table">
                                    <tr>
                                        <td>
                                            <h3>Delete Setting</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Delete Icons</th>
                                        <td class="ocwqv_icon_choice">
                                                <input type="radio" name="scfw_comman[oscfw_delete_icon]" value="ocwqv_trash" <?php if ($scfw_comman['oscfw_delete_icon'] == "ocwqv_trash" ) { echo 'checked'; } ?>>
                                                <label>
                                                      <?php echo  $ocwqv_qscfw_icon['ocwqv_trash']; ?>
                                                </label>
                                                <input type="radio" name="scfw_comman[oscfw_delete_icon]" value="trash_1" <?php if ($scfw_comman['oscfw_delete_icon'] == "trash_1" ) { echo 'checked'; } ?>>
                                                <label>
                                                   <?php echo  $ocwqv_qscfw_icon['trash_1']; ?>
                                                </label>
                        
                                                <input type="radio" name="scfw_comman[oscfw_delete_icon]" value="trash_2" <?php if ($scfw_comman['oscfw_delete_icon'] == "trash_2" ) { echo 'checked'; } ?>>
                                                <label>
                                                      <?php echo  $ocwqv_qscfw_icon['trash_2']; ?>
                                                </label>

                                                <input type="radio" name="scfw_comman[oscfw_delete_icon]" value="trash_3"  <?php if ($scfw_comman['oscfw_delete_icon'] == "trash_3" ) { echo 'checked'; } ?>>
                                                <label>
                                                      <?php echo $ocwqv_qscfw_icon['trash_3']; ?>
                                                </label>
                                            
                                                <input type="radio" name="scfw_comman[oscfw_delete_icon]" value="trash_4" <?php if ($scfw_comman['oscfw_delete_icon'] == "trash_4" ) { echo 'checked'; } ?>>
                                                <label>
                                                     <?php echo  $ocwqv_qscfw_icon['trash_4']; ?>
                                                </label>

                                                <input type="radio" name="scfw_comman[oscfw_delete_icon]" value="trash_5"  <?php if ($scfw_comman['oscfw_delete_icon'] == "trash_5" ) { echo 'checked'; } ?>>
                                                <label>
                                                   <?php echo  $ocwqv_qscfw_icon['trash_5']; ?>
                                                </label> 

                                                <input type="radio" name="scfw_comman[oscfw_delete_icon]" value="trash_6"  <?php if ($scfw_comman['oscfw_delete_icon'] == "trash_6" ) { echo 'checked'; } ?>>
                                                <label>
                                                    <?php echo  $ocwqv_qscfw_icon['trash_6']; ?>
                                                </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Delete icon Color</th>
                                        <td>
                                            <input type="text" class="color-picker" data-alpha="true" data-default-color="<?php echo $scfw_comman['wfc_delect_icon_clr']; ?>" name="scfw_comman[wfc_delect_icon_clr]" value="<?php echo $scfw_comman['wfc_delect_icon_clr']; ?>"/>
                                        </td>
                                    </tr>
                                     <tr>
                                        <td>
                                            <h3>Coupon Field Settings</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Coupon icon</th>
                                        <td class="ocwqv_icon_choice">
                                               
                                                <input type="radio" name="scfw_comman[scfw_coupon_icon]" value="coupon" <?php if ($scfw_comman['scfw_coupon_icon'] == "coupon" ) { echo 'checked'; } ?>>
                                                <label>
                                                   <?php echo  $ocwqv_qscfw_icon['coupon']; ?>
                                                </label>
                        
                                                <input type="radio" name="scfw_comman[scfw_coupon_icon]" value="coupon_1" <?php if ($scfw_comman['scfw_coupon_icon'] == "coupon_1" ) { echo 'checked'; } ?>>
                                                <label>
                                                      <?php echo  $ocwqv_qscfw_icon['coupon_1']; ?>
                                                </label>

                                                <input type="radio" name="scfw_comman[scfw_coupon_icon]" value="coupon_2"  <?php if ($scfw_comman['scfw_coupon_icon'] == "coupon_2" ) { echo 'checked'; } ?>>
                                                <label>
                                                      <?php echo $ocwqv_qscfw_icon['coupon_2']; ?>
                                                </label>
                                            
                                                <input type="radio" name="scfw_comman[scfw_coupon_icon]" value="coupon_3" <?php if ($scfw_comman['scfw_coupon_icon'] == "coupon_3" ) { echo 'checked'; } ?>>
                                                <label>
                                                     <?php echo  $ocwqv_qscfw_icon['coupon_3']; ?>
                                                </label>

                                                <input type="radio" name="scfw_comman[scfw_coupon_icon]" value="coupon_4"  <?php if ($scfw_comman['scfw_coupon_icon'] == "coupon_4" ) { echo 'checked'; } ?>>
                                                <label>
                                                   <?php echo  $ocwqv_qscfw_icon['coupon_4']; ?>
                                                </label> 

                                                <input type="radio" name="scfw_comman[scfw_coupon_icon]" value="coupon_5"  <?php if ($scfw_comman['scfw_coupon_icon'] == "coupon_5" ) { echo 'checked'; } ?>>
                                                <label>
                                                    <?php echo  $ocwqv_qscfw_icon['coupon_5']; ?>
                                                </label>
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <th>Apply Coupon icon Color</th>
                                        <td>
                                            <input type="text" class="color-picker" data-alpha="true" data-default-color="<?php echo $scfw_comman['wfc_apply_cpn_icon_clr']; ?>" name="scfw_comman[wfc_apply_cpn_icon_clr]" value="<?php echo $scfw_comman['wfc_apply_cpn_icon_clr']; ?>"/>
                                        </td>
                                    </tr> 
                                   
                                    <tr>
                                        <th>Apply Coupon Font Color</th>
                                        <td>
                                            <input type="text" class="color-picker" data-alpha="true" data-default-color="<?php echo $scfw_comman['wfc_apply_cpn_ft_clr']; ?>" name="scfw_comman[wfc_apply_cpn_ft_clr]" value="<?php echo $scfw_comman['wfc_apply_cpn_ft_clr']; ?>"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Apply Button Text Color</th>
                                        <td>
                                            <input type="text" class="color-picker" data-alpha="true" data-default-color="<?php echo $scfw_comman['wfc_applybtn_cpn_ft_clr']; ?>" name="scfw_comman[wfc_applybtn_cpn_ft_clr]" value="<?php echo $scfw_comman['wfc_applybtn_cpn_ft_clr']; ?>"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Apply Button Background Color</th>
                                        <td>
                                            <input type="text" class="color-picker" data-alpha="true" data-default-color="<?php echo $scfw_comman['wfc_applybtn_cpn_bg_clr']; ?>" name="scfw_comman[wfc_applybtn_cpn_bg_clr]" value="<?php echo $scfw_comman['wfc_applybtn_cpn_bg_clr']; ?>"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h3>Slider Product Settings</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Product Font Size</th>
                                        <td>
                                            <input type="number" name="scfw_comman[wfc_sld_product_ft_size]" value="<?php echo $scfw_comman['wfc_sld_product_ft_size']; ?>">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Product Font Color</th>
                                        <td>
                                            <input type="text" class="color-picker" data-alpha="true" data-default-color="<?php echo $scfw_comman['wfc_sld_product_ft_clr']; ?>" name="scfw_comman[wfc_sld_product_ft_clr]" value="<?php echo $scfw_comman['wfc_sld_product_ft_clr']; ?>"/>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div class="cover_div">
                                <h2>Shipping Text Customize</h2>
                                <table class="data_table">
                                     <tr>
                                        <th>Shipping Text</th>
                                        <td>
                                            <input type="text" name="scfw_comman[wfc_ship_txt]" value="<?php echo $scfw_comman['wfc_ship_txt']; ?>">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Shipping Text Font Size</th>
                                        <td>
                                            <input type="number" name="wfc_ship_ft_size" value="<?php echo $scfw_comman['wfc_ship_ft_size']; ?>">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Shipping Text Font Color</th>
                                        <td>
                                            <input type="text" class="color-picker" data-alpha="true" data-default-color="<?php echo $scfw_comman['wfc_ship_ft_clr']; ?>" name="scfw_comman[wfc_ship_ft_clr]" value="<?php echo $scfw_comman['wfc_ship_ft_clr']; ?>"/>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <div class="cover_div">
                                <h2>Footer Button Settings</h2>
                                <table class="data_table">
                                    <tr>
                                        <th>Button Row</th>
                                        <td>
                                            <select name="scfw_comman[wfc_footer_button_row]">
                                                <option value="one" <?php if($scfw_comman['wfc_footer_button_row'] == "one"){ echo "selected"; } ?>>One in a row ( 1+1+1 )</option>
                                                <option value="two_one" <?php if($scfw_comman['wfc_footer_button_row'] == "two_one"){ echo "selected"; } ?>>Two in first row ( 2 + 1 )</option>
                                                <option value="one_two" <?php if($scfw_comman['wfc_footer_button_row'] == "one_two"){ echo "selected"; } ?>>Two in last row ( 1 + 2 )</option>
                                                <option value="three" <?php if($scfw_comman['wfc_footer_button_row'] == "three"){ echo "selected"; } ?>>Three in one row( 3 )</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Footer Buttons Color</th>
                                        <td>
                                            <input type="text" class="color-picker" data-alpha="true" data-default-color="<?php echo $scfw_comman['wfc_ft_btn_clr']; ?>" name="scfw_comman[wfc_ft_btn_clr]" value="<?php echo $scfw_comman['wfc_ft_btn_clr']; ?>"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Footer Buttons Text Color</th>
                                        <td>
                                            <input type="text" class="color-picker" data-alpha="true" data-default-color="<?php echo $scfw_comman['wfc_ft_btn_txt_clr']; ?>" name="wfc_ft_btn_txt_clr" value="<?php echo $scfw_comman['wfc_ft_btn_txt_clr']; ?>"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Footer Buttons Margin</th>
                                        <td>
                                            <input type="number" name="scfw_comman[wfc_ft_btn_mrgin]" value="<?php echo $scfw_comman['wfc_ft_btn_mrgin']; ?>">
                                        </td>
                                    </tr>
                                </table>
                            </div>              
                            <div class="cover_div">
                                <h2>Cart basket</h2>
                                <table class="data_table">
                                    <tr>
                                            <th>Side cart Basket Icon</th>

                                            <td class="ocwqv_icon_choice">
                                                <input type="radio" name="scfw_comman[ocwqv_scfw_icon]" value="ocwqv_qscfw_icon" <?php if ($scfw_comman['ocwqv_scfw_icon'] == "ocwqv_qscfw_icon" ) { echo 'checked'; } ?>>
                                                <label>
                                                      <?php echo  $ocwqv_qscfw_icon['ocwqv_qscfw_icon']; ?>
                                                </label>
                                                <input type="radio" name="scfw_comman[ocwqv_scfw_icon]" value="ocwqv_scfw_icon_1" <?php if ($scfw_comman['ocwqv_scfw_icon'] == "ocwqv_scfw_icon_1" ) { echo 'checked'; } ?>>
                                                <label>
                                                   <?php echo  $ocwqv_qscfw_icon['ocwqv_scfw_icon_1']; ?>
                                                </label>
                        
                                                <input type="radio" name="scfw_comman[ocwqv_scfw_icon]" value="ocwqv_scfw_icon_4" <?php if ($scfw_comman['ocwqv_scfw_icon'] == "ocwqv_scfw_icon_4" ) { echo 'checked'; } ?>>
                                                <label>
                                                      <?php echo  $ocwqv_qscfw_icon['ocwqv_scfw_icon_4']; ?>
                                                </label>

                                                <input type="radio" name="scfw_comman[ocwqv_scfw_icon]" value="ocwqv_scfw_icon_2"  <?php if ($scfw_comman['ocwqv_scfw_icon'] == "ocwqv_scfw_icon_2" ) { echo 'checked'; } ?>>
                                                <label>
                                                      <?php echo $ocwqv_qscfw_icon['ocwqv_scfw_icon_2']; ?>
                                                </label>
                                            
                                                <input type="radio" name="scfw_comman[ocwqv_scfw_icon]" value="ocwqv_scfw_icon_5" <?php if ($scfw_comman['ocwqv_scfw_icon'] == "ocwqv_scfw_icon_5" ) { echo 'checked'; } ?>>
                                                <label>
                                                     <?php echo  $ocwqv_qscfw_icon['ocwqv_scfw_icon_5']; ?>
                                                </label>

                                                <input type="radio" name="scfw_comman[ocwqv_scfw_icon]" value="ocwqv_scfw_icon_3"  <?php if ($scfw_comman['ocwqv_scfw_icon'] == "ocwqv_scfw_icon_3" ) { echo 'checked'; } ?>>
                                                <label>
                                                   <?php echo  $ocwqv_qscfw_icon['ocwqv_scfw_icon_3']; ?>
                                                </label> 

                                                <input type="radio" name="scfw_comman[ocwqv_scfw_icon]" value="ocwqv_scfw_icon_6"  <?php if ($scfw_comman['ocwqv_scfw_icon'] == "ocwqv_scfw_icon_6" ) { echo 'checked'; } ?>>
                                                <label>
                                                    <?php echo  $ocwqv_qscfw_icon['shop_icon_4']; ?>
                                                </label>
                                            </td>
                                    </tr>
                                    <tr>
                                        <th>Side cart Basket Shape</th>
                                        <td>
                                            <select name="scfw_comman[wfc_basket_shape]">
                                                <option value="square" <?php  if($scfw_comman['wfc_basket_shape'] == "square" || empty($scfw_comman['wfc_basket_shape'])){ echo "selected"; } ?>>Square</option>
                                                <option value="round" <?php if($scfw_comman['wfc_basket_shape'] == "round"){ echo "selected"; } ?>>Round</option>
                                                
                                            </select>
                                        </td>
                                    </tr> 
                                    <tr>
                                        <th>Basket Position</th>
                                        <td>
                                            <select name="scfw_comman[wfc_basket_position]">
                                                <option value="top" <?php if($scfw_comman['wfc_basket_position'] == "top"){ echo "selected"; } ?>>Top</option>
                                                <option value="bottom" <?php  if($scfw_comman['wfc_basket_position'] == "bottom" || empty($scfw_comman['wfc_basket_position'])){ echo "selected"; } ?>>Bottom</option>
                                            </select>
                                        </td>
                                    </tr> 
                                    <tr>
                                        <th>Basket Count  Position</th>
                                        <td>
                                            <select name="scfw_comman[wfc_basket_count_position]">
                                                <option value="top-left" <?php if($scfw_comman['wfc_basket_count_position'] == "top"){ echo "selected"; } ?>>Top Left</option>
                                                <option value="bottom-right" <?php  if($scfw_comman['wfc_basket_count_position'] == "bottom-right" || empty($scfw_comman['wfc_basket_count_position'])){ echo "selected"; } ?>>Bottom Right</option>
                                                <option value="bottom-left" <?php if($scfw_comman['wfc_basket_count_position'] == "bottom-left"){ echo "selected"; } ?>>Bottom Left</option>
                                                <option value="top-right" <?php  if($scfw_comman['wfc_basket_count_position'] == "top-right" || empty($scfw_comman['wfc_basket_count_position'])){ echo "selected"; } ?>>Top-right</option>
                                            </select>
                                        </td>
                                    </tr>     
                                    
                                   
                                    <tr>
                                        <th>Basket Icon Size</th>
                                        <td>
                                            <input type="number" name="scfw_comman[wfc_basket_icn_size]" value="<?php echo $scfw_comman['wfc_basket_icn_size']; ?>">
                                        </td>
                                    </tr> 
                                    <tr>
                                        <th>Basket Offset ↨</th>
                                        <td>
                                           <input type="number" name="scfw_comman[wfc_basket_off_vertical]" value="<?php echo $scfw_comman['wfc_basket_off_vertical']; ?>">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Basket Offset ⟷</th>
                                        <td>
                                           <input type="number" name="scfw_comman[wfc_basket_off_horizontal]" value="<?php echo $scfw_comman['wfc_basket_off_horizontal']; ?>">
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>Basket Background Color</th>
                                        <td>
                                            <input type="text" class="color-picker" data-alpha="true" data-default-color="<?php echo $scfw_comman['wfc_basket_bg_clr']; ?>" name="scfw_comman[wfc_basket_bg_clr]" value="<?php echo $scfw_comman['wfc_basket_bg_clr']; ?>"/>
                                        </td>

                                    </tr>
                                    <tr>
                                        <th>Basket Color</th>
                                        <td>
                                            <input type="text" class="color-picker" data-alpha="true" data-default-color="<?php echo $scfw_comman['wfc_basket_clr']; ?>" name="scfw_comman[wfc_basket_clr]" value="<?php echo $scfw_comman['wfc_basket_clr']; ?>"/>
                                        </td>

                                    </tr>
                                    <tr>
                                        <th>Count Background Color</th>
                                        <td>
                                            <input type="text" class="color-picker" data-alpha="true" data-default-color="<?php echo $scfw_comman['wfc_cnt_bg_clr']; ?>" name="scfw_comman[wfc_cnt_bg_clr]" value="<?php echo $scfw_comman['wfc_cnt_bg_clr']; ?>"/>
                                        </td>
                                    </tr> 
                                    <tr>
                                        <th>Count Text Color</th>
                                        <td>
                                            <input type="text" class="color-picker" data-alpha="true" data-default-color="<?php echo $scfw_comman['wfc_cnt_txt_clr']; ?>" name="scfw_comman[wfc_cnt_txt_clr]" value="<?php echo $scfw_comman['wfc_cnt_txt_clr']; ?>"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Count Text Size</th>
                                        <td>
                                            <input type="number" name="scfw_comman[wfc_cnt_txt_size]" value="<?php echo $scfw_comman['wfc_cnt_txt_size']; ?>">
                                        </td>
                                    </tr> 
                                    
                                </table>
                            </div>
                        </div>
                        <div id="wfc-tab-translations" class="tab-content">
                            <div class="cover_div">
                                <h2>Translations</h2>
                                <table class="data_table">
                                    <tr>
                                        <td>
                                            <h3>Title Settings</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Head Title</th>
                                        <td>
                                            <input type="text" name="scfw_comman[wfc_head_title]" value="<?php echo $scfw_comman['wfc_head_title']; ?>">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>QTY Text</th>
                                        <td>
                                            <input type="text" name="scfw_comman[wfc_qty_text]" value="<?php echo $scfw_comman['wfc_qty_text']; ?>">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h3>Coupon Settings</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Cart is empty Text</th>
                                        <td>
                                            <input type="text" name="scfw_comman[wfc_cart_is_empty]" value="<?php echo $scfw_comman['wfc_cart_is_empty']; ?>">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Apply Coupon Text</th>
                                        <td>
                                            <input type="text" name="scfw_comman[wfc_apply_cpn_txt]" value="<?php echo $scfw_comman['wfc_apply_cpn_txt']; ?>">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Apply Coupon Placeholder Text</th>
                                        <td>
                                            <input type="text" name="scfw_comman[wfc_apply_cpn_plchldr_txt]" value="<?php echo $scfw_comman['wfc_apply_cpn_plchldr_txt']; ?>">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Apply Coupon Apply Button Text</th>
                                        <td>
                                            <input type="text" name="scfw_comman[wfc_apply_cpn_apbtn_txt]" value="<?php echo $scfw_comman['wfc_apply_cpn_apbtn_txt']; ?>">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Coupon Field Empty Text</th>
                                        <td>
                                            <input type="text" name="scfw_comman[wfc_cpnfield_empty_txt]" value="<?php echo $scfw_comman['wfc_cpnfield_empty_txt']; ?>">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Coupon Already Applied Text</th>
                                        <td>
                                            <input type="text" name="scfw_comman[wfc_cpn_alapplied_txt]" value="<?php echo $scfw_comman['wfc_cpn_alapplied_txt']; ?>">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Invalid Coupon Code Text</th>
                                        <td>
                                            <input type="text" name="scfw_comman[wfc_invalid_coupon_txt]" value="<?php echo $scfw_comman['wfc_invalid_coupon_txt']; ?>">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Coupon Applied Successfully Text</th>
                                        <td>
                                            <input type="text" name="scfw_comman[wfc_coupon_applied_suc_txt]" value="<?php echo $scfw_comman['wfc_coupon_applied_suc_txt']; ?>">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Coupon Removed Successfully Text</th>
                                        <td>
                                            <input type="text" name="scfw_comman[wfc_coupon_removed_suc_txt]" value="<?php echo $scfw_comman['wfc_coupon_removed_suc_txt']; ?>">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h3>Product Slider Settings</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Add to Cart Button Text</th>
                                        <td>
                                            <input type="text" name="scfw_comman[wfc_slider_atcbtn_txt]" value="<?php echo $scfw_comman['wfc_slider_atcbtn_txt']; ?>">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>View Options Button Text</th>
                                        <td>
                                            <input type="text" name="scfw_comman[wfc_slider_vwoptbtn_txt]" value="<?php echo $scfw_comman['wfc_slider_vwoptbtn_txt']; ?>">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h3>Cart Footer Settings</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Subtotal Text</th>
                                        <td>
                                            <input type="text" name="scfw_comman[wfc_subtotal_txt]" value="<?php echo $scfw_comman['wfc_subtotal_txt']; ?>">
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <th>View Cart Button Text</th>
                                        <td>
                                            <input type="text" name="scfw_comman[wfc_cart_txt]" value="<?php echo $scfw_comman['wfc_cart_txt']; ?>">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Checkout Button Text</th>
                                        <td>
                                            <input type="text" name="scfw_comman[wfc_checkout_txt]" value="<?php echo $scfw_comman['wfc_checkout_txt']; ?>">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Continue Shopping Button Text</th>
                                        <td>
                                            <input type="text" name="scfw_comman[wfc_conshipping_txt]" value="<?php echo $scfw_comman['wfc_conshipping_txt']; ?>">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Shipping</th>
                                        <td>
                                            <input type="text" name="scfw_comman[wfc_shipping_text_trans]" value="<?php echo $scfw_comman['wfc_shipping_text_trans']; ?>">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Tax</th>
                                        <td>
                                            <input type="text" name="scfw_comman[wfc_apply_taxt_testx]" value="<?php echo $scfw_comman['wfc_apply_taxt_testx']; ?>">
                                        </td>
                                    </tr>
                                     <tr>
                                        <th>Discount Text</th>
                                        <td>
                                            <input type="text" name="scfw_comman[wfc_discount_text_trans]" value="<?php echo $scfw_comman['wfc_discount_text_trans']; ?>">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Total</th>
                                        <td>
                                            <input type="text" name="scfw_comman[wfc_apply_total_text]" value="<?php echo $scfw_comman['wfc_apply_total_text']; ?>">
                                        </td>
                                    </tr>

                                </table>
                            </div>
                        </div>
                        <input type="hidden" name="action" value="wfc_save_option">
                        <input type="submit" value="Save changes" name="submit" class="button-primary" id="wfc-btn-space">
                    </form>  
                </div>
            <?php
        }

        function scfw_recursive_sanitize_text_field($array) {  
            if(!empty($array)) {
                foreach ( $array as $key => $value ) {
                    if ( is_array( $value ) ) {
                        $value = $this->scfw_recursive_sanitize_text_field($value);
                    }else{
                        $value = sanitize_text_field( $value );
                    }
                }
            }
            return $array;
        }

        function scfw_save_options() {


                 



     if( current_user_can('administrator') ) {

 
                if(isset($_REQUEST['action']) && $_REQUEST['action'] == 'wfc_save_option') {
                    if(!isset( $_POST['wfc_nonce_field'] ) || !wp_verify_nonce( $_POST['wfc_nonce_field'], 'wfc_nonce_action' ) ){
                        print 'Sorry, your nonce did not verify.';
                        exit;
                    } else {

                        if(!empty($_REQUEST['scfw_comman'])){
                            $isecheckbox = array(
                                'wfc_header_cart_icon',
                                'wfc_header_close_icon',
                                'wfc_freeshiping_herder',
                                'wfc_loop_img',
                                'wfc_loop_product_name',
                                'wfc_loop_product_price',
                                'wfc_loop_total',
                                'wfc_loop_variation',
                                'wfc_loop_link',
                                'wfc_loop_delete',
                                'wfc_auto_open',
                                'wfc_trigger_class',
                                'wfc_ajax_cart',
                                'wfc_qty_box',
                                'wfc_total_shipping_option',
                                'wfc_discount_show_cart',
                                'wfc_total_tax_option',
                                'wfc_total_all_option',
                                'wfc_cart_option',
                                'wfc_checkout_option',
                                'wfc_conshipping_option',
                                'wfc_coupon_field_mobile',
                                'wfc_prodslider_desktop',
                                'wfc_prodslider_mobile',
                                'wfc_show_cart_icn',
                                'wfc_cart_check_page',
                                'wfc_mobile',
                                'wfc_product_cnt',

                            );

                            foreach ($isecheckbox as $key_isecheckbox => $value_isecheckbox) {
                                if(!isset($_REQUEST['scfw_comman'][$value_isecheckbox])){
                                    $_REQUEST['scfw_comman'][$value_isecheckbox] ='no';
                                }
                            }
                            
                            foreach ($_REQUEST['scfw_comman'] as $key_scfw_comman => $value_scfw_comman) {
                                update_option($key_scfw_comman, sanitize_text_field($value_scfw_comman), 'yes');
                            }
                        }

                        if(isset($_REQUEST['wfc_select2'])) {
                            $scfw_select2 = $this->scfw_recursive_sanitize_text_field($_REQUEST['wfc_select2'] );
                            update_option('wfc_select2', $scfw_select2, 'yes');
                        }


                        wp_redirect( admin_url( '/admin.php?page=floating-cart' ) );
                        exit;
                    }
                }
            }
        }

        function scfw_product_ajax() {
          
            $return = array();
            $post_types = array( 'product','product_variation');

            $search_results = new WP_Query( array( 
                's'=> sanitize_text_field($_GET['q']),
                'post_status' => 'publish',
                'post_type' => $post_types,
                'posts_per_page' => -1,
                'meta_query' => array(
                                    array(
                                        'key' => '_stock_status',
                                        'value' => 'instock',
                                        'compare' => '=',
                                    )
                                )
                ) );
             

            if( $search_results->have_posts() ) :
               while( $search_results->have_posts() ) : $search_results->the_post();   
                  $productc = wc_get_product( $search_results->post->ID );
                  if ( $productc && $productc->is_in_stock() && $productc->is_purchasable() ) {
                     $title = $search_results->post->post_title;
                     $price = $productc->get_price_html();
                     $return[] = array( $search_results->post->ID, $title, $price);   
                  }
               endwhile;
            endif;
            echo json_encode( $return );
            die;
        }

        function SCFW_support_and_rating_notice() {
            $screen = get_current_screen();
             // print_r($screen);
            if( 'woocommerce_page_floating-cart' == $screen->base) {
                ?>
                <div class="scfw_ratess_open">
                    <div class="scfw_rateus_notice">
                        <div class="scfw_rtusnoti_left">
                            <h3>Rate Us</h3>
                            <label>If you like our plugin, </label>
                            <a target="_blank" href="https://wordpress.org/support/plugin/side-cart-for-woocommerce/reviews/?filter=5">
                                <label>Please vote us</label>
                            </a>
                            <label>, so we can contribute more features for you.</label>
                        </div>
                        <div class="scfw_rtusnoti_right">
                            <img src="<?php echo SCFW_PLUGIN_DIR;?>/images/review.png" class="scfw_review_icon">
                        </div>
                    </div>
                    <div class="scfw_support_notice">
                        <div class="scfw_rtusnoti_left">
                            <h3>Having Issues?</h3>
                            <label>You can contact us at</label>
                            <a target="_blank" href="https://www.xeeshop.com/support-us/?utm_source=aj_plugin&utm_medium=plugin_support&utm_campaign=aj_support&utm_content=aj_wordpress">
                                <label>Our Support Forum</label>
                            </a>
                        </div>
                        <div class="scfw_rtusnoti_right">
                            <img src="<?php echo SCFW_PLUGIN_DIR;?>/images/support.png" class="scfw_review_icon">
                        </div>
                    </div>
                </div>
                <div class="scfw_donate_main">
                   <img src="<?php echo SCFW_PLUGIN_DIR;?>/images/coffee.svg">
                   <h3>Buy me a Coffee !</h3>
                   <p>If you like this plugin, buy me a coffee and help support this plugin !</p>
                   <div class="scfw_donate_form">
                      <a class="button button-primary ocwg_donate_btn" href="https://www.paypal.com/paypalme/shayona163/" data-link="https://www.paypal.com/paypalme/shayona163/" target="_blank">Buy me a coffee !</a>
                   </div>
                </div>
                <?php
            }
        }

        function init() {
            add_action( 'admin_menu',  array($this, 'scfw_submenu_page'));
            add_action( 'init',  array($this, 'scfw_save_options'));
            add_action( 'wp_ajax_nopriv_WFC_product_ajax',array($this, 'scfw_product_ajax') );
            add_action( 'wp_ajax_WFC_product_ajax', array($this, 'scfw_product_ajax') );
             add_action( 'admin_notices', array($this, 'SCFW_support_and_rating_notice' ));
        }

        public static function SCFW_instance() {
            if (!isset(self::$SCFW_instance)) {
                self::$SCFW_instance = new self();
                self::$SCFW_instance->init();
            }
            return self::$SCFW_instance;
        }
    }
    SCFW_admin_menu::SCFW_instance();
}