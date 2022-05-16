window.addEventListener("scroll", function () {
  var navblur = this.document.querySelector(".blur-nav");
  navblur.classList.toggle("sticky", window.scrollY > 0);
});

/*----animation-nav-bar------ */
function animationNav() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  sections.forEach((section) => {
    section.addEventListener("mouseenter", function () {
      const id = section.getAttribute("id");
      const activeSection = document.querySelector(`a[href= "#${id}"]`);
      navLinks.forEach((header) => header.classList.remove("scrollSection"));
      activeSection.classList.add("scrollSection");
    });
  });
}

animationNav();

/*function animationNav() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  sections.forEach((section) => {
    section.addEventListener("mouseenter", function () {
      const id = section.getAttribute("id");
      const activeSection = document.querySelector(`a[href= "#${id}"]`);
      navLinks.forEach((header) => header.classList.remove("scrollSection"));
      activeSection.classList.add("scrollSection");
    });
  });
}

animationNav();*/
