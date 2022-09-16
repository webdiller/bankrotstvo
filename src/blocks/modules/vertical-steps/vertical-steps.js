import Swiper from 'swiper';

let swiper = Swiper;
let init = false;

const swiperOptions = {
  spaceBetween: 10,
  slidesPerView: 1.4,
  centeredSlides: false,
  loop: false,
  breakpoints: {
    768: {
      slidesPerView: 2
    },
  }
};

function swiperMode() {
  let mobile = window.innerWidth <= 991;

  if (mobile) {
    if (!init) {
      init = true;
      swiper = new Swiper('#verticalStepsSwiper', swiperOptions);
    }
  }
  else if (!mobile) {
    // TODO: Проверить метод
    try {
      swiper.destroy();
    } catch (error) {
      console.log('Обработанная ошибка: ', error);
    }
    init = false;
  }

}

window.addEventListener('load', function () {
  swiperMode();
});

window.addEventListener('resize', function () {
  swiperMode();
});