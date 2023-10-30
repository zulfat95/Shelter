const burgerButtonActive = document.querySelector('.header__container-nav_burger');
const containerBurger = document.querySelector('.header__container-nav_burger_show');

burgerButtonActive.addEventListener('click', (evt) => {
  evt.preventDefault();
  containerBurger.classList.toggle('active-burger');
})

