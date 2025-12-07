window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    hamburger.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  }
});

const navMenuLinks = document.querySelectorAll(".nav-links a");
navMenuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

const testimonialSlider = document.getElementById("testimonial-slider");
const sliderDots = document.querySelectorAll(".slider-dot");
let currentSlideIndex = 0;

function showSlide(slideIndex) {
  if (!testimonialSlider) return;

  const slides = testimonialSlider.querySelectorAll(".testimonial");
  if (slides.length === 0) return;

  if (slideIndex < 0) slideIndex = 0;
  if (slideIndex >= slides.length) slideIndex = slides.length - 1;

  const containerWidth = testimonialSlider.parentElement.offsetWidth;
  const pixelsToMove = slideIndex * containerWidth;

  testimonialSlider.style.transform = `translateX(-${pixelsToMove}px)`;

  sliderDots.forEach(function (dot) {
    dot.classList.remove("active");
  });
  if (sliderDots[slideIndex]) {
    sliderDots[slideIndex].classList.add("active");
  }

  currentSlideIndex = slideIndex;
}

sliderDots.forEach(function (dot) {
  dot.addEventListener("click", function () {
    const slideNumber = parseInt(this.getAttribute("data-index"));
    showSlide(slideNumber);
  });
});

function startSlider() {
  if (testimonialSlider && testimonialSlider.parentElement) {
    showSlide(0);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startSlider);
} else {
  startSlider();
}

setInterval(function () {
  const totalSlides = testimonialSlider.querySelectorAll(".testimonial").length;
  const nextSlideIndex = (currentSlideIndex + 1) % totalSlides;
  showSlide(nextSlideIndex);
}, 5000);

const fadeInElements = document.querySelectorAll(".fade-in");

function checkElementsInView() {
  fadeInElements.forEach(function (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (elementPosition < screenHeight - 100) {
      element.classList.add("visible");
    }
  });
}

checkElementsInView();
window.addEventListener("scroll", checkElementsInView);

const artWords = [
  "Acrylic",
  "Charcoal",
  "Digital",
  "Oil Paint",
  "Pastel",
  "Water Paint",
];
const wordElement = document.getElementById("changing-word");
let currentWordIndex = 0;

function changeWord() {
  wordElement.classList.add("fade-out");

  setTimeout(function () {
    wordElement.textContent = artWords[currentWordIndex];
    wordElement.classList.remove("fade-out");
    currentWordIndex = (currentWordIndex + 1) % artWords.length;
  }, 250);
}

changeWord();
setInterval(changeWord, 3000);

const authModal = document.getElementById("auth-modal");
const closeBtn = document.getElementById("close-modal");
const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");
const switchToLoginBtn = document.getElementById("toggle-to-login");
const switchToSignupBtn = document.getElementById("toggle-to-signup");
const modalTitle = document.getElementById("modal-title");

const allButtons = document.querySelectorAll(".btn");
allButtons.forEach(function (button) {
  if (button.textContent.trim() === "Get Started") {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      openModal("signup");
    });
  }
});

function openModal(formType) {
  authModal.classList.add("active");

  if (formType === "signup") {
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
    modalTitle.textContent = "Sign Up";
  } else {
    signupForm.classList.remove("active");
    loginForm.classList.add("active");
    modalTitle.textContent = "Sign In";
  }
}

function closeModal() {
  authModal.classList.remove("active");
}

closeBtn.addEventListener("click", function () {
  closeModal();
});

authModal.addEventListener("click", function (event) {
  if (event.target === authModal) {
    closeModal();
  }
});

switchToLoginBtn.addEventListener("click", function (event) {
  event.preventDefault();
  openModal("login");
});

switchToSignupBtn.addEventListener("click", function (event) {
  event.preventDefault();
  openModal("signup");
});

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const signupEmail = document.getElementById("signup-email").value;

  alert("Account created successfully!\nEmail: " + signupEmail);

  signupForm.reset();

  closeModal();
});

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const loginEmail = document.getElementById("login-email").value;

  alert("Logged in as: " + loginEmail);

  loginForm.reset();

  closeModal();
});
