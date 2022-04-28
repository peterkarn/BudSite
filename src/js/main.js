import "./_vendor";
import vars from "./_vars";
import "./_functions";
import "./_components";
import Dropdown from "../../node_modules/bootstrap/dist/js/bootstrap.min";
import Collapse from "../../node_modules/bootstrap/js/dist/collapse";
// import Dropdown from "../../node_modules/bootstrap/js/dist/dropdown";
// import Carousel from "../../node_modules/bootstrap/js/dist/carousel";

// splide

if (document.querySelector('.splide')) {
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

document.addEventListener('DOMContentLoaded', () => {
if (document.querySelector('.splide')) {
  const splide = new Splide('.splide', {
    type: 'loop',
    pagination: true,
      grid: {
        rows: 2,
        cols: 2,
        gap: {
          row: '30px',
          col: '30px',
        },
      },
    breakpoints: {
      991: {
        grid: {
          rows: 1,
          cols: 1,
        },
      }
    }
  }).mount(window.splide.Extensions);

  const fillWithNumbers = (num) => {
    const paginationBtns = document.querySelectorAll('.splide__pagination button');
    paginationBtns.forEach((btn, i) => {
      btn.innerText = i + 1;
    });
  };
  
  fillWithNumbers();

  splide.on('updated', fillWithNumbers)
}
});