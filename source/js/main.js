'use strict';

(function () {
  let navMain = document.querySelector('.main-nav');
  let navToggle = document.querySelector('.main-nav__toggle');
  let stopScroll = document.querySelector('body');

  navMain.classList.remove('main-nav--nojs');

  document.addEventListener('click', (e)=>{
    const click = e.composedPath().includes(navToggle);
    if (!click) {
      navMain.classList.remove('main-nav--opened');
      navMain.classList.add('main-nav--closed');
    }
  });

  document.onkeydown = function Esc(e) {
    if (e.keyCode === 27) {
      navMain.classList.remove('main-nav--opened');
      navMain.classList.add('main-nav--closed');
    }
  };

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
        stopScroll.classList.add('body--scroll');
      } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
      }
    });
  }
})();
