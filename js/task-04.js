const counter = document.querySelector("#counter");
const counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let currentCounterValue = Number(counterValue.textContent);

const decrement = () => {
  currentCounterValue += Number(decrementBtn.textContent);
  counterValue.textContent = currentCounterValue;
};

const increment = () => {
  currentCounterValue += Number(incrementBtn.textContent);
  counterValue.textContent = currentCounterValue;
};

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);
