/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function selectRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function generateRandomCard() {
  // Defining the arrays with the possible card numbers and suits
  let cardsArr = [
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
    "K",
    "A"
  ];
  let suitsSymbols = ["♣", "♦", "♥", "♠"];

  // Random selecting a card number and a suit
  let cardNumber = selectRandom(cardsArr);
  let suit = selectRandom(suitsSymbols);

  return {
    cardNumber: cardNumber,
    suit: suit
  };
}

function applyCardToDom() {
  // Generate a new card
  const newCard = generateRandomCard();
  console.log(newCard);

  // Defining the DOM elements with JS
  let cardDOM = document.getElementById("random-card");
  let symbolsDOM = document.getElementsByClassName("symbol");
  let cardNumberDOM = document.querySelector(".centralnumber");

  // Applying the color to the DOM
  if (newCard.suit == "♦" || newCard.suit == "♥")
    cardDOM.classList.replace("black-suit", "red-suit");
  else cardDOM.classList.replace("red-suit", "black-suit");

  // Applying the Card Number to the DOM
  cardNumberDOM.innerHTML = newCard.cardNumber;

  // Applying the Card Suit to the DOM
  for (const symbol of symbolsDOM) {
    symbol.innerHTML = newCard.suit.toString();
  }
}

window.onload = function() {
  // Generate a new card
  const newCard = generateRandomCard();
  console.log(newCard);

  // Defining the DOM elements with JS
  let cardDOM = document.getElementById("random-card");
  let symbolsDOM = document.getElementsByClassName("symbol");
  let cardNumberDOM = document.querySelector(".centralnumber");

  // Applying the color to the DOM
  if (newCard.suit == "♦" || newCard.suit == "♥")
    cardDOM.classList.add("red-suit");
  else cardDOM.classList.add("black-suit");
  // Applying the Card Number to the DOM
  cardNumberDOM.innerHTML = newCard.cardNumber;
  // Applying the Card Suit to the DOM
  for (const symbol of symbolsDOM) {
    symbol.innerHTML = newCard.suit.toString();
  }
};

document.getElementById("random-card").onclick = applyCardToDom;
document.getElementById("btn-new-card").onclick = applyCardToDom;

// Generate a new card from 5s to 5s
let intervalCardGenerator = setInterval(applyCardToDom, 2000);
const setNewIntervalOnClick = () => {
  clearInterval(intervalCardGenerator);
  intervalCardGenerator = setInterval(applyCardToDom, 2000);
};
document
  .getElementById("btn-new-card")
  .addEventListener("click", setNewIntervalOnClick);

//
document.getElementById("height").onchange = function(e) {
  let cardDOM = document.getElementById("random-card");
  cardDOM.style.height = e.target.value + "px";
};
document.getElementById("width").onchange = function(e) {
  let cardDOM = document.getElementById("random-card");
  cardDOM.style.width = e.target.value + "px";
};
