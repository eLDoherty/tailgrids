jQuery(document).ready( function($) {
    $('.trending-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev">⭠</button>',
        nextArrow: '<button type="button" class="slick-next">⭢</button>',
        mobileFirst: true,
    });
});