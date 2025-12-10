// simple observer for fading in elements
document.addEventListener('DOMContentLoaded', () => {

    let obs = new IntersectionObserver(list => {
        list.forEach(item => {
            if (item.isIntersecting) {
                // adding animation style directly cause why not
                item.target.style.animation = 'fadeIn 0.6s ease forwards';
                obs.unobserve(item.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }); // threshold 0.1 seemed to work best

    // target all the blocks
    let targets = document.querySelectorAll('.topic-block, .tip-card');

    targets.forEach(el => {
        el.style.opacity = '0'; // hide first
        obs.observe(el);
    });
});

// injecting styles from js.. hacky but works
const s = document.createElement('style');
s.textContent = `@keyframes fadeIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}`;
document.head.appendChild(s);