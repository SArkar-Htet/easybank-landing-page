const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.header__menu');
btnHamburger.addEventListener('click', function() {
  if (!btnHamburger.classList.contains('open')) { 
    btnHamburger.classList.add('open');
    overlay.classList.remove('fade-out');
    overlay.classList.add('fade-in');
    menu.classList.remove('fade-out');
    menu.classList.add('fade-in');
  } else {
    btnHamburger.classList.remove('open');
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
    menu.classList.remove('fade-in');
    menu.classList.add('fade-out');
  }
});