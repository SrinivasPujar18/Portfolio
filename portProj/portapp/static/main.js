
// =============== Navbar Scroll Highlight ===============
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(`.navbar a[href*=${id}]`)
          .classList.add("active");
      });
    }
  });

  // Sticky Header
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Scroll-to-Top button visibility
  let topBtn = document.querySelector(".top");
  topBtn.classList.toggle("show", window.scrollY > 500);
};

// =============== Smooth Scroll Navigation ===============
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// =============== Scroll-to-Top Button ===============
const scrollTopBtn = document.querySelector(".top");
scrollTopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// =============== Typed.js Animation ===============
const typed = new Typed(".logo", {
  strings: ["Portfolio", "Srinivasa G Pujar", "Full Stack Developer"],
  typeSpeed: 90,
  backSpeed: 60,
  backDelay: 1200,
  loop: true,
});

// =============== Reveal Animation (Scroll Animation) ===============
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
      }
    });
  },
  { threshold: 0.15 }
);

document
  .querySelectorAll("section, .skills-box, .about-text, .services-list div")
  .forEach((el) => observer.observe(el));

// =============== Contact Form Alert (Demo Only) ===============
const contactForm = document.querySelector(".contact-form form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✅ Thank you for reaching out! Your message has been submitted.");
  contactForm.reset();
});
