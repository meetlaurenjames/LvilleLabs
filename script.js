document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('header nav a');

  // 1. Mobile Navigation Toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isActive = navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
      document.body.classList.toggle('no-scroll', isActive);
    });
  }

  // 2. Smooth Scrolling & Menu Auto-Close
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Handle smooth scroll ONLY for internal section anchors (e.g. #featured)
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(href);

        if (targetElement) {
          targetElement.scrollIntoView({ 
            behavior: 'smooth' 
          });
        }
      }

      // Close mobile overlay when a link is selected
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        if (navToggle) navToggle.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
    });
  });
});