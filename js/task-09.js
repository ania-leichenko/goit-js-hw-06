const changeColorBtn = document.querySelector("button.change-color");
const span = document.querySelector("span");

function getRandomHexColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
  span.innerHTML = randomColor; 
  return document.body.style.background = randomColor;
}

changeColorBtn.addEventListener("click", getRandomHexColor);
