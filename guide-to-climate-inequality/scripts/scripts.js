document.addEventListener('DOMContentLoaded', event => {
  gsap.registerPlugin(ScrollTrigger);

  const container1 = document.querySelector('#side1');
  const container2 = document.querySelector('#side2');
  const container3 = document.querySelector('#side3');

const scroll1 = gsap.to(container1, {
    x: () => -(container1.scrollWidth - window.innerWidth), 
    ease: 'none',
    scrollTrigger: {
      trigger: '#side1',
      pin: true,
      scrub: 0,
      // invalidateOnRefresh ensures the math updates if the window is resized
      invalidateOnRefresh: true, 
      end: '+=3000',
    },
});

const scroll2 = gsap.to(container2, {
    x: () => -(container2.scrollWidth - window.innerWidth), 
    ease: 'none',
    scrollTrigger: {
      trigger: '#side2',
      pin: true,
      scrub: 0,
      // invalidateOnRefresh ensures the math updates if the window is resized
      invalidateOnRefresh: true, 
      end: '+=3000',
    },
});

const scroll3 = gsap.to(container3, {
    x: () => -(container3.scrollWidth - window.innerWidth), 
    ease: 'none',
    scrollTrigger: {
      trigger: '#side3',
      pin: true,
      scrub: 0,
      // invalidateOnRefresh ensures the math updates if the window is resized
      invalidateOnRefresh: true, 
      end: '+=3000',
    },
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

// const sliders = gsap.utils.toArray(".slider");
// const slidesArray = sliders.map((slider) =>
//   gsap.utils.toArray(".slide", slider)
// );
// const next = document.getElementById("next");
// const prev = document.getElementById("prev");
// let currentIndex = 0;
// let isTweening = false;

// slidesArray.forEach((slides) => {
//   slides.forEach((slide, i) => {
//     gsap.set(slide, {
//       backgroundColor: colors[i],
//       xPercent: i > 0 && 100
//     });
//   });
// });

// window.addEventListener("scroll", () => {
//   const vh = window.innerHeight;
//   const scrollY = window.scrollY;
//   let hueValue = -74;

//   if (scrollY >= vh) {
//     hueValue = -0;
//   } 
//   if (scrollY >= vh * 7) {
//     hueValue = -74;
//   }
  
//   if (scrollY >= vh * 16) {
//     hueValue = -207;
//   }
  
//   if (scrollY >= vh * 21) {
//     hueValue = -74;
//   }

//   document.documentElement.style.setProperty("--hue-rotate", `${hueValue}deg`);
// });


window.addEventListener("scroll", () => {
  // Total scrollable height = Entire Document Height - Viewport Height
  const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
  
  // Guard against division by zero if the page isn't scrollable
  if (totalScrollable <= 0) return;

  // Percentage scrolled (0 to 1)
  const scrollPercent = window.scrollY / totalScrollable;
  let hueValue = -74;

  // Define triggers based on total page progress (e.g., 10%, 40%, 75%)
  if (scrollPercent >= 0.0625) {
    hueValue = 0;
  } 
  if (scrollPercent >= 0.375) {
    hueValue = -74;
  }
  if (scrollPercent >= 0.75) {
    hueValue = -207;
  }
  if (scrollPercent >= 1) {
    hueValue = -74;
  }

  document.documentElement.style.setProperty("--hue-rotate", `${hueValue}deg`);
});