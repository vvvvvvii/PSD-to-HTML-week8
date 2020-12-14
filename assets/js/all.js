"use strict";

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 375px
    375: {
      slidesPerView: 'auto',
      spaceBetween: 30
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
//# sourceMappingURL=all.js.map
