
const menuOpen = document.querySelector("#open-menu");
const menuClose = document.querySelector("#closed-menu");

const links = document.querySelectorAll(".nav-link");
const overlays = document.querySelectorAll(".overlay");

if(menuOpen.addEventListener("click", function() {
    document.body.style.background="#807e89";
    overlays.forEach((overlay) => {
      overlay.classList.add("bright-dark-color");
    });
}));  else if (menuClose.addEventListener("click", function() {
      document.body.style.background="#fffdfa";
      overlays.forEach((overlay) => {
      overlay.classList.remove("bright-dark-color");
      }); 
}));

links.forEach((link) => {
  link.addEventListener("click", function() {
      document.body.style.background="#fffdfa";
      overlays.forEach((overlay) => {
      overlay.classList.remove("bright-dark-color");
    }); 
  });
});


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
