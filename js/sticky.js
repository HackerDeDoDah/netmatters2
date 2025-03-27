
// sticky header

// simple version----------------

jQuery(document).ready(function($) {
    var lastScrollTop = 0;
    var $sticky = $('.sticky-container');
    var scrollThreshold = 600;
    var sidebarActive = false;

    $sticky.css({
        'position': 'fixed',
        'top': '0',
        'width': '100%',
        'transition': 'top 0.3s ease',
        'z-index': '1000'
    });

    function handleScroll() {
        if (sidebarActive) return; // Prevent changes when sidebar is open

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

    $(window).on('scroll', handleScroll);

    // Sidebar event listeners
    document.addEventListener("sidebarOpen", function() {
        sidebarActive = true;
        $sticky.css('top', '0'); // Ensure it's visible when sidebar opens
    });

    document.addEventListener("sidebarClose", function() {
        sidebarActive = false;
        setTimeout(() => {
            handleScroll(); // Recalculate header position
        }, 50);
    });
});
