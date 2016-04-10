$(function() {

  $('.c-plan--withtips .c-plan__unit').qtip({
    content: {
      text: function(e, api) {
        var ctx = $(this).find('.c-plan__unit-content');
        return $(ctx).html()
      }
    },
    position: {
      my: 'left bottom',
      adjust: {
        x: -45,
        y: -50
      }
    }
  });

  $(".c-gallery__list-item").on("click", function() {
    var that = this;
    var gallery = $(this).closest(".c-gallery");
    var src = $(that).attr("data-src");
    var view = $(gallery).find(".c-gallery__view-bg");
    var img = new Image;

    $(view).stop().fadeOut(300, function() {
      img.src = src;
    });
    img.onload = function() {
      $(view).css({"backgroundImage": "url("+src+")"});
      $(view).stop().fadeIn(300);
    }
  });

  $('.j-showintro').on('click', function(e) {
      e.preventDefault();
      $(this).hide();
      $('.c-intro').slideDown(600)
  });

  $('.c-intro__footer a').on('click', function(e) {
      e.preventDefault();
      $('.j-showintro').show();
      $('.c-intro').slideUp(600)
  });


  if($(".c-gallery__list-item").length > 0) {
    var img = $(".c-gallery__list-item").first().attr('data-src');
    $(".c-gallery__view-bg").css({"backgroundImage": "url("+img+")"});
  }
});