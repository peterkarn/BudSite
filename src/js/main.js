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
