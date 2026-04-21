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
      trigger: "#side1",
      start: "top top",
      end: "#side2 top top",
      scrub: true
    }
  });

  gsap.to(".bg-img", {
    filter: "hue-rotate(-74deg)",
    scrollTrigger: {
      trigger: "#c2",
      start: "top top",
      end: "bottom bottom",
      scrub: true
    }
  });

  gsap.to(".bg-img", {
    filter: "hue-rotate(-207deg)",
    scrollTrigger: {
      trigger: "#c3",
      start: "top top",
      end: "bottom bottom",
      scrub: true
    }
  });

  gsap.to(".bg-img", {
    filter: "hue-rotate(-74deg)",
    scrollTrigger: {
      trigger: "#end",
      start: "top top",
      end: "bottom bottom",
      scrub: true
    }
  });
});

$(window).mousemove(function(e) {
  parallaxIt(e, ".slide", -100);
  parallaxIt(e, ".lower-bg", -30);
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
