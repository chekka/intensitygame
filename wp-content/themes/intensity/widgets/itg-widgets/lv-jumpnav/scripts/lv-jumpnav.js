(function () {
  jQuery(document).ready(function ($) {

    $('.panel-grid').each(function () {
      var url = window.location.href;
      var txt = $(this).find('.panel-row-style').attr('id');
      if (txt) {
        var text = txt.replace(/\-\-/g, " ");
        $('nav.jumpnav').append('<a href="' + url + '#' + txt + '">' + text + '</a>');
        console.log(txt);
      }
    });

  });
})();