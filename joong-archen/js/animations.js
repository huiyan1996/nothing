document.addEventListener('DOMContentLoaded', function() {
  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Add animation classes to elements
  const addAnimationClasses = () => {
    // About section
    const aboutImage = document.querySelector('.about-image');
    const aboutText = document.querySelector('.about-text');
    
    if (aboutImage) aboutImage.classList.add('fade-left');
    if (aboutText) aboutText.classList.add('fade-right');
    
    // Portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
      item.classList.add('fade-up');
    });
    
    // Music cards
    const musicCards = document.querySelectorAll('.music-card');
    musicCards.forEach(card => {
      card.classList.add('fade-up');
    });
    
    // Contact sections
    const newsletter = document.querySelector('.newsletter');
    const booking = document.querySelector('.booking');
    
    if (newsletter) newsletter.classList.add('fade-left');
    if (booking) booking.classList.add('fade-right');
    
    // Section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
      title.classList.add('fade-up');
    });
  };
  
  // Observe elements
  const observeElements = () => {
    const elements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
    elements.forEach(el => {
      observer.observe(el);
    });
  };
  
  // Initialize animations
  addAnimationClasses();
  observeElements();
  
  // Parallax effect for hero section
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
  }
  
  // Typing animation for hero title (uncomment if needed)
  /*
  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    
    setTimeout(typeWriter, 500);
  }
  */
  
  // Add hover animation for social icons
  const socialIcons = document.querySelectorAll('.social-icon');
  socialIcons.forEach((icon, index) => {
    icon.style.animationDelay = `${index * 0.1}s`;
  });
});