document.querySelectorAll('nav  a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});


// Select all the buttons with class "btn"
const buttons = document.querySelectorAll('.btn');

// Loop through each button
buttons.forEach((button) => {
    // Add a click event listener to each button
    button.addEventListener('click', () => {
        // Get the corresponding image
        const image = button.nextElementSibling;

        // Select the full-screen container and image
        const fullscreenContainer = document.getElementById('fullscreenImageContainer');
        const fullscreenImage = document.querySelector('.fullscreen-image');

        // Set the full-screen image source to the clicked image's source
        fullscreenImage.src = image.src;

        // Show the full-screen container
        fullscreenContainer.style.display = 'flex';
    });
});

// Select the close button
const closeBtn = document.querySelector('.close');

// Add a click event listener to the close button
closeBtn.addEventListener('click', () => {
    // Select the full-screen container
    const fullscreenContainer = document.getElementById('fullscreenImageContainer');

    // Hide the full-screen container
    fullscreenContainer.style.display = 'none';
});


// mobile menu
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menuIcon');
    const mobileMenu = document.getElementById('mobileMenu');

    menuIcon.addEventListener('click', () => {
        // Toggle the visibility of the mobile menu
        if (mobileMenu.style.display === 'flex') {
            mobileMenu.style.display = 'none';
        } else {
            mobileMenu.style.display = 'flex';
        }
    });
});
