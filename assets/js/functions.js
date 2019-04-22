
/* Background Images
-------------------------------------------------------------------*/

var  graphicImage = jQuery('#graphic').data('background-image');
var  webImage = jQuery('#web').data('background-image');
var  interactionImage = jQuery('#userinterface').data('background-image');


if (graphicImage) {  jQuery('#graphic').css({ 'background-image':'url(' + graphicImage + ')' }); };
if (webImage) {  jQuery('#web').css({ 'background-image':'url(' + webImage + ')' }); };
if (interactionImage) {  jQuery('#userinterface').css({ 'background-image':'url(' + interactionImage + ')' }); };

/* Background Images End
-------------------------------------------------------------------*/



/* Document Ready function
-------------------------------------------------------------------*/
jQuery(document).ready(function($) {

	"use strict";


    /* Window Height Resize
    -------------------------------------------------------------------*/
    var windowheight = jQuery(window).height();
    if(windowheight > 650)
    {
         $('.pattern').removeClass('height-resize');
    }
    /* Window Height Resize End
    -------------------------------------------------------------------*/


    $('.ancla').click(function(){
        var link = $(this);
        var anchor  = link.attr('href');
        $('html, body').stop().animate({
            scrollTop: jQuery(anchor).offset().top
        }, 2000);
        return false;
    });


	/* Main Menu   
	-------------------------------------------------------------------*/
	$('#main-menu #headernavigation').onePageNav({
		currentClass: 'active',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		scrollOffset: 0,
		filter: '',
		easing: 'swing'
	});  

	/* Main Menu End  
	-------------------------------------------------------------------*/



	/* Next Section   
	-------------------------------------------------------------------*/
	$('.next-section .go-to-graphic').click(function() {
    	$('html,body').animate({scrollTop:$('#graphic').offset().top}, 1000);
  	});
  	$('.next-section .go-to-web').click(function() {
    	$('html,body').animate({scrollTop:$('#web').offset().top}, 1000);
  	});
  	$('.next-section .go-to-interaction').click(function() {
    	$('html,body').animate({scrollTop:$('#userinterface').offset().top}, 1000);
  	});
  	$('.next-section .go-to-iamwhoami').click(function() {
    	$('html,body').animate({scrollTop:$('#iamwhoami').offset().top}, 1000);
  	});

  	/* Next Section End
	-------------------------------------------------------------------*/


});

/* Document Ready function End
-------------------------------------------------------------------*/


/* Preloder 
-------------------------------------------------------------------*/
$(window).load(function () {    
    "use strict";
    $("#loader").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
});
 /* Preloder End
-------------------------------------------------------------------*/
