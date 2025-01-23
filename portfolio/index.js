// IMG PATH

const imageBasePath = 'assets/';
const images = document.querySelectorAll('img');

images.forEach(img => {
  img.src = imageBasePath + img.getAttribute('data-src');
});

// ANIMATIONS

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  function checkVisibility() {
    const windowHeight = window.innerHeight;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;

      if (sectionTop < windowHeight * 0.5 && sectionBottom > windowHeight * 0.5) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});
