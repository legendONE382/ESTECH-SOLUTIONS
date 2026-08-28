const yearElement = document.getElementById('year');
if (yearElement) yearElement.textContent = new Date().getFullYear();
const nav = document.querySelector('.navbar');
const onScroll = () => {
  if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 18);
  document.documentElement.style.setProperty('--parallax', `${Math.min(window.scrollY * 0.035, 24)}px`);
};
onScroll();
addEventListener('scroll', onScroll, { passive: true });

document.body.classList.add('page-loaded');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Mobile menu close on link click
document.querySelectorAll('.navbar-collapse .nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) bsCollapse.hide();
    }
  });
});

// Active nav state
addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav .nav-link').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
