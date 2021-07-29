$(document).ready(function(){

  $('.slider .our-slider').owlCarousel({
    	loop:true,
	    margin:20,
	    nav:true,
	    autoplay:false,
	    autoplayTimeout:4000,
	    smartSpeed:1350,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
    });
  $('#our-attorneys .our-attorneys').owlCarousel({
    	loop:true,
	    margin:20,
	    nav:true,
	    autoplay:false,
	    autoplayTimeout:4000,
	    smartSpeed:1350,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
    });
  $('#client-section .our-client').owlCarousel({
    	loop:true,
	    margin:20,
	    nav:true,
	    autoplay:false,
	    autoplayTimeout:4000,
	    smartSpeed:1350,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:6
	        }
	    }
    });




   // Venibox 
	$('.venobox').venobox({
		titleattr: 'data-title',
		spinner: 'spinner-pulse'
	}); 


 

});

 $('.counter').counterUp({
		    delay: 10,
		    time: 1000
		});
 

	
    
 
function openNav(){
		document.getElementById('MyNav').style.width = "100%";
	}
function closeNav(){
		document.getElementById('MyNav').style.width = "0%";
	}