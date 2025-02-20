
// sticky header


document.addEventListener('DOMContentLoaded', function () {
    let lastScrollTop = 0;
    const stickyContainer = document.querySelector('header sticky-container');
    const placeholder = document.createElement('div'); // Placeholder for height
    let isSticky = false;
    let isSidebarOpen = false; // Track sidebar state

    if (!stickyContainer) {
        console.error("Element 'header sticky-container' not found!");
        return;
    }

    // Set placeholder height equal to sticky container
    placeholder.style.height = `${stickyContainer.offsetHeight}px`;

    function checkSticky() {
        if (isSidebarOpen) return; // Skip if sidebar is open

        const scrollTop = window.scrollY;
        const headerOffset = stickyContainer.offsetTop; // Position in the document

        if (scrollTop > headerOffset && !isSticky) {
            // Make it sticky when scrolling past
            stickyContainer.classList.add('sticky');
            stickyContainer.before(placeholder);
            isSticky = true;
        } else if (scrollTop <= placeholder.offsetTop && isSticky) {
            // Remove sticky when scrolled back to top
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

    // Sidebar functions (Detects if sidebar is open/closed)
    function openNav() {
        document.querySelector('.full-container').style.transform = "translateX(-360px)";
        document.querySelector('.overlay').style.display = "flex";
        isSidebarOpen = true; // Sidebar is open
    }

    function closeNav() {
        document.querySelector('.full-container').style.transform = "translateX(0)";
        document.querySelector('.overlay').style.display = "none";
        isSidebarOpen = false; // Sidebar is closed
    }

    // Attach event listener for scroll, but only when sidebar is closed
    window.addEventListener('scroll', function () {
        requestAnimationFrame(checkSticky);
    });

    // Sidebar event listeners
    document.querySelector('.burger-container').addEventListener('click', function () {
        if (isSidebarOpen) {
            closeNav();
        } else {
            openNav();
        }
    });

    document.querySelector('.overlay').addEventListener('click', closeNav);
});
