/**
 * Home Page Component
 */

import { mount } from '../utils.js';

export function renderHome() {
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
