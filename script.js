const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const sections = document.querySelectorAll(".section");
const toTop = document.getElementById("toTop");

window.addEventListener("load", () => {
  sections[0].classList.add("visible");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");

  if (window.scrollY > 400) toTop.style.display = "block";
  else toTop.style.display = "none";

  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) section.classList.add("visible");
  });
});

toTop.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

const moon = document.querySelector(".moon");
const body = document.body;

moon.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    moon.classList.remove("fa-moon");
    moon.classList.add("fa-sun");
    moon.style.color = "yellow";
  } else {
    moon.classList.remove("fa-sun");
    moon.classList.add("fa-moon");
    moon.style.color = "black";
  }
});

function openFiles() {
  window.open("calculatore.html", "_blank");
}
