
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

function closeMenu() {
  if (!navToggle || !navLinks) return;
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', '메뉴 열기');
  navLinks.classList.remove('is-open');
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navToggle.setAttribute('aria-label', isOpen ? '메뉴 열기' : '메뉴 닫기');
    navLinks.classList.toggle('is-open', !isOpen);
  });

  navLinks.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-inner')) closeMenu();
  });

  window.matchMedia('(min-width: 921px)').addEventListener('change', closeMenu);
}

const homeSections = [...document.querySelectorAll('.home-page .home-section[id]')];
const sectionLinks = [...document.querySelectorAll('.home-page .nav-links a[href^="#"]')];

if (homeSections.length && sectionLinks.length) {
  const setActiveSection = (sectionId) => {
    sectionLinks.forEach((link) => {
      if (link.getAttribute('href') === `#${sectionId}`) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  let scrollFrame;
  const updateActiveSection = () => {
    const marker = window.innerHeight * 0.35;
    const current = homeSections.reduce((active, section) => (
      section.getBoundingClientRect().top <= marker ? section : active
    ), homeSections[0]);
    setActiveSection(current.id);
  };

  window.addEventListener('scroll', () => {
    if (scrollFrame) cancelAnimationFrame(scrollFrame);
    scrollFrame = requestAnimationFrame(updateActiveSection);
  }, { passive: true });
  window.addEventListener('resize', updateActiveSection);
  updateActiveSection();
}
