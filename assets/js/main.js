document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.about_me_page .left_side');

    // IntersectionObserver setup to detect when sections are in view
    const observer = new  IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add class to trigger animation
            } else {
                entry.target.classList.remove('visible'); // Remove class when out of view
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the section is in view
    });

    // Apply 'hidden' class and observe each section
    sections.forEach(section => {
        section.classList.add('visible');
        observer.observe(section);
    });
});
