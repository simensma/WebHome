

function scrollTo(placeId,parent){

    if($(placeId).length!=0){

        $('html, body').stop().animate({

            scrollTop: $(placeId).offset().top - $('header').outerHeight() , easing: 'easeInOutExpo'
        }, 1000);
        event.preventDefault();

        $('nav a').removeClass("current");

        parent.addClass("current");
    }
}


$(function() {
    $('nav a').bind('click',function(event){
        var $anchor = $(this);
        scrollTo($anchor.attr('href'),$anchor);


    });
});


$(document).ready(function(){
    $('body').scrollspy({target:'#navbar'});
    $('body').data().scrollspy.options.offset=100;
    $('body').data().scrollspy.process();
    scrollTo(window.location.hash,$(window.location.hash));
});
