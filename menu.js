window.addEventListener("scroll", function () {
  var navblur = this.document.querySelector(".blur-nav");
  navblur.classList.toggle("sticky", window.scrollY > 0);
});
