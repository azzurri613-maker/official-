document.addEventListener('DOMContentLoaded', () => {
    // Opening Fade
    const intro = document.getElementById('intro');
    if (intro) {
        setTimeout(() => {
            intro.classList.add('fade-out');
        }, 4500); // 4.5 seconds of philosophical silence and message
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
