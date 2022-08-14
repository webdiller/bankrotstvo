import Swiper, {Scrollbar, Navigation} from 'swiper';
document.addEventListener('DOMContentLoaded', function () {
  new Swiper('#gridSwiper1', {
    modules: [Scrollbar, Navigation],
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: false,
    loop: false,
    scrollbar: {
      el: "#gridSwiper1 + .grid-slider__bottom .swiper-scrollbar",
      draggable: true,
    },
    navigation: {
      nextEl: ".grid-slider__bottom .grid-slider__navigation-item_next",
      prevEl: ".grid-slider__bottom .grid-slider__navigation-item_prev",
    },
  });
});

