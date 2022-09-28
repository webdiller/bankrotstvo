import Swiper from 'swiper';
const articleSliders = document.querySelectorAll("[data-component='articlesSwiper']");


document.addEventListener('DOMContentLoaded', function () {
  articleSliders.forEach(slider => {
    new Swiper(slider, {
      spaceBetween: 15,
      slidesPerView: 1.2,
      centeredSlides: false,
      loop: false,
      breakpoints: {
        576: {
          slidesPerView: 2.3,
        }
      }
    });
  });

});
