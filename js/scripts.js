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

// Tooltip functionality
document.addEventListener('DOMContentLoaded', function() {
    const tooltips = document.querySelectorAll('.tool-tip');
    
    tooltips.forEach(tooltip => {
        const tooltipText = tooltip.querySelector('.tool-tip-text');
        
        tooltip.addEventListener('mouseenter', function(e) {
            const rect = tooltip.getBoundingClientRect();
            const tooltipRect = tooltipText.getBoundingClientRect();
            
            // Position the tooltip above the element
            tooltipText.style.top = 'auto';
            tooltipText.style.bottom = '100%';
            tooltipText.style.left = '50%';
            tooltipText.style.transform = 'translateX(-50%)';
            
            // Check if tooltip would go off screen
            if (tooltipRect.top < 0) {
                // Position below if it would go off top
                tooltipText.style.top = '100%';
                tooltipText.style.bottom = 'auto';
                tooltipText.style.marginTop = '8px';
                tooltipText.style.marginBottom = '0';
                
                // Adjust arrow position
                tooltipText.querySelector('::before').style.top = '0';
                tooltipText.querySelector('::before').style.bottom = 'auto';
                tooltipText.querySelector('::before').style.borderTopColor = 'transparent';
                tooltipText.querySelector('::before').style.borderBottomColor = '#fff';
            }
            
            // Show tooltip
            tooltipText.style.opacity = '1';
            tooltipText.style.visibility = 'visible';
        });
        
        tooltip.addEventListener('mouseleave', function() {
            tooltipText.style.opacity = '0';
            tooltipText.style.visibility = 'hidden';
        });
    });
});

