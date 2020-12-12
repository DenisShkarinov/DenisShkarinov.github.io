'use strict';

document.addEventListener('DOMContentLoaded', () => {
   const navLinks = document.querySelectorAll('.desktop-menu li > a');
   const sections = document.querySelectorAll('main > section');
   
   window.addEventListener('scroll', (e) => {
      
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
