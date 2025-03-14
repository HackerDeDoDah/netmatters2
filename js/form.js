// JavaScript Form Validation
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    let errors = [];

    if (!name) {
        errors.push('Name is required.');
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push('Valid email is required.');
    }
    if (!phone || !/^\+?[0-9\s-]+$/.test(phone)) {
        errors.push('Valid phone number is required.');
    }
    if (!message) {
        errors.push('Message is required.');
    }

    if (errors.length > 0) {
        e.preventDefault(); // Prevent form submission
        alert(errors.join('\n'));
    }
});
