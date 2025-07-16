jQuery('.slider-box').owlCarousel({
    
    autoplayTimeout:5000,
    autoplay:true,
    nav:true,
    rtl:true,
    loop:false,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,        },
        600:{
            items:2,
        },
        1000:{
            items:5,
        }
    }
});