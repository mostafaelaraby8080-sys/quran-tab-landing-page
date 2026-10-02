const labelElement = document.querySelectorAll("label");
const sectionElements = document.querySelectorAll("section");

labelElement.forEach(clickLabelEvent);

if ("IntersectionObserver" in window) {
  document.documentElement.classList.add("has-scroll-animations");
  observeElements(sectionElements);
}
