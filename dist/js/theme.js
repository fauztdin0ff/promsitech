var catalogBtn = document.querySelector('.button--catalog');
var megaMenu = document.querySelector('.catalog-megamenu');

if (catalogBtn && megaMenu) {
   var closeMegaMenu = function closeMegaMenu() {
      megaMenu.classList.remove('active');
      document.body.classList.remove('no-scroll');
   };

   catalogBtn.addEventListener('click', function () {
      var isActive = megaMenu.classList.contains('active');

      if (isActive) {
         closeMegaMenu();
      } else {
         megaMenu.classList.add('active');
         document.body.classList.add('no-scroll');
      }
   });
}

var btnUp = document.querySelector('.button-up');
var footer = document.querySelector('footer'); // адаптируй, если у тебя другой селектор футера

if (btnUp && footer) {
   btnUp.addEventListener('click', function () {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      });
   });

   var checkOffset = function checkOffset() {
      var footerRect = footer.getBoundingClientRect();
      var windowHeight = window.innerHeight;

      if (footerRect.top < windowHeight - 60) {
         btnUp.style.bottom = "".concat(windowHeight - footerRect.top + 20, "px");
      } else {
         btnUp.style.bottom = '30px';
      }
   };

   window.addEventListener('scroll', function () {
      checkOffset();

      if (window.scrollY > 300) {
         btnUp.classList.add('visible');
      } else {
         btnUp.classList.remove('visible');
      }
   });
   checkOffset();
}



const contactsSlider = new Swiper('.contacts-swiper', {
   slidesPerView: 1.2,
   spaceBetween: 10,
   initialSlide: 1,
   loop: false,
   centeredSlides: true,
   navigation: {
      nextEl: '.slider__next',
      prevEl: '.slider__prev'
   },
   breakpoints: {
      1024: {
         slidesPerView: 2,
         spaceBetween: 30
      }
   }
});
