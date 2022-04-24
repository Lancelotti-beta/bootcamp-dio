
//Section Destaque
$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop: true,
    margin: 10,
    responsiveClass: true,
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


//Section Promoção
$('.nonloop .owl-carousel').owlCarousel({
    center: true,
    items: 2,
    loop: false,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1700,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        425: {
            items: 2,
            nav: false
        },
        1024: {
            items: 3,
            nav: true
        }
    }
});



