import Swiper, {Scrollbar, Navigation} from 'swiper';
document.addEventListener('DOMContentLoaded', function () {
  new Swiper('#horiontalSwiper1', {
    modules: [Scrollbar, Navigation],
    spaceBetween: 30,
    slidesPerView: 3,
    centeredSlides: false,
    loop: false,
    scrollbar: {
      el: "#horiontalSwiper1 .horizontal-slider__bottom .swiper-scrollbar",
      draggable: true,
    },
    navigation: {
      nextEl: ".horizontal-slider__bottom .horizontal-slider__navigation-item_next",
      prevEl: ".horizontal-slider__bottom .horizontal-slider__navigation-item_prev",
    },
  });

  new Swiper('#horiontalSwiper2', {
    modules: [Scrollbar, Navigation],
    spaceBetween: 30,
    slidesPerView: 4,
    centeredSlides: false,
    loop: false,
    scrollbar: {
      el: "#horiontalSwiper2 .horizontal-slider__bottom .swiper-scrollbar",
      draggable: true,
    },
    navigation: {
      nextEl: ".horizontal-slider__bottom .horizontal-slider__navigation-item_next",
      prevEl: ".horizontal-slider__bottom .horizontal-slider__navigation-item_prev",
    },
  });
});

