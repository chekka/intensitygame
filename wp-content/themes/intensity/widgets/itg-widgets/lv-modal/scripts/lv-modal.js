(function () {
  jQuery(document).ready(function ($) {

    $('.so-widget-lv-modal .image').on('click', function () {
      $('.so-widget-lv-modal .lv-modal').addClass('hidden').find('iframe').attr('src', function (){ return $( this )[0].src; });
        ;
      $(this).next().removeClass('hidden');
    });

  });
})();