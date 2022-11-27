// Background-color

const menuOpen = document.querySelector("#open-menu");
const menuClose = document.querySelector("#closed-menu");
const fstLink = document.querySelector(".nav-link");
const sndLink = document.querySelector("#snd");
const trdLink = document.querySelector("#trd");
const frLink = document.querySelector("#fr");
const fhLink = document.querySelector("#fh");


const wrapper = document.querySelector(".wrapper");
const toggle = document.querySelector(".toggle")
const btn = document.querySelector("#btn");

const Nsec = document.querySelector("#new-section");
const fI = document.querySelector("#first-item");
const sI = document.querySelector("#second-item");
const tI = document.querySelector("#third-item");



menuOpen.addEventListener("click", () => {
  wrapper.style.background=("#807e89");
  btn.style.filter=("brightness(0.5)");
  toggle.style.filter=("brightness(0.5)");
  Nsec.style.filter=("brightness(0.5)");
  fI.style.filter=("brightness(0.5)");
  sI.style.filter=("brightness(0.5)");
  tI.style.filter=("brightness(0.5)");
})

  menuClose.addEventListener("click", () => {
  wrapper.style.background=("#fefdf9");
  toggle.style.filter=("brightness(100%)");
  btn.style.filter=("brightness(100%)");
  Nsec.style.filter=("brightness(100%)");
  fI.style.filter=("brightness(100%)");
  sI.style.filter=("brightness(100%)");
  tI.style.filter=("brightness(100%)");
})

  fstLink.addEventListener("click", () => {
  wrapper.style.background=("#fefdf9");
  toggle.style.filter=("brightness(100%)");
  btn.style.filter=("brightness(100%)");
  Nsec.style.filter=("brightness(100%)");
  fI.style.filter=("brightness(100%)");
  sI.style.filter=("brightness(100%)");
  tI.style.filter=("brightness(100%)");
})

sndLink.addEventListener("click", () => {
  wrapper.style.background=("#fefdf9");
  toggle.style.filter=("brightness(100%)");
  btn.style.filter=("brightness(100%)");
  Nsec.style.filter=("brightness(100%)");
  fI.style.filter=("brightness(100%)");
  sI.style.filter=("brightness(100%)");
  tI.style.filter=("brightness(100%)");
})

trdLink.addEventListener("click", () => {
  wrapper.style.background=("#fefdf9");
  toggle.style.filter=("brightness(100%)");
  btn.style.filter=("brightness(100%)");
  Nsec.style.filter=("brightness(100%)");
  fI.style.filter=("brightness(100%)");
  sI.style.filter=("brightness(100%)");
  tI.style.filter=("brightness(100%)");
})

frLink.addEventListener("click", () => {
  wrapper.style.background=("#fefdf9");
  toggle.style.filter=("brightness(100%)");
  btn.style.filter=("brightness(100%)");
  Nsec.style.filter=("brightness(100%)");
  fI.style.filter=("brightness(100%)");
  sI.style.filter=("brightness(100%)");
  tI.style.filter=("brightness(100%)");
})

fhLink.addEventListener("click", () => {
  wrapper.style.background=("#fefdf9");
  toggle.style.filter=("brightness(100%)");
  btn.style.filter=("brightness(100%)");
  Nsec.style.filter=("brightness(100%)");
  fI.style.filter=("brightness(100%)");
  sI.style.filter=("brightness(100%)");
  tI.style.filter=("brightness(100%)");
})


function openNav() {
    document.getElementById("sidenav").style.width = "68%";
}

function closeNav() {
  const matchesMediaQuery = window.matchMedia('(max-width: 767.98px)');
  if (matchesMediaQuery.matches) {
    document.getElementById("sidenav").style.width = "0";
  } else {
    document.getElementById("sidenav").style.width = "100";
  }
}
