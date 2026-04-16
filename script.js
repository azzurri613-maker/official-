document.addEventListener('DOMContentLoaded', () => {
    // Opening Fade
    const intro = document.getElementById('intro');
    if (intro) {
        setTimeout(() => {
            intro.classList.add('fade-out');
        }, 2000); // Shortened to 2 seconds for better responsiveness
    }

    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        reveals.forEach(reveal => {
            const windowHeight = window.innerHeight;
            const elementTop = reveal.getBoundingClientRect().top;
            const elementVisible = 80; // Trigger slightly earlier

            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    // Trigger reveal check after initial load and on scroll
    window.addEventListener('scroll', revealOnScroll);
    
    // Check after fonts and images are fully loaded
    window.addEventListener('load', () => {
        setTimeout(revealOnScroll, 100);
    });

    // Initial check (in case some are already in view)
    setTimeout(revealOnScroll, 500);
});
