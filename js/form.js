// JavaScript Form Validation
const form = document.querySelector('form');
const emailInput = document.getElementById('email');

form.addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = emailInput.value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    let errors = [];

    if (!name) {
        errors.push('Name is required.');
    }

    const emailRegex = /^(?!test@test$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
        errors.push('Valid email is required.');
        email.style.border = '2px solid red'; // red border email input
    } else {
        email.style.border = ''; // reset if valid
    }

    if (!phone || !/^\+?[0-9\s-]+$/.test(phone)) {
        errors.push('Valid phone number is required.');
    }

    if (!message) {
        errors.push('Message requires a minimum of five words.');
    }

    if (errors.length > 0) {
        e.preventDefault(); // prevent form submission
        alert(errors.join('\n'));
    }
});
