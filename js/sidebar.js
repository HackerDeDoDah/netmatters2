// Sidebar Pop-out & Swipe-to-Close

function toggleNav() {
    var body = document.querySelector(".full-container");
    var burger = document.querySelector(".hamburger"); // Select hamburger element

    var isOpen = body.style.transform === "translateX(-360px)";

    if (!isOpen) {
        openNav();
        burger.classList.add("open"); // Add open class
    } else {
        closeNav();
        burger.classList.remove("open"); // Remove open class
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

    document.dispatchEvent(new Event("sidebarOpen")); // tell sticky.js
    isSidebarOpen = true; // Update state
}

function closeNav() {
    var body = document.querySelector(".full-container");
    var overlay = document.querySelector(".overlay");
    var burger = document.querySelector(".hamburger"); 

    body.style.transform = "translateX(0)";
    overlay.style.display = "none";

    burger.classList.remove("open"); // hamburger reset

    document.dispatchEvent(new Event("sidebarClose")); // Notify
    isSidebarOpen = false;
}


// event listener for button
document.querySelector(".burger-container").addEventListener('click', toggleNav);

document.querySelector(".overlay").addEventListener('click', function() {
    closeNav();
});


// Swipe-to-close
let startX = 0;
let sidebar = document.getElementById("mySidebar");

sidebar.addEventListener("touchstart", function (event) {
    startX = event.touches[0].clientX;
}, false);

sidebar.addEventListener("touchmove", function (event) {
    let moveX = event.touches[0].clientX;
    let diffX = moveX - startX;

    if (diffX < 40) { // If swiping right
        closeNav();
    }
}, false);
