"use strict";


const startBtnEl = document.querySelector("[data-start]");
const stopBtnEl = document.querySelector("[data-stop]");
const bodyEl = document.querySelector("body");

let timerId;

    startBtnEl.addEventListener("click", (event) => {
         timerId = setInterval(() => {
            bodyEl.style.backgroundColor = getRandomHexColor();

            if (event.target) {
                startBtnEl.setAttribute("disabled", "");
                stopBtnEl.removeAttribute("disabled");
            }
        }, 1000);
    });
    

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

stopBtnEl.addEventListener("click", (event) => {
    clearInterval(timerId);

    if (event.target) {
        startBtnEl.removeAttribute("disabled");
        stopBtnEl.setAttribute("disabled", "");
    }
});




