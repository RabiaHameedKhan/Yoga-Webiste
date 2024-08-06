document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded fired");

    const animatedElements = document.querySelectorAll('.leaf-img, .practice-box-1 h1, .hero-box-2, .text-overlay p, .welcome-text, .contact-us, .text-overlay h1, .text-overlay button, .form');
    
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(`Element ${entry.target.className} is in view`);
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
                observer.unobserve(entry.target);
            }
        });
    };
    
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1
    });
    
    animatedElements.forEach(element => {
        element.classList.add('hidden');
        observer.observe(element);
    });
});
