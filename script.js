// NAVBAR
const navbar = document.querySelector('.navbar');
const logoContainer = document.querySelector('[data-logo]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelectorAll('.nav-links li a');
const bookNowBtns = document.querySelectorAll('.book-btn, .service-btn');

// HERO BUTTONS
const heroViewPortfolio = document.querySelector('.hero-btn:nth-child(1)');
const heroBookSession = document.querySelector('.hero-btn:nth-child(2)');

// SERVICES BUTTONS
const serviceBookNow = document.querySelector('.service-card button:nth-child(4)');
const serviceViewPackages = document.querySelector('.service-card.featured button');
const serviceExploreMore = document.querySelector('.service-card:last-child button');

// TESTIMONIALS
const testimonialCards = document.querySelectorAll('.testimonial-card');
const nextBtn = document.querySelector('.testimonial-controls .next');
const prevBtn = document.querySelector('.testimonial-controls .prev');

// PORTFOLIO MODAL
const imgModal = document.getElementById('imgModal');
const modalImage = document.getElementById('modalImage');
const portfolioItems = document.querySelectorAll('.portfolio-item img');

/* ==========================
   FUNCTIONS
========================== */

// NAVBAR SCROLL TOGGLE
let lastScroll = 0;
function handleNavbarScroll() {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    navbar.style.top = '0';
    return;
  }
  if (currentScroll > lastScroll) {
    // scrolling down
    navbar.style.top = '-100px';
  } else {
    // scrolling up
    navbar.style.top = '0';
  }
  lastScroll = currentScroll;
}

// MOBILE MENU TOGGLE
function toggleMobileMenu() {
  mobileMenu.classList.toggle('active');
}

function closeMobileMenu() {
  mobileMenu.classList.remove('active');
}

// BUTTON NAVIGATION
function goToSection(sectionId) {
  document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// TESTIMONIAL SLIDER
let testimonialIndex = 0;

function showTestimonial(n) {
  testimonialCards.forEach(card => card.classList.remove('active'));
  testimonialCards[n].classList.add('active');
}

function nextTestimonial() {
  testimonialIndex = (testimonialIndex + 1) % testimonialCards.length;
  showTestimonial(testimonialIndex);
}

function prevTestimonial() {
  testimonialIndex = (testimonialIndex - 1 + testimonialCards.length) % testimonialCards.length;
  showTestimonial(testimonialIndex);
}

// PORTFOLIO MODAL
function openModal(img) {
  imgModal.style.display = 'flex';
  modalImage.src = img.src;
}

function closeModal() {
  imgModal.style.display = 'none';
}

/* ==========================
   EVENT LISTENERS
========================== */

// NAVBAR SCROLL
window.addEventListener('scroll', handleNavbarScroll);

// MOBILE MENU TOGGLE
menuToggle.addEventListener('click', toggleMobileMenu);
navLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

// HERO BUTTONS
heroViewPortfolio.addEventListener('click', () => goToSection('#portfolio'));
heroBookSession.addEventListener('click', () => goToSection('#contact'));

// SERVICES BUTTONS
serviceBookNow.addEventListener('click', () => goToSection('#contact'));
serviceExploreMore.addEventListener('click', () => goToSection('#hero'));

const bookNowBtns = document.querySelectorAll('.book-btn, .service-btn');

bookNowBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    goToSection('#contact');
    closeMobileMenu(); // optional: close mobile menu if open
  });
});

// TESTIMONIAL BUTTONS
nextBtn.addEventListener('click', nextTestimonial);
prevBtn.addEventListener('click', prevTestimonial);

// AUTO SLIDE TESTIMONIALS
setInterval(nextTestimonial, 6000);

// PORTFOLIO MODAL
portfolioItems.forEach(img => img.addEventListener('click', () => openModal(img)));
imgModal.addEventListener('click', closeModal);
