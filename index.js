const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const emailInput = document.getElementById("user-email");
const emailGroup = emailInput.parentNode;

emailInput.addEventListener('change', (e) => {
    const isValid = emailRegex.test(e.target.value);

    const emailValidation = emailGroup.querySelector('.form-validation')
    emailInput.classList.remove('error');
    emailValidation.classList.remove('show');
    emailValidation.innerHTML = '';

    if (!isValid) {
     emailInput.classList.add('error');

emailValidation.classList.add('show');
emailValidation.innerHTML = 'Insira um e-mail válido';
    }
});
const loginForm = document.getElementById("login-form");

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    console.log(email);
});
