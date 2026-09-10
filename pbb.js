document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    const video = document.querySelector('.video-bg');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    body.classList.add('motion-ready');

    const setMenuState = (isOpen) => {
        if (!navLinks || !hamburger) return;

        navLinks.classList.toggle('active', isOpen);
        hamburger.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
        hamburger.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
        body.classList.toggle('menu-open', isOpen);
    };

    hamburger?.addEventListener('click', () => {
        setMenuState(!navLinks.classList.contains('active'));
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') setMenuState(false);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 860) setMenuState(false);
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            const targetId = anchor.getAttribute('href');
            const target = targetId ? document.querySelector(targetId) : null;

            if (!target) return;

            event.preventDefault();
            setMenuState(false);
            target.scrollIntoView({
                behavior: prefersReducedMotion ? 'auto' : 'smooth',
                block: 'start'
            });
        });
    });

    let scrollFrame;
    const updateNavbar = () => {
        navbar?.classList.toggle('is-scrolled', window.scrollY > 40);
        scrollFrame = null;
    };

    window.addEventListener('scroll', () => {
        if (scrollFrame) return;
        scrollFrame = window.requestAnimationFrame(updateNavbar);
    }, { passive: true });

    updateNavbar();

    const revealItems = document.querySelectorAll('.reveal');

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        revealItems.forEach((item) => item.classList.add('is-visible'));
    } else {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            });
        }, {
            rootMargin: '0px 0px -8% 0px',
            threshold: 0.12
        });

        revealItems.forEach((item, index) => {
            item.style.transitionDelay = `${Math.min(index % 3, 2) * 70}ms`;
            revealObserver.observe(item);
        });
    }

    if (video && 'IntersectionObserver' in window) {
        const videoObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                video.play().catch(() => {});
            } else {
                video.pause();
            }
        }, { threshold: 0.08 });

        videoObserver.observe(video);
    }
});
