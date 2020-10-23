'use strict';

let cat = document.querySelectorAll('.cat > li');
let portfolioItems = document.querySelectorAll('.portfolio-items > .col');

// category filtration in section gallery

$('.cat > li').on('click', function() {
   $('.active').removeClass();
   $(this).addClass('active');

   for (let item of cat) {
      if (item.classList.contains('active')) {
         let activeItem = item.getAttribute('data-filter')

         for (let column of portfolioItems) {
            if (column.classList.contains(activeItem) == false) {
               column.classList.add('hide');
            } else {
               column.classList.remove('hide')
            }
         }
      }
   }
});


let header = document.querySelector('header');

window.onscroll = function() {
   if (window.pageYOffset >= 450) {
      header.classList.add('on');
   } else {
      header.classList.remove('on');
   }
}
// Burger button

let burgerButton = document.querySelector('.burger__btn');
$(burgerButton).on('click', function(e) {
   e.preventDefault();
   $(this).toggleClass('burger__btn__active');
   $('.mobile-menu__nav').toggleClass('mobile-menu__nav__active');
   $('.mobile-menu__nav__active a').on('click', function() {
      $('.mobile-menu__nav__active').removeClass('mobile-menu__nav__active');
      $('.burger__btn__active').removeClass('burger__btn__active');
   })
})

