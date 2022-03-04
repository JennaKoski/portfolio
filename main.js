let navbar = document.querySelector(".navbar");
let button = document.querySelector("#backToTop");

const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("nav");

let links = document.querySelectorAll("nav ul li a");

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add("bg");
    button.style.display = "block";
    // navbar.style.backgroundColor = "#fff";
  } else {
    navbar.classList.remove("bg");
    button.style.display = "none";
    // navbar.style.backgroundColor = "rgb(73, 73, 73)";
  }
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const mobMenu = () => {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", mobMenu);
  }
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
    document.body.style.overflow = "";
  } else {
    nav.classList.add("responsive");
    document.body.style.overflow = "hidden";
  }
};

button.addEventListener("click", getToTop);
hamburger.addEventListener("click", mobMenu);
