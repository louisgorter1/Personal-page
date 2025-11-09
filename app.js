document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll("[data-reveal]");
  if (!revealElements.length) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (prefersReducedMotion.matches) {
    revealElements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
  );

  revealElements.forEach((el) => observer.observe(el));
});
