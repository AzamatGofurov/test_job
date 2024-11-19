// Select burger menu and nav-links
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

// Toggle menu visibility on click
burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Show/hide menu
    burgerMenu.classList.toggle('open'); // Animate burger icon
});

// Ensure menu visibility on larger screens
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active'); // Reset menu for larger screens
        burgerMenu.classList.remove('open');
    }
});
