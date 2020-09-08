import 'mailgo/dist/mailgo.min.js';
import VanillaTilt from 'vanilla-tilt';
import { debounce } from './utils';

// Handle tilt effect
VanillaTilt.init(document.querySelector('.avatar'), {
  max: 10,
  speed: 3000,
  glare: true,
  'max-glare': 0.4,
  scale: 1.2,
});
VanillaTilt.init(document.querySelector('.header--tilt'), {
  max: 5,
  speed: 5000,
  scale: 1.1,
});
VanillaTilt.init(document.querySelectorAll('.project__image'), {
  max: 5,
  speed: 5000,
  scale: 1.1,
});

// Handle scrollbar
let body = document.querySelector('body');
let handleScrollbar = debounce(
  () => {
    if (!body.classList.contains('on-scrolling')) {
      body.classList.add('on-scrolling');
    }
  },
  () => {
    body.classList.remove('on-scrolling');
  },
  1500
);
window.addEventListener('scroll', handleScrollbar, false);

// Back to top
let btnBackToTop = document.querySelector('.btn-back-to-top');
btnBackToTop.addEventListener('click', () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
});
