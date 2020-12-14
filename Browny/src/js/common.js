'use strict';

document.addEventListener('DOMContentLoaded', () => {

   const downloadBtn = document.getElementById('toDownload');

   downloadBtn.addEventListener('click', (event) => {
      if (event.target.tagName != "A") return;

      let question = confirm("Do you really want to download a resume?")
      
      if (question == false) {
         event.target.removeAttribute('download')
      } else {
         event.target.setAttribute('download', 'Resume.docx')
      }
   })

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
   const topLink = document.getElementById('scroll-to-top');
   
   window.addEventListener('scroll', (event) => {
      
      if (window.pageYOffset < 650) {
         topLink.classList.remove('active__link'); 
      } else {
         topLink.classList.add('active__link')
      }
   })   
   
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