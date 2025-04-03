// cookie popup

const cookiePopup = document.getElementById('cookie-overlay');
const changeSettingsButton = document.getElementById('change-settings');
const acceptCookiesButton = document.getElementById('accept-cookies');

// Function disable scrolling
function disableScrolling() {
    document.body.classList.add('popup-active');
    document.addEventListener('wheel', preventScroll, { passive: false });
    document.addEventListener('touchmove', preventScroll, { passive: false });
    document.addEventListener('keydown', preventKeys);
}

// Function enable scrolling
function enableScrolling() {
    document.body.classList.remove('popup-active');
    document.removeEventListener('wheel', preventScroll);
    document.removeEventListener('touchmove', preventScroll);
    document.removeEventListener('keydown', preventKeys);
}

// Prevent key scrolling (arrow keys, space, page up/down)
function preventKeys(e) {
    const keys = ['ArrowUp', 'ArrowDown', 'Space', 'PageUp', 'PageDown'];
    if (keys.includes(e.code)) {
        e.preventDefault();
    }
}

// Prevent scrolling via touch or mouse wheel
function preventScroll(e) {
    e.preventDefault();
}

// Change Settings button click
changeSettingsButton.addEventListener('click', () => {
    alert('Redirecting to settings page...');
    window.location.href = '#';
});

// Accept Cookies button click
acceptCookiesButton.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    cookiePopup.style.display = "none";

    enableScrolling();
    window.dispatchEvent(new Event("scroll"));
});


// Check accepted cookies on page load
document.addEventListener('DOMContentLoaded', () => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted === 'true') {
        cookiePopup.style.display = 'none';
        enableScrolling();
    } else {
        cookiePopup.style.display = 'block';
        disableScrolling();
    }
});


