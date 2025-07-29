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


var cusomSelect = {
   init: function init() {
      this.bindEvents();
   },
   bindEvents: function bindEvents() {
      var _this = this;

      document.querySelectorAll('.js-custom-select').forEach(function (select) {
         _this.bindEvent(select);
      });
      this.bindDocumentEvents();
   },
   unbindDocumentEvents: function unbindDocumentEvents() {
      document.removeEventListener('click', this.documentClick);
   },
   bindDocumentEvents: function bindDocumentEvents() {
      this.unbindDocumentEvents();
      document.addEventListener('click', this.documentClick);
   },
   unbindEvent: function unbindEvent(select) {
      var _this2 = this;

      select.removeEventListener('keydown', this.keyDown);
      select.querySelector('.custom-select__control').removeEventListener('focus', this.focus);
      select.querySelector('.custom-select__control').removeEventListener('change', this.change);
      select.querySelector('.custom-select__value').removeEventListener('click', this.click);
      select.querySelectorAll('.custom-select__dropdown-item').forEach(function (item) {
         item.addEventListener('click', _this2.itemClick);
         item.addEventListener('keydown', _this2.itemKeyDown);
      });
   },
   bindEvent: function bindEvent(select) {
      var _this3 = this;

      this.unbindEvent(select);
      select.addEventListener('keydown', this.keyDown);
      select.querySelector('.custom-select__control').addEventListener('focus', this.focus);
      select.querySelector('.custom-select__control').addEventListener('change', this.change);
      select.querySelector('.custom-select__value').addEventListener('click', this.click);
      select.querySelectorAll('.custom-select__dropdown-item').forEach(function (item) {
         item.addEventListener('click', _this3.itemClick);
         item.addEventListener('keydown', _this3.itemKeyDown);
      });
   },
   keyDown: function keyDown(e) {
      if ([40, 38].includes(e.keyCode)) {
         e.preventDefault();
      }

      var direction = e.keyCode == 40 ? 'down' : e.keyCode == 38 ? 'up' : undefined;
      console.log(direction);

      if (direction) {
         var dropdown = e.target.closest('.js-custom-select').querySelector('.custom-select__dropdown');
         var active = dropdown.querySelector('.custom-select__dropdown-item:focus');
         var items = dropdown.querySelectorAll('.custom-select__dropdown-item');

         for (var i = 0; i < items.length; i++) {
            if (!active && direction == 'down' && i == 0) {
               items[i].focus();
               break;
            } else if (!active && direction == 'up' && i == items.length - 1) {
               items[i].focus();
               break;
            } else if (active == items[i] && direction == 'down') {
               items[i == items.length - 1 ? 0 : i + 1].focus();
               break;
            } else if (active == items[i] && direction == 'up') {
               items[i == 0 ? items.length - 1 : i - 1].focus();
               break;
            }
         }
      }
   },
   focus: function focus(e) {
      var keep = e.target.closest('.js-custom-select');
      keep.classList.add('custom-select_active');
      document.querySelectorAll('.js-custom-select.custom-select_active').forEach(function (select) {
         if (select !== keep) {
            select.classList.remove('custom-select_active');
         }
      });
   },
   click: function click(e) {
      if (!e.target.closest('.custom-select__dropdown')) {
         e.target.closest('.js-custom-select').classList.toggle('custom-select_active');
      }
   },
   documentClick: function documentClick(e) {
      var keep = e.target.closest('.js-custom-select');
      document.querySelectorAll('.js-custom-select.custom-select_active').forEach(function (select) {
         if (select !== keep) {
            select.classList.remove('custom-select_active');
         }
      });
   },
   itemClick: function itemClick(e) {
      e.preventDefault();
      var value = e.target.closest('.custom-select__dropdown-item').dataset.value;
      var select = e.target.closest('.js-custom-select');
      cusomSelect.selectValue(select, value);
      select.classList.remove('custom-select_active');
   },
   itemKeyDown: function itemKeyDown(e) {
      if (e.keyCode == 13) {
         var value = e.target.closest('.custom-select__dropdown-item').dataset.value;
         var select = e.target.closest('.js-custom-select');
         cusomSelect.selectValue(select, value);
         select.classList.remove('custom-select_active');
      }
   },
   selectValue: function selectValue(select, value) {
      if (select) {
         var control = select.querySelector('.custom-select__control');

         if (control.querySelector('option[value="' + value + '"]')) {
            control.value = value;
            control.dispatchEvent(new Event('change'));
         }
      }
   },
   change: function change() {
      var option = this.querySelector('option[value="' + this.value + '"]');

      if (option) {
         this.closest('.js-custom-select').querySelector('.custom-select__value-text').innerHTML = option.innerHTML;
      }
   }
};
cusomSelect.init();