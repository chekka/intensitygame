(function () {
  jQuery(document).ready(function ($) {

    $('.so-widget-lv-dropdown .outer').on('click', function () {
      $('.so-widget-lv-dropdown .card-body').addClass('hidden');
      if ($(this).parent().find('.card-body').hasClass('open')) {
        $(this).parent().find('.card-body').addClass('hidden').removeClass('open');
       } else {
        $(this).parent().find('.card-body').removeClass('hidden').addClass('open');
      }
    });

  });
})();