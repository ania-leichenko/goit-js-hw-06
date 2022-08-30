const form = document.querySelector(".login-form");
const emailInput = document.querySelector('[type = "email"]');
const passwordInput = document.querySelector('[type = "password"]');
form.addEventListener("submit", login);

function login(e) {
  e.preventDefault();
  let obj = {};
  const emailValue = form.elements.email.value;
  const emailNameOfValue = form.email.name;
  const passwordValue = form.elements.password.value;
  const passwordNameOfValue = form.password.name;

  if (emailValue === "") {
    alert(`Your ${emailNameOfValue} input is empty`);
  } else if (passwordValue === "") {
    alert(`Your ${passwordNameOfValue} input is empty`);
  } else {
    obj[emailNameOfValue] = emailValue;
    obj[passwordNameOfValue] = passwordValue;
  }
  if (emailInput.value !== "" && passwordInput.value !== "") {
    console.log(obj);
    form.reset();
  }
}
