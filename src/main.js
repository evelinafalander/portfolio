import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";
import { info } from "autoprefixer";

document.getElementById("myMail").onmouseover = function() {mouseOver()};
document.getElementById("myMail").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("myMail").classList.add('mymail');
}

function mouseOut() {
  document.getElementById("myMail").classList.remove('mymail');
}

/////Show info text


