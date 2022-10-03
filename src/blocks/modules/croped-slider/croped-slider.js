import Swiper, { Scrollbar, Navigation } from 'swiper';
document.addEventListener('DOMContentLoaded', function () {
    const cropedSliders = document.querySelectorAll("[data-component='cropedSlider");
    cropedSliders.forEach(sliderElement => {
        new Swiper(sliderElement, {
            modules: [Scrollbar, Navigation],
            spaceBetween: 15,
            slidesPerView: 1.11,
            centeredSlides: false,
            loop: false,
            scrollbar: {
                el: `.croped-slider__bottom .swiper-scrollbar`,
                draggable: true
            },
            navigation: {
                nextEl: '.croped-slider__bottom .croped-slider__navigation-item_next',
                prevEl: '.croped-slider__bottom .croped-slider__navigation-item_prev'
            },
            breakpoints: {
                991: {
                    spaceBetween: 30,
                    slidesPerView: 1.35
                }
            }
        });
    })


    //   new Swiper('#cropedSlider', {
    //     modules: [Scrollbar, Navigation],
    //     spaceBetween: 15,
    //     slidesPerView: 1.2,
    //     centeredSlides: false,
    //     loop: false,
    //     scrollbar: {
    //       el: '#cropedSlider .croped-slider__bottom .swiper-scrollbar',
    //       draggable: true
    //     },
    //     navigation: {
    //       nextEl: '.croped-slider__bottom .croped-slider__navigation-item_next',
    //       prevEl: '.croped-slider__bottom .croped-slider__navigation-item_prev'
    //     },
    //     breakpoints: {
    //       480: {
    //         slidesPerView: 2
    //       },
    //       768: {
    //         slidesPerView: 3
    //       },
    //       991: {
    //         spaceBetween: 30,
    //         slidesPerView: 1.3
    //       }
    //     }
    //   });
});
