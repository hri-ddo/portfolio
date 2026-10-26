const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const targets = document.querySelectorAll(".fade-in");

function revealAll() {
  targets.forEach((el) => el.classList.add("visible"));
}

if (!("IntersectionObserver" in window) || motionQuery.matches) {
  revealAll();
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach((el) => observer.observe(el));
  motionQuery.addEventListener("change", (event) => {
    if (event.matches) {
      observer.disconnect();
      revealAll();
    }
  });
}
