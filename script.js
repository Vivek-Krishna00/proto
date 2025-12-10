// scroll stuff for header
window.onscroll = () => {
  let head = document.getElementById("header");
  if (window.scrollY > 100) {
    head.classList.add("scrolled");
  } else {
    head.classList.remove("scrolled");
  }
};

// nav toggler
let ham = document.getElementById("ham");
let menu = document.getElementById("menu");

ham.onclick = () => {
  menu.classList.toggle("active");
  // switch icon
  if (menu.classList.contains("active")) {
    ham.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    ham.innerHTML = '<i class="fas fa-bars"></i>';
  }
};

// close menu on click
document.querySelectorAll("#menu a").forEach(l => {
  l.onclick = () => {
    menu.classList.remove("active");
    ham.innerHTML = '<i class="fas fa-bars"></i>';
  };
});

// scroll fade in magic
let faders = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  faders.forEach(el => {
    // check if element is in view
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});

// changing text animation
let words = ["Acrylic", "Charcoal", "Digital", "Oil Paint", "Pastel", "Water Paint"];
let txt = document.getElementById("changing-word");
let idx = 0;

function swapWord() {
  txt.classList.add("fade-out");

  setTimeout(() => {
    txt.textContent = words[idx];
    txt.classList.remove("fade-out");
    idx++;
    if (idx >= words.length) idx = 0;
  }, 250);
}

// run it
swapWord();
setInterval(swapWord, 3000);

// modal junk
let popup = document.getElementById("auth-modal");
let xBtn = document.getElementById("close-modal");
let signForm = document.getElementById("signup-form");
let logForm = document.getElementById("login-form");
let toLog = document.getElementById("toggle-to-login");
let toSign = document.getElementById("toggle-to-signup");
let popTitle = document.getElementById("modal-title");

// open modal on get started
document.querySelectorAll(".action-btn").forEach(b => {
  if (b.textContent.trim() === "Get Started") {
    b.onclick = (e) => {
      e.preventDefault();
      showPop("signup");
    };
  }
});

function showPop(type) {
  popup.classList.add("active");
  if (type === "signup") {
    signForm.classList.add("active");
    logForm.classList.remove("active");
    popTitle.textContent = "Sign Up";
  } else {
    signForm.classList.remove("active");
    logForm.classList.add("active");
    popTitle.textContent = "Sign In";
  }
}

function hidePop() {
  popup.classList.remove("active");
}

xBtn.onclick = hidePop;

// close on outside click
popup.onclick = (e) => {
  if (e.target === popup) hidePop();
};

toLog.onclick = (e) => {
  e.preventDefault();
  showPop("login");
};

toSign.onclick = (e) => {
  e.preventDefault();
  showPop("signup");
};

// fake submit
signForm.onsubmit = (e) => {
  e.preventDefault();
  alert("Account created! (fake) \nEmail: " + document.getElementById("signup-email").value);
  signForm.reset();
  hidePop();
};

logForm.onsubmit = (e) => {
  e.preventDefault();
  alert("Logged in! (fake) \nUser: " + document.getElementById("login-email").value);
  logForm.reset();
  hidePop();
};
