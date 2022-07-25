// Custom Scripts
"use strict"

const isMobile = {
    Andriod: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Andriod() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    },
};
//  добавим класс в зависимости от типа устройства, тач или нет
if (isMobile.any()) {
    document.body.classList.add('_touch');
    // добавляем треугольничек к расрывающемуся пункту меню на таче
    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }

} else {
    document.body.classList.add('_pc');
}

// меню burger
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

// прокрутка при клике на ссылки в меню
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
            
            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

// прокрутка при клике на ссылки в хиро
const heroLinks = document.querySelectorAll('.hero__btns-item[data-goto]');
if (heroLinks.length > 0) {
  heroLinks.forEach(heroLink => {
      heroLink.addEventListener("click", onHeroLinkClick);
  });
  function onHeroLinkClick(e) {
      const heroLink = e.target;
      if (heroLink.dataset.goto && document.querySelector(heroLink.dataset.goto)) {
          const gotoBlock = document.querySelector(heroLink.dataset.goto);
          const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

          window.scrollTo({
              top: gotoBlockValue,
              behavior: "smooth"
          });
          e.preventDefault();
      }
  }
}

// // Custom scripts
// // Мобильное меню бургер
// function burgerMenu() {
//     const burger = document.querySelector('.burger')
//     const menu = document.querySelector('.menu')
//     const body = document.querySelector('body')
//     burger.addEventListener('click', () => {
//       if (!menu.classList.contains('active')) {
//         menu.classList.add('active')
//         burger.classList.add('active-burger')
//         body.classList.add('locked')
//       } else {
//         menu.classList.remove('active')
//         burger.classList.remove('active-burger')
//         body.classList.remove('locked')
//       }
//     })
//     // Вот тут мы ставим брейкпоинт навбара
//     window.addEventListener('resize', () => {
//       if (window.innerWidth > 991.98) {
//         menu.classList.remove('active')
//         burger.classList.remove('active-burger')
//         body.classList.remove('locked')
//       }
//     })
//   }
//   burgerMenu()
  
  
//   // Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
//   function fixedNav() {
//     const nav = document.querySelector('nav')
  
//     // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
//     const breakpoint = 1
//     if (window.scrollY >= breakpoint) {
//       nav.classList.add('fixed__nav')
//     } else {
//       nav.classList.remove('fixed__nav')
//     }
//   }
//   window.addEventListener('scroll', fixedNav)
  

// Слайдер отзывы
// Initialize Swiper

const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1000: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 2,
    },
    450: {
      slidesPerView: 1.5,
    },
    320: {
      slidesPerView: 1.1,
    },
  }
});
