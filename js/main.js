/**
 * MAIN ES MODULE ENTRY POINT
 * Pairs digital art direction with clean vanilla JS functionality.
 */

import { DRINKS_DATA } from './drinks-data.js';
import { 
  openDrinkCustomizer, 
  openTrayDrawer, 
  closeAllDrawers, 
  updateTrayBadge,
  showToast 
} from './customizer.js';
import { 
  openStoreLocator, 
  updateHeaderStoreLabel 
} from './store-locator.js';
import { initAnimations } from './animations.js';

// Seasonal Configuration Data
const SEASONAL_DATA = {
  autumn: {
    badge: 'Seasonal Harvest Reserve',
    title: 'Warm Spices & Toasted Pecan Moments',
    description: 'As golden light filters through early morning branches, our baristas craft the season’s signature comfort: Iced Pecan Crunch Cream Chai and handcrafted Pumpkin Spice Latte served in warm amber glass.',
    pairing: 'Barista recommendation: Pair with fresh warm Pecan Crumble Tart or Maple Leaf pastry.',
    image: 'assets/images/sb_asset_112873.jpg',
    bg: '#F8F3EA',
    badgeColor: '#B55734'
  },
  winter: {
    badge: 'Winter Hearth Collection',
    title: 'Fireside Ceramics & Dark Roast Comfort',
    description: 'When temperatures plunge, we return to deep Latin American dark roasts poured steaming into classic ceramic mugs, accompanied by spiced Chestnut Praline and Peppermint Mocha.',
    pairing: 'Barista recommendation: Pair with traditional Holiday Gingerbread Loaf or Cranberry Bliss Bar.',
    image: 'assets/images/137-112942.jpg',
    bg: '#F4EFEA',
    badgeColor: '#4A3026'
  },
  spring: {
    badge: 'Spring Botanical Craft',
    title: 'Shade-Grown Matcha & Delicate Blooms',
    description: 'A celebration of renewal. Ceremonial shade-grown Japanese matcha whisked with oatmilk and crowned with artisanal latte leaf art, alongside bright, floral honey citrus notes.',
    pairing: 'Barista recommendation: Pair with iced lemon loaf or warm butter croissant.',
    image: 'assets/images/drink_matcha_iced.jpg',
    bg: '#EEF6F2',
    badgeColor: '#006241'
  },
  summer: {
    badge: 'Summer Cold Craft',
    title: 'Slow Steeped Cold Brew & Nitro Tap',
    description: 'Cool off with 20-hour cold steeped coffee infused with velvety nitrogen micro-bubbles and a light cascade of vanilla sweet cream for pure summer replenishment.',
    pairing: 'Barista recommendation: Pair with whole butter madeleines or almond biscotti.',
    image: 'assets/images/sb_asset_113070.jpg',
    bg: '#F3EFE7',
    badgeColor: '#00754A'
  }
};

// Roast Spectrum Data
const ROAST_DATA = {
  blonde: {
    name: 'Starbucks® Blonde Roast',
    notes: 'Lighter-bodied with mellow, subtle nuances. Gently roasted to highlight delicate citrus notes and a velvety smooth, naturally sweet finish. Ideal in Shaken Espresso.'
  },
  medium: {
    name: 'Signature Medium Roast (Pike Place®)',
    notes: 'Approachable and balanced. Smooth Latin American coffees delivering rich harmony, toasted nuts, and subtle hints of chocolate cocoa.'
  },
  dark: {
    name: 'Espresso & Dark Italian Roast',
    notes: 'Fuller-bodied and bold. Robust caramelized sugars, smokiness, and profound depth that stands tall when embraced by steamed microfoam milk.'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial State
  updateTrayBadge();
  updateHeaderStoreLabel();

  // 2. Header Scroll Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // 3. Mobile Navigation Toggle
  const hamburger = document.getElementById('btn-hamburger');
  const mobileNav = document.getElementById('mobile-nav-panel');
  const backdrop = document.getElementById('drawer-backdrop');

  hamburger?.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeAllDrawers();
    } else {
      hamburger.setAttribute('aria-expanded', 'true');
      mobileNav.classList.add('active');
      backdrop.classList.add('active');
    }
  });

  // Mobile nav link clicks
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      closeAllDrawers();
    });
  });

  // 4. Backdrop & Drawer Close Handlers
  backdrop?.addEventListener('click', closeAllDrawers);
  document.querySelectorAll('.btn-drawer-close').forEach(btn => {
    btn.addEventListener('click', closeAllDrawers);
  });

  // Escape Key to close drawers
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllDrawers();
    }
  });

  // 5. Drawer Triggers
  document.getElementById('btn-open-tray')?.addEventListener('click', openTrayDrawer);
  document.getElementById('btn-find-store')?.addEventListener('click', openStoreLocator);
  document.getElementById('btn-footer-store')?.addEventListener('click', openStoreLocator);
  document.getElementById('btn-mobile-store')?.addEventListener('click', () => {
    closeAllDrawers();
    openStoreLocator();
  });

  // Drink Customize buttons
  document.querySelectorAll('[data-open-customize]').forEach(btn => {
    btn.addEventListener('click', () => {
      const drinkId = btn.getAttribute('data-open-customize');
      openDrinkCustomizer(drinkId);
    });
  });

  // 6. Drink Category Filter Tabs
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const category = tab.getAttribute('data-category');
      const cards = document.querySelectorAll('.drinks-curated-grid > article');

      cards.forEach(card => {
        const cardCat = card.getAttribute('data-drink-cat');
        if (category === 'all' || cardCat === category) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 7. Seasonal Campaign Switcher
  const seasonalSection = document.getElementById('seasonal');
  const seasonBadge = document.getElementById('season-badge');
  const seasonTitle = document.getElementById('season-title');
  const seasonDesc = document.getElementById('season-desc');
  const seasonPairing = document.getElementById('season-pairing');
  const seasonImg = document.getElementById('season-img');

  document.querySelectorAll('.season-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.season-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const seasonKey = btn.getAttribute('data-season');
      const data = SEASONAL_DATA[seasonKey];
      if (data) {
        seasonalSection.style.backgroundColor = data.bg;
        seasonBadge.textContent = data.badge;
        seasonBadge.style.color = data.badgeColor;
        seasonTitle.textContent = data.title;
        seasonDesc.textContent = data.description;
        seasonPairing.textContent = data.pairing;
        seasonPairing.style.borderLeftColor = data.badgeColor;
        
        // Smooth image crossfade
        seasonImg.style.opacity = '0.4';
        setTimeout(() => {
          seasonImg.src = data.image;
          seasonImg.style.opacity = '1';
        }, 160);
      }
    });
  });

  // 8. Roast Spectrum Tabs
  const roastName = document.getElementById('roast-name');
  const roastNotes = document.getElementById('roast-notes');

  document.querySelectorAll('.roast-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.roast-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const roastKey = tab.getAttribute('data-roast');
      const info = ROAST_DATA[roastKey];
      if (info) {
        roastName.textContent = info.name;
        roastNotes.textContent = info.notes;
      }
    });
  });

  // 9. Newsletter Form Submission
  const newsletterForm = document.getElementById('newsletter-form');
  newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('newsletter-email');
    if (input && input.value.trim() && input.checkValidity()) {
      showToast(`Thank you! You are subscribed to Reserve Coffee Stories with ${input.value}`);
      input.value = '';
    } else {
      showToast('Please enter a valid email address.');
    }
  });

  // 10. GSAP Motion
  initAnimations();
});
