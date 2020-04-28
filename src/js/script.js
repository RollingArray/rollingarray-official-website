(function ($, window, document, undefined) {

  $.fn.animatedBG = function (options) {
    var defaults = {
        colorSet: ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#795548', '#607d8b'],
        speed: 1000
      },
      settings = $.extend({}, defaults, options);

    return this.each(function () {
      var $this = $(this);

      $this.each(function () {
        var $el = $(this),
          colors = settings.colorSet;

        function shiftColor() {
          var color = colors.shift();
          colors.push(color);
          return color;
        }

        // initial color
        var initColor = shiftColor();
        $el.css('backgroundColor', initColor);
        setInterval(function () {
          var color = shiftColor();
          $el.animate({
            backgroundColor: color
          }, 3000);
        }, settings.speed);
      });
    });
  };

  // Initialize
  $(function () {
    $('.animated_bg').animatedBG();
  });
}(jQuery, window, document));

function openNav() 
{
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

jQuery(document).ready(function(){
$('body').animatedBG({
  colorSet: ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#795548', '#607d8b' ],
  speed: 1000
});

});