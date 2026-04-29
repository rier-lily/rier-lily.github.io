console.clear();

let currentState = 0;
const totalStates = 3;

function nextState() {
  const target = document.getElementById("boat-slider");
  target.classList.remove(`state-${currentState}`);

  currentState = (currentState + 1) % totalStates; // Cycles back to 0

  target.classList.add(`state-${currentState}`);
}

function previousState() {
  const target = document.getElementById("boat-slider");
  target.classList.remove(`state-${currentState}`);

  currentState = (currentState - 1 + totalStates) % totalStates; // Cycles back to 0

  target.classList.add(`state-${currentState}`);
}

// --------------------------------------

let currentPlace = 0;
const totalPlaces = 3;
function nextPlace() {
  const target = document.getElementById("place");
  target.classList.remove(`place-${currentPlace}`);

  currentPlace = (currentPlace + 1) % totalPlaces; // Cycles back to 0

  target.classList.add(`place-${currentPlace}`);
}

function previousPlace() {
  const target = document.getElementById("place");
  target.classList.remove(`place-${currentPlace}`);

  currentPlace = (currentPlace - 1 + totalPlaces) % totalPlaces; // Cycles back to 0

  target.classList.add(`place-${currentPlace}`);
}

// ---------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const slides = gsap.utils.toArray(".funafuti");
  const sliders = gsap.utils.toArray(".slider");
  const slidesArray = sliders.map((slider) =>
    gsap.utils.toArray(".funafuti", slider)
  );

  // 1. Initial Setup: Hide all slides except the first one
  slidesArray.forEach((slides) => {
    slides.forEach((slide, i) => {
      gsap.set(slides, { opacity: 0 });
      gsap.set(slides[0], { opacity: 1 });
    });
  });

  let currentIndex = 0;

  const tl = gsap.timeline({ repeat: -1 });

  // 3. Navigation Logic
  const gotoSlide = (value) => {
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
      gsap.set(nextSlides, { opacity: 1 });
      gsap.to(currentSlides, {
        opacity: 0
      });
    } else {
      // Moving Backward
      gsap.set(nextSlides, { opacity: 1 });
      gsap.to(currentSlides, {
        opacity: 0
      });
    }

    // Animate the "next" slides to the center
    gsap.to(nextSlides, {
      opacity: 1
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
