/**
 * Roy Laboratory Website - Modular Entry Point
 * 
 * This file serves as the main entry point and coordinates all modules.
 * Individual page components are in src/js/pages/
 * Data modules are in src/js/data/
 * Utility functions are in src/js/utils.js
 * Routing logic is in src/js/router.js
 */

import { router } from './router.js';
import { setupMenu, setupMegaMenu } from './utils.js';

// Initialize the application
window.addEventListener('DOMContentLoaded', () => {
  // Set copyright year
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  // Setup mobile menu
  setupMenu();
  
  // Setup mega menu (currently disabled)
  setupMegaMenu();
  
  // Initialize routing on load
  router();
  
  // Listen for hash changes
  window.addEventListener('hashchange', router);
});

// Export router for external use if needed
export { router };
