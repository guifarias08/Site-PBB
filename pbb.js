document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");


    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(255, 255, 255, 0.9)";
            navbar.style.backdropFilter = "blur(10px)";
            navbar.style.padding = "10px 8%";
            navbar.style.boxShadow = "0 4px 30px rgba(0,0,0,0.1)";
        } else {
            navbar.style.background = "transparent";
            navbar.style.backdropFilter = "none";
            navbar.style.padding = "20px 8%";
            navbar.style.boxShadow = "none";
        }
    });


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });


    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card').forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease-out";
        observer.observe(el);
    });
});
document.addEventListener("DOMContentLoaded", () => {

    const video = document.querySelector(".video-bg");
    if (video) {
        video.play().catch(() => console.log("Autoplay bloqueado pelo browser"));
    }

   
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });


    document.querySelectorAll('.history-container').forEach(el => observer.observe(el));
});

