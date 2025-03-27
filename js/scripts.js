
// partner carousel top -----------------

document.addEventListener("DOMContentLoaded", () => {
    const carouselWrapper = document.querySelector(".carousel-wrapper");

    function updateImageList() {
        return document.querySelectorAll(".carousel-wrapper img"); // Get images dynamically
    }

    let images = updateImageList();
    let imageWidth = images[0].getBoundingClientRect().width; // Get accurate width
    let scrollPosition = 0;

    function scrollCarousel() {
        // Ensure images list updates dynamically
        images = updateImageList();
        imageWidth = images[0].getBoundingClientRect().width;

        // Move wrapper left by one image width
        scrollPosition -= imageWidth;
        carouselWrapper.style.transition = "transform 0.3s ease";
        carouselWrapper.style.transform = `translateX(${scrollPosition}px)`;

        setTimeout(() => {
            // Move first image to the end
            let firstImage = carouselWrapper.firstElementChild;
            carouselWrapper.appendChild(firstImage);

            // Instantly reset position without a visual jump
            carouselWrapper.style.transition = "none";
            scrollPosition += imageWidth;
            carouselWrapper.style.transform = `translateX(${scrollPosition}px)`;

            // Re-enable smooth transition for the next move
            setTimeout(() => {
                carouselWrapper.style.transition = "transform 0.3s ease";
            }, 50);
        }, 500); // Wait for animation to finish
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

document.addEventListener("DOMContentLoaded", () => {
    const carouselWrapper = document.querySelector(".carousel-wrapper2");

    function updateImageList() {
        return document.querySelectorAll(".carousel-wrapper2 img"); // Get images dynamically
    }

    let images = updateImageList();
    let imageWidth = images[0].getBoundingClientRect().width; // Get accurate width
    let scrollPosition = 0;

    function scrollCarousel() {
        // Ensure images list updates dynamically
        images = updateImageList();
        imageWidth = images[0].offsetWidth;

        // Move wrapper left by one image width
        scrollPosition -= imageWidth;
        carouselWrapper.style.transition = "transform 0.3s ease";
        carouselWrapper.style.transform = `translateX(${scrollPosition}px)`;

        setTimeout(() => {
            // Move first image to the end
            let firstImage = carouselWrapper.firstElementChild;
            carouselWrapper.style.transition = "none";
            scrollPosition += imageWidth;
            carouselWrapper.style.transform = `translateX(${scrollPosition}px)`;
            carouselWrapper.appendChild(firstImage);

            // Re-enable smooth transition for the next move
            setTimeout(() => {
                carouselWrapper.style.transition = "transform 0.3s ease-in-out";
            }, 50);
        }, 500); // Wait for animation to finish
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


//-----image carousel----------------

$(document).ready(function(){
    $('.slick-carousel').slick({
        autoplay: true,           
        autoplaySpeed: 5000,      // Slide duration in milliseconds
        speed: 300,               // Transition speed
        fade: false,              
        dots: true,               // Pagination dots
        arrows: false,            // navigation arrows
        infinite: true,           // Infinite loop
        pauseOnHover: true,       
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

//------News limits for break points

// function getNewsLimit() {
//     if (window.innerWidth <= 992 && window.innerWidth > 768) {
//         return 2;
//     }
// }

// function fetchNews() {
//     const limit = getNewsLimit();
//     fetch(`db_connect.php?limit=${limit}`)
//     .then(response => response.json())
//     .then(data => {
//         const newsContainer = document.getElementById("news-container");
//         newsContainer.innerHTML = "";
//         data.forEach(post => {
//         newsContainer.innerHTML += `<div class="news-item">
//             <h3>${post.title}</h3>
//             <p>${post.content}</p>
//         </div>`;
//         });
//     });
// }

// // Fetch news on page load
// fetchNews();

// // Re-fetch news when resizing window
// window.addEventListener("resize", fetchNews);
