var appMaster = {
	menuToggler: function(){
		// Menu Toggler
	
		$('#closeToggle').on('click', function(e) {
	    	e.preventDefault();
	    	/* Act on the event */
	    	$('#wrapper').toggleClass('toggled');
	    	$('#menuToggler' ).toggleClass( "hide" );
	    });
	    $('#menuToggler').on('click', function(e) {
	    	e.preventDefault();
	    	/* Act on the event */
	    	$('#wrapper').toggleClass('toggled');
	    	$('#menuToggler' ).toggleClass( "hide" );
	    });

	    
	},
	anotherFunction: function(){
		// Add you custom here and don't forget to change the object title (anotherFunction)
	},
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
			$('#wrapper').addClass('toggled');
		});

	}
}