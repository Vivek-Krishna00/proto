

document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const subtopics = document.querySelectorAll('.subtopic');
    subtopics.forEach(function(element) {
        element.style.opacity = '0';
        observer.observe(element);
    });

    const tipCards = document.querySelectorAll('.tip-card');
    tipCards.forEach(function(element) {
        element.style.opacity = '0';
        observer.observe(element);
    });
});

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }`;
document.head.appendChild(style);

const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const backBtn = document.querySelector('.back-btn');
if (backBtn) {
    backBtn.addEventListener('mouseenter', function() {
        this.style.color = 'var(--primary)';
    });
    
    backBtn.addEventListener('mouseleave', function() {
        this.style.color = 'var(--accent)';
    });
}

