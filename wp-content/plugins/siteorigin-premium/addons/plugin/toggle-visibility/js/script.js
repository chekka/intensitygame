/* globals jQuery, pikaday */

( function( $ ) {
	$( document ).on( 'setup_style_fields', function( e, view ) {
		var prefix = typeof siteoriginPremiumToggleUseToggle != 'undefined' ? 'toggle_scheduling_' : '';

		var date_from = view.$el.find( '.so-field-' + prefix + 'toggle_date_from' );
			date_to = view.$el.find( '.so-field-' + prefix + 'toggle_date_to' ),
			date_display = view.$el.find( '.so-field-' + prefix + 'toggle_display' );

		view.$el.find( '.so-field-toggle_scheduling input[type="checkbox"]' ).on( 'change', function() {
			let $$ = $( this );

			if ( $$.is( ':checked' ) ) {
				date_from.show();
				date_to.show();
				date_display.show();
			} else {
				date_from.hide();
				date_to.hide();
				date_display.hide();
			}
		} ).trigger( 'change' );

		date_from.find( 'input[type="text"]' ).pikaday( {
			isRTL: soPremiumToggleVisibilityAddon.isRTL,
			i18n: soPremiumToggleVisibilityAddon.i18n,
		} );
		date_to.find( 'input[type="text"]' ).pikaday( {
			isRTL: soPremiumToggleVisibilityAddon.isRTL,
			i18n: soPremiumToggleVisibilityAddon.i18n,
		} );
	} );

} )( jQuery );
