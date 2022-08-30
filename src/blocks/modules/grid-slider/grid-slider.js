import Swiper, { Scrollbar, Navigation } from 'swiper';
document.addEventListener('DOMContentLoaded', function () {
  new Swiper('#gridSwiper1', {
    modules: [Scrollbar, Navigation],
    slidesPerView: 1.43,
    spaceBetween: 0,
    centeredSlides: false,
    loop: false,
    scrollbar: {
      el: '#gridSwiper1 + .grid-slider__bottom .swiper-scrollbar',
      draggable: true
    },
    navigation: {
      nextEl: '.grid-slider__bottom .grid-slider__navigation-item_next',
      prevEl: '.grid-slider__bottom .grid-slider__navigation-item_prev'
    },
    breakpoints: {
      768: {
        slidesPerView: 2.4,
      },
      991: {
        slidesPerView: 1,
      }
    }
  });
});
