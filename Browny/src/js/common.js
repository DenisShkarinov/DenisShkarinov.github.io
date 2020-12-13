'use strict';

document.addEventListener('DOMContentLoaded', () => {

   const burgerBtn = document.querySelector('.burger__btn');
   const mobMenuNav = document.querySelector('.mobile-menu__nav');

   burgerBtn.addEventListener('click', (event) => {
      event.preventDefault()
      let target = event.target;
      if (target.tagName != "A") return;
      
         target.classList.toggle('active');
         mobMenuNav.classList.toggle('mobile-menu-nav__active')
      if (mobMenuNav.classList.contains('mobile-menu-nav__active')) {
         mobMenuNav.addEventListener('click', (e) => {
            if (target.tagName == 'A') {
               target.classList.remove('active')
               mobMenuNav.classList.remove('mobile-menu-nav__active')
            }
         })
      }
   })

   window.addEventListener('scroll', (event) => {
      const topLink = document.querySelector('.scroll-to-top');
      if (window.pageYOffset > 650) {
         topLink.classList.style.display = "block !important"; 
      } else {
         topLink.classList.style.display = "none";
      }
   })

   const navLinks = document.querySelectorAll('.desktop-menu li > a');
   const sections = document.querySelectorAll('main > section');
   
   
   // * PROGRESS-BAR IN SECTION SKILLS
   const skillsBlock = document.getElementById('skills')
   const progressBars = skillsBlock.querySelectorAll('.progress-bar');

   progressBars.forEach(progress => {
      let updateProgress = () => {
         let progressMin = +progress.dataset.initialValue;
         const progressMax = +progress.dataset.value;
         
         if (progressMin < progressMax) {
            progress.setAttribute('data-initial-value', progressMin+1);
            progress.style.width += "1%"
            setTimeout(updateProgress, 1);
         } else {
            progressMin = progressMax;
            progress.style.width = `${progressMin}%`
         }
      }
      updateProgress()
   })

   
})
const clientSwiper = new Swiper('.clients-container', {
   // Optional parameters
   direction: 'horizontal',
   speed: 300,
   grabCursor: true,
   draggable: true,
   spaceBetween: '30',
   slidesPerView: 7,
   breakpoints: {
      320: {
         slidesPerView: 2,
         spaceBetween: 15
      },
      480: {
         slidesPerView: 3,
         spaceBetween: 20
      }, 
      640: {
         slidesPerView: 3,
         spaceBetween: 25
      },
      800: {
         slidesPerView: 4,
         spaceBetween: 30
      },
   }
})