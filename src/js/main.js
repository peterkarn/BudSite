import "./_vendor";
import vars from "./_vars";
import "./_functions";
import "./_components";
import Dropdown from "../../node_modules/bootstrap/dist/js/bootstrap.min";
import { hide } from "@popperjs/core";
import { Splide } from "@splidejs/splide";

let inputs = document.querySelectorAll("input[type='tel']");
let im = new Inputmask("+380 (99) 999 99 99");

im.mask(inputs);
import Collapse from "../../node_modules/bootstrap/js/dist/collapse";

const filterItem = document.querySelectorAll(".filter__item");
const filterBtns = document.querySelector(".filter__btns");
const filterCategories = document.querySelector(".filter__categories");

filterCategories.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") {
    return false;
  }

  let filterCategory = event.target.dataset.category;
  filterItem.forEach((element) => {
    if (!element.classList.contains(filterCategory)) {
      element.classList.add("hide");
    } else {
      element.classList.remove("hide");
    }
  });
});

const tabsBtn = document.querySelectorAll(".filter__btn");
const tabsParent = document.querySelectorAll(".filter");
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

// tabsParent.addEventListener("click", (e) => {
//   const target = e.target;

//   if (target && target.classList.contains("filter__btn")) {
//     tabsBtn.forEach((e, i) => {
//       if (target == e) {
//         hideTabsContent();
//         showTabsContent(i);
//       }
//     });
//   }
// });

tabsParent.forEach((parent) => {
  parent.addEventListener("click", (e) => {
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
});

// splide

if (document.querySelector(".splide")) {
  // new Splide('.splide', {
  //   // type: 'loop',
  //   // perPage: 1,
  //   // pagination: false,
  //   // arrows: false,
  //   // autoplay: true,
  //   // autoplayInterval: 5000,
  //   // grid: {
  //   //   rows: 2,
  //   //   cols: 2,
  //   //   gap: {
  //   //     row: '1rem',
  //   //     col: '1.5rem',
  //   //   },
  //   // },
  //   // breakpoints: {
  //   //   1024: {
  //   //     perPage: 1,
  //   //     gap: 0,
  //   //   },
  //   //   768: {
  //   //     perPage: 1,
  //   //     gap: 0,
  //   //   },
  //   //   320: {
  //   //     perPage: 1,
  //   //     gap: 0,
  //   //   },
  //   // },
  // });
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".splide")) {
    const splide = new Splide(".splide", {
      type: "loop",
      pagination: true,
      grid: {
        rows: 2,
        cols: 2,
        gap: {
          row: "30px",
          col: "30px",
        },
      },
      breakpoints: {
        991: {
          grid: {
            rows: 1,
            cols: 1,
          },
        },
      },
    }).mount(window.splide.Extensions);

    const fillWithNumbers = (num) => {
      const paginationBtns = document.querySelectorAll(
        ".splide__pagination button"
      );
      paginationBtns.forEach((btn, i) => {
        btn.innerText = i + 1;
      });
    };

    fillWithNumbers();

    splide.on("updated", fillWithNumbers);
  }
});

// modal

const formModal = new HystModal({
  linkAttributeName: "data-hystmodal",
  // настройки (не обязательно), см. API
});

console.log(formModal);
