document.addEventListener('DOMContentLoaded', event => {
  gsap.registerPlugin(ScrollTrigger);

  const sections1 = gsap.utils.toArray('#side1 section');
  const sections2 = gsap.utils.toArray('#side2 section');
  const sections3 = gsap.utils.toArray('#side3 section');

  // Horizontal Scroll 1
  gsap.to(sections1, {
    xPercent: -100 * (sections1.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: '#side1',
      pin: true,
      scrub: 0,
      end: '+=3000',
    },
  });

  // Horizontal Scroll 2
  gsap.to(sections2, {
    xPercent: -100 * (sections2.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: '#side2',
      pin: true,
      scrub: 0,
      end: '+=3000',
    },
  });

  // Horizontal Scroll 3
  gsap.to(sections3, {
    xPercent: -100 * (sections3.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: '#side3',
      pin: true,
      scrub: 0,
      end: '+=3000',
    },
  });
});

gsap.to(".your-element", {
  filter: "hue-rotate(180deg)",
  scrollTrigger: {
    trigger: "#side2",
    start: "top top",
    end: "bottom bottom",
    scrub: true // Links the hue rotation directly to the scrollbar position
  }
});