(function ($) {
    'use strict';
    $(document).ready(function () {

        $(".close-modal").click(function () {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
            $(".container-modal").fadeOut(500);
            $('body').css('padding-right', '0');
            $('body').css('overflow', 'visible');
        });

        $(".modal-show").click(function () {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
            $(".login-container").fadeIn(500);
            $('body').css('overflow', 'hidden');

        });

        $(".map-show").click(function () {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
            $(".map-container").fadeIn(500);
            $('body').css('overflow', 'hidden');

        });

    }); //end ready

}(jQuery));
