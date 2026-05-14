// Scroll-triggered fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Smooth nav active
const navLink = document.querySelector('.nav-link');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    document.querySelector('nav').style.borderBottomColor = '#2a2a2a';
  } else {
    document.querySelector('nav').style.borderBottomColor = 'var(--border)';
  }
});
