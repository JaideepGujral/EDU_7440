document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Splash Page Logic
    var splashScreen = document.getElementById('splash-screen');
    var enterButton = document.getElementById('enter-portfolio');
    var body = document.body;

    if (splashScreen) {
        enterButton.addEventListener('click', function() {
            splashScreen.classList.remove('active'); 
            splashScreen.style.pointerEvents = 'none'; 
            
            setTimeout(function() {
                body.classList.remove('no-scroll'); 
                window.location.href = "about.html"; 
            }, 800); 
        });
    }

    // 2. Mobile Menu Toggle
    var mobileMenu = document.getElementById('mobile-menu');
    var navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // 3. Scroll Reveal Animation
    var reveals = document.querySelectorAll(".reveal");
    
    if(reveals.length > 0) {
        var revealObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target); 
                }
            });
        }, { 
            threshold: 0.1, 
            rootMargin: "0px 0px -30px 0px" 
        });

        reveals.forEach(function(reveal) {
            revealObserver.observe(reveal);
        });
    }
});