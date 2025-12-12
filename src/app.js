// Simple client-side router
const routes = {
  home: renderHome,
  research: renderResearch,
  people: renderPeople,
  publications: renderPublications,
  news: renderNews,
  contact: renderContact,
  impact: renderImpact,
};

function navigate() {
  const hash = (location.hash || '#home').replace('#', '');
  const view = routes[hash] || renderHome;
  view();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('hashchange', navigate);
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  setupMenu();
  setupMegaMenu();
  navigate();
});

function setupMenu() {
  const btn = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  btn?.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex';
  });
}

function setupMegaMenu() {
  const mega = document.getElementById('mega');
  const items = document.querySelectorAll('.nav.nav--broad .nav-item');
  const panels = {
    about: document.getElementById('panel-about'),
    research: document.getElementById('panel-research'),
    centers: document.getElementById('panel-centers'),
    education: document.getElementById('panel-education'),
    news: document.getElementById('panel-news'),
  };
  items.forEach(btn => {
    const key = btn.getAttribute('data-panel');
    const open = () => {
      mega.classList.add('open');
      Object.values(panels).forEach(el => el.style.display = 'none');
      panels[key].style.display = 'block';
    };
    btn.addEventListener('mouseenter', open);
    btn.addEventListener('click', open);
  });
  mega.addEventListener('mouseleave', () => mega.classList.remove('open'));
  // Close mega when a link inside is clicked (navigate away)
  mega.addEventListener('click', (e) => {
    const target = e.target.closest('a[href^="#"]');
    if (target) {
      mega.classList.remove('open');
    }
  });
}

function mount(html) {
  const app = document.getElementById('app');
  app.innerHTML = html;
}

function renderHome() {
  mount(`
  <section class="section" id="slideshow">
    <div class="container">
      <!-- Swiper -->
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="/public/assets/images/IMG_3773.jpg" alt="Roy Lab photo 1" /></div>
          <div class="swiper-slide"><img src="/public/assets/images/IMG_3785.jpg" alt="Roy Lab photo 2" /></div>
          <div class="swiper-slide"><img src="/public/assets/images/IMG_3815.jpg" alt="Roy Lab photo 3" /></div>
          <div class="swiper-slide"><img src="/public/assets/images/IMG_3815.jpg" alt="Roy Lab photo 4" /></div>
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>
        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="card" style="padding:20px">
        <h3 style="margin:0">The Roy Laboratory has moved to UT Health Science Center on November 8, 2024</h3>
      </div>
      <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 16px">
        <div class="card" style="padding:20px; display:flex; align-items:center;">
          <div>
            <address style="font-style: normal; color: var(--text)">
              <strong>UTHSC - Roy Laboratory</strong><br/>
            </address>
            <div style="margin-top:10px; color: var(--text)">
              <div>881 Madison Avenue</div>
              <div>Pharmacy Building_05_571</div>
              <div>Memphis, TN 38163</div>
              <div><a href="mailto:roy@uthsc.edu">roy@uthsc.edu</a></div>
            </div>
          </div>
        </div>
        <div class="card" style="padding:0; overflow:hidden; display:flex">
          <iframe title="UTHSC Map" src="https://www.google.com/maps?q=881+Madison+Avenue,+Pharmacy+Building_05_571,+Memphis,+TN+38163&output=embed" width="100%" style="border:0; flex:1; min-height:260px" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </section>
  `);

  // Initialize Swiper
  new Swiper('.swiper', {
    loop: true,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    autoplay: { delay: 4000, disableOnInteraction: false },
    effect: 'slide',
    speed: 600,
  });
}

function renderResearch() {
  mount(`
  <section class="section">
    <div class="container">
      <h2>Research</h2>
      <p class="sub">Overview of active projects and themes.</p>
      <div class="grid cards">
        ${researchItems().map(r => `
          <div class="card">
            <h3>${r.title}</h3>
            <p>${r.summary}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
  `);
}

function renderPeople() {
  mount(`
  <section class="section">
    <div class="container">
      <h2>People</h2>
      <p class="sub">Meet the team.</p>

      <h3>Principal Investigator</h3>
      <div class="grid">
        ${people().pi.map(p => `
          <div class="card people-card">
            <div class="avatar">${p.photo ? `<img src="${p.photo}" alt="${p.name}" />` : ''}</div>
            <div>
              <h3>${p.name}</h3>
              <p class="role">${p.role}</p>
            </div>
          </div>
        `).join('')}
      </div>

      <h3 style="margin-top:24px">Post-Doctoral Researchers</h3>
      <div class="grid">
        ${people().postdocs.map(p => `
          <div class="card people-card">
            <div class="avatar">${p.photo ? `<img src="${p.photo}" alt="${p.name}" />` : ''}</div>
            <div>
              <h3>${p.name}</h3>
              <p class="role">${p.role}</p>
            </div>
          </div>
        `).join('')}
      </div>

      <h3 style="margin-top:24px">Current Graduate Students</h3>
      <div class="grid">
        ${people().grads.map(p => `
          <div class="card people-card">
            <div class="avatar">${p.photo ? `<img src="${p.photo}" alt="${p.name}" />` : ''}</div>
            <div>
              <h3>${p.name}</h3>
              <p class="role">${p.role}</p>
            </div>
          </div>
        `).join('')}
      </div>

      <h3 style="margin-top:24px">Current Undergraduate Students</h3>
      <div class="grid">
        ${people().undergrads.map(p => `
          <div class="card people-card">
            <div class="avatar">${p.photo ? `<img src="${p.photo}" alt="${p.name}" />` : ''}</div>
            <div>
              <h3>${p.name}</h3>
              <p class="role">${p.role}</p>
            </div>
          </div>
        `).join('')}
      </div>

      <h3 style="margin-top:24px">Alumni</h3>
      <div class="grid">
        ${people().alumni.map(p => `
          <div class="card people-card">
            <div class="avatar">${p.photo ? `<img src="${p.photo}" alt="${p.name}" />` : ''}</div>
            <div>
              <h3>${p.name}</h3>
              <p class="role">${p.role}</p>
            </div>
          </div>
        `).join('')}
      </div>

      <h3 style="margin-top:24px">Collaborators</h3>
      <div class="grid">
        ${people().collaborators.map(p => `
          <div class="card people-card">
            <div class="avatar">${p.photo ? `<img src="${p.photo}" alt="${p.name}" />` : ''}</div>
            <div>
              <h3>${p.name}</h3>
              <p class="role">${p.role}</p>
            </div>
          </div>
        `).join('')}
      </div>

    </div>
  </section>
  `);
}

function renderPublications() {
  mount(`
  <section class="section">
    <div class="container">
      <h2>Publications</h2>
      <p class="sub">Selected publications from the lab.</p>
      <div class="grid">
        ${publications().map(p => `
          <div class="pub-item">
            <div>
              <h3>${p.title}</h3>
              <p class="meta">${p.authors} — ${p.venue} (${p.year})</p>
            </div>
            <div class="links">
              ${p.doi ? `<a href="${p.doi}" target="_blank" rel="noopener">DOI</a>` : ''}
              ${p.pdf ? `<a href="${p.pdf}" target="_blank" rel="noopener">PDF</a>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
  `);
}

function renderNews() {
  mount(`
  <section class="section">
    <div class="container">
      <h2>News</h2>
      <p class="sub">Lab announcements and media coverage.</p>
      <div class="grid">
        ${newsItems().map(n => `
          <article class="card">
            <h3>${n.title}</h3>
            <p class="sub">${n.date}</p>
            <p>${n.summary}</p>
          </article>
        `).join('')}
      </div>
    </div>
  </section>
  `);
}

function renderContact() {
  mount(`
  <section class="section">
    <div class="container">
      <h2>Contact</h2>
      <p class="sub">Get in touch with the Roy Laboratory.</p>
      <form class="card" id="contact-form">
        <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 12px">
          <div>
            <label for="name">Name</label>
            <input id="name" name="name" required />
          </div>
          <div>
            <label for="email">Email</label>
            <input id="email" name="email" type="email" required />
          </div>
        </div>
        <div style="margin-top: 12px">
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <div style="margin-top: 12px">
          <button class="button" type="submit">Send</button>
        </div>
      </form>
    </div>
  </section>
  `);

  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    alert(`Thanks, ${data.name}! We'll be in touch at ${data.email}.`);
    form.reset();
  });
}

function renderImpact() {
  mount(`
  <section class="section impact-page">
    <div class="container">
      <h2>Our Mission Statement</h2>
      <div class="grid impact-grid">
        <div>
          <div class="card impact-copy">
            <p>We are an interdisciplinary research group working at the interface of chemistry and biology. We are particularly interested in developing tool compounds to enrich our current understanding of anti-infectives and modulate protein-protein interactions and advance the drug discovery campaigns against drug-resistant infectious diseases and “undruggable” cancer targets.</p>
            <p>We use our expertise in organic synthesis to develop new synthetic methods, discover new chemical reactivity, and functionalize natural products. We use small molecules to probe specific questions in biology and utilize structure-activity relationship studies to optimize small molecules into lead chemotherapeutic agents aimed at combating the growing challenge of antimicrobial resistance.</p>
          </div>
        </div>
        <div class="media impact-video">
          <div class="video-wrap">
            <iframe src="https://www.youtube.com/embed/858_fV2-xY8" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
  `);
}

// Data (Placeholder)
function researchItems() {
  return [
    { title: 'Computational Models of Tissue Dynamics', summary: 'Developing hybrid models that combine mechanistic insights with machine learning.' },
    { title: 'Bioinformatics Pipelines for Multi-Omics', summary: 'Designing scalable pipelines for integrative analysis across data modalities.' },
    { title: 'Image-Based Phenotyping', summary: 'Using advanced imaging and computer vision to characterize biological structures.' },
  ];
}

function people() {
  return {
    pi: [
      { name: 'Dr. A. Roy', role: 'Principal Investigator', photo: '/assets/images/person1.jpg' },
    ],
    postdocs: [
      { name: 'Postdoc 1', role: 'Post-Doctoral Researcher', photo: '/assets/images/person2.jpg' },
    ],
    grads: [
      { name: 'Graduate Student 1', role: 'PhD Student', photo: '/assets/images/person3.jpg' },
      { name: 'Graduate Student 2', role: 'PhD Student', photo: '/assets/images/person4.jpg' },
    ],
    undergrads: [
      { name: 'Undergraduate 1', role: 'Undergraduate Researcher', photo: '/assets/images/person5.jpg' },
    ],
    alumni: [
      { name: 'Alumnus 1', role: 'Former Graduate Student', photo: '/assets/images/person6.jpg' },
    ],
    collaborators: [
      { name: 'Collaborator 1', role: 'External Collaborator', photo: '/assets/images/person7.jpg' },
    ],
  };
}

function publications() {
  return [
    { title: 'Hybrid Modeling for Biological Systems', authors: 'Doe, Roy, et al.', venue: 'Bioinformatics Journal', year: 2024, doi: 'https://doi.org/10.0000/example', pdf: '#' },
    { title: 'Deep Learning in Bioengineering', authors: 'Roy, Smith', venue: 'Nature Methods', year: 2023, doi: '', pdf: '#' },
    { title: 'Translational Pathways', authors: 'Roy et al.', venue: 'Science Advances', year: 2022, doi: '', pdf: '#' },
  ];
}

function newsItems() {
  return [
    { title: 'New Grant Awarded', date: 'Nov 2025', summary: 'The lab received a multi-year grant to study tissue regeneration using computational methods.' },
    { title: 'Paper Accepted', date: 'Sep 2025', summary: 'Our latest manuscript on hybrid modeling has been accepted in a leading journal.' },
    { title: 'Conference Keynote', date: 'Jul 2025', summary: 'Dr. Roy delivered a keynote at the International Bioengineering Conference.' },
    { title: 'Collaboration Announcement', date: 'Apr 2025', summary: 'We are partnering with clinical researchers to translate our findings.' },
  ];
}
