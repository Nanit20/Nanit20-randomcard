/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let card = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "J",
    "&#9819;",
    "&#9818;"
  ];
  let suit = {
    hearts: "♥",
    diamonds: "♦",
    clubs: "♣",
    spades: "♠"
  };

  let cardChosen = Math.floor(Math.random() * card.length);
  let suitChosen = Math.floor(Math.random() * Object.keys(suit).length);

  document.getElementById("card-number").innerHTML = card[cardChosen];
  document.getElementById("card-top").innerHTML = Object.values(suit)[
    suitChosen
  ];
  document.getElementById("card-bottom").innerHTML = Object.values(suit)[
    suitChosen
  ];

  document
    .getElementById("poker-card")
    .classList.add(Object.keys(suit)[suitChosen]);
};
