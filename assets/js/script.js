const menuOpen = document.querySelector(".open-menu");
const menuClose = document.querySelector(".closed-menu");
const wrapper = document.querySelector("#wrapper");
const toggle = document.querySelector(".toggle");
const btn = document.querySelector("#btn");
const Nsec = document.querySelector("#new-section");
const fI = document.querySelector("#first-item");
const sI = document.querySelector("#second-item");
const tI = document.querySelector("#third-item");
const nav = document.querySelector("#navbar");


menuOpen.addEventListener("click", () => {
  nav.style.display=("block");
  wrapper.style.background=("#807e89");
  btn.style.filter=("brightness(0.5)");
  toggle.style.filter=("brightness(0.5)");
  Nsec.style.filter=("brightness(0.5)");
  fI.style.filter=("brightness(0.5)");
  sI.style.filter=("brightness(0.5)");
  tI.style.filter=("brightness(0.5)");
  menuClose.style.display=("block");
})
  menuClose.addEventListener("click", () => {
  nav.style.display=("none");
  wrapper.style.background=("#fefdf9");
  toggle.style.filter=("brightness(100%)");
  btn.style.filter=("brightness(100%)");
  Nsec.style.filter=("brightness(100%)");
  fI.style.filter=("brightness(100%)");
  sI.style.filter=("brightness(100%)");
  tI.style.filter=("brightness(100%)");
  menuClose.style.display=("none");
})