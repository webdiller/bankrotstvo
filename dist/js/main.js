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
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: false,
    loop: false,
    scrollbar: {
      el: "#gridSwiper1 + .grid-slider__bottom .swiper-scrollbar",
      draggable: true
    },
    navigation: {
      nextEl: ".grid-slider__bottom .grid-slider__navigation-item_next",
      prevEl: ".grid-slider__bottom .grid-slider__navigation-item_prev"
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (() => {



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
    spaceBetween: 30,
    slidesPerView: 3,
    centeredSlides: false,
    loop: false,
    scrollbar: {
      el: "#horiontalSwiper1 .horizontal-slider__bottom .swiper-scrollbar",
      draggable: true
    },
    navigation: {
      nextEl: ".horizontal-slider__bottom .horizontal-slider__navigation-item_next",
      prevEl: ".horizontal-slider__bottom .horizontal-slider__navigation-item_prev"
    }
  });
  new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('#horiontalSwiper2', {
    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation],
    spaceBetween: 30,
    slidesPerView: 4,
    centeredSlides: false,
    loop: false,
    scrollbar: {
      el: "#horiontalSwiper2 .horizontal-slider__bottom .swiper-scrollbar",
      draggable: true
    },
    navigation: {
      nextEl: ".horizontal-slider__bottom .horizontal-slider__navigation-item_next",
      prevEl: ".horizontal-slider__bottom .horizontal-slider__navigation-item_prev"
    }
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