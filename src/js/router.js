/**
 * Router for handling navigation in the Roy Laboratory Website
 */

import { renderHome } from './pages/home.js';
import { renderResearch } from './pages/research.js';
import { renderMembers } from './pages/members.js';
import { renderPublications } from './pages/publications.js';
import { renderSudeshnaRoy } from './pages/sudeshna-roy.js';
import { renderNews } from './pages/news.js';
import { renderJoinUs } from './pages/join-us.js';
import { renderContact } from './pages/contact.js';
import { renderImpact } from './pages/impact.js';
import { renderPeople } from './pages/people.js';

/**
 * Main router function
 * Handles hash-based routing and renders appropriate page
 */
export function router() {
  const root = document.getElementById('app');
  const hash = (location.hash || '#home').replace('#', '');
  
  switch (hash) {
    case 'home':
      renderHome();
      break;
    case 'research':
      renderResearch(root);
      break;
    case 'members':
      renderMembers(root);
      break;
    case 'people':
      renderPeople();
      break;
    case 'publications':
      renderPublications();
      break;
    case 'sudeshna-roy':
      renderSudeshnaRoy();
      break;
    case 'news':
      renderNews();
      break;
    case 'join-us':
      renderJoinUs();
      break;
    case 'contact':
      renderContact();
      break;
    case 'impact':
      renderImpact();
      break;
    case 'research-details':
      // Redirect to main research page for unified experience
      renderResearch(root);
      break;
    default:
      renderHome();
      break;
  }
  
  // Scroll to top on navigation
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
