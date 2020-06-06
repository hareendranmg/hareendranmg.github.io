(function($) {
    "use strict";

    jQuery(document).on('ready', function() {


        function initNav() {
            /***MENU TOGGLE ANIMATION***/
            $('div.toggle-normal').on('click', function() {
                $('i.top-bar').toggleClass('top-transform');
                $('i.middle-bar').toggleClass('middle-transform');
                $('i.bottom-bar').toggleClass('bottom-transform');
            });


            /***MENU CLOSE***/
            $('.section,div#menu-options a').on('click', function() {
                $('nav#theMenu').removeClass('menu-open');
                $('i.top-bar').removeClass('top-transform');
                $('i.middle-bar').removeClass('middle-transform');
                $('i.bottom-bar').removeClass('bottom-transform');
            });

            /***MENU OPEN***/
            $('div#menuToggle').on('click', function() {
                $('div#menuToggle').toggleClass('active');
                $('body').toggleClass('body-push-toright');
                $('nav#theMenu').toggleClass('menu-open');
            });
        }

        function initSmoothScroll() {
            /***SMOOTH SCROLL***/
            $('div#menu-options,div#about-btn').find('a[href*=#]:not([href=#])').on('click', function() {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 900, "swing");
                        return false;
                    }
                }
            });
        }


        function initScrollToTop() {
            /***SCROLL TO TOP***/
            $(window).on('scroll', function() {
                if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
                    $('div#scrollup').addClass('animated flipInY').fadeIn(200); // Fade in the arrow
                } else {
                    $('div#scrollup').fadeOut(200);
                }
            });

            $('div#scrollup').on('click', function() {
                $("html,body").animate({
                    scrollTop: 0
                }, 600);

                return false;
            });
        }

        function initPortfolio() {

            /***PORTFOLIO GALLERY***/
            var all = '#a,#b,#c';
            var afterFirst = '#b,#c';
            var addButton = '#add-more';
            var addButtonIcon = '#port-add-icon';
            var otherOption = 'a.cate';
            var allOption = 'a#all-sample';

            $(afterFirst).addClass('hide');
            $(addButton).addClass('x');

            $(allOption).on('click', function() {
                $(addButton).removeClass('hide').addClass('x');
                $(all).removeClass('tab-pane');
                $(afterFirst).addClass('hide');
                $(addButtonIcon).addClass('fa-plus').removeClass('fa-arrow-up');
            });
            $(otherOption).on('click', function() {
                $(addButton).addClass('hide x');
                $(afterFirst).removeClass('hide');
                $(all).addClass('tab-pane');
                $(addButtonIcon).addClass('fa-plus').removeClass('fa-arrow-up');
            });
            $(addButton).on('click', function() {
                if ($(addButton).hasClass('x')) {
                    $(all).removeClass('tab-pane hide');
                    $(addButton).removeClass('x');
                    $(addButtonIcon).removeClass('fa-plus').addClass('fa-arrow-up');
                } else {
                    $(afterFirst).addClass('hide');
                    $(addButton).addClass('x');
                    $(addButtonIcon).addClass('fa-plus').removeClass('fa-arrow-up');
                }
            });

            /***PORTFOLIO ANIMATION***/
            $('li.list-shuffle,#add-more').on('click', function() {
                $("div.inLeft")
                    .removeClass('InLeft')
                    .hide()
                    .addClass('InLeft')
                    .show();
                $("div.inRight")
                    .removeClass('InRight')
                    .hide()
                    .addClass('InRight')
                    .show();
            });

            /***MAGNIFIC POPUP***/
            $('.popup-image').magnificPopup({
                type: 'image',
                removalDelay: 160, //delay removal by X to allow out-animation
                callbacks: {
                    beforeOpen: function() {
                        // just a hack that adds mfp-anim class to markup
                        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                        this.st.mainClass = this.st.el.attr('data-effect');
                    }
                },
                closeOnContentClick: true,
                midClick: true
            });
            /***MAGNIFICENT POPUP VIDEO***/
            $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        }

        function initSkills() {
            /***SKILLS***/
            $('div.skillbar').each(function() {
                $(this).find('div.skillbar-bar').css({
                    width: $(this).attr('data-percent')
                });
            });
        }

        function initClientsSliders() {

            /***CLIENTS LOGO SLIDER***/
            var $clientcarousel = $('ul#clients-list');
            var clients = $clientcarousel.children().length;
            var clientwidth = (clients * 140); // 140px width for each client item
            $clientcarousel.css('width', clientwidth);

            var rotating = true;
            var clientspeed = 1800;
            setInterval(rotateClients, clientspeed);

            $(document).on({
                mouseenter: function() {
                    rotating = false;
                    // Turn off rotation when hovering
                },
                mouseleave: function() {
                    rotating = true;
                }
            }, '#clients');

            function rotateClients() {
                if (rotating !== false) {
                    var $first = $('ul#clients-list').find('li:first');
                    $first.animate({ 'margin-left': '-140px' }, 2000, function() {
                        $first.remove().css({ 'margin-left': '0px' });
                        $('ul#clients-list').find('li:last').after($first);
                    });
                }
            }


            /***CLIENTS QUOTE SLIDER***/
            var swiper = new Swiper('.swiper-container-clients', {
                pagination: '.swiper-pagination-clients',
                a11y: true,
                keyboardControl: true,
                autoHeight: true,
                speed: 800,
                paginationClickable: true
            });

        }


        function initVideoPlayAndClose() {
            /***VIDEO PLAY BUTTON***/
            $('#html-video').addClass('hidden');
            $('#play-btn').on('click', function() {
                var htmlVideo = '#html-video';
                var vCard = '#v-card';
                var playButtonHolder = '#button-holder';
                var playIcon = '#icon-play';
                $(playButtonHolder).addClass('middle');
                setTimeout(function() {
                    $(vCard).addClass('hide-overflow');
                    $('body').addClass('scale-effect');
                    $(vCard).addClass('height-change');
                }, 600);
                setTimeout(function() {
                    $(playIcon).hide();
                    $(htmlVideo).removeClass('hidden');
                    $(htmlVideo)[0].play();
                    $('#play-btn').addClass('black');
                }, 1000);

            });

            /***VIDEO CLOSE BUTTON***/
            $('#close-btn').on('click', function() {
                var htmlVideo = '#html-video';
                var vCard = '#v-card';
                var playButtonHolder = '#button-holder';
                var playIcon = '#icon-play';
                $('body').removeClass('scale-effect');
                setTimeout(function() {
                    $(playIcon).show();
                    $(playButtonHolder).removeClass('middle');
                    $(vCard).removeClass('hide-overflow');
                }, 1000);
                $(vCard).removeClass('height-change');
                $(htmlVideo).addClass('hidden');
                $(htmlVideo)[0].pause();
                $('#play-btn').removeClass('black');
            });
        }

        function initMapsNormal() {
            var mapOptions = {
                zoom: 17,
                center: new google.maps.LatLng(35.562393, -80.846733),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: true,
                disableDefaultUI: false
            };

            var myMap = new google.maps.Map(document.getElementById('myMap'), mapOptions);

            var normal = new MarkerWithLabel({
                position: myMap.getCenter(),
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 0
                },
                map: myMap,
                labelAnchor: new google.maps.Point(10, 10),
                labelClass: "map-label", // The CSS class for the label
                draggable: false

            });
        }

        function initMapsDark() {
            var styles = [{
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [{ "saturation": 36 }, { "color": "#000000" }, { "lightness": 40 }]
            }, {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [{ "visibility": "on" }, { "color": "#000000" }, { "lightness": 16 }]
            }, {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [{ "visibility": "off" }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{ "color": "#000000" }, { "lightness": 20 }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{ "color": "#000000" }, { "lightness": 17 }, { "weight": 1.2 }]
            }, {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{ "color": "#000000" }, { "lightness": 20 }]
            }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{ "color": "#000000" }, { "lightness": 21 }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{ "color": "#000000" }, { "lightness": 17 }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{ "color": "#000000" }, { "lightness": 29 }, { "weight": 0.2 }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{ "color": "#000000" }, { "lightness": 18 }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{ "color": "#000000" }, { "lightness": 16 }]
            }, {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{ "color": "#000000" }, { "lightness": 19 }]
            }, {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{ "color": "#000000" }, { "lightness": 17 }]
            }];
            var mapOptions = {
                zoom: 17,
                center: new google.maps.LatLng(40.5715801, -74.33480170000001),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                disableDefaultUI: false,
                styles: styles //black n white
            };

            var myMap = new google.maps.Map(document.getElementById('myMap'), mapOptions);

            var dark = new MarkerWithLabel({
                position: myMap.getCenter(),
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 0
                },
                map: myMap,
                labelAnchor: new google.maps.Point(10, 10),
                labelClass: "map-label", // The CSS class for the label
                draggable: false

            });
        }

        function initMail() {
            /***MAIL SCRIPT***/
            $('form#contact-form').on('submit', function(e) {
                e.preventDefault(); //Prevents default submit
                var form = $(this);
                $("#submit").attr('disabled', 'disabled'); //Disable the submit button on click
                var post_data = form.serialize(); //Serialized the form data
                $('div#form-loader').removeClass('is-hidden').fadeIn(500);
                $.ajax({
                        type: 'POST',
                        url: 'php/mail_handler.php', // Form script
                        data: post_data
                    })
                    .done(function() {
                        $('div#form-loader').fadeOut(500);
                        Materialize.toast('Message Sent! I will contact you shortly, Thanks', 4000);
                        $("form#contact-form")[0].reset();
                        Materialize.updateTextFields(); // Rest floating labels
                        $("#submit").removeAttr('disabled', 'disabled'); // Enable submit button

                    })
                    .fail(function() {
                        $('div#form-loader').fadeOut(500);
                        Materialize.toast('Sorry! Something Wrong, Try Again', 4000);
                        $("#submit").removeAttr('disabled', 'disabled'); // Enable submit button
                    });
            });
        }

        /* ---------------------------------------------
         INITIALIZING ALL FUNCTIONS
         --------------------------------------------- */
        initNav(); //for main NAV
        initSmoothScroll(); // enables SmoothScroll
        initScrollToTop(); // Smooth Scroll To Top
        initPortfolio(); // Initializes Portfolios Gallery
        initSkills(); // Sets Skills Bar Width
        initClientsSliders(); // Initializes Clients Sliders
        initVideoPlayAndClose(); // Video Play and Close Functionality
        initMail(); // Mail Initialization
        initMapsNormal(); // Enable For Normal Map
        //initMapsDark();          // Enable For Dark Map

    });


    jQuery(window).on('load', function() {

        /***FADES OUT PRE-LOADER***/
        $('div#loading').fadeOut(500);

        /***SCROLL ANIMATION***/
        window.sr = ScrollReveal({ reset: false }); // reset false stops repetition of animation
        var commonCards = '#port-add-icon,#map-card,.interest-icon-even,.interest-icon,' +
            '.timeline-dot,.timeline-content,#add-more,#skills-card,#testimonials-card,' +
            '#portfolios-card,#interest-card,#p-one,#p-two,#p-three,#blog-card,#contact-card,#clients,.section-title img';
        // Customizing a reveal set
        sr.reveal(commonCards, { duration: 1100 });
        sr.reveal('#about-card,.map-label', { duration: 1400, delay: 500 });
        sr.reveal('#v-card-holder', { duration: 1400, distance: '150px' });
        sr.reveal('.skillbar-bar', { duration: 1800, delay: 300, distance: '0' });


    });


})(jQuery);