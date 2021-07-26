const noScroll = document.querySelector('body');
const btnHamburger = document.querySelector('#btnHamburger');
const fadeElems = document.querySelectorAll('.has_fade');
btnHamburger.addEventListener('click', function() {
  if (!btnHamburger.classList.contains('open')) { //Open Hamburger Menu
    noScroll.classList.add('no_scroll');
    btnHamburger.classList.add('open');
    fadeElems.forEach(function (element) {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  } else { //Close Hamburger Menu
    noScroll.classList.remove('no_scroll');
    btnHamburger.classList.remove('open');
    fadeElems.forEach(function (element) {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  }
});