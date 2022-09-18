/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
    spaceBetween: 10,
    slidesPerView: 1.3,
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
    spaceBetween: 10,
    slidesPerView: 1.25,
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
/***/ (() => {

var modalSearch = document.querySelector("[data-component='modalSearch']");
var modalSearchTrigger = document.querySelectorAll("[data-component='modalSearchTrigger']");
var modalSearchInput = modalSearch.querySelector("input");
var modalSearchClose = modalSearch.querySelector(".modal-search__close-btn");
var modalReview = document.querySelector("[data-component='modalReview']");
var modalReviewTrigger = document.querySelectorAll("[data-component='modalReviewTrigger']");
var modalReviewClose = modalReview.querySelector(".modal-review__close-btn");
var modalComment = document.querySelector("[data-component='modalComment']");
var modalCommentTrigger = document.querySelectorAll("[data-component='modalCommentTrigger']");
var modalCommentClose = modalComment.querySelector(".modal-review__close-btn");
document.addEventListener('DOMContentLoaded', function () {
  // modalSearch
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
  }); // modalReview

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
  }); // modalComment

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
  slidesPerView: 1.22,
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
/* harmony import */ var _modules_modals_modals__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_modals_modals__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _modules_rating_star_rating_star__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/rating-star/rating-star */ "./src/blocks/modules/rating-star/rating-star.js");
/* harmony import */ var _modules_rating_star_rating_star__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_rating_star_rating_star__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _modules_upload_file_upload_file__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/upload-file/upload-file */ "./src/blocks/modules/upload-file/upload-file.js");
/* harmony import */ var _modules_upload_file_upload_file__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_modules_upload_file_upload_file__WEBPACK_IMPORTED_MODULE_11__);













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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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