const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');

let validUser = false;
let validEmail = false;
let validPass = false;
let passMatch = false;

const user = document.getElementById('exampleInputUsername');
user.addEventListener('blur', function () {
    const userval = user.value;
    const userregex = /^[a-zA-Z0-9]{3,15}$/;
    const msg = document.getElementById('usernameText');

    if (!userregex.test(userval)) {
        msg.textContent = 'Enter valid username (3-15 alphanumeric)';
        msg.style.color = 'red';
        validUser = false;
    } else {
        msg.textContent = 'Username looks good';
        msg.style.color = 'green';
        validUser = true;
    }
});

const email = document.getElementById('exampleInputEmail1');
email.addEventListener('blur', function () {
    const emailval = email.value;
    const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const msg = document.getElementById('emailText');

    if (!emailregex.test(emailval)) {
        msg.textContent = 'Enter valid email';
        msg.style.color = 'red';
        validEmail = false;
    } else {
        msg.textContent = 'Email looks valid';
        msg.style.color = 'green';
        validEmail = true;
    }
});

const Password = document.getElementById('exampleInputPassword1');
Password.addEventListener('blur', function () {
    const passwordval = Password.value;
    const passwordregex = /^.{8,}$/; // minimum 8 characters
    const msg = document.getElementById('passwordText');

    if (!passwordregex.test(passwordval)) {
        msg.textContent = 'Password must be at least 8 characters';
        msg.style.color = 'red';
        validPass = false;
    } else {
        msg.textContent = 'Strong password';
        msg.style.color = 'green';
        validPass = true;
    }
});


const passwordChecker = document.getElementById('passwordCheckerText');
passwordChecker.addEventListener('blur', function () {
    const passwordCheckerval = passwordChecker.value;
    const originalPasswordval = Password.value;
    const msg = document.getElementById('passwordCheckerText');

    if (!msg) {
        console.error("Element with ID 'passwordCheckerText' not found in HTML");
        return; // stop code if element is missing
    }

    if (passwordCheckerval !== originalPasswordval || passwordCheckerval === "") {
        alert("Passwords do not match or are empty");
        msg.textContent = 'Passwords do not match';
        msg.style.color = 'red';
        passMatch = false;
    } else {
        msg.textContent = 'Passwords match';
        msg.style.color = 'green';
        passMatch = true;
    }
});


form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (validUser && validEmail && validPass && passMatch) {
        alert('Form submitted successfully!');
        console.log("Form submitted with valid data");
        form.submit(); // now allow submission
    } else {
        alert('Please fix errors before submitting');
        console.log("Form blocked due to validation failure");
    }
});
