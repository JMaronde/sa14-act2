const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', event => {
    event.preventDefault();
    validateInputs();
});

const setError = (element, message) => { // if there's an error
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => { // if it's a success
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => { // checking if the email is structured properly by using a regex
    const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
    return regex.test(String(email).toLowerCase());
}

const isValidPassword = password => { // password needs to be at least 8 characters long, have a number a capital letter
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/
    return regex.test(String(password))
}

const validateInputs = () => {
    const usernameValue = username.value.trim(); // remove whitespaces
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else if (usernameValue.length < 6) {
        setError(username, 'Username must have at least 6 characters!')
    }

    if(emailValue === '') {
        setError(email, "Email is required");
    } else if (!isValidEmail(emailValue)) { // checks the regex function to see if the email is structured well
        setError(email, "Invalid Email Address");
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (!isValidPassword(passwordValue)) {
        setError(password, 'Password must have at least 8 characters, have 1 capital letter and 1 number')
    } else {
        setSuccess(password);
    }
}

