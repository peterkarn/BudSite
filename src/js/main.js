import "./_vendor";
import vars from "./_vars";
import "./_functions";
import "./_components";
import Dropdown from "../../node_modules/bootstrap/dist/js/bootstrap.min";
import { hide } from "@popperjs/core";

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

const tabsBtn = document.querySelectorAll(".filter__btn");
const tabsParent = document.querySelector(".filter");
const tabsContent = document.querySelectorAll(".tabs__content");

function hideTabsContent() {
  tabsContent.forEach((e) => {
    e.classList.remove("show");
    e.classList.add("hide");
  });

  tabsBtn.forEach((btn) => {
    btn.classList.remove("active");
  });
}

function showTabsContent(i) {
  tabsContent[i].classList.remove("hide");
  tabsContent[i].classList.add("show");

  tabsBtn[i].classList.add("active");
}

hideTabsContent();
showTabsContent(0);

tabsParent.addEventListener("click", (e) => {
  const target = e.target;

  if (target && target.classList.contains("filter__btn")) {
    tabsBtn.forEach((e, i) => {
      if (target == e) {
        hideTabsContent();
        showTabsContent(i);
      }
    });
  }
});
