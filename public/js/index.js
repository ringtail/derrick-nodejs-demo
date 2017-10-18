$(document).ready(function(){
  $.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
  });

  $(".derrick-info-hook").animate({
    left: "+=215"
  },5000,function(){
    $('.derrick-hook-part_4').hide()
    $('.derrick-hook-part_5').animate({
      top: "265"
    },300).animateCss('swing');
  })
})
