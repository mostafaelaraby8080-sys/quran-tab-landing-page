function clickLabelEvent(item) {
  item.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      item.click();
    }
  });
}

function observeElements(elements) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("in-view", entry.isIntersecting);
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  elements.forEach((element) => observer.observe(element));
}