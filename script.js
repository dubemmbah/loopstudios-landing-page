"use strict";

const btnMenu = document.querySelector(".btn-mobile-menu");
const btnClose = document.querySelector(".btn-close");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-list .nav-link");

function closeMobileMenu() {
  mobileMenu.style.transform = `translateX(200%)`;
  document.documentElement.classList.remove("menu-open");
}

btnMenu.addEventListener("click", () => {
  mobileMenu.style.transform = `translateX(0)`;

  document.documentElement.classList.add("menu-open");
});

btnClose.addEventListener("click", () => {
  closeMobileMenu();
});

// Close mobile menu when a navigation link is clicked
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Prevent the default navigation behavior
    e.preventDefault();

    // Close menu with a slight delay
    closeMobileMenu();

    // Get the target section ID from the link's href attribute
    const targetSectionId = link.getAttribute("href").substring(1);

    // Delaying the navigation to target section until after the mobile menu closing transition
    setTimeout(() => {
      document
        .getElementById(targetSectionId)
        .scrollIntoView({ behavior: "smooth" });
    }, 600);
  });
});
