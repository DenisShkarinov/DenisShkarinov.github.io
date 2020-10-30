"use strict";

let header = document.querySelector('header');
let backToTop = document.querySelector('.back-to__top');

window.onscroll = function() {
  if (window.pageYOffset >= 150) {
    header.classList.add('turn__bg');
  } else {
    header.classList.remove('turn__bg');
  }
  if (window.pageYOffset >= 350) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
}

let mySwiper = new Swiper('.swiper-container', {
  //autoplay: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})

// clock-block
countdown();
function countdown() {
  let clock = document.querySelectorAll('#clock div');
  let date = new Date(2021,10,25, 12,30,30);
  let dateNow = new Date();
  let dateMs = Date.parse('2021-10-25T12:30:30.000-07:00'),
  dateNowMs = Date.parse(dateNow);
  let dateDiff = Math.round((dateMs - dateNowMs)/(1000*60*60*24));
  let days = dateDiff, hours = date.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds();
  seconds -= 1;

  if (seconds == 0) {
    minutes--;
    
    if (minutes == 0) {
      hours--;
      if (hours == 0) {
        days--;
      }
    }
  }
  clock[0].insertAdjacentHTML('afterbegin', `<p>${dateDiff}</p>`)
  clock[1].insertAdjacentHTML('afterbegin', `<p>${hours}</p>`)
  clock[2].insertAdjacentHTML('afterbegin', `<p>${minutes}</p>`)
  clock[3].insertAdjacentHTML('afterbegin', `<p>${seconds}</p>`)
  
}


// accordion block
let links = document.querySelectorAll('.tab li > a');
let tabContent = document.querySelectorAll('.tab-content > div');


$(links).on('click', function(e) {
  e.preventDefault();
  $(links).removeClass('active-event')
  $(this).addClass('active-event');
  let linkAttribute = this.getAttribute('day');

  for (let item of tabContent) {
    let itemAttr = item.getAttribute('day');
    if (linkAttribute == itemAttr) {
      $(item).removeClass('hide')
    } else {
      $(item).addClass('hide')
    }
  }
})


let accordionCard = document.querySelectorAll('#accordion > .card');
$('#accordion .card #headingOne').on('click', function() {
  $('#accordion .card #collapseOne').toggleClass('showCollapse')
})
$('#accordion .card #headingTwo').on('click', function() {
  $('#accordion .card #collapseTwo').toggleClass('showCollapse')
})
$('#accordion .card #headingThree').on('click', function() {
  $('#accordion .card #collapseThree').toggleClass('showCollapse')
})

$('#accordion .accordion-item .accordion-item-header').on('click', function() {
  $(this).siblings('.accordion-item-content').toggleClass('show');
  
})

// burger-button
let burger = document.querySelector('.burger__btn');
let mobileMenu = document.querySelector('.mobile-menu__nav');
$(burger).on('click', function(e) {
  e.preventDefault();
  burger.classList.toggle('burger__btn__active');
  mobileMenu.classList.toggle('mobile-menu__active');
  
})