

let prevScrollpos = window.scrollY; 
const sticky = document.getElementById("sticky-container");

window.onscroll = function () {
    const currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        sticky.style.top = "0";
    } else {
        sticky.style.top = `-${sticky.offsetHeight}px`;
    }
    prevScrollpos = currentScrollPos;
};



// sidebar popout

function openNav() {
    document.getElementById("mySidebar").style.width = "360px";
    document.getElementsByClassName("full-container").style.marginRight = "360px";
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementsByClassName("full-container").style.marginRight= "0";
}


// partner carousel top -----------------

document.addEventListener("DOMContentLoaded", function () {
    const carouselWrapper = document.querySelector(".carousel-wrapper");
    const images = document.querySelectorAll(".carousel-wrapper img");
    const totalImages = images.length;
    const imageWidth = images[0].offsetWidth + 15;
    let scrollPosition = 0;

    function scrollCarousel() {
        scrollPosition -= 300;
        if (Math.abs(scrollPosition) >= (totalImages / 2) * imageWidth) {
            carouselWrapper.style.transition = "none";
            scrollPosition = 1200;
            carouselWrapper.style.transform = `translateX(${scrollPosition}px)`;

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
    let interval;

    function scrollCarousel() {
        scrollPosition -= 300;
        if (Math.abs(scrollPosition) >= (totalImages / 2) * imageWidth) {
            carouselWrapper2.style.transition = "none";
            scrollPosition = 1200;
            carouselWrapper2.style.transform = `translateX(${scrollPosition}px)`;

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

    items.forEach(item => {
        item.addEventListener("mouseover", stopCarousel);
        item.addEventListener("mouseout", startCarousel);
    });

    startCarousel();
});


// cookie popup

window.addEventListener('DOMContentLoaded', () => {
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    const cookiePopup = document.getElementById('cookie-popup');

    if (!cookieAccepted) {
        cookiePopup.style.display = 'block';
    }

    document.getElementById('accept-cookies').addEventListener('click', () => {
        localStorage.setItem('cookieAccepted', 'true');
        cookiePopup.style.display = 'none';
    });
});