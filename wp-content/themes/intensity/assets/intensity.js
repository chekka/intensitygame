(function ($) {
  $(document).ready(function () {    

    //******** Start Scroll ********//

    $windowW = $(window).innerWidth();
    $windowH = $(window).innerWidth();
    $headerH = $(".site-header").outerHeight();

    function setHeader() {
      $headerH = $(".site-header").outerHeight();
      $('body').css({ "padding-top": $headerH });
    }

    if ($windowW < 1330)    {
      $('.menu-main-container').on('click', function () {
        $(this).toggleClass('open');
      });
    }
    
   
    $('body').css({ 'padding-top': $headerH });

    $(window).on('resize', function () {
      setHeader();
    });

    $target = 'html';
    $top = $($target).scrollTop();
    $lastScrollTop = 0;

    if ($top < 20) {
      $($target).removeClass('fixed');
    } else {
      $($target).addClass('fixed');
    }

    $(window).on('scroll', function() {
      var st = $(this).scrollTop();

      if (st > 20) {
        if (st > $lastScrollTop) {
          $($target).addClass('fixed');
        }
      }
      if (st < 20) {
        $($target).removeClass('fixed');
      }
      $lastScrollTop = st;
      setHeader();

    });

    /* END Scroll */

    //******** Start Slick ********//

    if ($windowW > 1200){
      $('.slick-reviews').on('init', function (event, slick, currentSlide, nextSlide) {
        var currentSlide = slick.currentSlide + 1;
        var slideCount = slick.slideCount;
        $(this).next().find('.count--current').text(currentSlide + ' & ' + parseInt(currentSlide + 1) );
        $(this).next().find('.count--all').text('von ' + slideCount);
      });
    
      $('.slick-reviews').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        var currentSlide = slick.currentSlide + 1;
        $(this).next().find('.count--current').text(currentSlide + ' & ' + parseInt(currentSlide + 1) );
      });
    } else {
      $('.slick-reviews').on('init', function (event, slick, currentSlide, nextSlide) {
        var currentSlide = slick.currentSlide + 1;
        var slideCount = slick.slideCount;
        $(this).next().find('.count--current').text(currentSlide);
        $(this).next().find('.count--all').text(' von ' + slideCount);
      });
    
      $('.slick-reviews').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        var currentSlide = slick.currentSlide + 1;
        $(this).next().find('.count--current').text(currentSlide);
      });
    }

    $('.slick-reviews').slick({
      centerMode: false,
      dots: true,
      infinite: true,
      speed: 300,
      centerPadding: '0',
      slidesToShow: 2,
      slidesToScroll: 2,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 3333,
      speed: 777,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            autoplay: false,
            arrows: true,
            centerMode: false,
            centerPadding: '0',
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });

    /* END SLICK */

  });


})(jQuery);