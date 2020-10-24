var header_typed = new Typed('#header_typed', {
  strings: ['i love design, tech, and everything in between.', 'my pronouns are he/him', 'currently, a third year dlsu ccs student'],
  typeSpeed: 40,
  backSpeed: 0,
  smartBackspace: true,
  loop: true
});

var projheader_typed = new Typed('#projheader_typed', {
  strings: ['mostly school projs 🏃‍'],
  typeSpeed: 40,
  backSpeed: 0,
  smartBackspace: true,
  loop: true
});

// ScrollReveal({ reset: true }).reveal('.header-container');
ScrollReveal().reveal('.header-container');
ScrollReveal().reveal('.body-container');

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("navbar").style.top = "0";
  } else {
    document.getElementsByClassName("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}