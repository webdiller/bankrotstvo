// 

import Swiper, { Scrollbar, Navigation } from 'swiper';
document.addEventListener('DOMContentLoaded', function () {
    new Swiper('#uiNewSlider', {
        modules: [Scrollbar, Navigation],
        spaceBetween: 15,
        slidesPerView: 1.2,
        centeredSlides: false,
        loop: false,
        scrollbar: {
            el: `#uiNewSlider .ui-newslider__bottom .swiper-scrollbar`,
            draggable: true,

        },
        navigation: {
            nextEl: `.ui-newslider__bottom .ui-newslider__navigation-item_next`,
            prevEl: `.ui-newslider__bottom .ui-newslider__navigation-item_prev`
        },
        breakpoints: {
            576: {
                spaceBetween: 15,
                slidesPerView: 2.1
            },
            991: {
                spaceBetween: 30,
                slidesPerView: 2
            },
        }
    });
});