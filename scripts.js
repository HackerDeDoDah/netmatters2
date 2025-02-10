
// sticky header
document.addEventListener('DOMContentLoaded', function () {
    let lastScrollTop = 0;
    const stickyContainer = document.querySelector('.sticky-container');
    const placeholder = document.createElement('div'); // Placeholder for height
    let isSticky = false;

    if (!stickyContainer) {
        console.error("Element '.sticky-container' not found!");
        return;
    }

    // Set placeholder height equal to sticky container
    placeholder.style.height = `${stickyContainer.offsetHeight}px`;

    function checkSticky() {
        const scrollTop = window.scrollY;
        const headerOffset = stickyContainer.offsetTop; // Position in the document

        if (scrollTop > headerOffset && !isSticky) {
            // Make it sticky when scrolls out of view
            stickyContainer.classList.add('sticky');
            stickyContainer.before(placeholder);
            isSticky = true;
        } else if (scrollTop <= placeholder.offsetTop && isSticky) {
            // Back to normal when scrolled to top
            stickyContainer.classList.remove('sticky', 'show');
            placeholder.remove();
            isSticky = false;
        }

        // Show/hide sticky header on scroll up/down
        if (isSticky) {
            if (scrollTop > lastScrollTop) {
                stickyContainer.classList.remove('show'); // Hide on scroll down
            } else {
                stickyContainer.classList.add('show'); // Show on scroll up
            }
        }

        lastScrollTop = scrollTop;
    }

    window.addEventListener('scroll', function () {
        requestAnimationFrame(checkSticky);
    });
});

// partner carousel top -----------------

document.addEventListener("DOMContentLoaded", () => {
    const carouselWrapper = document.querySelector(".carousel-wrapper");
    const images = document.querySelectorAll(".carousel-wrapper img");
    const totalImages = images.length;
    const imageWidth = images[0].offsetWidth + 15;
    let scrollPosition = 0;

    function scrollCarousel() {
        scrollPosition -= 200;
        if (Math.abs(scrollPosition) >= (totalImages * imageWidth)) {
            const firstImage = images[0];
            carouselWrapper.appendChild(firstImage); // Move the first image to the end
            scrollPosition += imageWidth; // scroll position

            setTimeout(() => {
                carouselWrapper.style.transition = "transform 0.5s ease-in-out";
            }, 50);
        } else {
            carouselWrapper.style.transform = `translateX(${scrollPosition}px)`;
        }
    }

    function startCarousel() {
        interval = setInterval(scrollCarousel, 5000);
    }

    function stopCarousel() {
        clearInterval(interval);
    }

    let interval = setInterval(scrollCarousel, 5000);

    carouselWrapper.addEventListener("mouseover", stopCarousel);
    carouselWrapper.addEventListener("mouseout", startCarousel);
});




// carousel partners bottom ------------------

document.addEventListener("DOMContentLoaded", function () {
    const carouselWrapper2 = document.querySelector(".carousel-wrapper2");
    const items = document.querySelectorAll(".tool-tip");
    const images = document.querySelectorAll(".carousel-wrapper2 img");
    const totalImages = images.length;
    const imageWidth = images[0].offsetWidth + 15;
    let scrollPosition = 0;


    function scrollCarousel() {
        scrollPosition -= 200;
        if (Math.abs(scrollPosition) >= (totalImages * imageWidth)) {
            const firstImage = images[0];
            carouselWrapper2.appendChild(firstImage); // Move the first image to the end
            scrollPosition += imageWidth; // scroll position

            setTimeout(() => {
                carouselWrapper2.style.transition = "transform 0.5s ease-in-out";
            }, 50);
        } else {
            carouselWrapper2.style.transform = `translateX(${scrollPosition}px)`;
        }
    }

    function startCarousel() {
        interval = setInterval(scrollCarousel, 5000);
    }

    function stopCarousel() {
        clearInterval(interval);
    }

    let interval = setInterval(scrollCarousel, 5000);

carouselWrapper2.addEventListener("mouseover", stopCarousel);
carouselWrapper2.addEventListener("mouseout", startCarousel);

});


// cookie popup

const cookiePopup = document.getElementById('cookie-popup');
const changeSettingsButton = document.getElementById('change-settings');
const acceptCookiesButton = document.getElementById('accept-cookies');

// Change Settings button click
changeSettingsButton.addEventListener('click', () => {
    alert('Redirecting to settings page...');
    window.location.href = '#';
});

// Accept Cookies button click
acceptCookiesButton.addEventListener('click', () => {
  // store in localStorage
    localStorage.setItem('cookiesAccepted', 'true');

  // Hide
    cookiePopup.style.display = 'none';
});

// Check accepted
document.addEventListener('DOMContentLoaded', () => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted === 'true') {
    // Hide if cookies accepted
    cookiePopup.style.display = 'none';
    } else {
    // Show if cookies not accepted
    cookiePopup.style.display = 'block';
    }
});



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

// ----event listener for button
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


//-----image carousel----------------

$(document).ready(function(){
    $('.slick-carousel').slick({
        autoplay: true,           // Auto-play enabled
        autoplaySpeed: 5000,      // Slide duration in milliseconds
        speed: 300,               // Transition speed
        fade: false,              // fade effect
        dots: true,               // Pagination dots
        arrows: false,            // navigation arrows
        infinite: true,           // Infinite loop
        pauseOnHover: true,       // pause on hover
        cssEase: 'linear'         // transition effect
        // ,
        // appendDots: $('.dots')
    });
});

$(document).on("afterChange", ".slick-slider", function () {
    $(".slick-dots li").each(function () {
        let button = $(this).find("button");
        if ($(this).hasClass("slick-active")) {
            button.css("background-color", "#fff");
        } else {
            button.css("background-color", "#fff");
        }
    });
});
