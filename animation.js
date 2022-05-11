const allWorks = document.querySelector(".works-content-all");
const openWorks = document.querySelector(".second-img");
const cashCover = document.querySelector(".cash-presentation");

openWorks.addEventListener("click", () => {
  if ((allWorks.style.display = "none")) {
    allWorks.style.display = "flex";
    cashCover.remove();
  }
  document.querySelector(".works-content-all").style.display = "flex";
});
