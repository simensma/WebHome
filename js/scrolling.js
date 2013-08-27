$(function() {
    $('nav a').bind('click',function(event){
        var $anchor = $(this);

        $('html, body').stop().animate({

            scrollTop: $($anchor.attr('href')).offset().top - $('header').outerHeight() , easing: 'easeInOutExpo'
        }, 1000);
        event.preventDefault();
        $('nav a').removeClass("current");

        $(this).addClass("current");

    });
});

/*
$(document).ready(function(){
    $('nav a').removeClass("current");
    $(this).addClass("current");
});
*/