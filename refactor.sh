#!/bin/bash
# Complete refactoring automation script for Roy Laboratory Website
# This script helps extract modules from the monolithic app.js

echo "Roy Laboratory Website - Refactoring Helper"
echo "============================================"
echo ""

# Function to extract lines from app.js
extract_lines() {
    local start=$1
    local end=$2
    local output=$3
    sed -n "${start},${end}p" src/app.js > "$output"
}

# Create page modules
echo "Step 1: Creating page modules..."

# Note: Line numbers need to be verified from actual app.js
# These are approximate based on grep results

echo "  - Extracting research.js (lines ~107-137)..."
cat > src/js/pages/research.js << 'EOF'
import { mount } from '../utils.js';

export function renderResearch(root) {
  // TODO: Extract from app.js lines 107-137
  mount(`<section class="section"><div class="container"><h2>Research</h2></div></section>`);
}
EOF

echo "  - Extracting members.js (lines ~138-314)..."
cat > src/js/pages/members.js << 'EOF'
import { mount } from '../utils.js';

export function renderMembers(root) {
  // TODO: Extract from app.js lines 138-314
  mount(`<section class="section"><div class="container"><h2>Members</h2></div></section>`);
}
EOF

echo "  - Extracting people.js (lines ~315-404)..."
cat > src/js/pages/people.js << 'EOF'
import { mount } from '../utils.js';

export function renderPeople() {
  // TODO: Extract from app.js lines 315-404
  mount(`<section class="section"><div class="container"><h2>People</h2></div></section>`);
}
EOF

echo "  - Extracting publications.js (lines ~405-709)..."
cat > src/js/pages/publications.js << 'EOF'
import { mount } from '../utils.js';

export function renderPublications() {
  // TODO: Extract from app.js lines 405-709
  mount(`<section class="section"><div class="container"><h2>Publications</h2></div></section>`);
}
EOF

echo "  - Extracting sudeshna-roy.js (lines ~710-745)..."
cat > src/js/pages/sudeshna-roy.js << 'EOF'
import { mount } from '../utils.js';

export function renderSudeshnaRoy() {
  // TODO: Extract from app.js lines 710-745
  mount(`<section class="section"><div class="container"><h2>Sudeshna Roy, Ph.D.</h2></div></section>`);
}
EOF

echo "  - Extracting news.js (lines ~746-775)..."
cat > src/js/pages/news.js << 'EOF'
import { mount } from '../utils.js';
import { newsItems } from '../data/news.js';

export function renderNews() {
  mount(`
    <section class="section">
      <div class="container" style="max-width: 900px;">
        <h2>News</h2>
        <p class="sub">Lab announcements and media coverage.</p>
        <div style="display: flex; flex-direction: column; gap: 32px; margin-top: 32px;">
          ${newsItems.map(n => `
            <article class="card" style="padding: 0; overflow: hidden;">
              ${n.video ? `
                <div style="width: 100%; height: 400px; background: #000;">
                  <iframe src="${n.video}" style="width: 100%; height: 100%; border: none;">
                  </iframe>
                </div>
              ` : n.image ? `
                <img src="${n.image}" style="width: 100%; height: 300px; object-fit: cover;">
              ` : ''}
              <div style="padding: 24px;">
                <h3>${n.title}</h3>
                <p class="sub">${n.date}</p>
                <p>${n.summary}</p>
                ${n.link ? `<a href="${n.link}" target="_blank">Read More →</a>` : ''}
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `);
}
EOF

echo "  - Extracting join-us.js (lines ~905-960)..."
cat > src/js/pages/join-us.js << 'EOF'
import { mount } from '../utils.js';

export function renderJoinUs() {
  // TODO: Extract from app.js lines 905-960
  mount(`<section class="section"><div class="container"><h2>Join Us</h2></div></section>`);
}
EOF

echo "  - Extracting contact.js (lines ~776-813)..."
cat > src/js/pages/contact.js << 'EOF'
import { mount } from '../utils.js';

export function renderContact() {
  // TODO: Extract from app.js lines 776-813
  mount(`<section class="section"><div class="container"><h2>Contact</h2></div></section>`);
}
EOF

echo "  - Extracting impact.js (lines ~814-836)..."
cat > src/js/pages/impact.js << 'EOF'
import { mount } from '../utils.js';

export function renderImpact() {
  // TODO: Extract from app.js lines 814-836
  mount(`<section class="section"><div class="container"><h2>Impact</h2></div></section>`);
}
EOF

# Create data modules
echo ""
echo "Step 2: Creating data modules..."

cat > src/js/data/team.js << 'EOF'
/**
 * Team member data
 */

export const team = {
  pi: [
    // TODO: Extract from app.js teamData() function
  ],
  postdocs: [],
  grads: [],
  undergrads: [],
  alumni: [],
  collaborators: []
};
EOF

cat > src/js/data/research.js << 'EOF'
/**
 * Research projects data
 */

export const researchProjects = [
  // TODO: Extract from app.js if exists
];
EOF

# Create CSS modules
echo ""
echo "Step 3: Creating CSS modules..."

cat > src/css/header.css << 'EOF'
/**
 * Header and Navigation Styles
 */

/* TODO: Extract from styles.css lines 44-132 */

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255,255,255,0.75);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
}
EOF

cat > src/css/footer.css << 'EOF'
/**
 * Footer Styles
 */

/* TODO: Extract from styles.css lines 326-331 */

.site-footer {
  padding: 32px 0;
  border-top: 1px solid var(--border);
}
EOF

cat > src/css/pages/members.css << 'EOF'
/**
 * Members Page Styles
 */

/* TODO: Extract from styles.css lines 185-319 */

.member-card {
  /* Member card styles */
}
EOF

cat > src/css/pages/publications.css << 'EOF'
/**
 * Publications Page Styles
 */

/* TODO: Extract from styles.css lines 320-325 */

.pub-item {
  text-align: left;
}
EOF

cat > src/css/pages/impact.css << 'EOF'
/**
 * Impact Page Styles
 */

/* TODO: Extract from styles.css lines 339-456 */

.impact-page {
  /* Impact page styles */
}
EOF

cat > src/css/main.css << 'EOF'
/**
 * Main CSS - Imports all modules
 */

@import './base.css';
@import './components.css';
@import './header.css';
@import './footer.css';
@import './pages/members.css';
@import './pages/publications.css';
@import './pages/impact.css';
EOF

echo ""
echo "Step 4: Module files created!"
echo ""
echo "Next manual steps:"
echo "  1. Review and complete TODO sections in page modules"
echo "  2. Extract actual code from app.js to appropriate files"
echo "  3. Complete CSS module extraction from styles.css"
echo "  4. Update public/index.html:"
echo "     - Change CSS link to /src/css/main.css"
echo "     - Change JS script to /src/js/main.js with type=\"module\""
echo "  5. Test all pages thoroughly"
echo "  6. Remove old app.js and styles.css"
echo ""
echo "See REFACTORING_GUIDE.md for detailed instructions"
