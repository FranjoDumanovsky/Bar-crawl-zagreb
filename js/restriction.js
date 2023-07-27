"use strict";

const body = document.body;

console.log(body);

const btnAllow = document.querySelector(".restriction-button--yes");
const btnPrevent = document.querySelector(".restriction-button--no");
const overlay = document.querySelector(".restriction-overlay");

let isAdult = false;

const removeOverlay = function () {
  overlay.style.display = "none";
};

window.addEventListener("load", function () {
  if (isAdult) {
    removeOverlay();
  } else {
    document.body.style.overflow = "hidden";
  }
});

const setRestriction = function () {
  isAdult = false;
  localStorage.setItem("isAdult", false);
  window.history.back();
  body.classList.add("overflow");
};

const removeRestriction = function () {
  isAdult = true;
  localStorage.setItem("isAdult", true);
  overlay.classList.add("remove");
  body.classList.remove("overflow");
};

if (localStorage.isAdult === "true") {
  removeRestriction();
} else {
}

btnPrevent.addEventListener("click", setRestriction);
btnAllow.addEventListener("click", removeRestriction);
