const inputElement = document.querySelector("#validation-input");
const maxCount = inputElement.getAttribute("data-length");

function inputElementBlur() {
  if (inputElement.value.length === Number(maxCount)) {
    inputElement.classList.add("valid");
    inputElement.classList.remove("invalid");
  } else {
    inputElement.classList.add("invalid");
    inputElement.classList.remove("valid");
  }
}

inputElement.addEventListener("blur", inputElementBlur);