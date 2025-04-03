document.addEventListener('DOMContentLoaded', function() {
    // Get all dropdown triggers
    const dropdownTriggers = document.querySelectorAll('.menu-item');
    
    // Add keyboard navigation
    dropdownTriggers.forEach(trigger => {
        // Add ARIA attributes
        trigger.setAttribute('aria-haspopup', 'true');
        trigger.setAttribute('aria-expanded', 'false');
        
        // Handle keyboard events
        trigger.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleDropdown(this);
            }
        });
        
        // Handle click events
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            toggleDropdown(this);
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.menu-item')) {
            closeAllDropdowns();
        }
    });
    
    // Function to toggle dropdown
    function toggleDropdown(trigger) {
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        const dropdownContent = trigger.nextElementSibling;
        
        // Close all other dropdowns
        closeAllDropdowns();
        
        if (!isExpanded) {
            // Open this dropdown
            trigger.setAttribute('aria-expanded', 'true');
            dropdownContent.style.display = 'flex';
            dropdownContent.classList.add('active');
        }
    }
    
    // Function to close all dropdowns
    function closeAllDropdowns() {
        dropdownTriggers.forEach(trigger => {
            trigger.setAttribute('aria-expanded', 'false');
            const dropdownContent = trigger.nextElementSibling;
            dropdownContent.style.display = 'none';
            dropdownContent.classList.remove('active');
        });
    }
}); 