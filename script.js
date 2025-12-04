
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('nav-links');
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        })
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        const testimonialSlider = document.getElementById('testimonial-slider');
        const dots = document.querySelectorAll('.slider-dot');
        let currentSlide = 0;
        function showSlide(index) {
            testimonialSlider.style.transform = `translateX(-${index * 100}%)`;
            
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
            
            currentSlide = index;
        }
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                const slideIndex = parseInt(this.getAttribute('data-index'));
                showSlide(slideIndex);
            });
        });
        setInterval(() => {
            let nextSlide = (currentSlide + 1) % dots.length;
            showSlide(nextSlide);
        }, 5000);
        const fadeElements = document.querySelectorAll('.fade-in');
        function checkFade() {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.classList.add('visible');
                }
            });
        }
        checkFade();
        window.addEventListener('scroll', checkFade);
        const words = ["Acrylic", "Charcoal", "Digital", "Oil Paint", "Pastel","Water Paint"];
      const changingWordElement = document.getElementById('changing-word');
      let wordIndex = 0;

      function changeWord() {
        changingWordElement.classList.add('fade-out');
        
        setTimeout(() => {
          changingWordElement.textContent = words[wordIndex];
          changingWordElement.classList.remove('fade-out');
          wordIndex = (wordIndex + 1) % words.length;
        }, 250);
      }

      changeWord(); 
      setInterval(changeWord, 3000);
