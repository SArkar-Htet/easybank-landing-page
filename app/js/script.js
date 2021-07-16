const btnHamburger = document.querySelector('#btnHamburger');
btnHamburger.addEventListener('click', function() {
  if (!btnHamburger.classList.contains('open')) {
    btnHamburger.classList.add('open');
  } else {
    btnHamburger.classList.remove('open');
  }
});