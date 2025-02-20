// Sidebar Pop-out & Swipe-to-Close

function toggleNav() {
    var body = document.querySelector(".full-container");
    // var hamburger = document.querySelector(".hamburger");

    var isOpen = body.style.transform === "translateX(-360px)";

    if (!isOpen) {
        openNav();
    } else {
        closeNav();
    }
}

function openNav() {
    var body = document.querySelector(".full-container");
    var screenWidth = window.innerWidth;
    var sidebarWidth = screenWidth < 450 ? 275 : 360;

    body.style.transform = "translateX(-" + sidebarWidth + "px)";
    body.style.transition = "transform 0.3s ease";

    var hamburger = document.querySelector(".hamburger");
    hamburger.classList.add("open");

    // Close the overlay
    var overlay = document.querySelector(".overlay");
    overlay.style.display = "flex";
}

function closeNav() {
    var body = document.querySelector(".full-container");
    body.style.transform = "translateX(0)";

    var hamburger = document.querySelector(".hamburger");
    hamburger.classList.remove("open");

    // Close the overlay
    var overlay = document.querySelector(".overlay");
    overlay.style.display = "none";
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
        toggleNav();
    }
}, false);

