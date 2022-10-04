/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/about-project/about-project.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/about-project/about-project.js ***!
  \***********************************************************/
/***/ (() => {

var officeImgWrapper = document.getElementById("officeImgWrapper");

if (officeImgWrapper) {
  try {
    if (window.innerWidth <= 576) {
      officeImgWrapper.scrollLeft = 100;
    }

    if (window.innerWidth <= 400) {
      officeImgWrapper.scrollLeft = 200;
    }

    if (window.innerWidth <= 320) {
      officeImgWrapper.scrollLeft = 210;
    }
  } catch (error) {
    console.log('Ошибка в секкции карт. ', error);
  }
}

/***/ }),

/***/ "./src/blocks/modules/articles-page/articles-page.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/articles-page/articles-page.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

var articleSliders = document.querySelectorAll("[data-component='articlesSwiper']");
document.addEventListener('DOMContentLoaded', function () {
  articleSliders.forEach(function (slider) {
    new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](slider, {
      spaceBetween: 15,
      slidesPerView: 1.2,
      centeredSlides: false,
      loop: false,
      breakpoints: {
        576: {
          slidesPerView: 2.3
        }
      }
    });
  });
});

/***/ }),

/***/ "./src/blocks/modules/croped-slider/croped-slider.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/croped-slider/croped-slider.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

document.addEventListener('DOMContentLoaded', function () {
  var cropedSliders = document.querySelectorAll("[data-component='cropedSlider");
  cropedSliders.forEach(function (sliderElement) {
    new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](sliderElement, {
      modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation],
      spaceBetween: 15,
      slidesPerView: 1.11,
      centeredSlides: false,
      loop: false,
      scrollbar: {
        el: ".croped-slider__bottom .swiper-scrollbar",
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
  }); //   new Swiper('#cropedSlider', {
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

/***/ }),

/***/ "./src/blocks/modules/dropdown/dropdown.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/dropdown/dropdown.js ***!
  \*************************************************/
/***/ (() => {

var dropdownComponents = document.querySelectorAll("[data-component='dropdown']");
document.addEventListener('DOMContentLoaded', function () {
  dropdownComponents.forEach(function (component) {
    var defaultDropdownTitle = 'Город';
    var dropdownTitle = component.querySelector('.dropdown__main-item');
    var attributeValue = component.getAttribute('data-value');

    if (component.getAttribute('data-title')) {
      defaultDropdownTitle = component.getAttribute('data-title');
    }

    var currentCityName = null;
    var currentCityValue = null;

    if (attributeValue) {
      var parseAttributeValue = JSON.parse("".concat(attributeValue));
      currentCityName = parseAttributeValue.name;
      dropdownTitle.innerText = currentCityName;
    }

    component.addEventListener('click', function (event) {
      try {
        var val = event.target.value;

        if (val) {
          var _parseAttributeValue = JSON.parse("".concat(val));

          currentCityName = _parseAttributeValue.name;
          currentCityValue = _parseAttributeValue.value;
          dropdownTitle.innerText = currentCityName;
          component.setAttribute('value', val);
        }

        if (!val && component.getAttribute('value')) {
          var previusStateAttribute = component.getAttribute('value');

          var _parseAttributeValue2 = JSON.parse("".concat(previusStateAttribute));

          currentCityName = _parseAttributeValue2.name;
          currentCityValue = _parseAttributeValue2.value;
          dropdownTitle.innerText = currentCityName;
        }

        if (component.classList.contains('active')) {
          if (attributeValue) {
            dropdownTitle.innerText = currentCityName;
          }

          component.classList.remove('active');
        } else {
          dropdownTitle.innerText = defaultDropdownTitle;
          component.classList.add('active');
        }
      } catch (error) {
        console.log(error);
      }
    });
  });
});

/***/ }),

/***/ "./src/blocks/modules/faq/faq.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/faq/faq.js ***!
  \***************************************/
/***/ (() => {

var faqs = document.querySelectorAll("[data-component='faq']");
document.addEventListener('DOMContentLoaded', function () {
  faqs.forEach(function (faq) {
    var toggleButtons = faq.querySelectorAll('.faq__item-question');
    toggleButtons.forEach(function (element) {
      element.addEventListener('click', function (e) {
        element.classList.toggle('active');
      });
    });
  });
});

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/blocks/modules/grid-slider/grid-slider.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/grid-slider/grid-slider.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

document.addEventListener('DOMContentLoaded', function () {
  new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('#gridSwiper1', {
    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation],
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
        slidesPerView: 2.4
      },
      991: {
        slidesPerView: 1
      }
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (() => {

var headerComponent = document.querySelector("[data-component='header']");
var menu = headerComponent.querySelector(".header__menu");
var mobileMenu = document.querySelector("[data-component='headerMobileMenu']");
var headerContacts = document.querySelector("[data-component='headerContacts']");
var headerContactsSearchButton = headerContacts.querySelector(".mobile-menu__contacts-search");
var headerMobileSearch = document.querySelector("[data-component='headerMobileSearch']");
var headerMobileSearchInput = mobileMenu.querySelector(".mobile-menu__search-input");
var headerMobileSearchClose = mobileMenu.querySelector(".mobile-menu__search-btn");
var toggleList = document.querySelectorAll("[data-component='toggleList']");
document.addEventListener('DOMContentLoaded', function () {
  menu.addEventListener('click', function (event) {
    event.target.classList.toggle('active');
    headerComponent.classList.toggle('active');
    mobileMenu.classList.toggle('active');

    if (menu.classList.contains('active')) {
      headerComponent.classList.remove('active-search');
    }
  });
  headerContactsSearchButton.addEventListener('click', function () {
    headerContacts.classList.toggle('active');
    headerMobileSearch.classList.toggle('active');
    headerComponent.classList.add('active-search');
    headerMobileSearchInput.focus();
  });
  headerMobileSearchClose.addEventListener('click', function () {
    headerContacts.classList.remove('active');
    headerMobileSearch.classList.remove('active');
    headerComponent.classList.remove('active-search');
  });
  toggleList.forEach(function (item) {
    var itemBtn = item.querySelector('.mobile-menu__item-link_trigger');
    itemBtn.addEventListener('click', function () {
      item.classList.toggle('active');
    });
  });
});

/***/ }),

/***/ "./src/blocks/modules/horizontal-slider/horizontal-slider.js":
/*!*******************************************************************!*\
  !*** ./src/blocks/modules/horizontal-slider/horizontal-slider.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

document.addEventListener('DOMContentLoaded', function () {
  new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('#horiontalSwiper1', {
    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation],
    spaceBetween: 15,
    slidesPerView: 1.2,
    centeredSlides: false,
    loop: false,
    scrollbar: {
      el: '#horiontalSwiper1 .horizontal-slider__bottom .swiper-scrollbar',
      draggable: true
    },
    navigation: {
      nextEl: '.horizontal-slider__bottom .horizontal-slider__navigation-item_next',
      prevEl: '.horizontal-slider__bottom .horizontal-slider__navigation-item_prev'
    },
    breakpoints: {
      480: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      991: {
        spaceBetween: 30,
        slidesPerView: 3
      }
    }
  });
  new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('#horiontalSwiper2', {
    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation],
    spaceBetween: 15,
    slidesPerView: 1.2,
    centeredSlides: false,
    loop: false,
    scrollbar: {
      el: '#horiontalSwiper2 .horizontal-slider__bottom .swiper-scrollbar',
      draggable: true
    },
    navigation: {
      nextEl: '.horizontal-slider__bottom .horizontal-slider__navigation-item_next',
      prevEl: '.horizontal-slider__bottom .horizontal-slider__navigation-item_prev'
    },
    breakpoints: {
      480: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      991: {
        spaceBetween: 30,
        slidesPerView: 4
      }
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/modals/modals.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/modals/modals.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var viewerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! viewerjs */ "./node_modules/viewerjs/dist/viewer.js");
/* harmony import */ var viewerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(viewerjs__WEBPACK_IMPORTED_MODULE_0__);

document.addEventListener('DOMContentLoaded', function () {
  // modalSearch. Модалка поиска. Вызов из шапки.
  (function () {
    try {
      var modalSearch = document.querySelector("[data-component='modalSearch']");
      var modalSearchTrigger = document.querySelectorAll("[data-component='modalSearchTrigger']");
      var modalSearchInput = modalSearch.querySelector("input");
      var modalSearchClose = modalSearch.querySelector(".modal-search__close-btn");
      modalSearch.addEventListener('click', function (e) {
        if (e.target.dataset.component === 'modalSearch') {
          modalSearch.classList.remove('active');
        }
      });
      modalSearchTrigger.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
          modalSearch.classList.toggle('active');

          if (!modalSearch.classList.contains('.active')) {
            modalSearchInput.focus();
          }
        });
      });
      modalSearchClose.addEventListener('click', function () {
        modalSearch.classList.remove('active');
      });
    } catch (error) {
      console.log('error: ', error);
    }
  })(); // modalReview. Модалка оставления отзыва


  (function () {
    try {
      var modalReview = document.querySelector("[data-component='modalReview']");
      var modalReviewTrigger = document.querySelectorAll("[data-component='modalReviewTrigger']");
      var modalReviewClose = modalReview.querySelector(".modal-review__close-btn");
      modalReview.addEventListener('click', function (e) {
        if (e.target.dataset.component === 'modalReview') {
          modalReview.classList.remove('active');
        }
      });
      modalReviewTrigger.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
          modalReview.classList.toggle('active');
        });
      });
      modalReviewClose.addEventListener('click', function () {
        modalReview.classList.remove('active');
      });
    } catch (error) {
      console.log('error: ', error);
    }
  })(); // modalComment. Модалка оставления комментария


  (function () {
    try {
      var modalComment = document.querySelector("[data-component='modalComment']");
      var modalCommentTrigger = document.querySelectorAll("[data-component='modalCommentTrigger']");
      var modalCommentClose = modalComment.querySelector(".modal-review__close-btn");
      modalComment.addEventListener('click', function (e) {
        if (e.target.dataset.component === 'modalComment') {
          modalComment.classList.remove('active');
        }
      });
      modalCommentTrigger.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
          modalComment.classList.toggle('active');
        });
      });
      modalCommentClose.addEventListener('click', function () {
        modalComment.classList.remove('active');
      });
    } catch (error) {
      console.log('error: ', error);
    }
  })(); // modalViewer. Элемент просмотра фотографий в увеличенном режиме


  (function () {
    var modalImages = document.querySelectorAll("[data-component='modalImages']");

    try {
      modalImages.forEach(function (element) {
        new (viewerjs__WEBPACK_IMPORTED_MODULE_0___default())(element, {
          toolbar: false,
          navbar: false,
          title: false,
          className: "viewer-modal"
        });
      });
    } catch (error) {
      console.log(error);
    }
  })(); // modalSort. Сортировка отзывов и обзоров. НА каждую страницу сделано по 1 модалке и 1 кнопки вызова.


  (function () {
    try {
      var modalSorting = document.querySelector("[data-component='modalSorting']");
      var modalSortingTrigger = document.querySelector("[data-component='modalSortingTrigger']");
      var modalSortingTriggerTitle = modalSortingTrigger.querySelector(".dropdown__main-item");
      var modalSortingClose = modalSorting.querySelector(".modal-sort__close-btn");
      var modalSortingForm = modalSorting.querySelector("form");
      modalSorting.addEventListener('click', function (e) {
        if (e.target.dataset.component === 'modalSorting') {
          modalSorting.classList.remove('active');
        }
      });
      modalSortingTrigger.addEventListener('click', function () {
        modalSorting.classList.toggle('active');
      });
      modalSortingClose.addEventListener('click', function () {
        modalSorting.classList.remove('active');
      }); // Делаем закрытие модалки, при изменении значения

      modalSortingForm.addEventListener("change", function (e) {
        var selectedValue = e.target.value;
        modalSorting.classList.remove('active');
        modalSortingTriggerTitle.innerHTML = selectedValue;
      });
    } catch (error) {
      console.log('error: ', error);
    }
  })();
});

/***/ }),

/***/ "./src/blocks/modules/rating-star/rating-star.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/rating-star/rating-star.js ***!
  \*******************************************************/
/***/ (() => {

var ratings = document.querySelectorAll("[data-component='rating']");
document.addEventListener('DOMContentLoaded', function () {
  ratings.forEach(function (rating) {
    var inputs = rating.querySelectorAll("[name='rating']");
    var currentSumm = rating.querySelector('.rating-star__count-current');
    inputs.forEach(function (input) {
      input.addEventListener('change', function (event) {
        console.log('event: ', event.target.value);
        currentSumm.innerHTML = event.target.value;
      });
    });
  });
});

/***/ }),

/***/ "./src/blocks/modules/search-form/search-form.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/search-form/search-form.js ***!
  \*******************************************************/
/***/ (() => {

var searchForms = document.querySelectorAll("[data-component='searchForm']");
document.addEventListener('DOMContentLoaded', function () {
  searchForms.forEach(function (component) {
    var searchRoot = component;
    var searchHeader = searchRoot.querySelector("[data-component='searchFormHeader']");
    searchHeader.addEventListener('click', function () {
      searchRoot.classList.toggle('active');
    });
  });
});

/***/ }),

/***/ "./src/blocks/modules/search/search.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/search/search.js ***!
  \*********************************************/
/***/ (() => {

var searchComponents = document.querySelectorAll("[data-component='search']");
document.addEventListener('DOMContentLoaded', function () {
  searchComponents.forEach(function (component) {
    if (component.querySelector('input').value.trim()) {
      component.classList.add('active');
    }

    component.querySelector('input').addEventListener('keyup', function (event) {
      console.log('change');

      if (event.target.value.trim()) {
        component.classList.add('active');
      } else {
        component.classList.remove('active');
      }
    });
  });
});

/***/ }),

/***/ "./src/blocks/modules/square-links/square-links.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/square-links/square-links.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

var swiper = swiper__WEBPACK_IMPORTED_MODULE_0__["default"];
var init = false;
var swiperOptions = {
  spaceBetween: 10,
  slidesPerView: 1.20,
  centeredSlides: false,
  loop: false,
  breakpoints: {
    768: {
      slidesPerView: 2.4,
      spaceBetween: 20
    }
  }
};

function swiperMode() {
  var mobile = window.innerWidth <= 991;

  if (mobile) {
    if (!init) {
      init = true;
      swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('#squareSwiper', swiperOptions);
    }
  } else if (!mobile) {
    init = false;
  }
}

window.addEventListener('load', function () {
  swiperMode();
});
window.addEventListener('resize', function () {
  swiperMode();
});

/***/ }),

/***/ "./src/blocks/modules/steps-page/steps-page.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/steps-page/steps-page.js ***!
  \*****************************************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var allStepLinks = document.querySelectorAll("[data-component='stepsPage'] a");
  var mainStepSection = document.getElementById("mainStepSection");
  var sections = document.querySelectorAll("[data-component='stepSection']");

  try {
    if (window.location.hash) {
      var currentHash = window.location.hash;
      var matchLinksByHash = document.querySelectorAll("[data-component='stepsPage'] a[href=\"".concat(currentHash, "\"]"));
      matchLinksByHash.forEach(function (link) {
        return link.classList.add("active");
      });
    }
  } catch (error) {
    console.log(error);
  }

  try {
    allStepLinks.forEach(function (stepLink) {
      stepLink.addEventListener('click', function () {
        allStepLinks.forEach(function (link) {
          return link.classList.remove('active');
        });
        var selectedHash = stepLink.hash;
        var matchLinkElements = [];
        allStepLinks.forEach(function (link) {
          if (link.hash === selectedHash) matchLinkElements.push(link);
        });
        matchLinkElements.forEach(function (link) {
          return link.classList.add('active');
        });
      });
    });
  } catch (error) {
    console.log(error);
  }

  try {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var currentVisibleElementId = entry.target.id;
          allStepLinks.forEach(function (link) {
            return link.classList.remove('active');
          });
          var matchLinkElements = [];
          allStepLinks.forEach(function (link) {
            if (link.hash === "#".concat(currentVisibleElementId)) matchLinkElements.push(link);
          });
          matchLinkElements.forEach(function (link) {
            return link.classList.add('active');
          });
        }
      });
    });
    document.querySelectorAll("[data-component='stepSection']").forEach(function (section) {
      return observer.observe(section);
    });
  } catch (error) {
    console.log(error);
  }
});

/***/ }),

/***/ "./src/blocks/modules/ui-accordion/ui-accordion.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/ui-accordion/ui-accordion.js ***!
  \*********************************************************/
/***/ (() => {

var accordions = document.querySelectorAll("[data-component='accordion']");
document.addEventListener('DOMContentLoaded', function () {
  accordions.forEach(function (accordion) {
    var accItems = accordion.querySelectorAll('.ui-accordion__item');
    accItems.forEach(function (accItem) {
      var header = accItem.querySelector('.ui-accordion__header');
      header.addEventListener('click', function () {
        header.parentElement.classList.toggle('active');
      });
    });
  });
});

/***/ }),

/***/ "./src/blocks/modules/ui-comments/ui-comments.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/ui-comments/ui-comments.js ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/blocks/modules/ui-newslider/ui-newslider.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/ui-newslider/ui-newslider.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
// 

document.addEventListener('DOMContentLoaded', function () {
  new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('#uiNewSlider', {
    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation],
    spaceBetween: 15,
    slidesPerView: 1.2,
    centeredSlides: false,
    loop: false,
    scrollbar: {
      el: "#uiNewSlider .ui-newslider__bottom .swiper-scrollbar",
      draggable: true
    },
    navigation: {
      nextEl: ".ui-newslider__bottom .ui-newslider__navigation-item_next",
      prevEl: ".ui-newslider__bottom .ui-newslider__navigation-item_prev"
    },
    breakpoints: {
      576: {
        spaceBetween: 15,
        slidesPerView: 2.1
      },
      991: {
        spaceBetween: 30,
        slidesPerView: 2
      }
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/ui-statistic/ui-statistic.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/ui-statistic/ui-statistic.js ***!
  \*********************************************************/
/***/ (() => {

var progressBar = document.querySelectorAll("[data-component='progressBar']");
document.addEventListener('DOMContentLoaded', function () {
  try {
    progressBar.forEach(function (component) {
      var progress = component.querySelector('.ui-statistic__rating-progress');
      var valueProgress = Number(component.getAttribute("data-value"));
      var strokeDashOffsetValue = 100 - valueProgress;
      progress.style.strokeDashoffset = strokeDashOffsetValue;
    });
  } catch (error) {
    console.log(error);
  }
});

/***/ }),

/***/ "./src/blocks/modules/ui-videos/ui-videos.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/ui-videos/ui-videos.js ***!
  \***************************************************/
/***/ (() => {

var uiVideoComponents = document.querySelectorAll("[data-component='uiVideos']");
var defaultIframeScr = "https://www.youtube.com/embed/";
document.addEventListener('DOMContentLoaded', function () {
  uiVideoComponents.forEach(function (uiVideo) {
    var uiVideoMainIframeWrapper = uiVideo.querySelector('.ui-videos__main-video');
    var uiVideoMainIframe = uiVideo.querySelector('.ui-videos__main-video-iframe');
    var videos = uiVideo.querySelectorAll('.ui-videos__item');

    try {
      videos.forEach(function (video) {
        video.addEventListener('click', function () {
          var currentVideoId = video.dataset.videoId;
          if (!currentVideoId) return false;
          uiVideoMainIframe.src = "".concat(defaultIframeScr).concat(currentVideoId);
        });
      });
    } catch (error) {
      console.log(error);
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/upload-file/upload-file.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/upload-file/upload-file.js ***!
  \*******************************************************/
/***/ (() => {

var uploadFile = document.querySelectorAll("[data-component='uploadFile']");
var areaTitleTextReplace = "Заменить фото";
document.addEventListener('DOMContentLoaded', function () {
  uploadFile.forEach(function (uploader) {
    var area = uploader.querySelector('.upload-file__area');
    var input = uploader.querySelector('input');
    var imagePreview = uploader.querySelector('.upload-file__photo');
    var areaTitle = uploader.querySelector('.upload-file__text');
    area.addEventListener('click', function () {
      input.click();
    });
    input.addEventListener('change', function (e) {
      uploader.classList.add('active');
      var file = e.target.files[0];
      imagePreview.src = window.URL.createObjectURL(file);
      areaTitle.innerHTML = areaTitleTextReplace;
    });
  });
});

/***/ }),

/***/ "./src/blocks/modules/vertical-steps/vertical-steps.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/vertical-steps/vertical-steps.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

var swiper = swiper__WEBPACK_IMPORTED_MODULE_0__["default"];
var init = false;
var swiperOptions = {
  spaceBetween: 10,
  slidesPerView: 1.4,
  centeredSlides: false,
  loop: false,
  breakpoints: {
    768: {
      slidesPerView: 2
    }
  }
};

function swiperMode() {
  var mobile = window.innerWidth <= 991;

  if (mobile) {
    if (!init) {
      init = true;
      swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('#verticalStepsSwiper', swiperOptions);
    }
  } else if (!mobile) {
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

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_search_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/search/search */ "./src/blocks/modules/search/search.js");
/* harmony import */ var _modules_search_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_search_search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/dropdown/dropdown */ "./src/blocks/modules/dropdown/dropdown.js");
/* harmony import */ var _modules_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_horizontal_slider_horizontal_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/horizontal-slider/horizontal-slider */ "./src/blocks/modules/horizontal-slider/horizontal-slider.js");
/* harmony import */ var _modules_grid_slider_grid_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/grid-slider/grid-slider */ "./src/blocks/modules/grid-slider/grid-slider.js");
/* harmony import */ var _modules_search_form_search_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/search-form/search-form */ "./src/blocks/modules/search-form/search-form.js");
/* harmony import */ var _modules_search_form_search_form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_search_form_search_form__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_vertical_steps_vertical_steps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/vertical-steps/vertical-steps */ "./src/blocks/modules/vertical-steps/vertical-steps.js");
/* harmony import */ var _modules_square_links_square_links__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/square-links/square-links */ "./src/blocks/modules/square-links/square-links.js");
/* harmony import */ var _modules_modals_modals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/modals/modals */ "./src/blocks/modules/modals/modals.js");
/* harmony import */ var _modules_rating_star_rating_star__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/rating-star/rating-star */ "./src/blocks/modules/rating-star/rating-star.js");
/* harmony import */ var _modules_rating_star_rating_star__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_rating_star_rating_star__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _modules_upload_file_upload_file__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/upload-file/upload-file */ "./src/blocks/modules/upload-file/upload-file.js");
/* harmony import */ var _modules_upload_file_upload_file__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_modules_upload_file_upload_file__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _modules_faq_faq__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/faq/faq */ "./src/blocks/modules/faq/faq.js");
/* harmony import */ var _modules_faq_faq__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_modules_faq_faq__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _modules_articles_page_articles_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! %modules%/articles-page/articles-page */ "./src/blocks/modules/articles-page/articles-page.js");
/* harmony import */ var _modules_ui_newslider_ui_newslider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! %modules%/ui-newslider/ui-newslider */ "./src/blocks/modules/ui-newslider/ui-newslider.js");
/* harmony import */ var _modules_about_project_about_project__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! %modules%/about-project/about-project */ "./src/blocks/modules/about-project/about-project.js");
/* harmony import */ var _modules_about_project_about_project__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_modules_about_project_about_project__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _modules_ui_statistic_ui_statistic__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! %modules%/ui-statistic/ui-statistic */ "./src/blocks/modules/ui-statistic/ui-statistic.js");
/* harmony import */ var _modules_ui_statistic_ui_statistic__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_modules_ui_statistic_ui_statistic__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _modules_ui_comments_ui_comments__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! %modules%/ui-comments/ui-comments */ "./src/blocks/modules/ui-comments/ui-comments.js");
/* harmony import */ var _modules_ui_comments_ui_comments__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_modules_ui_comments_ui_comments__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _modules_ui_accordion_ui_accordion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! %modules%/ui-accordion/ui-accordion */ "./src/blocks/modules/ui-accordion/ui-accordion.js");
/* harmony import */ var _modules_ui_accordion_ui_accordion__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_modules_ui_accordion_ui_accordion__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _modules_ui_videos_ui_videos__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! %modules%/ui-videos/ui-videos */ "./src/blocks/modules/ui-videos/ui-videos.js");
/* harmony import */ var _modules_ui_videos_ui_videos__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_modules_ui_videos_ui_videos__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _modules_croped_slider_croped_slider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! %modules%/croped-slider/croped-slider */ "./src/blocks/modules/croped-slider/croped-slider.js");
/* harmony import */ var _modules_steps_page_steps_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! %modules%/steps-page/steps-page */ "./src/blocks/modules/steps-page/steps-page.js");
/* harmony import */ var _modules_steps_page_steps_page__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_modules_steps_page_steps_page__WEBPACK_IMPORTED_MODULE_21__);























/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_scss_starter"] = self["webpackChunkgulp_scss_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map