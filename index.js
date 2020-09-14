// items to modify:

// 1. button color 
// 2. toggle warning visible 
// 3. toggle error icon 

const emailInput = document.querySelector("input");
const submitButton = document.querySelector("button");
const errorIcon = document.querySelector(".errorimg");
const errorText = document.querySelector(".warning");
const formm = document.querySelector("form");

submitButton.addEventListener("input", () => {
    emailInput.checkValidity();
    emailInput.setCustomValidity("");
});

emailInput.addEventListener("invalid", (e) => {
    e.preventDefault();
    errorIcon.classList.remove("invisible");
    errorText.classList.remove("invisible");
    submitButton.classList.add("button-error");
});