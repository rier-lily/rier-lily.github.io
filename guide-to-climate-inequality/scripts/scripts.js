document.addEventListener('DOMContentLoaded', event => {
  gsap.registerPlugin(ScrollTrigger);

  const sections1 = gsap.utils.toArray('#side1 section');
  const sections2 = gsap.utils.toArray('#side2 section');
  const sections3 = gsap.utils.toArray('#side3 section');

  const scroll1 = gsap.to(sections1, {
    xPercent: -100 * (sections1.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: '#side1',
      pin: true,
      scrub: 0,
      end: '+=3000',
    },
  });

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

  const scroll3 = gsap.to(sections3, {
    xPercent: -100 * (sections3.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: '#side3',
      pin: true,
      scrub: 0,
      end: '+=3000',
    },
  });

  gsap.to(".bg-img", {
    filter: "hue-rotate(0deg)",
    scrollTrigger: {
      trigger: "#title",
      start: "bottom middle",
      end: "#c2 bottom middle",
      scrub: true
    }
  });


  gsap.to(".bg-img", {
    filter: "hue-rotate(-74deg)",
    scrollTrigger: {
      trigger: "#c2",
      start: "bottom middle",
      end: "#c3 bottom middle",
      scrub: true
    }
  });

  gsap.to(".bg-img", {
    filter: "hue-rotate(-207deg)",
    scrollTrigger: {
      trigger: "#c3",
      start: "bottom middle",
      end: "#end top top",
      scrub: true
    }
  });

  gsap.to(".bg-img", {
    filter: "hue-rotate(-74deg)",
    scrollTrigger: {
      trigger: "#end",
      start: "middle middle",
      end: "bottom bottom",
      scrub: true
    }
  });
});

$(window).mousemove(function(e) {
  parallaxIt(e, ".slide", -100);
  parallaxIt(e, ".lower-bg", -20);
  parallaxIt(e, ".top-boat", -40);
  parallaxIt(e, ".middle-boat", -30);
  parallaxIt(e, ".bottom-boat", -20);
});

function parallaxIt(e, target, movement) {
  var $this = $("#container");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}

const sliders = gsap.utils.toArray(".slider");
const slidesArray = sliders.map((slider) =>
  gsap.utils.toArray(".slide", slider)
);
const next = document.getElementById("next");
const prev = document.getElementById("prev");
let currentIndex = 0;
let isTweening = false;

slidesArray.forEach((slides) => {
  slides.forEach((slide, i) => {
    gsap.set(slide, {
      backgroundColor: colors[i],
      xPercent: i > 0 && 100
    });
  });
});
