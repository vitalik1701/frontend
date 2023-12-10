$(function() {
    $('.design-slider').slick({
        dots:false,
        slidesToShow: 4,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 361,
                settings:{
                    variableWidth:false,
                    slidesToShow:1,
                }
            }
        ]


    });
});