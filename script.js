"use strict";

// Accordion
const item1 = document.querySelector(".item--1");
const item2 = document.querySelector(".item--2");
const item3 = document.querySelector(".item--3");
const btn1 = document.querySelector(".acc-1");
const btn2 = document.querySelector(".acc-2");
const btn3 = document.querySelector(".acc-3");

btn1.addEventListener("click", function () {
  item1.classList.toggle("open");
});

btn2.addEventListener("click", function () {
  item2.classList.toggle("open");
});

btn3.addEventListener("click", function () {
  item3.classList.toggle("open");
});
