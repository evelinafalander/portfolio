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


var coll = document.getElementsByClassName("info");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
