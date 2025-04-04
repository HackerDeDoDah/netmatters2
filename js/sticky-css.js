document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const scrollThreshold = 200;
    let hasPassedThreshold = false;
    
    // Function to update scroll state
    function updateScrollState() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        
        // Determine scroll direction
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            document.documentElement.setAttribute('data-scroll', 'down');
            
            // apply fixed positioning when scrolling down past threshold
            if (scrollTop > scrollThreshold) {
                hasPassedThreshold = true;
                document.documentElement.setAttribute('data-scroll-past', 'true');
                document.documentElement.setAttribute('data-can-hide', 'true');
            } else {
                document.documentElement.removeAttribute('data-scroll-past');
                document.documentElement.removeAttribute('data-can-hide');
            }
        } else {
            // Scrolling up
            document.documentElement.setAttribute('data-scroll', 'up');
            
            // Keep fixed positioning when scrolling up
            if (scrollTop > 0) {
                document.documentElement.setAttribute('data-scroll-past', 'true');
                
                // Only show the header when scrolling up if we've passed the threshold
                if (hasPassedThreshold) {
                    document.documentElement.setAttribute('data-show-on-scroll-up', 'true');
                } else {
                    document.documentElement.removeAttribute('data-show-on-scroll-up');
                }
            } else {
                document.documentElement.removeAttribute('data-scroll-past');
                document.documentElement.removeAttribute('data-show-on-scroll-up');
                hasPassedThreshold = false;
            }
        }
        
        // Set initial scroll position
        if (scrollTop === 0) {
            document.documentElement.setAttribute('data-scroll', '-200px');
            document.documentElement.removeAttribute('data-scroll-past');
            document.documentElement.removeAttribute('data-can-hide');
            document.documentElement.removeAttribute('data-show-on-scroll-up');
            hasPassedThreshold = false;
        }
        
        lastScrollTop = scrollTop;
    }
    
    // Update on scroll with requestAnimationFrame for performance
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateScrollState();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Handle sidebar events
    document.addEventListener('sidebarOpen', function() {
        document.documentElement.setAttribute('data-sidebar', 'open');
    });
    
    document.addEventListener('sidebarClose', function() {
        document.documentElement.removeAttribute('data-sidebar');
        updateScrollState();
    });
    
    // Initial call
    updateScrollState();
}); 