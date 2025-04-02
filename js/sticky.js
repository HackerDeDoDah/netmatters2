// sticky header

// simple version----------------

jQuery(document).ready(function($) {
    var $sticky = $('.sticky-container');
    var sidebarActive = false;
    var lastScrollTop = 0;
    var scrollThreshold = 600;

    function handleScroll() {
        if (sidebarActive) {
            $sticky.css('top', '0');
            return;
        }

        var scrollTop = $(window).scrollTop();
        
        if (scrollTop === 0) {
            $sticky.css('top', '0');
        } else if (scrollTop > scrollThreshold) {
            if (scrollTop < lastScrollTop) {
                $sticky.css('top', '0');
            } else {
                $sticky.css('top', '-190px');
            }
        }
        lastScrollTop = scrollTop;
    }

    // Initialize sticky header
    $sticky.css({
        'position': 'fixed',
        'top': '0',
        'width': '100%',
        'transition': 'top 0.3s ease',
        'z-index': '1000'
    });

    // Use requestAnimationFrame for smoother scroll handling
    let ticking = false;
    $(window).on('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Sidebar event listeners
    document.addEventListener("sidebarOpen", function() {
        sidebarActive = true;
        $sticky.css('top', '0');
    });

    document.addEventListener("sidebarClose", function() {
        sidebarActive = false;
        handleScroll();
    });

    // Re-initialize on window resize
    $(window).on('resize', function() {
        handleScroll();
    });
});
