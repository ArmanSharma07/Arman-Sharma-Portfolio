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

// ===== Handle dropdowns on mobile (tap instead of hover) =====
document.querySelectorAll("nav ul li").forEach(item => {
  const submenu = item.querySelector("ul");
  if (submenu) {
    item.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {  // Only on mobile
        e.preventDefault();
        item.classList.toggle("open"); // Toggle submenu
      }
    });
  }
});

// ===== Close nav when clicking any link =====
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", () => {
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



