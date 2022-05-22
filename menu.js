window.addEventListener("scroll", function () {
  var navblur = this.document.querySelector(".blur-nav");
  navblur.classList.toggle("sticky", window.scrollY > 0);
});

//--------------------------------------------------------

const li = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

function activeMenu() {
  let len = sections.length;
  while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
  li.forEach((ltx) => ltx.classList.remove("active"));
  li[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

/*const sections = document.querySelectorAll("section");

const options = {
  threshold: 0.7,
};

let observer = new IntersectionObserver(navCheck, options);
const menuElement = document.querySelector(".navbar-menu-element a");

function navCheck(entries) {
  entries.forEach((entry) => {
    const className = entry.target.id;
    const activeAnchor = (document.getElementsByClassName(
      "navbar-menu-element"
    ).innerHTML = `[data-page=${className}]`);
    console.log(activeAnchor);
    if (activeAnchor) {
      menuElement.classList.add("scrollSection");
    }
    menuElement.classList.remove("scrollSection");
  });
}

sections.forEach((section) => {
  observer.observe(section);
  console.log(observer);
});

*/

/*----animation-nav-bar------ */
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

animationNav();
*/
/*
function animationNav() {
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll(".nav-link");
  window.addEventListener("scroll", () => {
    let current = "home-header";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
        console.log(current);
      }
    });
    /*
    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
  });
}

animationNav();*/

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
