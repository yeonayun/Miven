document.addEventListener("DOMContentLoaded", function () {
  const container1 = document.querySelector(".num1");

  window.addEventListener("wheel", function (e) {
      if (e.deltaY > 0) {
          // Scroll down
          animateScroll(container1);
      }
  });
});

function animateScroll(element) {
  // Calculate the distance from the top of the page to the element
  const topPos = element.getBoundingClientRect().top;

  // Smooth scroll animation
  window.scrollTo({
      top: topPos,
      behavior: "smooth"
  });
}
