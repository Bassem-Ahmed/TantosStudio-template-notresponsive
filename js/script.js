/* Global $, alert, console */
$(function(){
    'use strict'

    // change header height
    $('.header').height($(window).height());
    //

    //scroll to hire us
    $('.intro .hire').click(function(){
        $('body, html').animate({
            scrollTop: $('.our-team').offset().top
        },1000);
    });
    //

    // scroll to features
    $('.header .arrow i').click(function(){
        $('body, html').animate({
            scrollTop: $('.features').offset().top
        }, 1000);
    });
    //

    //show hidden items from work
    $('.our-work .show-more').click(function(){
        $('.items-box .hidden').fadeIn(1000);
    });
    //

    //check testemonials
    var leftArrow = $('.testemonials .fa-chevron-left'),
        rightArrow = $('.testemonials .fa-chevron-right');
    
    function checkArrows(){
        if($('.client:first').hasClass('active')){
            leftArrow.fadeOut();
        }else{
            leftArrow.fadeIn();
        }

        if($('.client:last').hasClass('active')){
            rightArrow.fadeOut();
        }else{
            rightArrow.fadeIn();
        }
    }
    checkArrows();
    
    $('.testemonials i').click(function(){
        if($(this).hasClass('fa-chevron-right')){
            $('.testemonials .active').fadeOut(100, function(){
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                checkArrows();
            })
            }else{
                $('.testemonials .active').fadeOut(100, function(){
                    $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                    checkArrows();
            })
        };
    })
    //
    // trigger Nice scroll
    $("body").niceScroll({
        cursorcolor:"#f7600e",
        cursorborder:"none",
        cursorborderradius:0
    });
    //
    
});