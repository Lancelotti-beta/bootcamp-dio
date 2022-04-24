
//Section Destaque para owl-carrosel classico
/*
$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 1700,
    slideTransition: 'linear',
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        425: {
            items: 2,
            nav: false
        },
        768: {
            items: 4,
            nav: false
        },
        1024: {
            items: 6,
            nav: false
        }

    }
})

*/

//Section Promoção
jQuery(document).ready(function ($) {
    $('.loop').owlCarousel({
        stagePadding: 50,
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: false,
        autoplayTimeout: 1700,
        slideTransition: 'linear',
        responsive: {
            0: {
                items: 1,
                stagePadding: 0,
                nav: false
            },
            470: {
                items: 2,
                nav: false
            },
            768: {
                items: 4,
                nav: false
            },
            1024: {
                items: 5,
                nav: false
            },
            2000:{
                items: 6,
                nav: false
            }

        }
    });
    $('.nonloop').owlCarousel({
        center: true,
        stagePadding: 50,
        loop: false,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0,
                nav: false
            },
            768: {
                items: 2,
                nav: false
            },
            1024: {
                items: 3,
                nav: false
            }
        }
    });
    $('.nonloop-rtl').owlCarousel({
        rtl: true,
        stagePadding: 50,
        loop: false,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 10,
                nav: false
            },
            768: {
                items: 2,
                nav: false
            },
            1024: {
                items: 3,
                nav: false
            }
        }
    });
});


