document.addEventListener('DOMContentLoaded', () => {
  const words = document.querySelectorAll('.word');
  const intro = document.getElementById('intro');
  const mainContent = document.getElementById('main-content');

  const totalIntroDuration = 4500;

  // Check if intro has already been shown
  const hasSeenIntro = localStorage.getItem('introShown');

  if (!hasSeenIntro) {
    // play intro words
    setTimeout(() => {
      words.forEach(word => word.classList.add('animate'));
    }, 100);

    // fade out intro
    setTimeout(() => {
      intro.classList.add('fade-out');
    }, totalIntroDuration);

    // show main content
    setTimeout(() => {
      intro.style.display = 'none';
      mainContent.classList.add('show');
      localStorage.setItem('introShown', 'true');
    }, totalIntroDuration + 1000);
  } else {
    // skip intro
    intro.style.display = 'none';
    mainContent.classList.add('show');
  }
});
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
