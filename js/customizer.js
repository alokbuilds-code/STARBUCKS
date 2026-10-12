/**
 * INTERACTIVE DRINK CUSTOMIZER & DEMO ORDER TRAY
 * Handles size, milk, shots, pumps customization, live nutrition & demo localStorage tray.
 */

import { DRINKS_DATA } from './drinks-data.js';

let currentDrink = null;
let currentCustomization = null;

// Initialize demo tray state from localStorage
export function getDemoTray() {
  try {
    const raw = localStorage.getItem('sb_demo_tray');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export function saveDemoTray(tray) {
  try {
    localStorage.setItem('sb_demo_tray', JSON.stringify(tray));
    updateTrayBadge();
  } catch (e) {}
}

export function updateTrayBadge() {
  const tray = getDemoTray();
  const count = tray.reduce((acc, item) => acc + (item.quantity || 1), 0);
  const badge = document.getElementById('bag-badge');
  if (badge) {
    badge.textContent = count;
    badge.classList.remove('pop');
    void badge.offsetWidth; // force reflow
    badge.classList.add('pop');
    setTimeout(() => badge.classList.remove('pop'), 300);
  }
}

export function openDrinkCustomizer(drinkId) {
  const drink = DRINKS_DATA.find(d => d.id === drinkId) || DRINKS_DATA[0];
  currentDrink = drink;
  currentCustomization = {
    ...drink.defaultCustomization,
    sizeObj: drink.sizes.find(s => s.name === drink.defaultCustomization.size) || drink.sizes[0],
    price: drink.price,
    quantity: 1
  };

  renderCustomizerUI();
  
  const backdrop = document.getElementById('drawer-backdrop');
  const panel = document.getElementById('customizer-drawer');
  if (backdrop && panel) {
    backdrop.classList.add('active');
    panel.classList.add('active');
    panel.focus();
  }
}

export function closeAllDrawers() {
  const backdrop = document.getElementById('drawer-backdrop');
  const panels = document.querySelectorAll('.drawer-panel');
  const mobileNav = document.getElementById('mobile-nav-panel');
  const hamburger = document.getElementById('btn-hamburger');

  if (backdrop) backdrop.classList.remove('active');
  panels.forEach(p => p.classList.remove('active'));
  if (mobileNav) mobileNav.classList.remove('active');
  if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
}

function renderCustomizerUI() {
  const container = document.getElementById('customizer-body');
  if (!container || !currentDrink) return;

  const activeSize = currentCustomization.sizeObj;
  const currentPrice = (currentDrink.price + activeSize.priceDelta).toFixed(2);

  container.innerHTML = `
    <div class="customizer-product-summary">
      <img src="${currentDrink.image}" alt="${currentDrink.name}" class="customizer-img" />
      <div class="customizer-summary-text">
        <span class="badge-editorial badge-green">${currentDrink.kicker}</span>
        <h3>${currentDrink.name}</h3>
        <p>${currentDrink.roast}</p>
        <div class="customizer-nutrition-bar">
          <span><strong>Calories:</strong> ${activeSize.cal || currentDrink.calories}</span>
          <span><strong>Caffeine:</strong> ${activeSize.caf || currentDrink.caffeine}</span>
        </div>
      </div>
    </div>

    <!-- Size Choice -->
    <div class="control-group">
      <div class="control-label">
        <span>Cup Size</span>
        <span class="value">${activeSize.name} (${activeSize.oz})</span>
      </div>
      <div class="size-selector-grid">
        ${currentDrink.sizes.map(s => `
          <button type="button" class="size-chip ${s.name === activeSize.name ? 'active' : ''}" data-size="${s.name}">
            <span class="size-name">${s.name}</span>
            <span class="size-oz">${s.oz}</span>
          </button>
        `).join('')}
      </div>
    </div>

    <!-- Milk Choice -->
    <div class="control-group">
      <div class="control-label">
        <span>Milk / Cream Base</span>
        <span class="value">${currentCustomization.milk}</span>
      </div>
      <div class="option-chips-wrap">
        ${['Oatmilk', 'Whole Milk', 'Almondmilk', 'Coconutmilk', 'Nonfat Milk', 'Sweet Cream'].map(m => `
          <button type="button" class="option-chip ${m === currentCustomization.milk ? 'active' : ''}" data-milk="${m}">
            ${m}
          </button>
        `).join('')}
      </div>
    </div>

    <!-- Espresso Shots Stepper -->
    <div class="control-group">
      <div class="control-label">
        <span>Espresso Shots (${currentDrink.roastLevel})</span>
      </div>
      <div class="stepper-row">
        <span>Standard: ${currentDrink.defaultCustomization.shots} Shots</span>
        <div style="display:flex; align-items:center; gap:0.75rem;">
          <button type="button" class="stepper-btn" id="btn-shot-minus" aria-label="Decrease shot">−</button>
          <span class="stepper-value" id="shot-value">${currentCustomization.shots}</span>
          <button type="button" class="stepper-btn" id="btn-shot-plus" aria-label="Increase shot">+</button>
        </div>
      </div>
    </div>

    <!-- Syrup Pumps Stepper -->
    <div class="control-group">
      <div class="control-label">
        <span>Sweetness / Syrup Pumps</span>
      </div>
      <div class="stepper-row">
        <span>Flavour Intensity</span>
        <div style="display:flex; align-items:center; gap:0.75rem;">
          <button type="button" class="stepper-btn" id="btn-pump-minus" aria-label="Decrease pump">−</button>
          <span class="stepper-value" id="pump-value">${currentCustomization.pumps}</span>
          <button type="button" class="stepper-btn" id="btn-pump-plus" aria-label="Increase pump">+</button>
        </div>
      </div>
    </div>
  `;

  // Update Footer Price and Button
  const footer = document.getElementById('customizer-footer');
  if (footer) {
    footer.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
        <span style="font-size: 0.875rem; color: var(--color-ink-muted);">Demonstration Total:</span>
        <span style="font-family: var(--font-serif); font-size: 1.5rem; font-weight: 700; color: var(--color-ink-primary);">$${currentPrice}</span>
      </div>
      <button type="button" class="btn btn-primary" id="btn-add-to-tray" style="width: 100%;">
        Add to Handcrafted Tray
      </button>
    `;

    document.getElementById('btn-add-to-tray')?.addEventListener('click', handleAddToTray);
  }

  // Size Selector Events
  container.querySelectorAll('[data-size]').forEach(btn => {
    btn.addEventListener('click', () => {
      const sizeName = btn.getAttribute('data-size');
      const sizeObj = currentDrink.sizes.find(s => s.name === sizeName);
      if (sizeObj) {
        currentCustomization.sizeObj = sizeObj;
        currentCustomization.size = sizeName;
        renderCustomizerUI();
      }
    });
  });

  // Milk Selector Events
  container.querySelectorAll('[data-milk]').forEach(btn => {
    btn.addEventListener('click', () => {
      currentCustomization.milk = btn.getAttribute('data-milk');
      renderCustomizerUI();
    });
  });

  // Shot Stepper
  document.getElementById('btn-shot-minus')?.addEventListener('click', () => {
    if (currentCustomization.shots > 0) {
      currentCustomization.shots--;
      document.getElementById('shot-value').textContent = currentCustomization.shots;
    }
  });

  document.getElementById('btn-shot-plus')?.addEventListener('click', () => {
    if (currentCustomization.shots < 8) {
      currentCustomization.shots++;
      document.getElementById('shot-value').textContent = currentCustomization.shots;
    }
  });

  // Pump Stepper
  document.getElementById('btn-pump-minus')?.addEventListener('click', () => {
    if (currentCustomization.pumps > 0) {
      currentCustomization.pumps--;
      document.getElementById('pump-value').textContent = currentCustomization.pumps;
    }
  });

  document.getElementById('btn-pump-plus')?.addEventListener('click', () => {
    if (currentCustomization.pumps < 10) {
      currentCustomization.pumps++;
      document.getElementById('pump-value').textContent = currentCustomization.pumps;
    }
  });
}

function handleAddToTray() {
  const tray = getDemoTray();
  const calculatedPrice = (currentDrink.price + currentCustomization.sizeObj.priceDelta);

  const item = {
    id: `${currentDrink.id}-${Date.now()}`,
    drinkId: currentDrink.id,
    name: currentDrink.name,
    image: currentDrink.image,
    size: currentCustomization.size,
    milk: currentCustomization.milk,
    shots: currentCustomization.shots,
    pumps: currentCustomization.pumps,
    price: calculatedPrice,
    quantity: 1,
    timestamp: Date.now()
  };

  tray.push(item);
  saveDemoTray(tray);
  closeAllDrawers();
  showToast(`Added ${currentDrink.name} to your tray`);
}

export function openTrayDrawer() {
  renderTrayUI();
  const backdrop = document.getElementById('drawer-backdrop');
  const panel = document.getElementById('tray-drawer');
  if (backdrop && panel) {
    backdrop.classList.add('active');
    panel.classList.add('active');
    panel.focus();
  }
}

export function renderTrayUI() {
  const container = document.getElementById('tray-body');
  const footer = document.getElementById('tray-footer');
  if (!container || !footer) return;

  const tray = getDemoTray();

  if (tray.length === 0) {
    container.innerHTML = `
      <div class="tray-empty-state">
        <svg style="width:48px; height:48px; fill:var(--color-ink-faint); margin: 0 auto 1rem auto;" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
        <p style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--color-ink-primary); margin-bottom: 0.5rem;">Your tray is empty</p>
        <p style="font-size: 0.875rem;">Explore the handcrafted menu and tailor your morning ritual.</p>
      </div>
    `;
    footer.innerHTML = `
      <button type="button" class="btn btn-secondary" style="width: 100%;" onclick="document.getElementById('drawer-backdrop').click()">
        Continue Browsing
      </button>
    `;
    return;
  }

  const subtotal = tray.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  container.innerHTML = `
    <div class="demo-disclaimer-note">
      <strong>Portfolio Demonstration:</strong> This is a simulation tray. No commercial payment or real Starbucks transaction will occur.
    </div>
    <div class="tray-items-list">
      ${tray.map(item => `
        <div class="tray-item" data-item-id="${item.id}">
          <img src="${item.image}" alt="${item.name}" class="tray-item-img" />
          <div class="tray-item-info">
            <h4 class="tray-item-title">${item.name}</h4>
            <div class="tray-item-meta">
              ${item.size} · ${item.milk} · ${item.shots} shots · ${item.pumps} pumps
            </div>
            <div class="tray-item-price">$${item.price.toFixed(2)}</div>
          </div>
          <button type="button" class="btn-remove-item" data-remove="${item.id}" aria-label="Remove item">✕</button>
        </div>
      `).join('')}
    </div>
  `;

  footer.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
      <span style="font-size: 0.9375rem; color: var(--color-ink-secondary);">Estimated Total:</span>
      <span style="font-family: var(--font-serif); font-size: 1.5rem; font-weight: 700; color: var(--color-ink-primary);">$${subtotal.toFixed(2)}</span>
    </div>
    <div style="display: flex; gap: 0.75rem;">
      <button type="button" class="btn btn-secondary btn-pill-sm" id="btn-clear-tray" style="flex: 1;">
        Clear Tray
      </button>
      <button type="button" class="btn btn-primary" id="btn-demo-checkout" style="flex: 2;">
        Simulate Order Ahead
      </button>
    </div>
  `;

  // Item removal
  container.querySelectorAll('[data-remove]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-remove');
      const updated = getDemoTray().filter(it => it.id !== id);
      saveDemoTray(updated);
      renderTrayUI();
    });
  });

  // Clear Tray
  document.getElementById('btn-clear-tray')?.addEventListener('click', () => {
    saveDemoTray([]);
    renderTrayUI();
    showToast('Tray cleared');
  });

  // Checkout demo simulation
  document.getElementById('btn-demo-checkout')?.addEventListener('click', () => {
    closeAllDrawers();
    showToast('Simulated Order Placed · Pickup ready in 8-10 mins (Demo)');
    saveDemoTray([]);
  });
}

export function showToast(message) {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg class="toast-icon" viewBox="0 0 24 24">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
