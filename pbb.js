document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.logo');
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    const videoBg = document.querySelector('.video-bg');

  
    let ticking = false;
    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 14, 20, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.padding = '15px 8%';
            navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.3)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.backdropFilter = 'none';
            navbar.style.padding = '25px 8%';
            navbar.style.boxShadow = 'none';
        }
    }
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
            setTimeout(() => { ticking = false; }, 16);
        }
    });


    document.querySelectorAll('a[href^=\"#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
         
            if (navLinks.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });


    function toggleMobileMenu() {
        navLinks.classList.toggle('active');
        if (hamburger) hamburger.classList.toggle('active');
    }
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }


    if (videoBg) {
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    videoBg.play().catch(e => console.log('Autoplay prevented:', e));
                    videoObserver.unobserve(videoBg);
                }
            });
        }, { threshold: 0.5 });
        videoObserver.observe(videoBg);
    }

   
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);


    document.querySelectorAll('.card, .history-container .history-text, .image-frame').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        observer.observe(el);
    });
});

