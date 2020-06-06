(function ($) {
    "use strict";

    jQuery(document).on('ready', function () {

       /***SCROLL TO TOP***/
        $(window).on('scroll', function () {
            if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
                $('div#scrollup').addClass('animated flipInY').fadeIn(200);    // Fade in the arrow
            } else {
                $('div#scrollup').fadeOut(200);
            }
        });

        $('div#scrollup').on('click', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 600);

            return false;
        });

        /***CLIENTS SLIDER***/
        new Swiper('.swiper-container-portfolios', {
            pagination: '.swiper-pagination-portfolios',
            a11y: true,
            keyboardControl: true,
            autoHeight: true,
            speed: 800,
            paginationClickable: true
        });


    });


     jQuery(window).on('load', function () {

        /***FADES OUT PRE-LOADER***/
        $('div#loading').fadeOut(500);

        /***SCROLL ANIMATION***/
        window.sr = ScrollReveal({reset: false}); // reset false stops repetition of animation
        var commonCards = '.widget-holder,.post,.disqus-comment';
        // Customizing a reveal set
        sr.reveal(commonCards, {duration: 1100});

        /***GO BACK BUTTON***/
        $('.back-button').on('click', function () {
            history.go(-1);
        });

    });

})(jQuery);


