document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            console.log('Item clicked:', this); // Depuração

            // Toggle active class for the clicked item
            this.classList.toggle('active');

            // Get the next sibling element, which should be the .menu-content div
            const content = this.nextElementSibling;
            console.log('Content element:', content); // Depuração

            // Check if the content is currently displayed
            if (content.style.maxHeight) {
                // If it is, hide it
                content.style.maxHeight = null;
                console.log('Content hidden'); // Depuração
            } else {
                // Otherwise, show it
                content.style.maxHeight = content.scrollHeight + "px";
                console.log('Content shown'); // Depuração
            }
        });
    });
});