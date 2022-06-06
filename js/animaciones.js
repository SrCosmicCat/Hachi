let formSignUp = document.getElementById("form-sign-up");
let formLogIn = document.getElementById("form-log-in");

let btnSignUp = document.getElementById("btn-sign-up");
let btnLogIn = document.getElementById("btn-log-in");

let inputFullName = document.getElementById("inputFullName");
let inputUsername= document.getElementById("inputUsername");
let inputEmail = document.getElementById("inputEmail");
let inputPassword = document.getElementById("inputPassword");

let errorName = document.getElementById("errorName");
let errorUsername = document.getElementById("errorUsername");
let errorEmail = document.getElementById("errorEmail");
let errorPassword = document.getElementById("errorPassword");

//Action buttons from header
btnLogIn.addEventListener("click", () => {
    if (formLogIn.className == "no-visible") {
        formLogIn.classList.add("si-visible");
        formLogIn.classList.remove("no-visible");
        formSignUp.classList.add("no-visible");
        formSignUp.classList.remove("si-visible");

        btnLogIn.classList.add("btn-default-round-md");
        btnLogIn.classList.remove("btn-primary-round-md");

        btnSignUp.classList.remove("btn-default-round-md");
        btnSignUp.classList.add("btn-primary-round-md");
    }
});

btnSignUp.addEventListener("click", () => {
    if (formSignUp.className == "no-visible") {
        formSignUp.classList.add("si-visible");
        formSignUp.classList.remove("no-visible");
        formLogIn.classList.add("no-visible");
        formLogIn.classList.remove("si-visible");

        btnSignUp.classList.add("btn-default-round-md");
        btnSignUp.classList.remove("btn-primary-round-md");

        btnLogIn.classList.remove("btn-default-round-md");
        btnLogIn.classList.add("btn-primary-round-md");
    }
});

//Form icons
formSignUp.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = inputFullName.value;
    let username = inputUsername.value;
    let email = inputEmail.value;
    let password = inputPassword.value;

    if (name == ""){
        errorName.classList.add("si-visible");
        errorName.classList.remove("no-visible");
        inputFullName.style.boxShadow = "inset 0 0 0 2px #4111CA";
    }
    if (username == ""){
        errorUsername.classList.add("si-visible");
        errorUsername.classList.remove("no-visible");
        inputUsername.style.boxShadow = "inset 0 0 0 2px #4111CA";
    }
    if (email == ""){
        errorEmail.classList.add("si-visible");
        errorEmail.classList.remove("no-visible");
        inputEmail.style.boxShadow = "inset 0 0 0 2px #4111CA";
    }
    if (password == ""){
        errorPassword.classList.add("si-visible");
        errorPassword.classList.remove("no-visible");
        inputPassword.style.boxShadow = "inset 0 0 0 2px #4111CA";
    }
});

inputFullName.addEventListener("click", () => {
    errorName.classList.remove("si-visible");
    errorName.classList.add("no-visible");
    inputFullName.style.boxShadow = "none";
});
inputUsername.addEventListener("click", () => {
    errorUsername.classList.remove("si-visible");
    errorUsername.classList.add("no-visible");
    inputUsername.style.boxShadow = "none";
});
inputEmail.addEventListener("click", () => {
    errorEmail.classList.remove("si-visible");
    errorEmail.classList.add("no-visible");
    inputEmail.style.boxShadow = "none";
});
inputPassword.addEventListener("click", () => {
    errorPassword.classList.remove("si-visible");
    errorPassword.classList.add("no-visible");
    inputPassword.style.boxShadow = "none";
});