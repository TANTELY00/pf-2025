$(function(){

     // one page nav
     $('#menu').onePageNav();

    // menu mobile
    // open
    $('.burger-menu').click(function(e){
        $('.menu-mobile').slideDown();
        e.preventDefault();
    });

     // close
     $('.close-menu').click(function(e){
        $('.menu-mobile').slideUp();
        e.preventDefault();
    });

    // slide up si menu 
    $('.menu-mobile ul').onePageNav({
        end : function(){
            $('.menu-mobile').slideUp();
        }
    });

     // header change
     $(window).scroll(function(){

        // recuperer le valeur du scroll
        var Hscroll = $(this).scrollTop();
        //console.log(Hscroll);
        if(Hscroll > 159){
            // add class
            $('header').addClass('fix-with');
        }else{
            // remove class
            $('header').removeClass('fix-with');
        }

         // disparition de la contenue home
         var opScroll  = Hscroll / 300;
         $('.contenus').css({
             opacity : 1 - opScroll
         });

    });

   
    $('.roll-down').click(function(e){

        // scroll vers à propos
        var elem = $('#about');
        $('html,body').animate({ scrollTop : elem.offset().top} , 750);

        // annuler le lien
        e.preventDefault();

    });

    // slider projects
    $('.slider').slick({
        // afficher 3
        slidesToShow : 3,
        slidesToScroll : 1,
        autoplay : true ,
        pauseOnHover : true ,
        dots : true,
        infinite : false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            }
          ]

    });

});