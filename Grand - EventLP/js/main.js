"use strict";window.onload=function(){document.body.classList.add('loaded_hiding');window.setTimeout(function(){document.body.classList.add('loaded');document.body.classList.remove('loaded_hiding');},500);}
let header=document.querySelector('header');let backToTop=document.querySelector('.back-to__top');window.onscroll=function(){if(window.pageYOffset>=150){header.classList.add('turn__bg');}else{header.classList.remove('turn__bg');}
if(window.pageYOffset>=350){backToTop.classList.add('show');}else{backToTop.classList.remove('show');}}
let mySwiper=new Swiper('.swiper-container',{autoplay:{delay:5000,waitForTransition:true},fadeEffect:{crossFade:true},pagination:{el:'.swiper-pagination',clickable:true},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev',}})

const date=new Date(2021,10,25,12,30,30);
const dateNow=new Date();
let dateMs=Date.parse('2021-10-25T12:30:30.000-07:00'),
dateNowMs=Date.parse(dateNow);
let days = Math.round((dateMs-dateNowMs)/(1000*60*60*24)),
   hours = 24 - dateNow.getHours(),
   minutes = 60 - dateNow.getMinutes(),
   seconds = 60 - dateNow.getSeconds();

(function() {
   let daysEl = document.querySelector('#clock .days');
   let hoursEl = document.querySelector('#clock .hours');
   let minEl = document.querySelector('#clock .minutes');
   let secEl = document.querySelector('#clock .seconds');
   
   let timer = setInterval(function() {
      secEl.innerHTML = seconds + "\n sec";
      minEl.innerHTML = minutes + "\n min";
      hoursEl.innerHTML = hours + "\n hours";
      daysEl.innerHTML = days + "\n days";
      --seconds;
      if (seconds == 0) {
         seconds = 60;
         --minutes;
      }
      if (minutes == 0) {
         minutes=60;
         --hours;
      }
      if (hours == 0) {
         hours = 24;
         --days;
      }
      
   }, 1000)
})();
let links=document.querySelectorAll('.tab li > a');let tabContent=document.querySelectorAll('.tab-content > div');$(links).on('click',function(e){e.preventDefault();$(links).removeClass('active-event')
$(this).addClass('active-event');let linkAttribute=this.getAttribute('day');for(let item of tabContent){let itemAttr=item.getAttribute('day');if(linkAttribute==itemAttr){$(item).removeClass('hide')}else{$(item).addClass('hide')}}})
let accordionCard=document.querySelectorAll('#accordion > .card');$('#accordion .card #headingOne').on('click',function(){$('#accordion .card #collapseOne').toggleClass('showCollapse')})
$('#accordion .card #headingTwo').on('click',function(){$('#accordion .card #collapseTwo').toggleClass('showCollapse')})
$('#accordion .card #headingThree').on('click',function(){$('#accordion .card #collapseThree').toggleClass('showCollapse')})
$('#accordion .accordion-item .accordion-item-header').on('click',function(){$(this).siblings('.accordion-item-content').toggleClass('show');})
let burger=document.querySelector('.burger__btn');let mobileMenu=document.querySelector('.mobile-menu__nav');$(burger).on('click',function(e){e.preventDefault();burger.classList.toggle('burger__btn__active');mobileMenu.classList.toggle('mobile-menu__active');$('.mobile-menu__active ul li > a').click(function(){burger.classList.remove('burger__btn__active');mobileMenu.classList.remove('mobile-menu__active');})})