$(document).ready(function(){
    $('.our__productions__slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:1,
        slidesToScroll:1,
        speed:400,
        easing:'ease-in-out',
        infinite:true,
        initialSlide:0,
        autoplay:false,
        autoplaySpeed:1500,
        pauseOnFocuse:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        draggable:true,
        swipe:  true,
        touchThresHold:10,
        centerMode:true,
        variableWidth:true,
    });
});

