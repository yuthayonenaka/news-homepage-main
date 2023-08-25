const nav = document.querySelector(".nav");
const hamburgerMenu = document.querySelector(".menu-hamburger");
const closeMenu = document.querySelector(".menu-close");
const overlay = document.querySelector(".overlay");

const navOpenAndClose = function () {
  closeMenu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
  nav.classList.toggle("hidden");
  hamburgerMenu.classList.toggle("hidden");
};

hamburgerMenu.addEventListener("click", navOpenAndClose);

closeMenu.addEventListener("click", navOpenAndClose);

overlay.addEventListener("click", navOpenAndClose);
