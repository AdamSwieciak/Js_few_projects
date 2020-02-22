// $(".arrow").click(function() {
//   $("section, nav, .fas, .arrow").toggleClass("on");
// });

const arrow = document.querySelector(".arrow");
const section = document.querySelector("section");
const nav = document.querySelector("nav");
const fas = document.querySelector(".fas");
arrow.addEventListener("click", function() {
  section.classList.toggle("on");
  nav.classList.toggle("on");
  fas.classList.toggle("on");
  arrow.classList.toggle("on");
});
