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
            const elementVisible = 120; // Trigger when element is 120px from bottom

            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    // Initial check
    revealOnScroll();

    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);
});
