"use strict";

window.addEventListener("load", start);

let operator;
let result;
let text_input;

function start() {
  operator = document.querySelector("#operator");
  text_input = document.querySelector("#text_input");
  result = document.querySelector("#result");
  let generateIt = document.querySelector("#output_button");

  generateIt.addEventListener("click", generate);
}

function generate() {
  const op = operator.value;
  let input = text_input.value;
  let generateResult;

  if (op == "a") {
    generateResult = input.substring(0, 1).toUpperCase() + input.substring(1, input.length);
  } else if (op == "b") {
    generateResult = input.split(" ").slice(-1).join(" ");
  } else if (op == "c") {
    generateResult = a * b;
  } else if (op == "d") {
    generateResult = a / b;
  } else if (op == "e") {
    generateResult = a / b;
  }

  result.value = generateResult;
}
