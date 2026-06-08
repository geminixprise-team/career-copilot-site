// Navbar scroll effect
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
});

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
  });
}

// Close mobile nav on link click
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// CTA sign-up form (Netlify Forms)
const ctaForm = document.getElementById("cta-signup-form");
if (ctaForm) {
  ctaForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });
      if (!response.ok) throw new Error(`Server error: ${response.status}`);
      form.reset();
      const success = document.getElementById("cta-success");
      if (success) {
        success.classList.add("visible");
        setTimeout(() => success.classList.remove("visible"), 4000);
      }
    } catch (err) {
      console.error("Form error:", err);
      alert("Something went wrong. Please try again.");
    }
  });
}

// Contact form (Netlify Forms)
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });
      if (!response.ok) throw new Error(`Server error: ${response.status}`);
      form.reset();
      const success = document.getElementById("contact-success");
      if (success) {
        success.classList.add("visible");
        setTimeout(() => success.classList.remove("visible"), 5000);
      }
    } catch (err) {
      console.error("Form error:", err);
      alert("Something went wrong. Please try again.");
    }
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
