$(document).ready(function(){
  $('.slider').slick({
      arrows: false,
      dots: true,
      appendDots: '.slider-dots',
      dotsClass: 'dots'
  });

  let hamburger = document.querySelector('.hamberger'); 
  let times = document.querySelector('.times');
  let mobileNav = document.querySelector('.mobile-nav');

  // Function to open mobile menu
  function openMobileNav() {
      mobileNav.classList.add('open');  
  }

  // Function to close mobile menu
  function closeMobileNav() {
      mobileNav.classList.remove('open');  
  }

  // Toggle mobile menu when hamburger icon is clicked
  hamburger.addEventListener('click', function(){
      if (mobileNav.classList.contains('open')) {
          closeMobileNav();
      } else {
          openMobileNav();
      }
  });

  // Close mobile menu when close icon is clicked
  times.addEventListener('click', function(){
      closeMobileNav();
  });

  // Close mobile menu when clicking anywhere on the screen outside the menu
  document.addEventListener('click', function(event) {
      if (!mobileNav.contains(event.target) && !hamburger.contains(event.target)) {
          closeMobileNav();
      }
  });
});



