let navi = document.querySelector(".navigation");
let button = document.querySelector("#backToTop");

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navi.classList.add("bg"); //add is a method, so "bg" needs to be in brackets
    button.style.display = "block";
    header.style.backgroundColor = "#fff";
  } else {
    navi.classList.remove("bg");
    button.style.display = "none";
    header.style.backgroundColor = "rgb(73, 73, 73)";
  }
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

button.addEventListener("click", getToTop);
