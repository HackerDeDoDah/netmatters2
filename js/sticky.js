
// sticky header




// window.addEventListener("scroll", function() {
//     //console.log(window.scrollY);
//     let navbar = document.getElementById("header");
//     if(window.scrollY>=300) {
//         navbar.classList.add("fixed-header")
//     }
//     else{
//         navbar.classList.remove("fixed-header")
//     }
// })




// document.addEventListener('DOMContentLoaded', function () {
//     let lastScrollTop = 0;
//     const stickyContainer = document.querySelector('.sticky-container');
//     const placeholder = document.createElement('div'); // Placeholder for height
//     let isSticky = false;
//     let isSidebarOpen = false; // Track sidebar state

//     if (!stickyContainer) {
//         console.error("Element '.sticky-container' not found!");
//         return;
//     }

//     // Set placeholder height equal to sticky container
//     placeholder.style.height = `${stickyContainer.offsetHeight}px`;

//     function checkSticky() {
//         const scrollTop = window.scrollY;
//         const headerOffset = stickyContainer.offsetTop;
    
//         if (scrollTop > headerOffset && !isSticky) {
//             stickyContainer.classList.add('sticky');
//             stickyContainer.before(placeholder);
//             isSticky = true;
//         } else if (scrollTop <= 0 && isSticky) {
//             stickyContainer.classList.remove('sticky', 'show');
//             if (placeholder.parentNode) placeholder.remove();
//             isSticky = false;
//         }
    
//     // Show/hide sticky header only when sidebar is closed and sidebar is not open

//         if (!isSidebarOpen && isSticky) {
//         if (scrollTop > lastScrollTop && !isSidebarOpen) {

//                 stickyContainer.classList.remove('show'); // Hide on scroll down
//             } else {
//                 stickyContainer.classList.add('show'); // Show on scroll up
//             }
//         }
    
//         lastScrollTop = scrollTop;
//     }
    

//     // Sidebar functions (Detects sidebar open/closed)
//     function openNav() {
//         const fullContainer = document.querySelector('.full-container');
//         const overlay = document.querySelector('.overlay');
//         if (fullContainer && overlay) {
//             fullContainer.style.transform = "translateX(-360px)";
//             overlay.style.display = "flex";
//             isSidebarOpen = true; // Sidebar is open
//         }
//     }

//     function closeNav() {
//         const fullContainer = document.querySelector('.full-container');
//         const overlay = document.querySelector('.overlay');
//         if (fullContainer && overlay) {
//             fullContainer.style.transform = "translateX(0)";
//             overlay.style.display = "none";
//             isSidebarOpen = false; // Sidebar is closed
//         }
//     }

//     // Event listener for scroll, but only when sidebar is closed
//     window.addEventListener('scroll', function () {
//         requestAnimationFrame(checkSticky);
//     });

//     // Sidebar event listeners
//     const burger = document.querySelector('.burger-container');
//     const overlay = document.querySelector('.overlay');

//     if (burger) {
//         burger.addEventListener('click', function () {
//             isSidebarOpen ? closeNav() : openNav();
//         });
//     }

//     if (overlay) {
//         overlay.addEventListener('click', closeNav);
//     }
// });


// // Detect when sidebar is opened or closed
// document.addEventListener("sidebarOpen", () => {
//     isSidebarOpen = true;
// });

// document.addEventListener("sidebarClose", () => {
//     isSidebarOpen = false;
// });
//------------------------------------------------------------------------------------------------------------------------------------


document.addEventListener('DOMContentLoaded', function () {
    let lastScrollTop = 0;
    const stickyContainer = document.querySelector('.sticky-container');
    if (!stickyContainer) {
        console.error("Sticky container not found!");
        return;
    }

    const placeholder = document.createElement('div');
    placeholder.style.height = `${stickyContainer.offsetHeight}px`;

    let isSticky = false;
    let isSidebarOpen = false; // Track sidebar state

    function checkSticky() {
        if (isSidebarOpen) return; // Skip if sidebar is open

        const scrollTop = window.scrollY;
        const headerOffset = stickyContainer.offsetTop;

        if (scrollTop > headerOffset && !isSticky) {
            stickyContainer.classList.add('sticky');
            stickyContainer.before(placeholder);
            isSticky = true;
        } else if (scrollTop <= placeholder.offsetTop && isSticky) {
            stickyContainer.classList.remove('sticky', 'show');
            placeholder.remove();
            isSticky = false;
        }

        // Show/hide sticky header on scroll
        if (isSticky) {
            if (scrollTop > lastScrollTop) {
                stickyContainer.classList.remove('show'); // Hide on scroll down
            } else {
                stickyContainer.classList.add('show'); // Show on scroll up
            }
        }

        lastScrollTop = scrollTop;
    }

    // Detect scrolling
    window.addEventListener('scroll', function () {
        requestAnimationFrame(checkSticky);
    });

    // Sidebar event listeners
    document.querySelector('.burger-container')?.addEventListener('click', function () {
        if (isSidebarOpen) {
            closeNav();
        } else {
            openNav();
        }
    });

    document.querySelector('.overlay')?.addEventListener('click', closeNav);
});
