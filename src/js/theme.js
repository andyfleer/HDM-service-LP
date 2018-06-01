$(function($) {
    "use strict";

    // if($(window).width()>992){
    //     $('#section-experiences').parallax("50%", 0.4);
    // }

   /*----------------------------------------------------*/
   /*  Explor Room Slider
   /*----------------------------------------------------*/

   $('.owl-carousel').owlCarousel({
       loop:true,
       margin:0,
       nav:true,
       dots:true,
       items: 1,
       smartSpeed: 1500,
       autoplay: true,
       navText : ["<img src='img/left-arrow.png' />","<img src='img/right-arrow.png' />"],
       animateOut: 'fadeOut'
   });
});
