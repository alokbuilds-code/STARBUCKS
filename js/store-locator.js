/**
 * INTERACTIVE STORE LOCATOR DRAWER
 * Enables live filtering by city, neighborhood and amenities.
 */

import { STORES_DATA } from './stores-data.js';
import { showToast, closeAllDrawers } from './customizer.js';

let activeFilter = 'all';
let searchQuery = '';

export function getSelectedStore() {
  try {
    const raw = localStorage.getItem('sb_preferred_store');
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

export function setSelectedStore(store) {
  try {
    localStorage.setItem('sb_preferred_store', JSON.stringify(store));
    updateHeaderStoreLabel();
  } catch (e) {}
}

export function updateHeaderStoreLabel() {
  const store = getSelectedStore();
  const label = document.getElementById('header-store-label');
  if (label) {
    if (store) {
      label.textContent = store.city;
    } else {
      label.textContent = 'Find a Café';
    }
  }
}

export function openStoreLocator() {
  renderStoreLocatorUI();
  const backdrop = document.getElementById('drawer-backdrop');
  const panel = document.getElementById('stores-drawer');
  if (backdrop && panel) {
    backdrop.classList.add('active');
    panel.classList.add('active');
    panel.focus();
  }
}

export function renderStoreLocatorUI() {
  const container = document.getElementById('stores-body');
  if (!container) return;

  const filtered = STORES_DATA.filter(store => {
    const matchesSearch = !searchQuery || 
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.address.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter = activeFilter === 'all' || store.tags.includes(activeFilter);

    return matchesSearch && matchesFilter;
  });

  const preferred = getSelectedStore();

  container.innerHTML = `
    <div>
      <div class="store-search-bar">
        <svg style="width:20px; height:20px; fill:var(--color-ink-muted); margin-left:0.5rem; align-self:center;" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
        <input 
          type="text" 
          class="store-input" 
          id="store-search-input" 
          placeholder="Search by city, address or zip code..." 
          value="${searchQuery}" 
        />
      </div>

      <div class="store-filter-tags">
        <button type="button" class="store-filter-chip ${activeFilter === 'all' ? 'active' : ''}" data-filter="all">All Cafés</button>
        <button type="button" class="store-filter-chip ${activeFilter === 'nitro' ? 'active' : ''}" data-filter="nitro">Nitro on Tap</button>
        <button type="button" class="store-filter-chip ${activeFilter === 'reserve' ? 'active' : ''}" data-filter="reserve">Reserve Bar</button>
        <button type="button" class="store-filter-chip ${activeFilter === 'drivethru' ? 'active' : ''}" data-filter="drivethru">Drive-Thru</button>
      </div>
    </div>

    <div class="stores-list">
      ${filtered.length === 0 ? `
        <div style="text-align:center; padding: 2.5rem 1rem; color:var(--color-ink-muted);">
          <p style="font-weight: 600;">No locations match your search.</p>
          <p style="font-size: 0.8125rem; margin-top: 0.25rem;">Try searching 'Seattle', 'Chicago' or 'New York'.</p>
        </div>
      ` : filtered.map(store => {
        const isPreferred = preferred && preferred.id === store.id;
        return `
          <div class="store-card" style="${isPreferred ? 'border-color: var(--color-green-primary); background-color: var(--color-green-soft);' : ''}">
            <div class="store-card-header">
              <span class="store-name">${store.name}</span>
              <span class="store-distance">${store.distance}</span>
            </div>
            <div class="store-address">${store.address}</div>
            <div class="store-hours">🟢 ${store.hours}</div>
            <div class="store-amenities">
              ${store.amenities.map(a => `<span class="amenity-badge">${a}</span>`).join('')}
            </div>
            <div style="margin-top: 0.5rem; display: flex; justify-content: flex-end;">
              <button type="button" class="btn btn-pill-sm ${isPreferred ? 'btn-primary' : 'btn-secondary'}" data-select-store="${store.id}">
                ${isPreferred ? '✓ Selected Café' : 'Make My Store'}
              </button>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  // Search Input Event
  const searchInput = document.getElementById('store-search-input');
  if (searchInput) {
    searchInput.focus();
    searchInput.setSelectionRange(searchInput.value.length, searchInput.value.length);
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderStoreLocatorUI();
    });
  }

  // Filter Chips Events
  container.querySelectorAll('[data-filter]').forEach(chip => {
    chip.addEventListener('click', () => {
      activeFilter = chip.getAttribute('data-filter');
      renderStoreLocatorUI();
    });
  });

  // Select Store Event
  container.querySelectorAll('[data-select-store]').forEach(btn => {
    btn.addEventListener('click', () => {
      const storeId = btn.getAttribute('data-select-store');
      const store = STORES_DATA.find(s => s.id === storeId);
      if (store) {
        setSelectedStore(store);
        closeAllDrawers();
        showToast(`Preferred store set to ${store.name}`);
      }
    });
  });
}
