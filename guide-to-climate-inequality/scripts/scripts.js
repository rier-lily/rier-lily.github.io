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
  if (scrollPercent >= 0.74) {
    hueValue = -207;
  }
  if (scrollPercent >= .97) {
    hueValue = -74;
  }

  document.documentElement.style.setProperty("--hue-rotate", `${hueValue}deg`);
});


{
  const spinSectionOne = document.querySelector('#c2-p2'); 
  const mainDivs = document.querySelectorAll('.globe-element');

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      const ratio = entry.intersectionRatio;
      mainDivs.forEach(div => {
        if (entry.isIntersecting && ratio >= 0.8) {
          div.classList.add('spin-1');
          div.classList.remove('spin-0');
          div.classList.remove('spin-2');
        } else if (ratio <= 0.2) {
          div.classList.remove('spin-1');
          div.classList.add('spin-0');
        }
      });
    });
  };

  const observer = new IntersectionObserver(observerCallback, { threshold: [0.2, 0.8] });

  if (spinSectionOne) {
    observer.observe(spinSectionOne);
  }
}

{
  const spinSectionTwo = document.querySelector('#c2-p3'); 
  const mainDivs = document.querySelectorAll('.globe-element');

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      const ratio = entry.intersectionRatio;
      mainDivs.forEach(div => {
        if (entry.isIntersecting && ratio >= 0.8) {
          div.classList.add('spin-2');
          div.classList.remove('spin-1');
          div.classList.remove('spin-0');
        } else if (ratio <= 0.2) {
          div.classList.remove('spin-2');
        }
      });
    });
  };

  const observer = new IntersectionObserver(observerCallback, { 
    threshold: [0.2, 0.8] 
  });

  if (spinSectionTwo) {
    observer.observe(spinSectionTwo);
  }
}

const remToPx = (rem) => rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
window.chartColors = {
  red: '#a71e32',
  darkred: '#5d2c30',
  green: '#53917e',
  blue: '#0494d0',
};

var YEARS = ["1990", "1991", "1992", "1992", "1994", "1995", "1995", "1996", "1997", "1998", "1999", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"];
var config = {
  type: 'line',
  data: {
    labels: YEARS,
    datasets: [{
      label: "Low Income Countries",
      backgroundColor: window.chartColors.green,
      borderColor: window.chartColors.green,
     data: [2.4, 2.4, 2.3, 2.2, 2.1, 2.1, 2.1, 2.2, 2.2, 2.2, 1.9, 1.8, 1.6, 1.7, 1.9, 2.3, 2.7, 2.7, 2.5, 2.3, 2.4, 2.5, 2.7, 2.9, 2.9, 3, 2.9, 2.9, 3.2, 3.3, 3.2, 3.3, 3.4, 3.5],
      fill: false,
    }, {
      label: "Low-middle Income Countries",
      backgroundColor: window.chartColors.blue,
      borderColor: window.chartColors.blue,
     data: [9.1, 9.1, 9.0, 9.2, 9.3, 9.8, 9.8, 10.3, 10.6, 11.2, 10.8, 10.8, 10.6, 11.4, 11.4, 11.6, 12, 13.1, 13.1, 12.1, 11.9, 12.4, 12.8, 13.4, 13.4, 13.6,13.9, 14.2, 14.4, 14.5, 13.1, 12.9, 15.2, 15.8],
      fill: false,
    }, {
      label: "Upper-middle Income Countries",
      fill: false,
      backgroundColor: window.chartColors.red,
      borderColor: window.chartColors.red,
      data: [6.8, 6.7, 6.9, 7.0, 7.2, 7.4, 7.5, 7.8, 7.8, 8.2, 8.1, 8.3, 8.3, 8.8, 9.2, 9.0, 9.1, 9.0, 9.0, 8.0, 7.5, 6.7, 5.8, 5, 4.5, 4.5, 4.8, 4.8, 4.0, 3.8, 3.3, 3.3, 3.5, 3.4],
    }, {
      label: "High Income Countries",
      fill: false,
      backgroundColor: window.chartColors.darkred,
      borderColor: window.chartColors.darkred,
      data: [2.0, 2.0, 1.9, 2.0, 2.0, 2.1, 2.0, 2.0, 2.0, 2.1, 2.0, 1.9, 2.0, 2.0, 1.9, 1.9, 1.8, 1.8, 1.7, 1.6, 1.6, 1.6, 1.6, 1.6, 1.5, 1.5, 1.4, 1.3, 1.4, 1.3, 1.2, 1.2, 1.2, 1.2],
    }]
  },
  options: {
  responsive: true,
  maintainAspectRatio: false,
  title: {
    display: true,
    text: 'Estimated annual number of deaths attributed to ozone pollution per 100,000 people.',
    fontFamily: "'Indivisible', sans-serif",
    fontSize: remToPx(1.2),
  },
  tooltips: {
      mode: 'index',
      intersect: false,
  }, 
  scales: {
    xAxes: [{
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Year',
        fontFamily: "'Indivisible', sans-serif",
        fontSize: remToPx(1.2),
      },
      ticks: {
        fontFamily: "'Indivisible', sans-serif",
        fontSize: remToPx(.8),
      }
    }],
    yAxes: [{
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Estimated annual deaths per 100,000',
        fontFamily: "'Indivisible', san-serif",
        fontSize: remToPx(1.2),
      },
      ticks: {
        fontFamily: "'Indivisible', sans-serif",
        fontSize: remToPx(.8),
      }
    }]
  }
}
};

var ctx = document.getElementById("ozone-chart").getContext("2d");
var myLine = new Chart(ctx, config);
