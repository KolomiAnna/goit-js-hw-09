import Notiflix from 'notiflix';


// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";


const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("[type=button]");

const dataDaysEl = document.querySelector("[data-days]");
const dataHourEl = document.querySelector("[data-hours]");
const dataMinutesEl = document.querySelector("[data-minutes]");
const dataSecondsEl = document.querySelector("[data-seconds]");

buttonEl.style.backgroundColor = "#E28C1F";
inputEl.style.backgroundColor = "#fff2cc";

const valuesEl = document.querySelector(".timer");
valuesEl.style.color = "#783f04";
valuesEl.style.fontSize = "18px";


buttonEl.setAttribute("disabled", "");
let ms;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {

        let ms = selectedDates[0] - options.defaultDate;

        if (selectedDates[0] < options.defaultDate) {
            Notiflix.Notify.failure("Please choose a date in the future");

        } else {
            buttonEl.removeAttribute("disabled");
            buttonEl.style.fontSize = "18px";

            buttonEl.addEventListener("click", () => {
                setInterval(() => {
                    if (ms > 1000) {
                        ms -= 1000;
                        convertMs(ms);

                    } else { console.log("finish"); }
                }, 1000);

            })
        }
    },
}

flatpickr(inputEl, options);



function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining
    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    dataDaysEl.textContent = days;
    dataHourEl.textContent = hours;
    dataMinutesEl.textContent = minutes;
    dataSecondsEl.textContent = seconds;

    return { days, hours, minutes, seconds };
}


function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}



