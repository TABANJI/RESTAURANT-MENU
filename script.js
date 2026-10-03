document.documentElement.classList.add('js');

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const navLinks = document.querySelectorAll('.main-nav a');
const sections = document.querySelectorAll('main section[id]');

const updateActiveNavigation = () => {
  let currentSection = 'home';
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 180) currentSection = section.id;
  });

  navLinks.forEach((link) => {
    const target = link.getAttribute('href').slice(1);
    link.classList.toggle('active', target === currentSection || (target === 'menu' && currentSection === 'best-sellers'));
  });
};

window.addEventListener('scroll', updateActiveNavigation, { passive: true });
updateActiveNavigation();

document.querySelectorAll('.add-button').forEach((button) => {
  button.addEventListener('click', () => {
    const originalText = button.firstChild.textContent;
    button.firstChild.textContent = 'Added ';
    button.classList.add('added');
    window.setTimeout(() => {
      button.firstChild.textContent = originalText;
      button.classList.remove('added');
    }, 1400);
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.main-nav');
const menuBackdrop = document.querySelector('.menu-backdrop');

const closeMenu = () => {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open menu');
  mobileMenu.classList.remove('is-open');
  menuBackdrop.classList.remove('is-visible');
  document.body.classList.remove('menu-open');
};

const openMenu = () => {
  menuToggle.setAttribute('aria-expanded', 'true');
  menuToggle.setAttribute('aria-label', 'Close menu');
  mobileMenu.classList.add('is-open');
  menuBackdrop.classList.add('is-visible');
  document.body.classList.add('menu-open');
};

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  isOpen ? closeMenu() : openMenu();
});

mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
menuBackdrop.addEventListener('click', closeMenu);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) closeMenu();
});
