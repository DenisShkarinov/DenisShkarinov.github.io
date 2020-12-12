"use strict";


$('.burger__btn').on('click', function(e) {
   e.preventDefault();
   $(this).toggleClass('burger__btn__active');
   if ($('.burger__btn__active')) {
      $('.mobile-navigation').toggleClass('mobile-navigation__active');
   } 
})

$('.modal').on('click', function(e) {
   e.preventDefault();
   $('.modal-wrap').toggleClass('modal-wrap__active');
})