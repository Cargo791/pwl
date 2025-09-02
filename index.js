 const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  // Toggle menu
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Scroll change navbar
  window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

