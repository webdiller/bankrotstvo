import Swiper from 'swiper';

let swiper = Swiper;
let init = false;

const swiperOptions = {
  spaceBetween: 10,
  slidesPerView: 1.22,
  centeredSlides: false,
  loop: false,
  breakpoints: {
    768: {
      slidesPerView: 2.4,
      spaceBetween: 20,
    },
  }
};

function swiperMode() {
  let mobile = window.innerWidth <= 991;

  if (mobile) {
    if (!init) {
      init = true;
      swiper = new Swiper('#squareSwiper', swiperOptions);
    }
  }
  else if (!mobile) {
    init = false;
  }

}

window.addEventListener('load', function() {
  swiperMode();
});

window.addEventListener('resize', function() {
  swiperMode();
});