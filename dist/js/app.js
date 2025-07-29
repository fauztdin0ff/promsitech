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

   if (!accordion) return;

   accordion.addEventListener('click', function (e) {
      const btn = e.target.closest('.accordion__button');
      if (!btn) return;

      const currentItem = btn.closest('.accordion__item');
      if (!currentItem) return;

      const parent = currentItem.parentElement;
      const isActive = currentItem.classList.contains('active');

      Array.from(parent.children).forEach(item => {
         if (item !== currentItem && item.classList.contains('accordion__item')) {
            item.classList.remove('active');
         }
      });

      currentItem.classList.toggle('active', !isActive);
   });
});


/*------------------------------
Team gallery
---------------------------*/
const teamSlider = document.querySelector(".fv-team__slider");

if (teamSlider) {
   const teamSwiper = new Swiper(teamSlider, {
      slidesPerView: 1.2,
      centeredSlides: true,
      spaceBetween: 30,
      initialSlide: 1,
      loop: false,
      navigation: {
         nextEl: '.fv-team__slider-next',
         prevEl: '.fv-team__slider-prev',
      },
      breakpoints: {
         320: {
            spaceBetween: 10

         },
         768: {
            spaceBetween: 10
         },
         1024: {
            spaceBetween: 30
         }
      }
   });

   Fancybox.bind('[data-fancybox="team-gallery"]', {
      Thumbs: true,
      Toolbar: {
         display: [
            "zoom",
            "close"
         ]
      }
   });
};


/*------------------------------
Upload file
---------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const fileInput = document.querySelector('.upload-file input[type="file"]');
   const fileContainer = document.querySelector('.upload-file-container');

   if (fileInput && fileContainer) {
      fileInput.addEventListener('change', function () {
         const file = fileInput.files[0];
         if (file) {
            fileContainer.textContent = file.name;
         } else {
            fileContainer.textContent = '';
         }
      });
   }
});


/*------------------------------
Move nav in article
---------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const sendForm = document.querySelector('.send-resume__card');
   const sendFormBody = document.querySelector('.send-resume__body');
   const mobileContainer = document.querySelector('.send-resume-mob');

   function moveForm() {
      if (!sendForm || !sendFormBody || !mobileContainer) return;

      if (window.innerWidth <= 1023) {
         if (!mobileContainer.contains(sendForm)) {
            mobileContainer.appendChild(sendForm);
         }
      } else {
         if (!sendFormBody.contains(sendForm)) {
            sendFormBody.appendChild(sendForm);
         }
      }
   }

   moveForm();
   window.addEventListener('resize', moveForm);
});

/*------------------------------
Tabs podbor
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const tabsContainer = document.querySelector('.selection__tabs');
   const groupsContainer = document.querySelector('.selection__groups');

   if (!tabsContainer || !groupsContainer) return;

   const tabs = tabsContainer.querySelectorAll('.selection__tab');
   const groups = groupsContainer.querySelectorAll('.selection__group');

   if (!tabs.length || !groups.length) return;

   tabs.forEach(tab => {
      tab.addEventListener('click', () => {
         const tabId = tab.dataset.tab;

         tabs.forEach(t => t.classList.remove('active'));
         groups.forEach(g => g.classList.remove('active'));

         tab.classList.add('active');
         const activeGroup = groupsContainer.querySelector(`.selection__group[data-group="${tabId}"]`);
         if (activeGroup) activeGroup.classList.add('active');
      });
   });
});


/*------------------------------
Product preview sliders
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   // Главный слайдер
   const mainSliderEl = document.querySelector(".selection__results-slider");

   if (mainSliderEl) {
      const mainSlider = new Swiper(mainSliderEl, {
         slidesPerView: 4,
         spaceBetween: 30,
         loop: false,
         navigation: {
            nextEl: '.selection__results-slider-next',
            prevEl: '.selection__results-slider-prev'
         },
         pagination: {
            el: '.selection__results-pagination',
            clickable: true,
         },
         breakpoints: {
            320: {
               slidesPerView: 1,
            },
            600: {
               slidesPerView: 2,
            },
            1024: {
               slidesPerView: 3,
            },
            1300: {
               slidesPerView: 4,
            }
         }
      });
   }

   // Внутренние слайдеры
   const innerSliders = document.querySelectorAll('.product-preview__images');

   if (innerSliders.length) {
      innerSliders.forEach((slider, index) => {
         const paginationEl = slider.querySelector('.product-preview__images-pagination');
         if (!paginationEl) return;

         const swiperInstance = new Swiper(slider, {
            loop: true,
            nested: true,
            pagination: {
               el: paginationEl,
               clickable: true,
               type: 'bullets',
               bulletClass: 'swiper-pagination-bullet',
               bulletActiveClass: 'swiper-pagination-bullet-active',
               renderBullet: function (index, className) {
                  return `<span class="${className}"></span>`;
               },
            },
         });

         let lastMouseX = null;

         slider.addEventListener('mousemove', function (event) {
            if (window.innerWidth <= 1024) return;

            if (lastMouseX !== null) {
               event.clientX > lastMouseX
                  ? swiperInstance.slideNext()
                  : swiperInstance.slidePrev();
            }
            lastMouseX = event.clientX;
         });

         slider.addEventListener('mouseleave', function () {
            lastMouseX = null;
         });
      });
   }
});


/******/ })()
;