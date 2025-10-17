// Fade-in animation on page load
window.addEventListener("load", () => {
  const fadeElements = document.querySelectorAll(".fade-in");

  fadeElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, index * 200); // slight stagger between each fade
  });
});
