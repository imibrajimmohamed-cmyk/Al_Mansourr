const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

const mainImage = document.getElementById("mainProductImage");
const thumbs = [...document.querySelectorAll(".thumb")];

function showImage(button) {
  mainImage.src = button.dataset.image;
  thumbs.forEach((thumb) => thumb.classList.toggle("active", thumb === button));
}

thumbs.forEach((button) => {
  button.addEventListener("click", () => showImage(button));
});

document.getElementById("galleryMain").addEventListener("click", () => {
  const currentIndex = thumbs.findIndex((thumb) => thumb.classList.contains("active"));
  const nextIndex = (currentIndex + 1) % thumbs.length;
  showImage(thumbs[nextIndex]);
});

document.getElementById("year").textContent = new Date().getFullYear();
