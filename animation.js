const allWorks = document.querySelector(".works-content-all");
const openWorks = document.querySelector(".second-img");
const cashCover = document.querySelector(".cash-presentation");
const hoverClick = document.querySelector(".hoverclick");
const firstImg = document.querySelector(".first-img");
const thirdImg = document.querySelector(".third-img");
const imgOpen = document.querySelector(".img-presentation-open");
const imgClose = document.querySelector(".img-presentation-close");
const btnMoins = document.querySelector(".btn-voir-moins");

let active = false;

openWorks.addEventListener("click", () => {
  active = !active;
  active
    ? allWorks.classList.add("active")
    : allWorks.classList.remove("active");
  //active
  //? cashCover.classList.add("active")
  //: cashCover.classList.remove("active");
  active
    ? hoverClick.classList.add("active")
    : hoverClick.classList.remove("active");
  active
    ? firstImg.classList.add("active")
    : firstImg.classList.remove("active");
  active
    ? thirdImg.classList.add("active")
    : thirdImg.classList.remove("active");
  active
    ? imgClose.classList.add("active")
    : imgClose.classList.remove("active");
  active ? imgOpen.classList.add("active") : imgOpen.classList.remove("active");
});

/*----------animation curseur--------- */

const circleSvg = document.querySelector("svg");
const btn = document.querySelector("button");

let mouseX = 0;
let mouseY = 0;
//let intv = 0

window.addEventListener("mousemove", (event) => {
  // circleSvg.style.top = event.clientY - 45;
  // circleSvg.style.left = event.clientX - 45;

  mouseY = event.clientY / 16 - 45 / 16 + "rem";
  mouseX = event.clientX / 16 - 45 / 16 + "rem";
});

const mouseMove = () => {
  //intv += 1

  circleSvg.style.top = mouseY;
  circleSvg.style.left = mouseX;

  //circleSvg.style.opacity = 1 + Math.sin(intv * .04)
  //console.log(Math.sin(intv * .04))

  window.requestAnimationFrame(mouseMove);
};

mouseMove();
