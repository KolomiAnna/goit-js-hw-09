import Notiflix from 'notiflix';


const formEl = document.querySelector("form");
const delayEl = document.querySelector("[name=delay]");
const stepEl = document.querySelector("[name=step]");
const amountEl = document.querySelector("[name=amount]");


//    ПЕРЕВІРКА ВВЕДЕНИХ ДАНИХ В ІНПУТ
const btnEl = document.querySelector("[type=submit]");
btnEl.setAttribute("disabled", "");
formEl.addEventListener("input", checkInputValue);

function checkInputValue() {
  if (Number(delayEl.value) && Number(stepEl.value) && Number(amountEl.value)) {
    btnEl.removeAttribute("disabled");
  }
}

formEl.addEventListener("submit", handlerFormSubmit);

function handlerFormSubmit(event) {
  event.preventDefault();
  let delayValue = Number(delayEl.value);
  let stepValue = Number(stepEl.value);
  let amount = Number(amountEl.value);

  if (delayValue > 0
    || stepValue > 0
    || amount >= 0) {
    Notiflix.Notify.info("Value can`t be negative or zero");
    return;
  }


  for (let i = 1; i <= amount; i++) {
    createPromise(i, delayValue)
      .then(resolve => Notiflix.Notify.success(resolve))
      .catch(reject => Notiflix.Notify.failure(reject));
    delayValue += stepValue;
  }
}

const createPromise = (position, delay) => {

  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
};


