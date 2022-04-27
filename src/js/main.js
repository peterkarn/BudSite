import "./_vendor";
import vars from "./_vars";
import "./_functions";
import "./_components";
import Dropdown from "../../node_modules/bootstrap/dist/js/bootstrap.min";

let inputs = document.querySelectorAll("input[type='tel']");
let im = new Inputmask("+380 (99) 999 99 99");

im.mask(inputs);
// import Dropdown from "../../node_modules/bootstrap/js/dist/dropdown";
// import Carousel from "../../node_modules/bootstrap/js/dist/carousel";

// const filterBtns = document.querySelector(".filter__btns");
// const filterItem = document.querySelectorAll(".filter__item");

// document.querySelector(".filter__btns").addEventListener("click", (event) => {
//   if (event.target.tagName !== "BUTTON") return false;

//   let filterClass = event.target.dataset("filter");
//   console.log(filterClass);
// });

const filterItem = document.querySelectorAll(".filter__item");
const filterBtns = document.querySelector(".filter__btns");
const filterCategories = document.querySelector(".filter__categories");

filterBtns.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") return false;
  let filterClass = event.target.dataset.filter;
  console.log(filterClass);
  filterItem.forEach((e) => {
    if (!e.classList.contains(filterClass)) {
      e.classList.add("hide");
    } else {
      e.classList.remove("hide");
    }
  });
});

filterCategories.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") {
    return false;
  }

  let filterCategory = event.target.dataset.category;
  console.log(filterCategory);

  filterItem.forEach((element) => {
    if (!element.classList.contains(filterCategory)) {
      element.classList.add("hide");
    } else {
      element.classList.remove("hide");
    }
  });
});
