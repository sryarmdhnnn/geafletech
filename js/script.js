// Toogle class active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
//Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toogle class active search
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
//Ketika hamburger menu di klik
document.querySelector("#search-btn").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Klik di luar element
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-btn");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// Menu
const modalViews = document.querySelectorAll(".experience__modal"),
  modalBtns = document.querySelectorAll(".experience__button"),
  modalClose = document.querySelectorAll(".experience__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});
