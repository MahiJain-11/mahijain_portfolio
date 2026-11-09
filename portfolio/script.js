
// ==============================
// MOBILE NAVIGATION
// ==============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});

// Close menu when a navigation link is clicked

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});


// ==============================
// TYPING ANIMATION
// ==============================

const typingElement = document.getElementById("typing");

const words = [
    "Software Developer.",
    "Problem Solver.",
    "Frontend Developer.",
    "Tech Enthusiast."
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

    }

    setTimeout(typeEffect, deleting ? 45 : 90);
}

typeEffect();


// ==============================
// SCROLL REVEAL ANIMATION
// ==============================

const revealElements = document.querySelectorAll(
    ".section-heading, .about-main, .about-cards, .skill-card, .learning-box, .project-card, .timeline-item, .contact-box"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});


// ==============================
// ACTIVE NAVIGATION LINK
// ==============================

const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            navigationLinks.forEach(link => {
                link.classList.remove("active");

                if (link.getAttribute("href") === "#" + entry.target.id) {
                    link.classList.add("active");
                }
            });

        }

    });

}, {
    rootMargin: "-35% 0px -55% 0px"
});

sections.forEach(section => {
    sectionObserver.observe(section);
});


// ==============================
// AUTOMATIC COPYRIGHT YEAR
// ==============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ==============================
// CLOSE MENU ON OUTSIDE CLICK
// ==============================

document.addEventListener("click", event => {

    const clickedInsideMenu = navLinks.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
        navLinks.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

});
