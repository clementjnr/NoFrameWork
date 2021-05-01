const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", mobileLinks);

function mobileLinks() {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeLinks));

function closeLinks() {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
}