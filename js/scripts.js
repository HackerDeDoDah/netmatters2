
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
