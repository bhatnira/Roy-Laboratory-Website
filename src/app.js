/**
 * Roy Laboratory Website - Main JavaScript File
 * 
 * This file contains all the website logic:
 * - Page rendering functions (renderHome, renderNews, etc.)
 * - Data storage (news, publications, team members)
 * - Navigation/routing between pages
 * 
 * To update content, search for the section you need:
 * - News: Search for "function newsItems()"
 * - Publications: Search for "<div class="pub-item">"
 * - Team: Search for "function teamData()"
 */

// ============================================
// SETUP & INITIALIZATION
// ============================================

// When page loads, set up everything
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear(); // Update copyright year
  setupMenu();      // Setup mobile hamburger menu
  setupMegaMenu();  // Setup mega menu (currently disabled)
  router();         // Start routing system
  window.addEventListener('hashchange', router); // Listen for page changes
});

// ============================================
// HELPER FUNCTIONS
// ============================================

// Setup mobile hamburger menu button
function setupMenu() {
  const btn = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  btn?.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex'; // Toggle menu open/closed
  });
}

// Mega menu setup (currently disabled)
function setupMegaMenu() {
  return; // Not using mega menu right now
}

// Render HTML into the main page area
function mount(html) {
  const app = document.getElementById('app');
  app.innerHTML = html;
}

// ============================================
// PAGE RENDERING FUNCTIONS
// ============================================

// HOME PAGE
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

function renderResearch(root) {
  root.innerHTML = `
    <section class="centered-page">
      <div class="container">
        <div class="card">
          <h1>Research</h1>
          <p>
The Roy Laboratory is focused on developing new technologies at the interface of chemistry and biology. To this end, we explore and develop new methods to synthesize small molecules and apply them in various drug discovery and chemical biology programs. We are particularly interested in the following areas:
          </p>
        </div>
        <!-- Image directly below the intro text -->
        <div class="card">
          <img src="assets/images/Research-Summary_2018.webp?v=4" alt="Research Summary" style="width: 100%; height: auto; display: block;" />
        </div>
        <div class="card">
          <h2>Target-based discovery of chemotherapeutics against Mycobacterium tuberculosis and other antibiotic-resistant bacterial infections.</h2>
          <p>
Drug-resistant infections present a global health risk that needs urgent scientific interventions. In the United States alone, two million people become infected with antibiotic-resistant bacteria leading to 23,000 deaths each year. Unfortunately, our arsenal of new drugs is insufficient to combat the multi-drug resistant and extreme-drug resistant bacteria, commonly known as “superbugs”. To this end, we are working on developing new antibiotics or chemotherapeutic agents to combat this growing challenge of antibacterial resistance utilizing a structure-based drug design approach targeting MraY, a membrane-bound protein that plays a key role in peptidoglycan biosynthesis.
          </p>
        </div>
        <div class="card">
          <h2>Synthesis and library construction of chemical scaffolds for screening against therapeutic targets.</h2>
          <p>
We are also interested in developing technologies around fluorine-containing compounds as well discovering new chemical reactivity. Fluorinated molecules confer unique pharmacokinetic properties and binding interactions and contain 100% abundant 19F natural isotope. We are creating new technologies to synthesize new chemical entities, both fluorinated and non-fluorinated molecules, that could be used in various drug discovery platforms. We are developing a library comprising of fluorinated molecules that will be screened against new and existing targets using 19F NMR assay platform.
          </p>
        </div>
      </div>
    </section>
  `;
}

function renderMembers(root) {
  root.innerHTML = `
    <section class="centered-page">
      <div class="container">
        <h2 style="margin-top: 48px; text-align: left;">Current</h2>
        <div class="grid" style="grid-template-columns: repeat(3, minmax(320px, 400px)); gap: 24px; margin-top: 24px; justify-content: center;">
          <div class="card people-card" style="grid-column: 2;">
            <div class="avatar">
              <img src="assets/images/IMG_3842.jpg" alt="Sudeshna Roy">
            </div>
            <div>
              <h3>Sudeshna Roy</h3>
              <p class="role">Principal Investigator</p>
            </div>
          </div>
        </div>
        <div style="display: flex; justify-content: center; gap: 24px; margin-top: 24px;">
          <div class="card people-card" style="width: 400px; max-width: 400px;">
            <div class="avatar">
              <img src="assets/images/IMG_3827.jpg" alt="Mohammed Khalifa">
            </div>
            <div>
              <h3>Mohammed Khalifa</h3>
              <p class="role">Post Doctoral Scientist</p>
            </div>
          </div>
          <div class="card people-card" style="width: 400px; max-width: 400px;">
            <div class="avatar">
              <img src="assets/images/Nirajan.jpg" alt="Nirajan Bhattarai">
            </div>
            <div>
              <h3>Nirajan Bhattarai</h3>
              <p class="role">Post Doctoral Researcher</p>
            </div>
          </div>
        </div>
        <div class="grid" style="grid-template-columns: repeat(4, minmax(280px, 400px)); gap: 24px; margin-top: 24px; justify-content: center;">
          <div class="card people-card">
            <div class="avatar">
              <img src="assets/images/IMG_3832.jpg" alt="Ahmed Elsawi">
            </div>
            <div>
              <h3>Ahmed Elsawi</h3>
              <p class="role">2nd Year PhD student</p>
            </div>
          </div>
          <div class="card people-card">
            <div class="avatar"></div>
            <div>
              <h3>Mohamed Mahmoud Hefina</h3>
              <p class="role">2nd year PhD student</p>
            </div>
          </div>
          <div class="card people-card">
            <div class="avatar">
              <img src="assets/images/IMG_3822.jpg" alt="Destinee Manning">
            </div>
            <div>
              <h3>Destinee Manning</h3>
              <p class="role">3rd year PhD student</p>
            </div>
          </div>
          <div class="card people-card">
            <div class="avatar">
              <img src="assets/images/IMG_3836.jpg" alt="Tzu-Yu Huang">
            </div>
            <div>
              <h3>Tzu-Yu Huang</h3>
              <p class="role">3rd year PhD student</p>
            </div>
          </div>
        </div>
        <div class="grid" style="grid-template-columns: repeat(4, minmax(280px, 400px)); gap: 24px; margin-top: 24px; justify-content: center;">
          <div class="card people-card">
            <div class="avatar"></div>
            <div>
              <h3>Alixandria Skye Kirkendol</h3>
              <p class="role">PharmD/PhD Student</p>
            </div>
          </div>
          <div class="card people-card">
            <div class="avatar">
              <img src="assets/images/IMG_3838.jpg" alt="DaJ'ai Ashford">
            </div>
            <div>
              <h3>DaJ'ai Ashford</h3>
              <p class="role">2nd year PhD Student</p>
            </div>
          </div>
          <div class="card people-card">
            <div class="avatar"></div>
            <div>
              <h3>Ghada Abada</h3>
              <p class="role">4th Year PhD Student</p>
            </div>
          </div>
          <div class="card people-card">
            <div class="avatar"></div>
          </div>
        </div>

        <h2 style="margin-top: 64px; text-align: left;">Alumni</h2>
        <div class="grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; margin-top: 24px;">
          <div class="card alumni-card">
            <h3>Mario Djugovski</h3>
            <p class="role">4th year PhD student</p>
          </div>
          <div class="card alumni-card">
            <h3>Sampad Jana</h3>
            <p class="role">Postdoc; Next Position: Scientist, Sygnature Discovery</p>
          </div>
          <div class="card alumni-card">
            <h3>Shamba Chatterjee</h3>
            <p class="role">Postdoc; Next Position: NCNPR at UMSOP</p>
          </div>
          <div class="card alumni-card">
            <h3>Sweta Adhikari</h3>
            <p class="role">M.S. Pharmaceutical Sciences, 2019; Next Position: Research Chemist, Obiter Research</p>
          </div>
          <div class="card alumni-card">
            <h3>Tomayo Berida</h3>
            <p class="role">Ph.D. in Pharmaceutical Sciences 2023; Next Position: Postdoc at Vanderbilt with Prof. Craig Lindsey</p>
          </div>
          <div class="card alumni-card">
            <h3>Hamdan Alrefaei</h3>
            <p class="role">M.S. Pharmaceutical Sciences</p>
          </div>
          <div class="card alumni-card">
            <h3>Emmanuel Ross Hodges</h3>
            <p class="role">Undergraduate Researcher</p>
          </div>
          <div class="card alumni-card">
            <h3>J.D. Olivet</h3>
            <p class="role">Undergraduate Researcher</p>
          </div>
          <div class="card alumni-card">
            <h3>Galina Ostrovsky</h3>
            <p class="role">Undergraduate Researcher</p>
          </div>
          <div class="card alumni-card">
            <h3>Matt Saucier</h3>
            <p class="role">B.A. Biochemistry, 2020; Next Position: Graduate student, Delcamp lab</p>
          </div>
          <div class="card alumni-card">
            <h3>Peggy McCluggage</h3>
            <p class="role">B.A. Biochemistry, 2020; Next Position: NIH Postbaccalaureate</p>
          </div>
          <div class="card alumni-card">
            <h3>Lindsey Hohlt</h3>
            <p class="role">Undergraduate Researcher</p>
          </div>
          <div class="card alumni-card">
            <h3>Micah Stewart</h3>
            <p class="role">Undergraduate Researcher</p>
          </div>
          <div class="card alumni-card">
            <h3>Vu Bui</h3>
            <p class="role">Undergraduate Researcher</p>
          </div>
          <div class="card alumni-card">
            <h3>Lily Nguyen</h3>
            <p class="role">Undergraduate Researcher</p>
          </div>
          <div class="card alumni-card">
            <h3>Hannah Chasteen</h3>
            <p class="role">Undergraduate Researcher</p>
          </div>
          <div class="card alumni-card">
            <h3>Tam Nguyen</h3>
            <p class="role">Undergraduate IT Assistant</p>
          </div>
        </div>
      </div>
    </section>
  `;
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
  const root = document.getElementById('app');
  root.innerHTML = `
    <section class="centered-page">
      <div class="container">
        <h1 style="margin-top: 48px; text-align: left;">Publications</h1>
        <div style="margin-top: 32px; max-width: 100%;">
          
          <div class="pub-item">
            <div>
              <h3><strong>1.</strong> Synthetic Strategies to Access Fluorinated Azoles</h3>
              <p class="meta">Abd El-Gaber, M. K.; Djugovski, M.; Huang, T.-Y.; Adhikari, S.; Roy, S. — European Journal of Organic Chemistry (2025)</p>
            </div>
            <div class="links">
              <a href="https://doi.org/10.1002/ejoc.202500508" target="_blank" rel="noopener">DOI</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>2.</strong> 1,2,4-Triazole-based first-in-class non-nucleoside inhibitors of bacterial enzyme MraY</h3>
              <p class="meta">Berida, T.; Huang, T.-Y.; Weck, S.; Lutz, M.; McKee, S.; Kagerah, N.; Manning, D.; Jahan, M.; Mishra, S.; Hermann, J.; Muller, R.; Doerksen, R.; Stallings, C.; Christian Ducho, C.; Roy, S. — ACS Bio & Med Chem Au (2025)</p>
              <p class="meta" style="font-size: 13px; margin-top: 8px; font-style: italic;">Non-peer-reviewed preprint: bioRxiv 2025</p>
            </div>
            <div class="links">
              <a href="https://doi.org/10.1021/acsbiomedchemau.5c00158" target="_blank" rel="noopener">DOI</a>
              <a href="https://doi.org/10.1101/2025.01.30.635793" target="_blank" rel="noopener">Preprint</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>3.</strong> HuR inhibition reduces post-ischemic cardiac remodeling by dampening myocyte-dependent inflammatory gene expression and the innate immune response</h3>
              <p class="meta">Slone, S.; Anthony, S. R.; Green, L. C.; Parkins, S.; Acharya, P.; Kasprovic, D. A.; Reynolds, K.; Jaggers, R. M.; Nieman, M. L.; Alam, P.; Wu, X.; Roy, S.; Aubé, J.; Xu, L.; Li, Z.; Lorenz, J. N.; Owens, A. P.; Kanisicak, O.; Tranter, M. — The FASEB Journal (2025)</p>
              <p class="meta" style="font-size: 13px; margin-top: 8px; font-style: italic;">Non-peer-reviewed preprint: bioRxiv 2023</p>
            </div>
            <div class="links">
              <a href="https://doi.org/10.1096/fj.202400532RRR" target="_blank" rel="noopener">DOI</a>
              <a href="https://doi.org/10.1101/2023.01.17.524420" target="_blank" rel="noopener">Preprint</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>4.</strong> Plant Antibacterials: The Challenges and Opportunities</h3>
              <p class="meta">Berida, T.; Adekunle, Y. A.; Dada-Adegbola, H.; Kdimy, A.; Roy, S.; Sarkar, S. D. — Heliyon (2024)</p>
            </div>
            <div class="links">
              <a href="https://doi.org/10.1016/j.heliyon.2024.e31145" target="_blank" rel="noopener">DOI</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>5.</strong> Morpholine-mediated defluorinative cycloaddition of gem-difluoroalkenes and organic azides</h3>
              <p class="meta">Huang, T.-Y.; Djugovski, M.; Manning, D. L.; Adhikari, S.; Roy, S. — Beilstein Journal of Organic Chemistry (2023)</p>
              <p class="meta" style="font-size: 13px; margin-top: 8px; font-style: italic;">Non-peer-reviewed preprint: ChemRxiv, 2023</p>
            </div>
            <div class="links">
              <a href="https://doi.org/10.3762/bjoc.19.111" target="_blank" rel="noopener">DOI</a>
              <a href="https://doi.org/10.26434/chemrxiv-2023-w2r84" target="_blank" rel="noopener">Preprint</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>6.</strong> Discovery, Synthesis, and Optimization of 1,2,4-Triazolyl Pyridines Targeting Mycobacterium tuberculosis</h3>
              <p class="meta">Berida, T.; McKee, S. R.; Chatterjee, S.; Li, W.; Pandey, P.; Tripathi, S. D.; Doerksen, R. D.; Jackson, M.; Ducho, C.; Stallings, C. L.; Roy, S. — ACS Infectious Diseases (2023)</p>
              <p class="meta" style="font-size: 13px; margin-top: 8px; font-style: italic;">Non-peer-reviewed preprint: bioRxiv, 2023</p>
            </div>
            <div class="links">
              <a href="https://doi.org/10.1021/acsinfecdis.3c00341" target="_blank" rel="noopener">DOI</a>
              <a href="https://doi.org/10.1101/2022.11.14.516356" target="_blank" rel="noopener">Preprint</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>7.</strong> The challenges and opportunities of developing small molecule inhibitors of MraY</h3>
              <p class="meta">Manning, D. L.; Huang, T.-Y.; Roy, S. — Annual Reports in Medicinal Chemistry (2023)</p>
              <p class="meta" style="font-size: 13px; margin-top: 8px; font-style: italic;">Invited Review</p>
            </div>
            <div class="links">
              <a href="https://doi.org/10.1016/bs.armc.2023.09.005" target="_blank" rel="noopener">DOI</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>8.</strong> Small molecules targeting the RNA-binding protein HuR inhibit tumor growth in xenografts</h3>
              <p class="meta">Wu, X.; Ramesh, R.; Wang, J.; Zheng, Y.-G.; Armaly, A.; Wei, L.; Xing, M.; Roy, S.; Lan, L.; Gao, P.; Miao, Y.; Xu, L.; Aubé, J. — Journal of Medicinal Chemistry (2023)</p>
            </div>
            <div class="links">
              <a href="https://doi.org/10.1021/acs.jmedchem.2c01723" target="_blank" rel="noopener">DOI</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>9.</strong> HuR-dependent expression of Wisp1 is necessary for TGF-induced cardiac myofibroblast activity</h3>
              <p class="meta">Green, L. C; Slone, S.; Anthony, S. R.; Guarnieri, A. Parkins, S.; Shearer, S. M.; Neiman, M. L.; Roy, S.; Aubé, J.; Wu, X.; Xu, L., Tranter, M. — Journal of Molecular and Cellular Cardiology (2023)</p>
            </div>
            <div class="links">
              <a href="https://doi.org/10.1016/j.yjmcc.2022.10.007" target="_blank" rel="noopener">DOI</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>10.</strong> Identification of Potential Non-nucleoside MraY Inhibitors for Tuberculosis Chemotherapy from Structure-Based Virtual Screening</h3>
              <p class="meta">Pandey, P.; Chatterjee, S.; Berida, T.; Doerksen, R. J.; Roy, S. — Journal of Biomolecular Structure & Dynamics (2022)</p>
            </div>
            <div class="links">
              <a href="https://doi.org/10.1080/07391102.2020.1862705" target="_blank" rel="noopener">DOI</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>11.</strong> Optimization Rules for SARS-CoV-2 Mpro Antivirals: Ensemble Docking and Exploration of the Coronavirus Protease Active Site</h3>
              <p class="meta">Stoddard, S. V.; Stoddard, S. D; Oelkers, B. K.; Fitts, K.; Whalum, K.; Hemphill, A. D.; Manikonda, J.; Martinez, L. M.; Riley, E. G.; Roof, C. M.; Sarwar, N.; Thomas, D. M.; Ulmer, E.; Wallace, F. E.; Pandey, P.; Roy, S. — Viruses (2020)</p>
            </div>
            <div class="links">
              <a href="https://doi.org/10.3390/v12090942" target="_blank" rel="noopener">DOI</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>12.</strong> Targeting the interaction between RNA-binding protein HuR and FOXQ1 suppresses breast cancer invasion and metastasis</h3>
              <p class="meta">Wu, X.; Gardashova, G.; Lan, L.; Han, S.; Zhong, C.; Marquez, R.; Wei, L.; Wood, S.; Roy, S.; Gowthaman, R.; Karanicolas, J.; Gao, P.; Dixon, D.; Welch, D.; Li, L.; Ji, M.; Aubé, J.; Xu, L. — Communications Biology (2020)</p>
            </div>
            <div class="links">
              <a href="https://doi.org/10.1038/s42003-020-0933-1" target="_blank" rel="noopener">DOI</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>13.</strong> Regioselective synthesis of 4-fluoro-1,5-disubstituted-1,2,3-triazoles from synthetic surrogates of α-fluoroalkynes</h3>
              <p class="meta">Jana, S.; Adhikari, S.; Cox, M. R.; Roy, S. — Chemical Communications (2020)</p>
            </div>
            <div class="links">
              <a href="https://doi.org/10.1039/C9CC09216A" target="_blank" rel="noopener">DOI</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>14.</strong> HuR Reduces Radiation-Induced DNA Damage by Enhancing Expression of ARID1A</h3>
              <p class="meta">Andrade, D.; Mehta, M.; Griffith, J.; Oh, S.; Corbin, J.; Babu, A.; De, S.; Chen, A.; Zhao, Y. D.; Husain, S.; Roy, S.; Xu, L.; Aube, J.; Janknecht, R.; Gorospe, M.; Herman, T.; Ramesh, R.; Munshi, A. — Cancers (2019)</p>
            </div>
            <div class="links">
              <a href="https://doi.org/10.3390/cancers11122014" target="_blank" rel="noopener">DOI</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>15.</strong> The HuR CMLD-2 Inhibitor Exhibits Antitumor Effects via MAD2 Downregulation in Thyroid Cancer Cells</h3>
              <p class="meta">Allegri, L.; Baldan, F.; Roy, S.; Aubé, J.; Russo, D.; Filetti, S.; Damante, G. — Scientific Reports (2019)</p>
            </div>
            <div class="links">
              <a href="https://doi.org/10.1038/s41598-019-43894-0" target="_blank" rel="noopener">DOI</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>16.</strong> Human Antigen R as a Therapeutic Target in Pathological Cardiac Hypertrophy</h3>
              <p class="meta">Green, L.G.; Anthony, S. R.; Slone, S.; Lanzillotta, L.; Nieman, M. L.; Wu, X.; Robbins, N.; Jones, S. M.; Roy, S.; Owens, A. P.; Aubé, J.; Xu, L.; Lorenz, J. N.; Blaxall, B. C.; Rubinstein, J.; Benoit, J. B.; Tranter, M. — JCI Insight (2019)</p>
            </div>
            <div class="links">
              <a href="https://doi.org/10.1172/jci.insight.121541" target="_blank" rel="noopener">DOI</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>17.</strong> Identification of Antimalarial Inhibitors Using Late-Stage Gametocytes in a Phenotypic Live/Dead Assay</h3>
              <p class="meta">Spicer, T. P.; Gardiner, D. L.; Schoenen, F. J.; Roy, S.; Griffin, P. R.; Chase, P.; Scampavia, L.; Hodder, P.; Trenholme, K. R. — SLAS DISCOVERY: Advancing Life Sciences R&D (2019)</p>
            </div>
            <div class="links">
              <a href="https://doi.org/10.1177/2472555218796410" target="_blank" rel="noopener">DOI</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>18.</strong> Hexafluoroisopropanol and Acetyl Chloride Promoted Catalytic Hydroarylation with Phenols</h3>
              <p class="meta">Roy, S.; Motiwala, H. M.; Koshlap, K. M.; Aubé, J. — European Journal of Organic Chemistry (2018)</p>
            </div>
            <div class="links">
              <a href="https://doi.org/10.1002/ejoc.201701256" target="_blank" rel="noopener">DOI</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>19.</strong> HuR-targeted small molecule inhibitor exhibits cytotoxicity towards human lung cancer cells</h3>
              <p class="meta">Muralidharan, R.; Mehta, M.; Ahmed, R.; Roy, S.; Xu, L.; Aubé, J.; Chen, A.; Zhao, Y.; Herman, T.; Ramesh, R.*; Munshi, A. — Scientific Reports (2017)</p>
            </div>
            <div class="links">
              <a href="https://doi.org/10.1038/s41598-017-07787-4" target="_blank" rel="noopener">DOI</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>20.</strong> N-Phenylbenzamides as Potent Inhibitors of the Mitochondrial Permeability Transition Pore</h3>
              <p class="meta">Roy, S.*; Sileikyte, J.; Neuenswander, B.; Hedrick, M. P.; Chung, T. D. Y.; Aubé, J.; Schoenen, F. J.*; Forte M. A.*; Bernardi, P. — ChemMedChem (2016)</p>
              <p class="meta" style="font-size: 13px; margin-top: 8px; font-style: italic;">*co-corresponding author</p>
            </div>
            <div class="links">
              <a href="https://doi.org/10.1002/cmdc.201500545" target="_blank" rel="noopener">DOI</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>21.</strong> Discovery, Synthesis, and Optimization of Diarylisoxazole-3-carboxamides as Potent Inhibitors of the Mitochondrial Permeability Transition Pore</h3>
              <p class="meta">Roy, S.; Sileikyte, J.; Schiavone, M.; Neuenswander, B.; Argenton, F.; Aubé, J.; Hedrick, M. P.; Chung, T. D. Y.; Forte M. A.; Bernardi, P.; Schoenen, F. J. — ChemMedChem (2015)</p>
              <p class="meta" style="font-size: 13px; margin-top: 8px; font-style: italic;">Designated as Very Important Paper (VIP)</p>
            </div>
            <div class="links">
              <a href="https://doi.org/10.1002/cmdc.201500284" target="_blank" rel="noopener">DOI</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>22.</strong> A Practical and Scalable Synthesis of (S)- and (R)-1-(Dimethoxyphosphoryl)allyl Methyl Carbonates</h3>
              <p class="meta">Roy, S.; Sutivisedsak, N.; Hamper, B. C.; Lyss, A. M.; Spilling, C. D. — Synthesis (2015)</p>
            </div>
            <div class="links">
              <a href="https://doi.org/10.1055/s-0035-1560487" target="_blank" rel="noopener">DOI</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>23.</strong> Development of (E)-2-((1,4-dimethylpiperazin-2-ylidene)amino)-5-nitro-N-phenylbenzamide, ML336: Novel 2 Amidinophenylbenzamides as Potent Inhibitors of Venezuelan Equine Encephalitis Virus</h3>
              <p class="meta">Schroeder, C. E.; Yao, Y.; Sotsky, J.; Smith, R. A.; Roy, S.; Chu, Y-K, Guo, H.; Tower, N. A.; Noah, J. W.; McKellip, S.; Sosa, M.; Ramussen, L.; Smith, L. H.; White. E. L.; Aubé, J.; Jonsson, C. B.; Chung, D.; Golden, J. E. — Journal of Medicinal Chemistry (2014)</p>
            </div>
            <div class="links">
              <a href="https://doi.org/10.1021/jm501203v" target="_blank" rel="noopener">DOI</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>24.</strong> Small Molecules Targeting the Mitochondrial Permeability Transition</h3>
              <p class="meta">Sileikyte, J.; Roy, S.; Porubsky, P.; Neuenswander, B.; Wang, J.; Hedrick, M.; Pinkerton, A. B.; Salaniwal, S.; Kung, P.; Mangravita-Novo, A.; Smith, L. H.; Bourdette, D. N.; Jackson, M. R.; Aubé, J; Chung, T. D. Y.; Schoenen, F. J.; Forte M. A.; Bernardi, P. — Probe Reports from the NIH Molecular Libraries Program (2014)</p>
            </div>
            <div class="links">
              <a href="http://www.ncbi.nlm.nih.gov/books/NBK280049/" target="_blank" rel="noopener">Link</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>25.</strong> ML336: Development of Quinazolinone-Based Inhibitors Against Venezuelan Equine Encephalitis Virus (VEEV)</h3>
              <p class="meta">Chung, D.; Schroeder, C. E.; Sotsky, J.; Yao, T.; Roy, S.; Smith, R. A.; Tower, N. A.; Noah, J. A.; McKellip, S.; Sosa, M.; Rasmussen, L.; White, E. L.; Aubé, J.; Golden, J. E. — Probe Reports from the NIH Molecular Libraries Program (2013)</p>
            </div>
            <div class="links">
              <a href="http://www.ncbi.nlm.nih.gov/books/NBK179829/" target="_blank" rel="noopener">Link</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>26.</strong> An Expeditious Total Synthesis of Both Diastereomeric Lipid Dihydroxytetrahydrofurans from Notheia Anomala</h3>
              <p class="meta">Roy, S.; Spilling, C. D.* — Organic Letters (2012)</p>
            </div>
            <div class="links">
              <a href="https://doi.org/10.1021/ol300597u" target="_blank" rel="noopener">DOI</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>27.</strong> Synthesis of the C(18)-C(34) Fragment of Amphidinolide C and the C(18)-C(29) Fragment of Amphidinolide F</h3>
              <p class="meta">Roy, S.; Spilling, C. D. — Organic Letters (2010)</p>
            </div>
            <div class="links">
              <a href="https://doi.org/10.1021/ol102345v" target="_blank" rel="noopener">DOI</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>28.</strong> A Task Specific Basic Ionic Liquid, [BmIm]OH-promoted Efficient green and One-pot Synthesis of Tetrahydrobenzo[b]pyran Derivatives</h3>
              <p class="meta">Ranu, B. C.; Banerjee, S.; Roy, S. — Indian Journal of Chemistry (2008)</p>
            </div>
            <div class="links">
              <a href="https://doi.org/10.1002/chin.200846133" target="_blank" rel="noopener">DOI</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

function renderSudeshnaRoy() {
  mount(`
    <section class="section impact-page">
      <div class="container">
        <h2>Sudeshna Roy, Ph.D.</h2>
        <div class="grid impact-grid">
          <div>
            <div class="card impact-copy" style="margin-top: 75px;">
              <p style="font-size: 18px; font-weight: 600; margin-bottom: 4px;">Associate Professor</p>
              <p style="margin-bottom: 4px;">College of Pharmacy</p>
              <p style="margin-bottom: 24px;">Department of Pharmaceutical Sciences</p>
              
              <p style="margin-bottom: 4px;">881 Madison Avenue</p>
              <p style="margin-bottom: 4px;">Pharmacy Building_05_571</p>
              <p style="margin-bottom: 4px;">Memphis, TN 38163</p>
              <p><a href="mailto:roy@uthsc.edu" style="color: var(--primary);">roy@uthsc.edu</a></p>
            </div>
          </div>
          <div>
            <div style="width: 400px; height: 400px; margin: 0 auto;">
              <img src="assets/images/IMG_4759.jpg" alt="Sudeshna Roy" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover; border: 3px solid white; box-shadow: 0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06);">
            </div>
          </div>
        </div>
        
        <div style="margin-top: 200px;">
          <h3 style="margin-bottom: 24px; font-size: 24px;">Curriculum Vitae</h3>
          <div style="width: 100%; height: 800px; border: 1px solid var(--border); border-radius: 14px; overflow: hidden;">
            <iframe src="assets/Roy-CV-updated-Oct2025/Sudeshna Roy CV_Oct 2025.pdf" style="width: 100%; height: 100%; border: none;" title="Sudeshna Roy CV"></iframe>
          </div>
        </div>
      </div>
    </section>
  `);
}

function renderNews() {
  mount(`
  <section class="section">
    <div class="container" style="max-width: 900px;">
      <h2>News</h2>
      <p class="sub">Lab announcements and media coverage.</p>
      <div style="display: flex; flex-direction: column; gap: 32px; margin-top: 32px;">
        ${newsItems().map(n => `
          <article class="card" style="padding: 0; overflow: hidden;">
            ${n.video ? `
              <div style="width: 100%; height: 400px; background: #000;">
                <iframe src="${n.video}" style="width: 100%; height: 100%; border: none;" frameborder="0" scrolling="no" allowtransparency="true" allow="encrypted-media"></iframe>
              </div>
            ` : n.image ? `
              <img src="${n.image}" alt="${n.title}" style="width: 100%; height: 300px; object-fit: cover;">
            ` : ''}
            <div style="padding: 24px;">
              <h3 style="margin-top: 0;">${n.title}</h3>
              <p class="sub">${n.date}</p>
              <p>${n.summary}</p>
              ${n.link ? `<a href="${n.link}" target="_blank" rel="noopener" style="color: var(--primary); text-decoration: none; font-weight: 600; margin-top: 12px; display: inline-block;">Read More →</a>` : ''}
            </div>
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

function renderResearchDetails(root) {
  root.innerHTML = `
    <section class="centered-page">
      <div class="container">
        <div class="card">
          <h1>Research</h1>
          <p>
The Roy Laboratory is focused on developing new technologies at the interface of chemistry and biology. To this end, we explore and develop new methods to synthesize small molecules and apply them in various drug discovery and chemical biology programs. We are particularly interested in the following areas:
          </p>
        </div>
        <div class="card">
          <h2>Target-based discovery of chemotherapeutics against Mycobacterium tuberculosis and other antibiotic-resistant bacterial infections.</h2>
          <p>
Drug-resistant infections present a global health risk that needs urgent scientific interventions. In the United States alone, two million people become infected with antibiotic-resistant bacteria leading to 23,000 deaths each year. Unfortunately, our arsenal of new drugs is insufficient to combat the multi-drug resistant and extreme-drug resistant bacteria, commonly known as “superbugs”. To this end, we are working on developing new antibiotics or chemotherapeutic agents to combat this growing challenge of antibacterial resistance utilizing a structure-based drug design approach targeting MraY, a membrane-bound protein that plays a key role in peptidoglycan biosynthesis.
          </p>
        </div>
        <div class="card">
          <h2>Synthesis and library construction of chemical scaffolds for screening against therapeutic targets.</h2>
          <p>
We are also interested in developing technologies around fluorine-containing compounds as well discovering new chemical reactivity. Fluorinated molecules confer unique pharmacokinetic properties and binding interactions and contain 100% abundant 19F natural isotope. We are creating new technologies to synthesize new chemical entities, both fluorinated and non-fluorinated molecules, that could be used in various drug discovery platforms. We are developing a library comprising of fluorinated molecules that will be screened against new and existing targets using 19F NMR assay platform.
          </p>
        </div>
      </div>
    </section>
  `;
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

function renderJoinUs() {
  mount(`
    <section class="section">
      <div class="container" style="max-width: 900px;">
        <h2>Join Us</h2>
        
        <div style="margin-top: 48px;">
          <h3>Opportunities for Postdoctoral Research Associates</h3>
          <p style="margin-top: 16px; line-height: 1.8;">
            My objective for post-docs is helping you build a strong portfolio for a successful transition to pharmaceutical industries, academia or alternate scientific careers. In exchange, I expect you to demonstrate quality and independent research encompassing the goals of this research program. Motivated applicants with strong background in total synthesis, synthetic methods development, and medicinal chemistry are encouraged to apply. You will have the opportunity to diversify your skill sets into drug discovery and chemical biology. If you are interested in applying please send me an email with a cover letter, a CV, a brief research summary, and contact information of three references.
          </p>
        </div>

        <div style="margin-top: 48px;">
          <h3>Training Opportunities for Graduate Students</h3>
          <p style="margin-top: 16px; line-height: 1.8;">
            If you are interested in joining our group at the M.S. or Ph.D. level please send me an email explaining why you are interested in joining my lab, your previous research accomplishments, GRE scores, and contact information for three references. I am primarily interested in students who have a focus on organic and medicinal chemistry with interests in drug discovery and chemical biology. Although prior research experience is not necessary, it is considered a plus. All prospective graduate students should also apply via the <a href="https://www.uthsc.edu/pharmacy/admissions/graduate/" target="_blank">UTHSC Pharmacy Graduate Application</a> portal. All application materials must be submitted through the UTHSC Graduate School's online application system.
          </p>
        </div>

        <div style="margin-top: 48px;">
          <h3>Undergraduate Students</h3>
          <p style="margin-top: 16px; line-height: 1.8;">
            We are always looking for talented and motivated Honors college/pre-med/pre-pharmacy students with research interests in organic chemistry and drug discovery. Interested applicants should send me an email with their CV stating their research interests. Undergraduate research assistants are expected to register for a minimum of 3 credit hours per semester expected to spend 9 hours per week doing research, reading the literature, assisting the lab in various capacities.
          </p>
          <p style="margin-top: 16px; line-height: 1.8;">
            There are also work-study and informal volunteer opportunities available.
          </p>
        </div>

        <div style="margin-top: 64px;">
          <h3>Contact us</h3>
          <form style="margin-top: 24px; display: flex; flex-direction: column; gap: 16px;">
            <div>
              <label for="name" style="display: block; margin-bottom: 8px; font-weight: 500;">Name</label>
              <input type="text" id="name" name="name" required style="width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: 4px; font-size: 16px;">
            </div>
            <div>
              <label for="email" style="display: block; margin-bottom: 8px; font-weight: 500;">Email</label>
              <input type="email" id="email" name="email" required style="width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: 4px; font-size: 16px;">
            </div>
            <div>
              <label for="subject" style="display: block; margin-bottom: 8px; font-weight: 500;">Subject</label>
              <input type="text" id="subject" name="subject" required style="width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: 4px; font-size: 16px;">
            </div>
            <div>
              <label for="message" style="display: block; margin-bottom: 8px; font-weight: 500;">Message</label>
              <textarea id="message" name="message" rows="6" required style="width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: 4px; font-size: 16px; resize: vertical;"></textarea>
            </div>
            <button type="submit" style="padding: 12px 24px; background: var(--primary); color: white; border: none; border-radius: 4px; font-size: 16px; font-weight: 500; cursor: pointer;">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  `);
}

// ============================================
// NEWS DATA
// ============================================
// TO ADD NEWS: Copy one of the items below and add it at the top of this list
// Format:
// {
//   title: 'Your Title',              // News headline
//   date: 'Month Day, Year',          // When it was published
//   summary: 'Brief description...',  // 1-2 sentences
//   link: 'https://...',              // Link to full article
//   image: 'assets/images/file.jpg'   // Photo (OR use 'video' for video embed)
// },

function newsItems() {
  return [
    { 
      title: 'Molecular Architects of Roy Laboratory Join UT Health Science Center', 
      date: 'January 15, 2025', 
      summary: 'Dr. Roy and her team bring innovative medicinal chemistry research to UTHSC, including two major NIH grants totaling $4.9 million to combat tuberculosis and advance drug discovery.',
      link: 'https://news.uthsc.edu/molecular-architects-of-roy-laboratory-join-ut-health-science-center-college-of-pharmacy/',
      image: 'assets/images/roy-lab-news.jpg'  // Regular image
    },
    { 
      title: '"We Are Essentially Molecular Architects"', 
      date: 'UTHSC Pharmacy Feature', 
      summary: 'Dr. Sudeshna Roy discusses joining the UT Health Science Center College of Pharmacy and her lab\'s innovative approach to drug discovery and molecular design.',
      link: 'https://www.facebook.com/UTHSCPharmacy/videos/921681606607598/',
      video: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FUTHSCPharmacy%2Fvideos%2F921681606607598%2F&show_text=false&width=560&t=0'  // Facebook video embed
    },
    { 
      title: 'Dr. Roy Featured on WMC-TV "Bluff City Life"', 
      date: 'November 2024', 
      summary: 'Dr. Roy discusses her research lab\'s pioneering work as a "molecular architect", breaking new ground to improve outcomes for diseases like tuberculosis.',
      link: 'https://www.instagram.com/reel/DIMfPACPekK/',
      video: 'https://www.instagram.com/reel/DIMfPACPekK/embed'  // Instagram video embed
    },
    { 
      title: 'Innovator Spotlight: Sudeshna Roy', 
      date: 'UTRF Feature', 
      summary: 'Dr. Roy featured in University of Tennessee Research Foundation Innovator Spotlight for pioneering work in medicinal chemistry and entrepreneurial approach to drug discovery.',
      link: 'https://utrf.tennessee.edu/innovator_spotlight_sudeshna_roy/',
      image: 'assets/images/IMG_3815.jpg'
    }
  ];
}

// ============================================
// ROUTER - Navigation System
// ============================================
// This function decides which page to show based on the URL
// Example: website.com/#news will show the news page

function router() {
  const root = document.getElementById('app'); // Main content area
  const hash = (location.hash || '#home').replace('#', ''); // Get page name from URL
  
  // Match URL to the right page
  switch (hash) {
    case 'home':                // website.com/#home
      renderHome();
      break;
    case 'research':            // website.com/#research
      renderResearch(root);
      break;
    case 'members':             // website.com/#members
      renderMembers(root);
      break;
    case 'people':              // website.com/#people
      renderPeople();
      break;
    case 'publications':        // website.com/#publications
      renderPublications();
      break;
    case 'sudeshna-roy':        // website.com/#sudeshna-roy
      renderSudeshnaRoy();
      break;
    case 'news':                // website.com/#news
      renderNews();
      break;
    case 'join-us':             // website.com/#join-us
      renderJoinUs();
      break;
    case 'contact':             // website.com/#contact
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
}
