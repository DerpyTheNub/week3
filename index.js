const btSubmit = document.querySelector(".login-button");
const nameField = document.querySelector("#username");
const ageField = document.querySelector("#age");
const loginMessage = document.querySelector(".login-message");

btSubmit.addEventListener("click", () => {
    const nameInput = nameField.value;
    const ageInput = ageField.value;

    if((nameInput.toLowerCase() === "germo" || nameInput.toLowerCase() === "germo kaljuste") && ageInput === "18") {
        loginMessage.textContent = 'Access Granted';
        loginMessage.style.color = "rgb(120, 224, 155)"
    } else {
        loginMessage.textContent = 'Access Denied';
        loginMessage.style.color = "rgb(224, 141, 120)"
    }
});