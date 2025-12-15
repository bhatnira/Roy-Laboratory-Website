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
