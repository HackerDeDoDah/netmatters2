
// sticky header
// let previousScrollPosition = window.scrollY;
// const sticky = document.getElementById("sticky-container");

// window.addEventListener('scroll', () => {
//     const currentScrollPos = window.scrollY;
//     if (previousScrollPosition > currentScrollPos) {
//         sticky.style.top = "0";
//     } else {
//         sticky.style.top = `-${sticky.offsetHeight}px`;
//     }
//     previousScrollPosition = currentScrollPos;
// });

let lastScrollTop = 0;
const stickyContainer = document.querySelector('.sticky-container');
let didScroll = false;

window.addEventListener('scroll', function() {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    const scrollTop = window.scrollY;

  // Make sure they scroll more than 5px
    if (Math.abs(lastScrollTop - scrollTop) <= 5) {
        return;
    }

  // If scrolling down and past the header, keep the sticky container hidden
    if (scrollTop > lastScrollTop) {
        stickyContainer.classList.remove('show');
    } else {
    // If scrolling up, show the sticky container
        stickyContainer.classList.add('show');
    }

    lastScrollTop = scrollTop;
}


// sidebar pop out

function openNav() {
    document.getElementById("mySidebar").style.width = "360px";
    document.querySelector(".main").style.marginRight = "360px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.querySelector(".main").style.marginRight = "0";
}

// partner carousel top -----------------

document.addEventListener("DOMContentLoaded", () => {
    const carouselWrapper = document.querySelector(".carousel-wrapper");
    const images = document.querySelectorAll(".carousel-wrapper img");
    const totalImages = images.length;
    const imageWidth = images[0].offsetWidth + 15;
    let scrollPosition = 0;

    function scrollCarousel() {
        scrollPosition -= 300;
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

    let interval = setInterval(scrollCarousel, 3000);

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
        scrollPosition -= 300;
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

    let interval = setInterval(scrollCarousel, 3000);

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
