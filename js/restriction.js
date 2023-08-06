"use strict";
const body = document.body;
const btnAllow = document.querySelector(".restriction-button--yes");
const btnPrevent = document.querySelector(".restriction-button--no");
const overlay = document.querySelector(".restriction-overlay");
let isAdult = false;

const setRestriction = function () {
  isAdult = false;
  localStorage.setItem("isAdult", false);
  window.history.back();
  overlay.classList.remove("remove");
  body.classList.add("overflow");
};

const removeRestriction = function () {
  isAdult = true;
  localStorage.setItem("isAdult", true);
  overlay.classList.add("remove");
  body.classList.remove("overflow");
};

if (localStorage.isAdult === "true") {
  overlay.style.display = "none";
} else {
  setRestriction();
}

btnPrevent.addEventListener("click", setRestriction);
btnAllow.addEventListener("click", removeRestriction);
