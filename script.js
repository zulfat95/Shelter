const burgerButtonActive = document.querySelector('.header__container-nav_burger');
const containerBurger = document.querySelector('.header__container-nav_burger_show');
const burgerLines = document.querySelectorAll('.header__container-nav_burger-line');
const bodyElement = document.querySelector('body');

burgerButtonActive.addEventListener('click', (evt) => {
  evt.preventDefault();
  containerBurger.classList.toggle('active-burger-ul');
  burgerButtonActive.classList.toggle('active-burger');
  bodyElement.classList.toggle('no-scroll');
  burgerLines.forEach((item) => item.classList.toggle('burger-lines-white'));
});
containerBurger.addEventListener('click', () => {
  containerBurger.classList.toggle('active-burger-ul');
  burgerButtonActive.classList.toggle('active-burger');
  bodyElement.classList.toggle('no-scroll');
  burgerLines.forEach((item) => item.classList.toggle('burger-lines-white'));
});




// const target = evt.target.closest('header__container-nav_burger_show');
// target.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   containerBurger.classList.toggle('active-burger-ul');
//   burgerButtonActive.classList.toggle('active-burger');
// })
