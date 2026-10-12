/**
 * RESTRAINED & PURPOSEFUL GSAP MOTION SYSTEM
 * Strictly respects prefers-reduced-motion and gracefully degrades when scripts or GSAP are unavailable.
 */

export function initAnimations() {
  // Check user preference for reduced motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    console.info('Motion preference: reduced motion respected.');
    return;
  }

  // Verify GSAP is present
  if (typeof window.gsap === 'undefined') {
    console.info('GSAP not loaded; relying on native CSS styling.');
    return;
  }

  const { gsap, ScrollTrigger } = window;
  if (ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  // 1. Subtle Hero Entrance (Deliberate, refined reveal)
  const heroTL = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.9 } });

  heroTL
    .from('.hero-meta-kicker', { opacity: 0, y: -10, duration: 0.6 })
    .from('.hero-headline', { opacity: 0, y: 20, duration: 0.8 }, '-=0.4')
    .from('.hero-copy', { opacity: 0, y: 15, duration: 0.7 }, '-=0.5')
    .from('.hero-actions', { opacity: 0, y: 10, duration: 0.6 }, '-=0.4')
    .from('.hero-image-frame', { 
      opacity: 0, 
      scale: 0.96, 
      clipPath: 'inset(10% 0% 10% 0%)',
      duration: 1.1, 
      ease: 'power2.out' 
    }, '-=0.8')
    .from('.hero-image-stamp', { opacity: 0, y: 12, duration: 0.5 }, '-=0.4');

  // If ScrollTrigger is available, add gentle section reveals
  if (ScrollTrigger) {
    // 2. Featured Drinks Header Reveal
    gsap.from('.drinks-header', {
      scrollTrigger: {
        trigger: '.section-drinks',
        start: 'top 80%',
        once: true
      },
      opacity: 0,
      y: 24,
      duration: 0.8,
      ease: 'power2.out'
    });

    // 3. Featured Drinks Stagger
    gsap.from('.drinks-curated-grid > article', {
      scrollTrigger: {
        trigger: '.drinks-curated-grid',
        start: 'top 85%',
        once: true
      },
      opacity: 0,
      y: 30,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power2.out'
    });

    // 4. Craftsmanship Spread Reveal
    gsap.from('.craft-visual-mosaic', {
      scrollTrigger: {
        trigger: '.section-craft',
        start: 'top 75%',
        once: true
      },
      opacity: 0,
      x: -25,
      duration: 0.9,
      ease: 'power2.out'
    });

    gsap.from('.craft-story', {
      scrollTrigger: {
        trigger: '.section-craft',
        start: 'top 75%',
        once: true
      },
      opacity: 0,
      x: 25,
      duration: 0.9,
      ease: 'power2.out'
    });

    // 5. Atmosphere Spread Reveal
    gsap.from('.atmosphere-spread', {
      scrollTrigger: {
        trigger: '.section-atmosphere',
        start: 'top 75%',
        once: true
      },
      opacity: 0,
      y: 30,
      duration: 0.85,
      ease: 'power2.out'
    });
  }
}
