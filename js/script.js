var scrollButton = $("#scroll-to-top");
$(document).ready(function(){
    $('.carousel').carousel({
        interval:4000
    });

    $(".color-icon").click(function(){
        $(".color-option").fadeToggle();
    })

    $(".color-option ul li").click(function(){
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    })
    scrollButton.hide();
});
$(window).on('load' , function(){
    $(".loading .sk-chase").fadeOut(1000 , function(){
        $("body").css("overflow","auto");
        $(this).parent().fadeOut(1000, function(){
            $(this).remove();
        });
    });
    $(window).scroll(function(){
        console.log($(this).scrollTop());
        if ($(this).scrollTop() >= 700 ) {
            scrollButton.show();
        }
        else {
            scrollButton.hide();
        }
    });
    scrollButton.click(function(){
        $("html,body").animate({ scrollTop : 0 }, 600);
    });

});