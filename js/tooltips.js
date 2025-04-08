document.addEventListener('DOMContentLoaded', function() {
    const tooltips = document.querySelectorAll('.tool-tip');

    tooltips.forEach(tooltip => {
        const tooltipText = tooltip.querySelector('.tool-tip-text');
        
        tooltip.addEventListener('mouseenter', (e) => {
            const rect = tooltip.getBoundingClientRect();
            const tooltipRect = tooltipText.getBoundingClientRect();
            
            // Calculate position
            let top = rect.top - tooltipRect.height - 10; // 10px gap
            let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
            
            // Check if tooltip would go off the top of the screen
            if (top < 0) {
                top = rect.bottom + 10; // Show below instead
            }
            
            // Check if tooltip would go off the left of the screen
            if (left < 0) {
                left = 0;
            }
            
            // Check if tooltip would go off the right of the screen
            if (left + tooltipRect.width > window.innerWidth) {
                left = window.innerWidth - tooltipRect.width;
            }
            
            // Apply the calculated position
            // tooltipText.style.bottom = `${top}px`;
            // tooltipText.style.left = `${left}px`;
            
            // Update arrow position
            const arrow = tooltipText.querySelector('::before');
            if (arrow) {
                if (top > rect.top) {
                    // Tooltip is below
                    arrow.style.top = '-6px';
                    arrow.style.bottom = 'auto';
                } else {
                    // Tooltip is above
                    arrow.style.top = 'auto';
                    arrow.style.bottom = '-40px';
                }
            }
        });
    });
}); 