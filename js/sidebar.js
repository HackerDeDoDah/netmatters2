// Sidebar Pop-out & Swipe-to-Close
let isSidebarOpen = false; // Track sidebar state

function toggleNav() {
    var body = document.querySelector(".full-container");
    var burger = document.querySelector(".hamburger");
    var overlay = document.querySelector(".overlay");
    var isOpen = isSidebarOpen;

    if (!isOpen) {
        openNav();
        burger.classList.add("open");
    } else {
        closeNav();
        burger.classList.remove("open");
    }
}

function openNav() {
    var body = document.querySelector(".full-container");
    var overlay = document.querySelector(".overlay");
    var screenWidth = window.innerWidth;
    var sidebarWidth = screenWidth < 990 ? 275 : 360;

    body.style.transform = `translateX(-${sidebarWidth}px)`;
    body.style.transition = "transform 0.3s ease";
    overlay.style.display = "flex";

    isSidebarOpen = true;
    document.dispatchEvent(new Event("sidebarOpen")); // Notify sticky.js
}

function closeNav() {
    var body = document.querySelector(".full-container");
    var overlay = document.querySelector(".overlay");
    var burger = document.querySelector(".hamburger");

    body.style.transform = "translateX(0)";
    overlay.style.display = "none";
    burger.classList.remove("open");

    isSidebarOpen = false;
    document.dispatchEvent(new Event("sidebarClose")); // Notify sticky.js

    // Force sticky header to update after sidebar closes
    setTimeout(() => {
        window.dispatchEvent(new Event("scroll"));
    }, 50);
}

// Event listeners
document.querySelector(".burger-container").addEventListener('click', toggleNav);
document.querySelector(".overlay").addEventListener('click', closeNav);

// Swipe-to-close
let startX = 0;
let sidebar = document.getElementById("mySidebar");

sidebar.addEventListener("touchstart", function (event) {
    startX = event.touches[0].clientX;
}, false);

sidebar.addEventListener("touchmove", function (event) {
    let moveX = event.touches[0].clientX;
    let diffX = moveX - startX;

    if (diffX < 40) {
        closeNav();
    }
}, false);
