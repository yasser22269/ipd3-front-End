$(function(){
    'use strict';

//Start scroll to top buttom
    $(window).scroll(function(){

        
        if($(window).scrollTop() >= 580){
            $(".scrolltotop").fadeIn(1500);
        }else{
         $(".scrolltotop").fadeOut(1500);
        }
        //End scroll to top buttom
    })
    //Start scroll to go up
    $(".scrolltotop").click(function(e){
     e.preventDefault();         //يمنع المعتاد
     $("html,body").animate({
         scrollTop:0
     },500)
    })
    
    //loading

    var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 2000);
	};
	loader();
  
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        margin:10,
        nav:true,
        responsiveClass:true,
        responsive:true,
        responsive:{
            0:{
                items:1,
                loop:true
                
            },
            600:{
                items:2,
                loop:true
                
            },
            1000:{
                items:4,
                loop:true
                
            }
        }
    })

    //loading

    var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 2000);
	};
	loader();

});