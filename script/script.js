// explore dropdown
let explore = document.getElementsByClassName("explore2")[0];
let exploremenu = document.getElementsByClassName("exploremenu")[0];
let body = document.getElementsByTagName("body")[0];
let maindiv = document.getElementsByClassName("maindiv")[0];
let navbarmenu = document.getElementsByClassName("navbarmenu")[0];

explore.addEventListener("mouseenter", function () {
  exploremenu.classList.toggle("show");
  exploremenu.classList.toggle("overlay");
  body.style.overflowY = "hidden";
  maindiv.style.opacity = "0.3";
  navbarmenu.style.opacity = "0.3";
  navbarmenu.style.zIndex = "0";
});
exploremenu.addEventListener("mouseleave", function () {
  exploremenu.classList.toggle("show");
  body.style.overflowY = "scroll";
  maindiv.style.opacity = "1";
  navbarmenu.style.opacity = "1";
  navbarmenu.style.zIndex = "1";
});
//user section menu
let usersection = document.getElementsByClassName("usersection")[0];
let dropdown = document.getElementsByClassName("dropdown")[0];
usersection.addEventListener("click", function () {
  dropdown.classList.toggle("show");
  navbarmenu.style.zIndex = "0";
});
