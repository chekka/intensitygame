/* globals jQuery, SiteOriginPremium, sowb */

window.SiteOriginPremium = window.SiteOriginPremium || {};
jQuery( function( $ ) {
	SiteOriginPremium.sowBlogWidget = function() {
		$( '.sow-blog' ).each( function() {
			const $$ = $( this ),
				settings = $$.data( 'settings' ),
				totalPages = $$.data( 'total-pages' );

			if (
				settings.pagination_reload == 'ajax' ||
				settings.pagination == 'load' ||
				settings.pagination == 'infinite'
			) {
				$$.data( 'fetching', false );
				var sticky_preloader = function() {
					var $posts = $$.find( '.sow-blog-posts' ),
						postsTop = $posts.offset().top,
						loaderheight = 32,
						cuttOff = $posts.outerHeight() - loaderheight - window.innerHeight / 2;

					if (
						(
							window.pageYOffset >= postsTop
						) &&
						(
							window.pageYOffset <= postsTop + cuttOff
						)
					) {
						$$.find( '.sow-blog-ajax-loader-icon' ).css( {
							position: 'fixed',
							top: '50%'
						} );
					} else {
						$$.find( '.sow-blog-ajax-loader-icon' ).css( {
							position: 'absolute',
							top: ( window.pageYOffset <= postsTop + cuttOff ? window.innerHeight / 2 : $posts.outerHeight() - loaderheight ) + 'px'
						} );
					}

				}

				if ( settings.pagination == 'standard' ) {
					// "replace" current page with span.
					let paged = parseInt( $$.data( 'paged' ) );
					let $current = $$.find( '.page-numbers:not(.dots)' ).eq( paged - 1 );
					$current.after( '<span aria-current="page" class="page-numbers current">' + paged + '</span>' );
					$current.hide();
				} else if ( settings.pagination == 'links' ) {
					// Hide the link depending upon what page we're on.
					let paged = parseInt( $$.data( 'paged' ) );

					if ( paged == 1 ) {
						$$.find( '.sow-previous' ).hide();
					} else if ( paged == totalPages ) {
						$$.find( '.sow-next' ).hide();
					}
				}

				var loadMorePosts = function( e = false ) {
					var $this = $( this ),
						requestedPage = 0,
						paged = parseInt( $$.data( 'paged' ) );

					if ( settings.pagination != 'infinite' ) {
						e.preventDefault();
					}

					if ( $$.data( 'fetching' ) ) {
						return false;
					}
					$$.data( 'fetching', true );

					// Work out what page we're navigating too.
					if ( settings.pagination == 'standard' ) {
						requestedPage = $this.text();
					} else if ( settings.pagination == 'links' ) {
						if ( $this.hasClass( 'sow-previous' ) ) {
							requestedPage = paged - 1;
						} else {
							requestedPage = paged + 1;
						}
					} else {
						if ( settings.pagination == 'load' ) {
							e.preventDefault();
							$this.addClass( 'sow-loading' );
						}
						// Infinite and Load More.
						requestedPage = paged + 1;
					}

					// Update the URL to use current "page" number.
					if ( settings.pagination_reload == 'ajax' || settings.pagination == 'infinite' ) {
						if ( settings.pagination == 'standard' || settings.pagination == 'links' ) {
							window.history.pushState( '', document.title, $this.attr( 'href' ) );
						} else {
							var $loader = settings.pagination == 'load' ? $this : $$.find( '.sow-blog-infinite' );
							window.history.pushState( '', document.title, $loader.data( 'url' ) + '/?' + $loader.data( 'id' ) + '=' + requestedPage );
						}
					}

					$$.find( '.sow-blog-ajax-loader' ).show();
					$( window ).on( 'scroll', sticky_preloader );
					sticky_preloader();
					$$.find( '.sow-blog-posts' ).css( 'opacity', 0.35 );

					$.get(
						sowBlogAddon['ajax-url'],
						{
							action: 'sow_blog_load_posts',
							paged: requestedPage,
							instance_hash: $$.data( 'hash' )
						},
						function ( posts ) {
							// Replace or add posts depending on pagination.
							if ( settings.pagination == 'standard' || settings.pagination == 'links' ) {
								$$.find( '.sow-blog-posts' ).html( posts.html );
								// 120 a generic offset to account for sticky menus.
								$( 'html' ).animate( {
									scrollTop: $$.offset().top - 120,
								}, 200 );
							} else {
								$$.find( '.sow-blog-posts' ).append( posts.html );
							}

							$$.data( 'fetching', false );
							$$.data( 'paged', requestedPage );
							$( window ).off( 'scroll', sticky_preloader );

							if ( settings.pagination == 'standard' ) {
								// Remove previous .current and restore link.
								$$.find( '.sow-nav-links a' ).show()
								$$.find( '.sow-nav-links .current' ).remove()

								// "replace" current page with span.
								let $current = $$.find( '.page-numbers:not(.dots)' ).eq( requestedPage - 1 );
								$current.after( '<span aria-current="page" class="page-numbers current">' + requestedPage + '</span>' );
								$current.hide();
							} else if ( settings.pagination == 'links' ) {
								// Hide/show the link depending upon what page we're on.
								if ( requestedPage < 2 ) {
									$$.find( '.sow-previous' ).hide();
								} else if ( paged == 1 ) {
									$$.find( '.sow-previous' ).show();
								}

								if ( requestedPage == totalPages ) {
									$$.find( '.sow-next' ).hide();
								} else {
									$$.find( '.sow-next' ).show();
								}
							} else if ( settings.pagination == 'load' ) {
								if ( requestedPage == totalPages ) {
									$this.remove();
								} else {
									$this.removeClass( 'sow-loading' );
								}
							} else if ( requestedPage == totalPages ) { // Infinite
								// No more posts to load, remove infinite loading notice.
								$$.find( '.sow-blog-infinite' ).remove();
							}

							if ( $$.hasClass('sow-blog-layout-masonry' ) ) {
								$$.find( '.sow-blog-posts' ).masonry( 'reloadItems' ).masonry();
							} else if ( $$.hasClass( 'sow-blog-layout-portfolio' ) ) {
								$$.find( '.sow-blog-posts' ).isotope( 'reloadItems' ).isotope();
							}

							$$.find( '.sow-blog-ajax-loader' ).hide();
							$$.find( '.sow-blog-posts' ).css( 'opacity', 1 );
						}
					);
				}

				if ( settings.pagination != 'infinite' ) {
					$$.find( '.sow-nav-links a, .sow-nav-links .sow-blog-load-more:not(.sow-loading)' ).on( 'click', loadMorePosts );
				} else {
					$$.find( '.sow-blog-infinite' ).hide();
					var infiniteScroller = function() {
						if ( totalPages == $$.data( 'paged' ) ) {
							// No more posts to load, abort.
							return;
						}

						let currentScrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
						let BlogBottomPos = $$.offset().top + $$.height();

						// Calculate when we need to fetch posts.
						// If the Blog Widgets bottom position is larger than two screen lengths, offset the bottom pos using that.
						if ( BlogBottomPos > window.innerHeight * 2 ) {
							BlogBottomPos -= window.innerHeight * 2;
						} else {
							// Otherwise, fetch posts when the user scrolls to the third last post.
							let posts = $$.find( '.sow-blog-posts > article' );
							BlogBottomPos = posts.eq( posts.length - 3 ).offset().top;
						}

						if ( currentScrollPos > BlogBottomPos ) {
							loadMorePosts();
						}
					}
					infiniteScroller();
					$( window ).on( 'scroll resize', infiniteScroller );
				}
			}
		} );
	};

	SiteOriginPremium.sowBlogWidget()
	if ( window.sowb ) {
		$( window.sowb ).on( 'setup_widgets', SiteOriginPremium.sowBlogWidget );
	}
} );
