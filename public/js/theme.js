/* --------------------------------------------
Load Function - Page Loader
-------------------------------------------- */
$(window).load(function() {
    'use strict';
    $(".loader-item").delay(700).fadeOut();
    $("#pageloader").delay(1000).fadeOut("slow");
});

/* --------------------------------------------
Ready Function
-------------------------------------------- */
$(document).ready(function($) {
    'use strict';
    /* --------------------------------------------
    Animation 
    -------------------------------------------- */
    $(function() {
        $('.animated').appear(function() {
            var elem = $(this);
            var animation = elem.data('animation');
            if (!elem.hasClass('visible')) {
                var animationDelay = elem.data('animation-delay');
                if (animationDelay) {
                    setTimeout(function() {
                        elem.addClass(animation + " visible");
                    }, animationDelay);
                } else {
                    elem.addClass(animation + " visible");
                }
            }
        });
    });

    /* --------------------------------------------
    Scroll Navigation
    -------------------------------------------- */
    $(document).on('click', '.scroll', function(event) {
        var $anchor = $(this);
        var headerH = $('#navigation').outerHeight();
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top + 2 + "px"
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });

    /* --------------------------------------------
    Menus hide after click --  mobile devices
    -------------------------------------------- */
    $(document).on('click', '.nav li a', function() {
        $('.navbar-collapse').removeClass('in');
    });

    /* --------------------------------------------
    Active Navigation
    -------------------------------------------- */
    $(function() {
        $('body').scrollspy({
            target: '#topnav',
            offset: 95
        });
    });

    /* --------------------------------------------
    Fixed Menu on Scroll
    -------------------------------------------- */
    $(function() {
        $("#sticky-section").sticky({
            topSpacing: 0
        });
    });

    /* --------------------------------------------
	Client
	-------------------------------------------- */
    $(function() {
        $("#owl-example").owlCarousel();
    });

    /* --------------------------------------------
	Testimonials
	-------------------------------------------- */
    $(function() {
        $("#owl-example1").owlCarousel({
            items: 1,
            itemsCustom: false,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [979, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1]
        });
    });

    /* --------------------------------------------
	Screenshots
	-------------------------------------------- */
    $(function() {
        $("#owl-example2").owlCarousel({
            items: 3,
            itemsCustom: false,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: false,
            itemsMobile: [479, 1]
        });
    });

    /* --------------------------------------------
	Pattern Slider
	-------------------------------------------- */
    $("#owl-example3").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        transitionStyle: "fade"
    });

    /* --------------------------------------------
    Blog Slider
    -------------------------------------------- */
    $(function() {
        $("#owl-example4").owlCarousel({
            items: 1,
            itemsCustom: false,
            slideSpeed: 100,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [979, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            navigation: false
        });
    });

    /*--------------------------------------------
	Contact Form
	-------------------------------------------- */
    $(function($) {
        $('#contactform').bootstrapValidator({
            message: '',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                contact_name: {
                    validators: {
                        notEmpty: {
                            message: ''
                        }
                    }
                },
                contact_email: {
                    validators: {
                        notEmpty: {
                            message: ''
                        },
                        emailAddress: {
                            message: ''
                        }
                    }
                },
                contact_message: {
                    validators: {
                        notEmpty: {
                            message: ''
                        }
                    }
                }
            },
            submitHandler: function(validator, form, submitButton) {
                $('.contact-form').addClass('ajax-loader');
                var data = $('#contactform').serialize();
                $.ajax({
                    type: "POST",
                    url: "mail/process.php",
                    data: $('#contactform').serialize(),
                    success: function(msg) {
                        $('.contact-form').removeClass('ajax-loader');
                        $('.form-message').html(msg);
                        $('.form-message').show();
                        submitButton.removeAttr("disabled");
                        resetForm($('#contactform'));
                    },
                    error: function(msg) {
                        $('.contact-form').removeClass('ajax-loader');
                        $('.form-message').html(msg);
                        $('.form-message').show();
                        submitButton.removeAttr("disabled");
                        resetForm($('#contactform'));
                    }
                });
                return false;
            },
        });
        /* --------------------------------------------
		Contact Form 1
		-------------------------------------------- */
        $('#contactform1').bootstrapValidator({
            message: '',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                contact_email: {
                    validators: {
                        notEmpty: {
                            message: ''
                        },
                        emailAddress: {
                            message: ''
                        }
                    }
                }
            },
            submitHandler: function(validator, form, submitButton) {
                $('.contact-form1').addClass('ajax-loader');
                var data = $('#contactform1').serialize();
                $.ajax({
                    type: "POST",
                    url: "mail/subscription.php",
                    data: $('#contactform1').serialize(),
                    success: function(msg) {
                        $('.contact-form1').removeClass('ajax-loader');
                        $('.form-message1').html(msg);
                        $('.form-message1').show();
                        submitButton.removeAttr("disabled");
                        resetForm($('#contactform1'));
                    },
                    error: function(msg) {
                        $('.contact-form1').removeClass('ajax-loader');
                        $('.form-message1').html(msg);
                        $('.form-message1').show();
                        submitButton.removeAttr("disabled");
                        resetForm($('#contactform1'));
                    }
                });
                return false;
            },
        });
        /* --------------------------------------------
		Contact Form 2
		-------------------------------------------- */
        $('#contactform2').bootstrapValidator({
            message: '',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                contact_email: {
                    validators: {
                        notEmpty: {
                            message: ''
                        },
                        emailAddress: {
                            message: ''
                        }
                    }
                }
            },
            submitHandler: function(validator, form, submitButton) {
                $('.contact-form2').addClass('ajax-loader');
                var data = $('#contactform2').serialize();
                $.ajax({
                    type: "POST",
                    url: "mail/subscription2.php",
                    data: $('#contactform2').serialize(),
                    success: function(msg) {
                        $('.contact-form2').removeClass('ajax-loader');
                        $('.form-message2').html(msg);
                        $('.form-message2').show();
                        submitButton.removeAttr("disabled");
                        resetForm($('#contactform2'));
                    },
                    error: function(msg) {
                        $('.contact-form2').removeClass('ajax-loader');
                        $('.form-message2').html(msg);
                        $('.form-message2').show();
                        submitButton.removeAttr("disabled");
                        resetForm($('#contactform2'));
                    }
                });
                return false;
            },
        });

        function resetForm($form) {
            $form.find('input:text, input:password, input, input:file, select, textarea').val('');
            $form.find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected');
        }
    });

    /* ----------------------------------------------
	Google Map
	------------------------------------------------- */
    $(function() {
        function initialize() {
            var myLatlng = new google.maps.LatLng(44.5403, -78.5463);
            var mapOptions = {
                zoom: 8,
                disableDefaultUI: true,
                scrollwheel: false,
                draggable: false,
                center: myLatlng
            };
            var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
            var contentString = '<div id="map-content">' +
                '<p>Office Names</p>' +
                '<div> Street Name,</div>' +
                '<div> City Name, State,</div>' +
                '<div>Country - xxxxx </div>'
            '</div>';
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
            var marker = new google.maps.Marker({
                position: map.getCenter(),
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 10
                },
                map: map
            });
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            });
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    })

    /* --------------------------------------------
	Typed Js
	-------------------------------------------- */
    $(function() {
        $(".type_text").typed({
            strings: ["not an option.", "drives us."],
            typeSpeed: 230,
            backDelay: 500,
            loop: true
        });
    });

    /* --------------------------------------------
	Video BG
	-------------------------------------------- */
    $(function() {
        $(".movie").mb_YTPlayer();
    });

    /* --------------------------------------------
	Background Slider
	-------------------------------------------- */
    $(function() {
        $('#slides').superslides({
            inherit_width_from: '.wide-container',
            inherit_height_from: '.wide-container'
        });
    });

    /* --------------------------------------------
	Text Slider
	-------------------------------------------- */
    var dd = $('.homeSlider').easyTicker({
        direction: 'up',
        easing: 'easeInOutExpo',
        speed: 'slow',
        interval: 3900,
        height: 'auto',
        visible: 1,
        mousePause: 0,
        controls: {
            up: '.up',
            down: '.down',
            toggle: '.toggle',
            stopText: 'Stop !!!'
        }
    }).data('easyTicker');
});

/* --------------------------------------------
Count Factors
-------------------------------------------- */
$(function() {
    $(".fact-number").appear(function() {
        $(this).each(function() {
            dataperc = $(this).attr('data-perc'),
                $(this).find('.factor').delay(6000).countTo({
                    from: 10,
                    to: dataperc,
                    speed: 3000,
                    refreshInterval: 50
                });
        });
    });
});
(function($) {
    "use strict";
    $.fn.countTo = function(options) {
        options = options || {};
        return $(this).each(function() {
            // set options for current element
            var settings = $.extend({}, $.fn.countTo.defaults, {
                from: $(this).data('from'),
                to: $(this).data('to'),
                speed: $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals: $(this).data('decimals')
            }, options);
            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;
            // references & variables that will change with each update
            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from,
                data = $self.data('countTo') || {};
            $self.data('countTo', data);
            // if an existing interval can be found, clear it first
            if (data.interval) {
                clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);
            // initialize the element with the starting value
            render(value);

            function updateTimer() {
                value += increment;
                loopCount++;
                render(value);
                if (typeof(settings.onUpdate) == 'function') {
                    settings.onUpdate.call(self, value);
                }
                if (loopCount >= loops) {
                    // remove the interval
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;
                    if (typeof(settings.onComplete) == 'function') {
                        settings.onComplete.call(self, value);
                    }
                }
            }

            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.text(formattedValue);
            }
        });
    };
    $.fn.countTo.defaults = {
        from: 0, // the number the element should start at
        to: 0, // the number the element should end at
        speed: 1000, // how long it should take to count between the target numbers
        refreshInterval: 100, // how often the element should be updated
        decimals: 0, // the number of decimal places to show
        formatter: formatter, // handler for formatting the value before rendering
        onUpdate: null, // callback method for every time the element is updated
        onComplete: null // callback method for when the element finishes updating
    };

    function formatter(value, settings) {
        return value.toFixed(settings.decimals);
    }
}(jQuery));