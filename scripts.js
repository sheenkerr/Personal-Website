// Mobile Menu
function HamburgerMenu() {
  document.getElementById("mobile-menu").style.display = "block";
  // document.querySelector("footer").style = "display:none";
  document.querySelector("main").style = "display:none";
}
function CloseHamburgerMenu() {
  document.getElementById("mobile-menu").style.display = "none";
  document.querySelector("main").style = "display:block";
  // document.querySelector("footer").style = "display:block";
}

// Form Submission
function Success() {
  document.getElementById("contact-form").style.display = "none";
  document.getElementById("success-msg").style.display = "block";
}
