// Sidebar Pop-out & Swipe-to-Close

function toggleNav() {
    var body = document.querySelector(".full-container");

    var isOpen = body.style.transform === "translateX(-360px)";

    if (!isOpen) {
        openNav();
    } else {
        closeNav();
    }
}

function openNav() {
    var body = document.querySelector(".full-container");
    var overlay = document.querySelector(".overlay");
    var screenWidth = window.innerWidth;
    var sidebarWidth = screenWidth < 450 ? 275 : 360;

    body.style.transform = `translateX(-${sidebarWidth}px)`;
    body.style.transition = "transform 0.3s ease";
    overlay.style.display = "flex";

    document.dispatchEvent(new Event("sidebarOpen")); // Notify sticky.js
    isSidebarOpen = true; // Update sidebar state

}

function closeNav() {
    var body = document.querySelector(".full-container");
    var overlay = document.querySelector(".overlay");

    body.style.transform = "translateX(0)";
    overlay.style.display = "none";

    document.dispatchEvent(new Event("sidebarClose")); // Notify sticky.js
    isSidebarOpen = false; // Update sidebar state

}


// event listener for button
document.querySelector(".burger-container").addEventListener('click', toggleNav);

document.querySelector(".overlay").addEventListener('click', function() {
    closeNav();
});


// Swipe-to-close on Mobile
let startX = 0;
let sidebar = document.getElementById("mySidebar");

sidebar.addEventListener("touchstart", function (event) {
    startX = event.touches[0].clientX;
}, false);

sidebar.addEventListener("touchmove", function (event) {
    let moveX = event.touches[0].clientX;
    let diffX = moveX - startX;

    if (diffX < 50) { // If swiping right
        closeNav();
    }
}, false);
