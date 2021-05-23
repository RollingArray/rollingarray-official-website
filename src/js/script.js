/**
 * © Rolling Array https://rollingarray.co.in/
 *
 *
 * @summary event controller
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-05-22 09:33:52 
 * Last modified  : 2021-05-23 20:14:12
 */


/**
 * 
 */
(function ($, window, document, undefined) {
    $.fn.animatedBG = function (options) {
        var defaults = {
                colorSet: [
                    "#900c3f",
                    "#e84545",
                    "#301b3f",
                    "#52057b",
                    "#1e5f74",
                    "#0f3460",
                    "#1b1b2f",
                    "#543864",
                    "#c02739",
                    "#202060",
                    "#414141",
                    "#b55400"
                ],
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
                $el.css("backgroundColor", initColor);
                setInterval(function () {
                    var color = shiftColor();
                    $el.animate(
                        {
                            backgroundColor: color
                        },
                        3000
                    );
                }, settings.speed);
            });
        });
    };

    // Initialize
    $(function () {
        $(".animated_bg").animatedBG();
    });
})(jQuery, window, document);

/**
 * open navigation
 */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/**
 * close navigation
 */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

/**
 * color animation
 */
jQuery(document).ready(function () {
    $("body").animatedBG({
        colorSet: [
            "#900c3f",
            "#e84545",
            "#301b3f",
            "#52057b",
            "#1e5f74",
            "#0f3460",
            "#1b1b2f",
            "#543864",
            "#c02739",
            "#202060",
            "#414141",
            "#b55400"
        ],
        speed: 1000
    });
});
