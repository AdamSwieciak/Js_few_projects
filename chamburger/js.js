// const burger = document.querySelector(".plus");
// const iconbueger = document.querySelector(".fa-times-circle");
// const iconbag = document.querySelector(".fa-bug");
// const column = document.querySelector("aside");
// const wrapp = document.querySelector(".wrapper");

// burger.addEventListener("click", function() {
//   iconbueger.classList.toggle("show");
//   iconbag.classList.toggle("show");
//   column.classList.toggle("show");
//   wrapp.classList.toggle("show");
// });

//JQUERY
// $(".plus").click(function() {
//   $(".fas, aside, .wrapper").toggleClass("show");
// });

const burger = document.querySelector(".plus");
const activeselector = document.querySelectorAll(".active");
burger.addEventListener("click", function() {
  for (let i = 0; i < activeselector.length; i++) {
    activeselector[i].classList.toggle("show");
  }
});
