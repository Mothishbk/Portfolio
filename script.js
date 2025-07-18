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


const toggleBtn = document.getElementById("toggleContact");
const contactBox = document.getElementById("contactDetails");

toggleBtn.addEventListener("click", () => {
  if (contactBox.style.display === "none") {
    contactBox.style.display = "block";
    toggleBtn.textContent = "Hide Contact Info";
  } else {
    contactBox.style.display = "none";
    toggleBtn.textContent = "Show Contact Info";
  }
});
