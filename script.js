"use strict";

// Carousel
const btnRight = document.querySelector(".btn--right");
const btnLeft = document.querySelector(".btn--left");
const unit1 = document.getElementById("unit-1");
const unit2 = document.getElementById("unit-2");

btnRight.addEventListener("click", function () {
  unit1.classList.toggle("open");
  unit2.classList.toggle("open");
});

btnLeft.addEventListener("click", function () {
  unit1.classList.toggle("open");
  unit2.classList.toggle("open");
});

// Accordion
const btn1 = document.getElementById("acc-1");
const btn2 = document.getElementById("acc-2");
const btn3 = document.getElementById("acc-3");

btn1.addEventListener("click", function () {
  this.parentElement.classList.toggle("open");
});

btn2.addEventListener("click", function () {
  this.parentElement.classList.toggle("open");
});

btn3.addEventListener("click", function () {
  this.parentElement.classList.toggle("open");
});
