document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".num");
  let currentIndex = 0;

  document.body.addEventListener("click", function() {
      images[currentIndex].classList.add("active");

      currentIndex = (currentIndex + 1) % num.length;
  });
});