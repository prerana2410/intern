// Get the navbar element
const navbar = document.getElementById('navbar');

// Function to change navbar style when scrolled
function changeNavbarStyle() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// Listen for scroll event
window.addEventListener('scroll', changeNavbarStyle);

// Optional: Change navbar background color on hover of menu items
const navLinks = document.querySelectorAll('#navbar ul li a');
navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    navbar.style.backgroundColor = '#444';
  });
  link.addEventListener('mouseout', () => {
    if (!navbar.classList.contains('scrolled')) {
      navbar.style.backgroundColor = '#333';
    }
  });
});
