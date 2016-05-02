// Smooth Scrolling: Smooth scrolls to an ID on the current page.
$(function() {
    $('a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Activates floating label headings for the contact form.
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Owl Carousel Settings
$(".about-carousel").owlCarousel({
    items: 3,
    navigation: true,
    pagination: false,
    navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
});

$(".portfolio-carousel").owlCarousel({
    singleItem: true,
    navigation: true,
    pagination: false,
    navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    autoHeight: true,
    mouseDrag: false,
    touchDrag: false,
    transitionStyle: "fadeUp"
});

$(".testimonials-carousel").owlCarousel({
    singleItem: true,
    navigation: true,
    pagination: true,
    autoHeight: true,
    navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    transitionStyle: "backSlide"
});

$(".portfolio-gallery").owlCarousel({
    items: 3,
});

// Magnific Popup jQuery Lightbox Gallery Settings
$('.gallery-link').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    },
    image: {
        titleSrc: 'title'
    }
});

// Formstone Wallpaper - Video Background Settings
$("header.video").wallpaper({
    source: {
        poster: "assets/img/bg-mobile-fallback.jpg",
        mp4: "assets/mp4/camera.mp4"
    }
});

// Fix for Bootstrap Modal Shifting Page Contents
$(window).on("load resize", function(e) {
    (function(e) {
        var $winWidth = e(window).width();
        e(document).on('show.bs.modal', function() {
            if ($winWidth < e(window).width()) {
                e('body.modal-open,.navbar-fixed-top,.navbar-fixed-bottom').css('marginRight', e(window).width() - $winWidth)
            }
        });
        e(document).on('hidden.bs.modal', function() {
            e('body,.navbar-fixed-top,.navbar-fixed-bottom').css('marginRight', 0)
        });
    })(jQuery);
});

// Scrollspy: Highlights the navigation menu items while scrolling.
$('body').scrollspy({
    target: '.navbar-fixed-top'
})
