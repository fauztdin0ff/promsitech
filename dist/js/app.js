/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/*------------------------------
article slider
---------------------------*/
const articleSlider = document.querySelector(".fv-article__slider");

if (articleSlider) {
   const articleSwiper = new Swiper(articleSlider, {
      slidesPerView: 1,
      loop: true,
      navigation: {
         nextEl: '.fv-article__next',
         prevEl: '.fv-article__prev',
      },
   });
}

/*------------------------------
Move nav in article
---------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const menu = document.querySelector('.fv-article__menu');
   const aside = document.querySelector('.fv-article__aside');
   const mobileContainer = document.querySelector('.fv-article__menu-mob');

   function moveMenu() {
      if (!menu || !aside || !mobileContainer) return;

      if (window.innerWidth <= 1023) {
         if (!mobileContainer.contains(menu)) {
            mobileContainer.appendChild(menu);
         }
      } else {
         if (!aside.contains(menu)) {
            aside.appendChild(menu);
         }
      }
   }

   moveMenu();
   window.addEventListener('resize', moveMenu);
});

/*------------------------------
related slider
---------------------------*/
const relatedSlider = document.querySelector(".related__slider");

if (relatedSlider) {
   const relatedSwiper = new Swiper(relatedSlider, {
      loop: false,
      spaceBetween: 30,
      navigation: {
         nextEl: '.related__slider-next',
         prevEl: '.related__slider-prev',
      },
      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         768: {
            slidesPerView: 2,
         },
         1024: {
            slidesPerView: 3,
         },
         1920: {
            slidesPerView: 4,
            watchOverflow: true,
         }
      }
   });
}


/*------------------------------
Accordion
---------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const accordion = document.querySelector('.documentation__content');

   accordion.addEventListener('click', function (e) {
      const btn = e.target.closest('.accordion__button');
      if (!btn) return;

      const currentItem = btn.closest('.accordion__item');
      if (!currentItem) return;

      const parent = currentItem.parentElement;
      const isActive = currentItem.classList.contains('active');

      // Закрыть всех "братьев" текущего элемента
      Array.from(parent.children).forEach(item => {
         if (item !== currentItem && item.classList.contains('accordion__item')) {
            item.classList.remove('active');
         }
      });

      // Переключить текущий
      currentItem.classList.toggle('active', !isActive);
   });
});

/******/ })()
;