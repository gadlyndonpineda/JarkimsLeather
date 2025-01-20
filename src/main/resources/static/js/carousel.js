document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('#newCarousel .carousel-item');
    let currentIndex = 0;

    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.remove('active', 'left', 'right'); // Remove any old active, left, right classes
            item.style.transition = 'transform 0.6s ease, opacity 0.6s ease'; // Smooth transition

            if (index === currentIndex) {
                // Main image
                item.classList.add('active');
                item.style.zIndex = '3';
                item.style.transform = 'scale(1) translateX(0)'; // Center
            } else if (index === (currentIndex - 1 + items.length) % items.length) {
                // Left image
                item.classList.add('left');
                item.style.zIndex = '2';
                item.style.transform = 'scale(0.8) translateX(-50%)'; // Move left
            } else if (index === (currentIndex + 1) % items.length) {
                // Right image
                item.classList.add('right');
                item.style.zIndex = '2';
                item.style.transform = 'scale(0.8) translateX(50%)'; // Move right
            }
        });
    }

    // Event listeners for navigation buttons
    document.querySelector('#newCarousel .carousel-control-next').addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    document.querySelector('#newCarousel .carousel-control-prev').addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    // Initialize carousel
    updateCarousel();
});
