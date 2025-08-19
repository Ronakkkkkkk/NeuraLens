document.addEventListener('DOMContentLoaded', () => {
  const words = document.querySelectorAll('.word');
  const intro = document.getElementById('intro');
  const mainContent = document.getElementById('main-content');
  const totalIntroDuration = 4500;

  // Detect true page load (not tab switch or bfcache restore)
  const navType = performance.getEntriesByType('navigation')[0]?.type;

  if (navType === 'reload' || navType === 'navigate') {
    // Show intro
    setTimeout(() => {
      words.forEach(word => word.classList.add('animate'));
    }, 100);

    setTimeout(() => {
      intro.classList.add('fade-out');
    }, totalIntroDuration);

    setTimeout(() => {
      intro.style.display = 'none';
      mainContent.classList.add('show');
    }, totalIntroDuration + 1000);
  } else {
    // Skip intro (restored from bfcache or tab switch)
    intro.style.display = 'none';
    mainContent.classList.add('show');
  }
});

// Scroll-triggered animation logic remains unchanged
let lastScrollY = window.scrollY;

document.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  const direction = currentScrollY > lastScrollY ? "down" : "up";
  lastScrollY = currentScrollY;

  const aboutSection = document.querySelector(".about-highlight");
  const rect = aboutSection.getBoundingClientRect();

  if (rect.top < window.innerHeight && rect.bottom > 0) {
    const paragraphs = aboutSection.querySelectorAll("p");
    paragraphs.forEach((p, i) => {
      p.style.opacity = "0"; // Reset
      p.style.animationName = direction === "down" ? "fadeUp" : "fadeDown";
      p.style.animationDelay = `${i * 0.2}s`;
    });
  }
});
