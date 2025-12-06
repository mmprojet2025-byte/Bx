// ================================
// Bx-Jeunes Impact — script consolidé
// ================================

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Bouton "Retour en haut" ---------- */
(() => {
  const backToTop = document.getElementById('backToTop');
  if (!backToTop) return;

  const toggleBackToTop = () => {
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
  };
  toggleBackToTop();
  window.addEventListener('scroll', toggleBackToTop, { passive: true });

  backToTop.addEventListener('click', () => {
    // Fallback si comportement lisse non supporté ou préférence motion réduite
    if ('scrollBehavior' in document.documentElement.style && !prefersReduced) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  });

  backToTop.setAttribute('aria-label', 'Remonter en haut');
})();

/* ---------- Menu mobile ---------- */
(() => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');
  if (!menuToggle || !navMenu) return;

  // ARIA / cible contrôlée
  if (!navMenu.id) navMenu.id = 'mainmenu';
  menuToggle.setAttribute('aria-controls', navMenu.id);
  menuToggle.setAttribute('aria-expanded', 'false');

  const openClass = 'show';

  const setExpanded = (isOpen) => {
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) navMenu.classList.add(openClass);
    else navMenu.classList.remove(openClass);
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = !navMenu.classList.contains(openClass);
    setExpanded(isOpen);
  });

  // Fermer au clic sur un lien du menu
  navMenu.addEventListener('click', (e) => {
    if (e.target.matches('a') && navMenu.classList.contains(openClass)) {
      setExpanded(false);
    }
  });

  // Fermer au clic en dehors
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains(openClass)) {
      setExpanded(false);
    }
  }, { passive: true });

  // Fermer avec Échap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains(openClass)) {
      setExpanded(false);
      menuToggle.focus();
    }
  });
})();

/* ---------- Carrousel Actualités ---------- */
(() => {
  const slides = document.querySelectorAll('.slide');
  if (!slides.length) return;

  let index = 0;
  let timer = null;

  const setActive = (i) => {
    slides.forEach((s) => s.classList.remove('active'));
    if (slides[i]) slides[i].classList.add('active');
  };

  const nextSlide = () => {
    setActive(index);
    index = (index + 1) % slides.length;
  };

  // État initial (même si prefers-reduced-motion)
  setActive(0);

  // Lecture auto seulement si animations autorisées
  if (!prefersReduced) {
    const start = () => { if (!timer) timer = setInterval(nextSlide, 3000); };
    const stop  = () => { if (timer) { clearInterval(timer); timer = null; } };

    start();

    // Pause au survol du carrousel
    const carousel = document.querySelector('.news .carousel') || document.querySelector('.carousel');
    if (carousel) {
      carousel.addEventListener('mouseenter', stop);
      carousel.addEventListener('mouseleave', start);
    }

    // Pause quand l’onglet est masqué (économie CPU/batterie)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop();
      else start();
    });
  }
})();
