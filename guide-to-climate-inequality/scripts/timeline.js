console.clear();

// 1. Configuration & Selectors
const colors = [
  "#24478f",
  "#cc0000",
  "#663300",
  "#006600",
  "#cc5200",
  "#6b00b3"
];

// Wait for the DOM to be fully loaded before running script
document.addEventListener("DOMContentLoaded", () => {
  const sliders = gsap.utils.toArray(".slider");
  const slidesArray = sliders.map((slider) =>
    gsap.utils.toArray(".funafuti", slider)
  );

  const next = document.getElementById("next");
  const prev = document.getElementById("prev");
  
  let currentIndex = 0;
  let isTweening = false;

  // 2. Initial Setup: Set positions and background colors
  slidesArray.forEach((slides) => {
    slides.forEach((slide, i) => {
      gsap.set(slide, {
        backgroundColor: colors[i % colors.length], // Use modulo to prevent errors if colors < slides
        xPercent: i === 0 ? 0 : 100 // Current slide at 0, others at 100
      });
    });
  });

  // 3. Navigation Logic
  const gotoSlide = (value) => {
    if (isTweening) return;
    isTweening = true;

    const first = slidesArray[0];
    const currentSlides = [];
    const nextSlides = [];

    // Identify which slides are moving out
    slidesArray.forEach((slides) => currentSlides.push(slides[currentIndex]));

    // Calculate next index (with wrap-around logic)
    if (first[currentIndex + value]) {
      currentIndex += value;
    } else {
      currentIndex = value > 0 ? 0 : first.length - 1;
    }

    // Identify which slides are moving in
    slidesArray.forEach((slides) => nextSlides.push(slides[currentIndex]));

    if (value > 0) {
      // Moving Forward
      gsap.set(nextSlides, { xPercent: 100 });
      gsap.to(currentSlides, {
        xPercent: -100,
        duration: 1,
        ease: "power2.inOut"
      });
    } else {
      // Moving Backward
      gsap.set(nextSlides, { xPercent: -100 });
      gsap.to(currentSlides, {
        xPercent: 100,
        duration: 1,
        ease: "power2.inOut"
      });
    }

    // Animate the "next" slides to the center
    gsap.to(nextSlides, {
      xPercent: 0,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        isTweening = false;
      }
    });
  };

  // 4. Event Listeners
  if (next) {
    next.addEventListener("click", () => gotoSlide(1));
  }
  
  if (prev) {
    prev.addEventListener("click", () => gotoSlide(-1));
  }
});