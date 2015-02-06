$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});




var startY = 900;
var stopY = 4400;

$(window).scroll(function(){
    checkY();
});

function checkY()
{ 
    if($(window).scrollTop() > startY && $(window).scrollTop() <= stopY)
    { 
       $('.jumpbar').show(); 
    }
    else
    { 
        $('.jumpbar').hide();
    }
}

checkY();



$(document).ready(function(){
    //if()
        $('.menu-button').on('click', function(){
            $('.menu-container').toggleClass('display');
        });
    //else  
    /*$('.menu-button').on('click', function(){
        $('.menu-container').fadeOut('slow');
  });*/
    $('.menu-list li a').on('click', function(){
        $('.menu-container').toggleClass('display');
  });
  /*$('.menu-button').on('click', function(){
    $('.menu-container').show();
  });*/
});

