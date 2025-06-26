document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    // Always select nav links by class (as in all pages except skills.html)
    let navLinks = document.querySelector('.nav-links');
    // Fallback for skills.html (id="nav-links")
    if (!navLinks) navLinks = document.getElementById('nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        // Close nav on link click (for mobile UX)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
});