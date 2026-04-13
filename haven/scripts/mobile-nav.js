// Make a variable for hamburger icon
const hamburgerBtn = document.getElementById("js-hamburger-button");

// const assigns a "constant variable" in JS
// hamburgerBtn is the name assigned the the variable
// document is a "property accessor"
// getElementById is a "method" (built in actions in JS)
// js-hamburger-button is a "parameter" representing an HTML ID attribute value

// Make a variable for mobile nav
const mobileNav = document.getElementById("js-mobile-nav");

// On nav button click, display (flex) mobile nav menu
const handleNavClick = () => {
  mobileNav.style.display = "flex";
};

// This process defines a "function" variable named handleNavClick
// Then styles the previously established mobileNav (CSS ID)

// Add event listener for click on hamburger icon
hamburgerBtn.addEventListener("click", handleNavClick);

// This creates an "Event Listener" method upon the (hamburgerBtn) const variable.
// The Event Listener responds to a mouse "click", and runs the (handleNavClick) function

// Make a variable for close button
const closeButton = document.getElementById("js-close-button");

// On close button click, display (none) mobile nav menu
const handleCloseClick = () => {
  mobileNav.style.display = "none";
};

// Add event listener for click on close button
closeButton.addEventListener("click", handleCloseClick);

