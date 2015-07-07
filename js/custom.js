
//GA 
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-63551693-1', 'auto');
  ga('send', 'pageview');

// https://report.ptengine.com
window._pt_lt = new Date().getTime();
  window._pt_sp_2 = [];
  _pt_sp_2.push('setAccount,67933f48');
  var _protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
  (function() {
    var atag = document.createElement('script'); atag.type = 'text/javascript'; atag.async = true;
    atag.src = _protocol + 'js.ptengine.com/pta.js';
    var stag = document.createElement('script'); stag.type = 'text/javascript'; stag.async = true;
    stag.src = _protocol + 'js.ptengine.com/pts.js';
    var s = document.getElementsByTagName('script')[0]; 
    s.parentNode.insertBefore(atag, s);s.parentNode.insertBefore(stag, s);
  })();


var SecretChambers = {
	setHomeScreen:function(){
     // ($(window).height() >600) ? $(".screen-height").height($(window).height()):$(".screen-height").height('600px');
($(window).height() >'600') ? $(".screen-height").height($(window).height()):$(".screen-height").height('600');

      $(window).resize(function(){
          ($(window).height() >'600') ? $(".screen-height").height($(window).height()):$(".screen-height").height('600');
      });
    //   if($(window).height() > 500){
    //     $(".screen-height").height($(window).height());
    // }else{
    //   $(".screen-height").height('500px');
    // }
    
    // $(window).resize(function(){
    //    if($(window).height() > 500){
    //     $(".screen-height").height($(window).height());
    //   }else{
    //     $(".screen-height").height('500px');
    //   }
    // });// 
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
		// if ($(window).scrollTop() > $(window).height()) {
  //               $('nav').addClass('scrolled');
  //               $('.scroll-up').fadeIn();
  //               $('#headerlogo').show();
  //               $('#mainlogo').hide();

  //           } else {
  //               $('nav').removeClass('scrolled');
  //               $('.scroll-up').fadeOut();
  //               $('#mainlogo').show();
  //               $('#headerlogo').hide();
  //       }
		// $(window).bind('scroll', function () {
  //           if ($(window).scrollTop() > $(window).height()) {
  //               $('nav').addClass('scrolled');
  //               $('.scroll-up').fadeIn();
  //               $('#headerlogo').show();
  //               $('#mainlogo').hide();

  //           } else {
  //               $('nav').removeClass('scrolled');
  //               $('.scroll-up').fadeOut();
  //               $('#mainlogo').show();
  //               $('#headerlogo').hide();
  //           }
  //       });

	},
  googleMap:function(){

   // function initialize() {
   //    var mapOptions = {
   //      zoom: 10,
   //      center: new google.maps.LatLng(32.725409,-97.32085),
   //      mapTypeId:google.maps.MapTypeId.ROADMAP
   //    }
   //    var map = new google.maps.Map(document.getElementById('googleMap'),
   //                                  mapOptions);

   //    var image = './img/icons/sc/favicon.ico';
   //    var myLatLng = new google.maps.LatLng(32.725409,-97.32085);
   //    var beachMarker = new google.maps.Marker({
   //        position: myLatLng,
   //        map: map,
   //        icon: image
   //    });
   //  }

   //  google.maps.event.addDomListener(window, 'load', initialize);
  },
  
	callAll:function(){     
        SecretChambers.setHomeScreen();
        SecretChambers.smoothScroll();
        SecretChambers.windowBindScroll();
        SecretChambers.googleMap();
       
	}
}
$(document).ready(function() {
         $('body').scrollspy({ target: '#custom-collapse' });
         SecretChambers.callAll();
    //      setTimeout(function(){
		  //   $.scrollTo("#how", 1000);
		  // }, 500);
          
      });


