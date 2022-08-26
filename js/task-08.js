const form = document.querySelector(".login-form")
const emailInput = document.querySelector('[type = "email"]');
const passwordInput = document.querySelector('[type = "password"]');
form.addEventListener("submit", login);

function login(e) {
  e.preventDefault();
  const formData = new FormData(form);
  let obj = {};

  for (let arr of formData) {
    let value = arr[1];
    const nameOfValue = arr[0];
    if (value === "") {
      alert(`Your ${nameOfValue} input is empty`);
    } else {
      obj[nameOfValue] = value;
    }
  }
  console.log(obj);
  form.reset();
}
