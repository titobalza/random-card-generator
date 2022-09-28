/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  let rr = document.querySelectorAll(".pinta");
  let pinta = generapinta();
  for (var i = 0; i < rr.length; i++) {
    rr[i].innerHTML = pinta;
    if (pinta === "&hearts;" || pinta === "&diams;") {
      rr[i].classList.toggle("red");
    }
  }
  document.querySelector(".numero").innerHTML = generanumero();
};

let generanumero = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};
let generapinta = () => {
  let pinta = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  let indexpinta = Math.floor(Math.random() * pinta.length);
  return pinta[indexpinta];
};
