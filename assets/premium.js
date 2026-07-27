const nav = document.querySelector('.navbar');
const onScroll = () => {
  if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 18);
  document.documentElement.style.setProperty('--parallax', `${Math.min(window.scrollY * 0.035, 24)}px`);
};
onScroll();
addEventListener('scroll', onScroll, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
