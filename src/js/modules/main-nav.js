import { ScrollLock } from './scroll-lock';

const initMenu = () => {
  const menuButton = document.querySelector('.main-nav__button');
  const menuList = document.querySelector('.main-nav__menu');
  // const logoText = document.querySelector('.logo__text');
  const body = document.querySelector('body');

  menuButton.addEventListener('click', () => {
    let expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !expanded);
    menuButton.classList.toggle('main-nav__button--open');
    menuList.classList.toggle('main-nav__menu--open');
    if (menuList.classList.contains('main-nav__menu--open')) {
      window.scrollLock.disableScrolling();
    } else {
      window.scrollLock.enableScrolling();
    }
  });
};

export { initMenu };
