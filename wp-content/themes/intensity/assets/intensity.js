(function ($) {
  $(document).ready(function () {
    $windowW = $(window).innerWidth();
    $windowH = $(window).innerWidth();
    $headerH = $(".site-header").outerHeight();

    $target = 'body';
    $top = $('body').scrollTop();
    $lastScrollTop = 0;

    if (top == 0) {
      $($target).removeClass('fixed');
    } else {
      $($target).addClass('fixed');
    }

    $(window).scroll(function (event) {
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

    });

  });


})(jQuery);