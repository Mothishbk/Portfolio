// Optional: highlight nav on scroll (future enhancement placeholder)
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const top = sec.offsetTop - 60;
    if (pageYOffset >= top) current = sec.getAttribute("id");
  });

  navLinks.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
});
