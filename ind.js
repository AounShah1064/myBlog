var lastScrollTop = 0;
window.addEventListener("scroll", function() {
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    // Scrolling down
    document.querySelector(".image-container").style.animation = "slide-right 1s forwards";
  } else {
    // Scrolling up
    document.querySelector(".image-container").style.animation = "slide-left 1s forwards";
  }
  lastScrollTop = currentScroll;
});

