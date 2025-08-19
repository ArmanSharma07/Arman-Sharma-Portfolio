// ===== Mobile Menu Toggle =====
const nav = document.querySelector("nav ul");
const navToggleBtn = document.createElement("div");
navToggleBtn.innerHTML = "☰";
navToggleBtn.style.cursor = "pointer";
navToggleBtn.style.fontSize = "1.5rem";
navToggleBtn.style.color = "#fff";
document.querySelector("nav").prepend(navToggleBtn);

navToggleBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// ===== Close nav on submenu click (mobile fix) =====
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", () => {
    // Only close if menu is open (mobile mode)
    if (nav.classList.contains("show")) {
      nav.classList.remove("show");
    }
  });
});

// ===== Smooth Scroll =====
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ===== Contact Form Validation =====
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent 🚀");
    form.reset();
  });
}


