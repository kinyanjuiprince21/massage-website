const toggleMenu = document.querySelector(".menu-toggle");

toggleMenu.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

const navigationLinks = document.querySelectorAll(".a-links");

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});
