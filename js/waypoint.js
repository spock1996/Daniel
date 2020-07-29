$(document).ready(function() {
    $(".js--section-features").waypoint(function(direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");
        }
        else {
            $("nav").removeClass("sticky")
        }
    })

    $("#home").click(function() {
        $("html, body").animate({scrollTop: $("#start").offset().top}, 1000);
    });

    $("#up").click(function() {
        $("html, body").animate({scrollTop: $("#start").offset().top}, 1000);
    });

    $("#last-work").click(function() {
        $("html, body").animate({scrollTop: $("#work-pic").offset().top}, 1000);
    });

    $("#about").click(function() {
        $("html, body").animate({scrollTop: $(".author-name").offset().top}, 1000);
    });

    $("#email").click(function() {
        $("html, body").animate({scrollTop: $(".contact").offset().top}, 1000);
    });

    $("#btn-click").click(function() {
        $("html, body").animate({scrollTop: $("#work-pic").offset().top}, 1000);
    });

    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
    });


});