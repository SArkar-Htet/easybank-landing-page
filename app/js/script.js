const btnHamburger = document.querySelector('#btnHamburger');
const img = document.querySelector('#btnHamburger span img');
btnHamburger.addEventListener('click', function() {
  if (!btnHamburger.classList.contains('open')) {
    btnHamburger.classList.add('open');
    img.setAttribute('src', '/images/icon-close.svg');
  } else {
    btnHamburger.classList.remove('open');
    img.setAttribute('src', '/images/icon-hamburger.svg');
  }
});