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
        carouselWrapper.style.transition = "transform 1s cubic-bezier(0.4, 0, 0.2, 1)";
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
                carouselWrapper.style.transition = "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
            }, 50);
        }, 800); // Increased wait time to match new transition duration
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
        carouselWrapper.style.transition = "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
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
                carouselWrapper.style.transition = "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
            }, 50);
        }, 800); // Increased wait time to match new transition duration
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
        fade: false,              //fade set to false (duh)
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

// Function to update articles via AJAX
function updateArticles(screenWidth) {
    const formData = new FormData();
    formData.append('screenWidth', screenWidth);

    fetch('get_articles.php', {
        method: 'POST',
        body: formData,
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
    })
    .then(html => {
        const container = document.querySelector('.grid-container-articles');
        if (container) {
            container.innerHTML = html;
        } else {
            console.error('Could not find articles container');
        }
    })
    .catch(error => {
        console.error('Error fetching articles:', error);
        // You might want to show a user-friendly error message here
    });
}

// Set screen width cookie and update articles
function setScreenWidthCookie() {
    const screenWidth = window.innerWidth;
    document.cookie = `screenWidth=${screenWidth}; path=/`;
    
    // Update articles based on screen width
    updateArticles(screenWidth);
}

// Debounce function to limit how often the resize handler is called
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Set initial screen width cookie and load articles
document.addEventListener('DOMContentLoaded', function() {
    setScreenWidthCookie();
});

// Update screen width cookie and articles on window resize (debounced)
window.addEventListener('resize', debounce(function() {
    setScreenWidthCookie();
}, 250));
