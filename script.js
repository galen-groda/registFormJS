const form = document.querySelector('#form');
const userSurname = document.querySelector('#userSurname');
const userName = document.querySelector('#username');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phoneNumber');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');


// функція яка показує помилку
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// функція яка показує успіх при введенні даних (тобто перевірка пройшла)
function showSuccess (input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// перевірка пошти

function isValidEmail (email) {
    const re=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase())
}


form.addEventListener('submit', function (e) {
    e.preventDefault()
    if (userSurname.value === "") {
        showError(userSurname, 'You need to write down a surname')
    } else if (userSurname.value.length < 4) {
        showError(userSurname, 'You need to write a correct surname')
    } else if (!isNaN(userSurname.value)) {
        showError(userSurname, 'Only characters are allowed')
    } else {
        showSuccess(userName)
    }
    if (userName.value === "") {
        showError (userName, 'You need to write down a name')
    } else if (userName.value.length <4) {
        showError (userName, 'You need to write a correct name')
    } else if (!isNaN(userName.value)) {
        showError(userName, 'Only characters are allowed')
    } else {
        showSuccess(userName)
    }
    if (email.value === "") {
        showError(email, 'You need to write down an e-mail')
    } else if (!isValidEmail(email.value)) {
        showError(email, 'You need to write a correct e-mail')
    } else {
        showSuccess(email)
    }
    if (phoneNumber.value === "") {
        showError(phoneNumber, 'You need to write down your phone number')
    } else if (isNaN(phoneNumber.value)) {
        showError(phoneNumber, 'Only numbers are allowed')
    } else if (phoneNumber.value.length < 10) {
        showError(phoneNumber, 'Your need to fill your phone number')
    } else {
        showSuccess(phoneNumber)
    }
    if (password.value === "") {
        showError(password, 'You need to write down a password')
    } else if (password.value.length < 8) {
        showError(password, 'Password length must be at least 8 characters')
    } else {
        showSuccess(password)
    }
    if (password2.value === "") {
        showError(password2, 'You need to repeat a password')
    } else if (password2.value.length < 8) {
        showError(password2, 'Password length must be at least 8 characters')
    } else if (password2.value !== password.value) {
        showError(password2, 'Passwords do not match')
    } else {
        showSuccess(password2)
    }
})

