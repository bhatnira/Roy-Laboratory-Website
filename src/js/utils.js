/**
 * Utility functions for the Roy Laboratory Website
 */

/**
 * Mount HTML content into the app container
 * @param {string} html - HTML string to inject
 */
export function mount(html) {
  const app = document.getElementById('app');
  if (!app) {
    console.error('App container not found');
    return;
  }
  app.innerHTML = html;
}

/**
 * Setup mobile hamburger menu
 */
export function setupMenu() {
  const btn = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  btn?.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex';
  });
}

/**
 * Setup mega menu (currently disabled)
 */
export function setupMegaMenu() {
  // Disable mega menu collapsible behavior
  return;
}
