const subscription = document.querySelector(".subscription");
const errorBtn = document.querySelector("#submit");
const errorMsg = document.querySelector("#errormsg");
const emailInput = document.querySelector("#email");

subscription.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const emailRgx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email == "") {
    errorMsg.textContent = "Email Field cannot be empty";
    errorMsg.classList.remove("d-error");
  }

  if (!emailRgx.test(email)) {
    errorMsg.classList.remove("d-error");
  } else {
    errorMsg.classList.add("d-error");
  }
});
