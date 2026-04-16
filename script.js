const initAnimation = () => {
    // Opening Fade
    const intro = document.getElementById('intro');
    if (intro) {
        setTimeout(() => {
            intro.classList.add('fade-out');
        }, 800); //snappy intro
    }

    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            const elementVisible = 50; // Trigger very early to be safe

            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    // Initial checks
    revealOnScroll();
    setTimeout(revealOnScroll, 100);
    setTimeout(revealOnScroll, 500);
    setTimeout(revealOnScroll, 1000);
    setTimeout(revealOnScroll, 2000);

    // Continuous checks
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('resize', revealOnScroll);
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimation);
} else {
    initAnimation();
}
