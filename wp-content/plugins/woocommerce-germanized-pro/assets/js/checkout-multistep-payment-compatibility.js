window.germanized = window.germanized || {};

( function( $, germanized ) {

    germanized.multistep_checkout_payment_compatibility = {
        params: {},

        init: function() {
            this.params = wc_gzdp_multistep_checkout_payment_compatibility_params;

            $( document )
                .on( 'click', '.next-step-button', this.onClickNextStep )
                .on( 'click', '.prev-step-button', this.onClickPrevStep )
                .on( 'refresh', '.step-wrapper', this.onClickNextStep );

            $( document.body )
                .on( 'wc_gzdp_step_changed', this.onStepChanged )
                .on( 'updated_checkout', this.onUpdateCheckout );

            $( 'form.checkout' ).on( 'checkout_place_order', this.onCheckoutPlaceOrderEvent );
        },

        onCheckoutPlaceOrderEvent: function() {
            var self          = germanized.multistep_checkout_payment_compatibility,
                $currentStep  = $( '.step-wrapper-active' ),
                currentStepId = $currentStep.data( 'id' );

            /**
             * On submitting the payment step: Listen to the checkout_error event to
             * check whether the current payment gateway produces error messages (e.g. through JS CC form validation).
             * In case an empty error message is returned (e.g. as a response to our custom AJAX failure event on step trigger)
             * pass on to the third step by manually forcing to change the step and remove the error message.
             */
            if ( 'payment' === currentStepId && self.needsPaymentStepBlock() ) {
                $( document.body ).on( 'checkout_error', function() {
                    var $currentStep  = $( '.step-wrapper-active' ),
                        currentStepId = $currentStep.data( 'id' );

                    if ( 'payment' === currentStepId && ! germanized.multistep_checkout.checkoutHasErrors() && self.needsPaymentStepBlock() ) {
                        $( '.woocommerce-NoticeGroup-checkout, .woocommerce-error, .woocommerce-message' ).remove();
                        $( '.step-order' ).trigger( 'change', $( '.step-order' ) );
                    }
                } );
            }
        },

        needsPaymentStepBlock: function() {
            var self    = germanized.multistep_checkout_payment_compatibility,
                method  = self.getCurrentPaymentMethod();

            return ( false !== method && $.inArray( method, self.params.extended_gateways ) !== -1 );
        },

        getCurrentPaymentMethod: function() {
            var self    = germanized.multistep_checkout_payment_compatibility,
                $form   = $( 'form.checkout' ),
                $method = $form.find( 'input[name=payment_method]:checked' );

            return $method.length > 0 ? $method.val() : false;
        },

        isActivated: function() {
            var self    = germanized.multistep_checkout_payment_compatibility,
                method  = self.getCurrentPaymentMethod(),
                force   = Boolean( Number( self.params.force_enable ) );

            if ( false !== method && ( $.inArray( method, self.params.gateways ) !== -1 || 'placeholder' === method || true === force ) ) {
                return true;
            }

            return false;
        },

        maybeAddPlaceholderCheckbox: function( stepId ) {
            var self     = germanized.multistep_checkout_payment_compatibility,
                $wrapper = $( '.step-wrapper-active' ),
                $form   = $( 'form.checkout' );

            if ( $form.find( '.wc-gzdp-cc-terms-placeholder' ).length > 0 ) {
                $form.find( '.wc-gzdp-cc-terms-placeholder' ).remove();
            }

            /**
             * Temporarily append a terms placeholder checkbox to
             * improve compatibility with payment plugins explicitly checking for terms
             */
            if ( self.isActivated() ) {
                if ( 'payment' === stepId ) {
                    $form.prepend( '<input class="wc-gzdp-cc-terms-placeholder" type="checkbox" name="terms" value="1" style="display: none" checked />' );
                } else if ( stepId === 'order' ) {
                    $form.find( '.wc-gzdp-cc-terms-placeholder' ).remove();
                }
            }
        },

        onUpdateCheckout: function() {
            var self = germanized.multistep_checkout_payment_compatibility,
                $wrapper = $( '.step-wrapper-active' ),
                currentStepId = $wrapper.data( 'id' ),
                $form         = $( 'form.checkout' );

            self.maybeInitPaymentPlaceholders( currentStepId );

            /**
             * After the checkout has been updated, Woo resets payment methods in wc_checkout_form.init_payment_methods()
             * Need to trigger the click event on our placeholder to make sure the placeholder method is selected.
             */
            if ( self.isActivated() ) {
                if ( currentStepId === 'address' ) {
                    $form.find( '.wc-gzdp-payment-method-placeholder' ).prop( 'checked', true );
                    $form.find( '.wc-gzdp-payment-method-placeholder' ).trigger( 'click' );
                }
            }

            self.maybeAddPlaceholderCheckbox( $wrapper.data( 'id' ) );
        },

        /**
         * After refreshing the step, make sure we are removing the placeholder if payment step
         * is the active step. Try to set current payment method to the "old" value.
         */
        onStepChanged: function() {
            var self = germanized.multistep_checkout_payment_compatibility,
                $currentStep = $( '.step-wrapper-active' ),
                currentStepId = $currentStep.data( 'id' );

            self.maybeInitPaymentPlaceholders( currentStepId );
            self.maybeAddPlaceholderCheckbox( currentStepId );
        },

        maybeInitPaymentPlaceholders: function( stepId ) {
            var self     = germanized.multistep_checkout_payment_compatibility,
                $current = $( 'input[name=payment_method]:not(.wc-gzdp-payment-method-placeholder):checked' ),
                $form   = $( 'form.checkout' );

            if ( self.isActivated() ) {
                if ( stepId === 'address' ) {
                    var id = $current.length > 0 ? $current.attr( 'id' ) : '';

                    if ( $form.find( '.wc-gzdp-payment-method-placeholder' ).length === 0 ) {
                        $form.append( '<input type="radio" style="display: none;" name="payment_method" data-current="' + id + '" id="payment_method_wc_gzdp_payment_method_placeholder" class="wc-gzdp-payment-method-placeholder" value="placeholder" checked="checked" />' );
                    } else if ( id && typeof id !== 'undefined' ) {
                        $form.find( '.wc-gzdp-payment-method-placeholder' ).data( 'current', id );
                    }
                } else if ( $form.find( ".wc-gzdp-payment-method-placeholder" ).length > 0 ) {
                    var current = $form.find( ".wc-gzdp-payment-method-placeholder" ).data( 'current' );

                    if ( current && typeof current !== 'undefined' && $form.find( 'input#' + current ).length > 0 ) {
                        $form.find( 'input#' + current ).prop( 'checked', true );
                        $form.find( 'input#' + current ).trigger( 'click' );
                    }

                    $form.find( ".wc-gzdp-payment-method-placeholder" ).remove();
                }
            }
        },

        onClickPrevStep: function() {
            var self         = germanized.multistep_checkout_payment_compatibility,
                stepToChange = $( this ).data( 'href' );

            self.maybeInitPaymentPlaceholders( stepToChange );
            self.maybeAddPlaceholderCheckbox( stepToChange );
        },

        onClickNextStep: function( e ) {
            var $wrapper = $( '.step-wrapper-active' ),
                self     = germanized.multistep_checkout_payment_compatibility,
                currentStepId = $wrapper.data( 'id' );

            self.maybeInitPaymentPlaceholders( currentStepId );
            self.maybeAddPlaceholderCheckbox( currentStepId );

            /**
             * Fake pay now button click for improved compatibility
             */
            if ( self.isActivated() && 'payment' === currentStepId ) {
                $( '#place_order' ).trigger( 'click' );
                e.preventDefault();
            }
        }
    };

    $( document ).ready( function() {
        germanized.multistep_checkout_payment_compatibility.init();
    });

})( jQuery, window.germanized );
