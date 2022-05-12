const allWorks = document.querySelector(".works-content-all");
const openWorks = document.querySelector(".second-img");
const cashCover = document.querySelector(".cash-presentation");
const hoverClick = document.querySelector(".hoverclick");
const firstImg = document.querySelector(".first-img");
const thirdImg = document.querySelector(".third-img");

let active = false;

openWorks.addEventListener("click", () => {
  active = !active;
  active
    ? allWorks.classList.add("active")
    : allWorks.classList.remove("active");
  active
    ? cashCover.classList.add("active")
    : cashCover.classList.remove("active");
  active
    ? hoverClick.classList.add("active")
    : hoverClick.classList.remove("active");
  active
    ? firstImg.classList.add("active")
    : firstImg.classList.remove("active");
  active
    ? thirdImg.classList.add("active")
    : thirdImg.classList.remove("active");
});
