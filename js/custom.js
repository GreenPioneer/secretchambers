var SecretChambers = {
	setHomeScreen:function(){
		$(".screen-height").height($(window).height());

            $(window).resize(function(){
                $(".screen-height").height($(window).height());
            });
	},
	smoothScroll:function(){
		/* ---------------------------------------------- /*
		 * Smooth scroll / Scroll To Top
		/* ---------------------------------------------- */

		$('a[href*=#]').bind("click", function(e){
           
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

	},
	windowBindScroll:function(){
		if ($(window).scrollTop() > $(window).height()) {
                $('nav').addClass('scrolled');
                $('.scroll-up').fadeIn();
                $('#headerlogo').show();
                $('#mainlogo').hide();

            } else {
                $('nav').removeClass('scrolled');
                $('.scroll-up').fadeOut();
                $('#mainlogo').show();
                $('#headerlogo').hide();
        }
		$(window).bind('scroll', function () {
            if ($(window).scrollTop() > $(window).height()) {
                $('nav').addClass('scrolled');
                $('.scroll-up').fadeIn();
                $('#headerlogo').show();
                $('#mainlogo').hide();

            } else {
                $('nav').removeClass('scrolled');
                $('.scroll-up').fadeOut();
                $('#mainlogo').show();
                $('#headerlogo').hide();
            }
        });
	},
	callAll:function(){     
        SecretChambers.setHomeScreen();
        SecretChambers.smoothScroll();
        SecretChambers.windowBindScroll();
	}
}
$(document).ready(function() {
         $('body').scrollspy({ target: '#custom-collapse' });
         SecretChambers.callAll();
    //      setTimeout(function(){
		  //   $.scrollTo("#how", 1000);
		  // }, 500);
          
      });
        