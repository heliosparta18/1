/**
 * ====================================================================
 * WEBSITE SPESIAL UNTUK PACAR TERSAYANG 💜🌸
 * TEMA: WARNA UNGU & BUNGA PERPADUAN UNGU DAN PUTIH
 * 
 * DIOPTIMASI KHUSUS UNTUK HP KENTANG & DESKTOP:
 * - 60 FPS Super Smooth (Hardware Acceleration)
 * - Swipe Sentuhan HP yang Akurat (Tidak bentrok dengan scroll vertikal)
 * - Efek Angin Canvas Sangat Ringan (Zero ShadowBlur overhead)
 * - Kelopak Bunga Berbasis GPU CSS Compositor
 * - Hemat Baterai & Bebas Lag
 * ====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* 1. Inisialisasi Deretan Bunga Ungu & Putih (Marquee) */
  initFlowerMarquee();

  /* 2. Inisialisasi Overlay Angin Sepoi-sepoi (Canvas Ringan 60 FPS) */
  initBreezeCanvas();

  /* 3. Inisialisasi Kelopak Bunga Melayang (GPU CSS Powered) */
  initFloatingPetals();

  /* 4. Inisialisasi Pemutar Musik Piringan Hitam di Kanan Atas */
  initMusicPlayer();

  /* 5. Inisialisasi Navigasi Kartu Slide & Swipe Halus di HP */
  initSlideNavigation();

  /* 6. Inisialisasi Tombol Peluk Hangat (Slide 4) */
  initHugButton();
});


/* ====================================================================
 * BAGIAN 1: GENERATE JEJERAN BUNGA UNGU & PUTIH (MARQUEE)
 * ==================================================================== */
function initFlowerMarquee() {
  const flowerSet1 = document.getElementById('flowerSet1');
  const flowerSet2 = document.getElementById('flowerSet2');
  if (!flowerSet1 || !flowerSet2) return;

  // Kumpulan SVG Bunga Ungu dan Putih yang Indah & Ringan
  const flowerTemplates = [
    // 1. Daisy Putih Bersih dengan Tengah Kuning
    `
    <svg class="flower-svg-item" width="58" height="88" viewBox="0 0 58 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M29 88V44" stroke="#4ade80" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M29 64C20 60 16 50 18 46C22 48 27 54 29 64Z" fill="#22c55e"/>
      <circle cx="29" cy="28" r="7.5" fill="#ffffff" stroke="#e9d5ff" stroke-width="1.2"/>
      <ellipse cx="29" cy="13" rx="4.5" ry="10" fill="#ffffff"/>
      <ellipse cx="29" cy="43" rx="4.5" ry="10" fill="#ffffff"/>
      <ellipse cx="14" cy="28" rx="10" ry="4.5" fill="#ffffff"/>
      <ellipse cx="44" cy="28" rx="10" ry="4.5" fill="#ffffff"/>
      <ellipse cx="18" cy="17" rx="5" ry="9" transform="rotate(-45 18 17)" fill="#f8fafc"/>
      <ellipse cx="40" cy="17" rx="5" ry="9" transform="rotate(45 40 17)" fill="#f8fafc"/>
      <ellipse cx="18" cy="39" rx="5" ry="9" transform="rotate(45 18 39)" fill="#f8fafc"/>
      <ellipse cx="40" cy="39" rx="5" ry="9" transform="rotate(-45 40 39)" fill="#f8fafc"/>
      <circle cx="29" cy="28" r="6.5" fill="#facc15"/>
    </svg>
    `,

    // 2. Mawar Ungu Mekar Elegan
    `
    <svg class="flower-svg-item" width="62" height="92" viewBox="0 0 62 92" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M31 92V46" stroke="#16a34a" stroke-width="4" stroke-linecap="round"/>
      <path d="M31 68C38 62 44 54 42 48C38 50 33 58 31 68Z" fill="#22c55e"/>
      <circle cx="31" cy="30" r="20" fill="#7e22ce"/>
      <path d="M20 26C20 16 27 13 31 13C35 13 42 16 42 26C42 35 35 43 31 43C27 43 20 35 20 26Z" fill="#9333ea"/>
      <path d="M24 26C24 18 29 16 31 16C33 16 38 18 38 26C38 33 33 37 31 37C29 37 24 33 24 26Z" fill="#a855f7"/>
      <circle cx="31" cy="26" r="6.5" fill="#c084fc"/>
    </svg>
    `,

    // 3. Batang Lavender Ungu Harum
    `
    <svg class="flower-svg-item" width="42" height="96" viewBox="0 0 42 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 96V28" stroke="#22c55e" stroke-width="3" stroke-linecap="round"/>
      <ellipse cx="21" cy="16" rx="4" ry="5.5" fill="#7e22ce"/>
      <ellipse cx="16" cy="22" rx="4" ry="5" fill="#9333ea"/>
      <ellipse cx="26" cy="22" rx="4" ry="5" fill="#a855f7"/>
      <ellipse cx="15" cy="30" rx="4.5" ry="5.5" fill="#8b5cf6"/>
      <ellipse cx="27" cy="30" rx="4.5" ry="5.5" fill="#7e22ce"/>
      <ellipse cx="16" cy="38" rx="4.5" ry="6" fill="#9333ea"/>
      <ellipse cx="26" cy="38" rx="4.5" ry="6" fill="#c084fc"/>
      <ellipse cx="17" cy="46" rx="4.5" ry="6" fill="#7e22ce"/>
      <ellipse cx="25" cy="46" rx="4.5" ry="6" fill="#a855f7"/>
      <ellipse cx="21" cy="52" rx="4" ry="5" fill="#c084fc"/>
      <path d="M21 72C15 67 13 60 15 56C17 61 20 66 21 72Z" fill="#16a34a"/>
    </svg>
    `,

    // 4. Bunga Melati / Lily Putih Menawan
    `
    <svg class="flower-svg-item" width="60" height="90" viewBox="0 0 60 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 90V42" stroke="#4ade80" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M30 65C20 63 16 53 18 49C22 52 26 59 30 65Z" fill="#22c55e"/>
      <path d="M30 42C22 32 14 20 22 10C30 18 30 32 30 42Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
      <path d="M30 42C38 32 46 20 38 10C30 18 30 32 30 42Z" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <path d="M30 42C20 37 8 33 11 23C20 27 26 35 30 42Z" fill="#ffffff"/>
      <path d="M30 42C40 37 52 33 49 23C40 27 34 35 30 42Z" fill="#f8fafc"/>
      <circle cx="30" cy="37" r="4" fill="#fde047"/>
    </svg>
    `,

    // 5. Bunga Anggrek Ungu Lilac
    `
    <svg class="flower-svg-item" width="62" height="92" viewBox="0 0 62 92" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M31 92V44" stroke="#16a34a" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M31 67C40 62 44 52 42 47C38 50 34 58 31 67Z" fill="#22c55e"/>
      <circle cx="31" cy="27" r="8" fill="#f3e8ff"/>
      <ellipse cx="31" cy="12" rx="8" ry="11" fill="#c084fc"/>
      <ellipse cx="17" cy="25" rx="11" ry="8" fill="#a855f7"/>
      <ellipse cx="45" cy="25" rx="11" ry="8" fill="#9333ea"/>
      <ellipse cx="22" cy="38" rx="8" ry="11" fill="#7e22ce"/>
      <ellipse cx="40" cy="38" rx="8" ry="11" fill="#a855f7"/>
      <circle cx="31" cy="27" r="3" fill="#facc15"/>
    </svg>
    `,

    // 6. Tulip Ungu Gradasi Manis
    `
    <svg class="flower-svg-item" width="52" height="92" viewBox="0 0 52 92" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26 92V44" stroke="#22c55e" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M26 69C17 65 14 55 16 49C20 53 24 61 26 69Z" fill="#16a34a"/>
      <path d="M15 25C15 38 26 44 26 44C26 44 37 38 37 25C37 17 33 15 26 19C19 15 15 17 15 25Z" fill="#c084fc"/>
      <path d="M18 27C18 36 26 42 26 42C26 42 34 36 34 27C34 19 30 17 26 21C22 17 18 19 18 27Z" fill="#e9d5ff"/>
      <path d="M22 25C22 33 26 37 26 37C26 37 30 33 30 25C30 19 28 17 26 20C24 17 22 19 22 25Z" fill="#ffffff"/>
    </svg>
    `,

    // 7. Mawar Putih Bercahaya Lembut
    `
    <svg class="flower-svg-item" width="60" height="90" viewBox="0 0 60 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 90V45" stroke="#16a34a" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M30 65C38 61 42 51 40 47C36 49 32 57 30 65Z" fill="#22c55e"/>
      <circle cx="30" cy="27" r="19" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <path d="M20 24C20 16 26 13 30 13C34 13 40 16 40 24C40 32 34 38 30 38C26 38 20 32 20 24Z" fill="#ffffff"/>
      <circle cx="30" cy="24" r="7" fill="#f1f5f9"/>
      <circle cx="30" cy="24" r="3.5" fill="#e9d5ff"/>
    </svg>
    `
  ];

  // Susun deretan bunga berulang
  const repeatCount = 3;
  let combinedHTML = '';

  for (let r = 0; r < repeatCount; r++) {
    flowerTemplates.forEach((svgString, idx) => {
      const delay = ((idx * 0.45 + r * 0.3) % 2.8).toFixed(2);
      const modifiedSvg = svgString.replace(
        'class="flower-svg-item"',
        `class="flower-svg-item" style="animation-delay: -${delay}s;"`
      );
      combinedHTML += modifiedSvg;
    });
  }

  flowerSet1.innerHTML = combinedHTML;
  flowerSet2.innerHTML = combinedHTML;
}


/* ====================================================================
 * BAGIAN 2: OVERLAY ANGIN SEPOI-SEPOI (CANVAS ZERO-OVERHEAD)
 * ==================================================================== */
function initBreezeCanvas() {
  const canvas = document.getElementById('windCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d', { alpha: true });

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const isMobile = window.innerWidth <= 640;
  const lineCount = isMobile ? 9 : 15; // Dikurangi di HP agar super ringan & hemat daya
  const breezeLines = [];

  class BreezeLine {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = initial ? Math.random() * (width + 200) : width + 80 + Math.random() * 180;
      this.y = Math.random() * (height * 0.88);
      this.length = 70 + Math.random() * 130;
      this.speed = 1.6 + Math.random() * 2.0;
      this.waveFreq = 0.014 + Math.random() * 0.018;
      this.waveAmp = 3 + Math.random() * 6;
      this.thickness = 0.9 + Math.random() * 1.5;
      this.opacity = 0.10 + Math.random() * 0.22;
      this.isLavender = Math.random() > 0.4;
      this.colorRgb = this.isLavender ? '216, 180, 254' : '255, 255, 255';
    }

    update() {
      this.x -= this.speed;
      if (this.x + this.length < -40) {
        this.reset();
      }
    }

    draw() {
      // TANPA ctx.shadowBlur! Sebagai gantinya, buat garis halus transparan ganda
      // Ini 10x lebih cepat di HP kentang dan hasilnya tetap berpendar indah.
      ctx.beginPath();
      const segments = 10;
      const segLen = this.length / segments;

      for (let i = 0; i <= segments; i++) {
        const curX = this.x + (segments - i) * segLen;
        const curY = this.y + Math.sin(curX * this.waveFreq) * this.waveAmp;
        if (i === 0) {
          ctx.moveTo(curX, curY);
        } else {
          ctx.lineTo(curX, curY);
        }
      }

      // Gradasi ujung pudar halus
      const grad = ctx.createLinearGradient(this.x, this.y, this.x + this.length, this.y);
      grad.addColorStop(0, `rgba(${this.colorRgb}, 0)`);
      grad.addColorStop(0.3, `rgba(${this.colorRgb}, ${this.opacity})`);
      grad.addColorStop(0.8, `rgba(${this.colorRgb}, ${this.opacity * 0.85})`);
      grad.addColorStop(1, `rgba(${this.colorRgb}, 0)`);

      // Garis Luar Lembut (Pendaran / Glow)
      ctx.strokeStyle = grad;
      ctx.lineWidth = this.thickness * 2.2;
      ctx.globalAlpha = 0.45;
      ctx.stroke();

      // Garis Inti Angin
      ctx.lineWidth = this.thickness;
      ctx.globalAlpha = 1.0;
      ctx.stroke();
    }
  }

  for (let i = 0; i < lineCount; i++) {
    breezeLines.push(new BreezeLine());
  }

  let isCanvasActive = true;
  document.addEventListener('visibilitychange', () => {
    isCanvasActive = !document.hidden;
  });

  function renderBreeze() {
    if (isCanvasActive) {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < breezeLines.length; i++) {
        breezeLines[i].update();
        breezeLines[i].draw();
      }
    }
    requestAnimationFrame(renderBreeze);
  }

  requestAnimationFrame(renderBreeze);
}


/* ====================================================================
 * BAGIAN 3: KELOPAK BUNGA MELAYANG (GPU CSS COMPOSITOR)
 * ==================================================================== */
function initFloatingPetals() {
  const container = document.getElementById('floatingPetalsContainer');
  if (!container) return;

  const petalSVGs = [
    // Putih
    `<svg width="22" height="15" viewBox="0 0 22 15" fill="none"><path d="M1 7.5C1 3 8 0 14 0C20 0 22 4 21 8C20 12 12 15 6 15C1 15 1 12 1 7.5Z" fill="#ffffff" fill-opacity="0.9"/></svg>`,
    // Lavender
    `<svg width="24" height="16" viewBox="0 0 24 16" fill="none"><path d="M2 8C2 3.5 9 0 16 0C22 0 24 4.5 23 9C22 13 14 16 7 16C2 16 2 12.5 2 8Z" fill="#d8b4fe" fill-opacity="0.92"/></svg>`,
    // Lilac
    `<svg width="20" height="14" viewBox="0 0 20 14" fill="none"><path d="M1 7C1 3 7 0 13 0C18 0 20 3.5 19 7.5C18 11.5 11 14 5 14C1 14 1 11 1 7Z" fill="#c084fc" fill-opacity="0.88"/></svg>`,
    // Ungu Cantik
    `<svg width="22" height="15" viewBox="0 0 22 15" fill="none"><path d="M2 7.5C2 3 8 0 14 0C20 0 22 4 21 8C20 12 13 15 6 15C2 15 2 12 2 7.5Z" fill="#a855f7" fill-opacity="0.85"/></svg>`,
    // Bunga Kecil Putih
    `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="3" fill="#facc15"/><circle cx="9" cy="4" r="3.5" fill="#ffffff"/><circle cx="9" cy="14" r="3.5" fill="#ffffff"/><circle cx="4" cy="9" r="3.5" fill="#ffffff"/><circle cx="14" cy="9" r="3.5" fill="#ffffff"/></svg>`
  ];

  const isMobile = window.innerWidth <= 640;
  const maxPetals = isMobile ? 8 : 14;
  let activePetalCount = 0;

  function spawnPetal() {
    if (activePetalCount >= maxPetals || document.hidden) return;

    const petalEl = document.createElement('div');
    petalEl.className = 'floating-petal';
    petalEl.innerHTML = petalSVGs[Math.floor(Math.random() * petalSVGs.length)];

    const screenW = window.innerWidth;
    const screenH = window.innerHeight;

    const startX = screenW + 40;
    const endX = -60;
    const startY = Math.random() * (screenH * 0.85);
    const endY = startY + (Math.random() * 80 - 40);
    const duration = isMobile ? (6.0 + Math.random() * 2.5) : (5.5 + Math.random() * 3.0);
    const scale = (0.75 + Math.random() * 0.45).toFixed(2);
    const rotStart = Math.floor(Math.random() * 360) + 'deg';
    const rotEnd = (parseInt(rotStart) + (Math.random() > 0.5 ? 180 : -180)) + 'deg';

    petalEl.style.setProperty('--x-start', `${startX}px`);
    petalEl.style.setProperty('--y-start', `${startY}px`);
    petalEl.style.setProperty('--x-end', `${endX}px`);
    petalEl.style.setProperty('--y-end', `${endY}px`);
    petalEl.style.setProperty('--scale', scale);
    petalEl.style.setProperty('--rot-start', rotStart);
    petalEl.style.setProperty('--rot-end', rotEnd);
    petalEl.style.animationDuration = `${duration}s`;

    container.appendChild(petalEl);
    activePetalCount++;

    // Bersihkan saat animasi selesai di GPU
    petalEl.addEventListener('animationend', () => {
      if (petalEl.parentNode) {
        petalEl.parentNode.removeChild(petalEl);
      }
      activePetalCount--;
    }, { once: true });
  }

  // Interval teratur
  const intervalTime = isMobile ? 1400 : 1000;
  setInterval(spawnPetal, intervalTime);

  // Buat 4 kelopak saat load
  for (let i = 0; i < (isMobile ? 3 : 5); i++) {
    spawnPetal();
  }
}


/* ====================================================================
 * BAGIAN 4: PEMUTAR MUSIK PIRINGAN HITAM (VINYL RECORD)
 * ==================================================================== */
function initMusicPlayer() {
  const musicWidget = document.getElementById('musicWidget');
  const bgMusic = document.getElementById('bgMusic');
  const notesContainer = document.getElementById('notesContainer');
  const musicStatusText = document.getElementById('musicStatusText');
  if (!musicWidget || !bgMusic) return;

  let isPlaying = false;
  let notesInterval = null;
  const musicNoteChars = ['🎵', '🎶', '✨', '💜', '🌸', '🎀'];

  function toggleMusic() {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  }

  function playMusic() {
    bgMusic.play().then(() => {
      isPlaying = true;
      musicWidget.classList.add('is-playing');
      if (musicStatusText) {
        musicStatusText.textContent = 'Memutar Musik 🎶';
      }
      startNotesBurst();
    }).catch(err => {
      console.warn('Autoplay ditahan oleh kebijakan browser:', err);
    });
  }

  function pauseMusic() {
    bgMusic.pause();
    isPlaying = false;
    musicWidget.classList.remove('is-playing');
    if (musicStatusText) {
      musicStatusText.textContent = 'Putar Musik 💜';
    }
    stopNotesBurst();
  }

  function startNotesBurst() {
    if (notesInterval) clearInterval(notesInterval);
    notesInterval = setInterval(() => {
      if (!isPlaying || !notesContainer || document.hidden) return;

      // Batasi partikel not musik di container agar hemat memory
      if (notesContainer.children.length > 5) return;

      const note = document.createElement('span');
      note.className = 'floating-note';
      note.textContent = musicNoteChars[Math.floor(Math.random() * musicNoteChars.length)];

      const randX = (Math.random() * -80 - 15) + 'px';
      const randY = (Math.random() * 70 - 45) + 'px';
      const randRot = (Math.random() * 50 - 25) + 'deg';

      note.style.setProperty('--rand-x', randX);
      note.style.setProperty('--rand-y', randY);
      note.style.setProperty('--rand-rot', randRot);

      notesContainer.appendChild(note);

      setTimeout(() => {
        if (note.parentNode) {
          note.parentNode.removeChild(note);
        }
      }, 2300);
    }, 550);
  }

  function stopNotesBurst() {
    if (notesInterval) {
      clearInterval(notesInterval);
      notesInterval = null;
    }
  }

  musicWidget.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMusic();
  });

  // Otomatis putar saat interaksi sentuhan pertama
  function handleFirstUserTouch() {
    if (!isPlaying) {
      playMusic();
    }
    window.removeEventListener('click', handleFirstUserTouch);
    window.removeEventListener('touchend', handleFirstUserTouch);
  }

  window.addEventListener('click', handleFirstUserTouch, { once: true });
  window.addEventListener('touchend', handleFirstUserTouch, { once: true });

  // Smart compact & semi-transparent behavior saat layar di-scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      musicWidget.classList.add('is-scrolled');
    } else {
      musicWidget.classList.remove('is-scrolled');
    }
  }, { passive: true });
}


/* ====================================================================
 * BAGIAN 5: NAVIGASI SLIDE & SWIPE TOUCH KHUSUS HP (AKURAT & HALUS)
 * ==================================================================== */
function initSlideNavigation() {
  const slidesTrack = document.getElementById('slidesTrack');
  const slideItems = document.querySelectorAll('.slide-item');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const currentSlideNum = document.getElementById('currentSlideNum');
  const totalSlidesNum = document.getElementById('totalSlidesNum');
  const slideCategoryBadge = document.getElementById('slideCategoryBadge');

  if (!slidesTrack || slideItems.length === 0) return;

  let currentSlide = 0;
  const totalSlides = slideItems.length;

  if (totalSlidesNum) {
    totalSlidesNum.textContent = totalSlides;
  }

  const dots = document.querySelectorAll('.dot-indicator');

  function updateSlide(index) {
    currentSlide = index;

    // Geser rel slide secara mulus di GPU
    slidesTrack.style.transform = `translate3d(-${currentSlide * 100}%, 0, 0)`;

    // Update kelas active
    slideItems.forEach((item, idx) => {
      if (idx === currentSlide) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Update Dots
    dots.forEach((dot, idx) => {
      if (idx === currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    // Update Nomor Slide
    if (currentSlideNum) {
      currentSlideNum.textContent = currentSlide + 1;
    }

    // Update Kategori Badge
    const currentSlideEl = slideItems[currentSlide];
    const categoryText = currentSlideEl.getAttribute('data-category');
    if (slideCategoryBadge && categoryText) {
      slideCategoryBadge.textContent = categoryText;
    }

    // Atur tombol Sebelumnya
    if (prevBtn) {
      prevBtn.disabled = (currentSlide === 0);
    }

    // Atur teks tombol Selanjutnya
    if (nextBtn) {
      const nextBtnText = nextBtn.querySelector('.btn-text');
      if (nextBtnText) {
        nextBtnText.textContent = (currentSlide === totalSlides - 1) ? 'Awal 🌸' : 'Lanjut';
      }
    }
  }

  updateSlide(0);

  // Tombol Kembali
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentSlide > 0) updateSlide(currentSlide - 1);
    });
  }

  // Tombol Lanjut
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentSlide < totalSlides - 1) {
        updateSlide(currentSlide + 1);
      } else {
        updateSlide(0);
      }
    });
  }

  // Dots
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      updateSlide(idx);
    });
  });

  // Navigasi Keyboard
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      if (currentSlide < totalSlides - 1) updateSlide(currentSlide + 1);
    } else if (e.key === 'ArrowLeft') {
      if (currentSlide > 0) updateSlide(currentSlide - 1);
    }
  });

  // ==================================================================
  // PENANGANAN SWIPE SENTUHAN HP YANG AKURAT (FIX "AGAK ANEH" DI HP)
  // Menghindari bentrok antara scroll halaman vertikal dengan swipe slide!
  // ==================================================================
  let startX = 0;
  let startY = 0;
  let endX = 0;
  let endY = 0;
  const sweetCard = document.getElementById('sweetCard');

  if (sweetCard) {
    sweetCard.addEventListener('touchstart', (e) => {
      const touch = e.changedTouches[0];
      startX = touch.screenX;
      startY = touch.screenY;
    }, { passive: true });

    sweetCard.addEventListener('touchend', (e) => {
      const touch = e.changedTouches[0];
      endX = touch.screenX;
      endY = touch.screenY;
      handleTouchGesture();
    }, { passive: true });
  }

  function handleTouchGesture() {
    const deltaX = endX - startX;
    const deltaY = endY - startY;

    // KUNCI UTAMA:
    // Hanya anggap sebagai swipe jika gesekan HORIZONTAL jauh lebih dominan daripada VERTIKAL!
    // Ini memperbaiki masalah saat pacar mencoba scroll layar ke bawah, kartu tidak sengaja loncat slide!
    if (Math.abs(deltaX) > Math.abs(deltaY) * 1.4 && Math.abs(deltaX) > 42) {
      if (deltaX < 0) {
        // Geser ke Kiri -> Slide Selanjutnya
        if (currentSlide < totalSlides - 1) {
          updateSlide(currentSlide + 1);
        } else {
          updateSlide(0);
        }
      } else {
        // Geser ke Kanan -> Slide Sebelumnya
        if (currentSlide > 0) {
          updateSlide(currentSlide - 1);
        }
      }
    }
  }
}


/* ====================================================================
 * BAGIAN 6: INTERAKSI TOMBOL PELUK HANGAT (SLIDE 4)
 * ==================================================================== */
function initHugButton() {
  const btnHug = document.getElementById('btnHug');
  const hugFeedback = document.getElementById('hugFeedback');
  if (!btnHug) return;

  btnHug.addEventListener('click', (e) => {
    if (hugFeedback) {
      hugFeedback.style.display = 'block';
    }
    burstHeartsFromElement(btnHug);
  });
}

function burstHeartsFromElement(element) {
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const heartIcons = ['💖', '💜', '🌸', '🧸', '✨', '🤍', '🌷', '🎀'];
  const isMobile = window.innerWidth <= 640;
  const burstCount = isMobile ? 12 : 18;

  for (let i = 0; i < burstCount; i++) {
    const heart = document.createElement('span');
    heart.textContent = heartIcons[Math.floor(Math.random() * heartIcons.length)];
    heart.style.position = 'fixed';
    heart.style.left = centerX + 'px';
    heart.style.top = centerY + 'px';
    heart.style.fontSize = (15 + Math.random() * 14) + 'px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9999';
    heart.style.userSelect = 'none';
    heart.style.willChange = 'transform, opacity';
    heart.style.transition = 'all 1.2s cubic-bezier(0.25, 1, 0.5, 1)';

    document.body.appendChild(heart);

    const angle = Math.random() * Math.PI * 2;
    const distance = 60 + Math.random() * 110;
    const destX = Math.cos(angle) * distance;
    const destY = Math.sin(angle) * distance - 35;

    requestAnimationFrame(() => {
      heart.style.transform = `translate3d(${destX}px, ${destY}px, 0) scale(${1.2 + Math.random() * 0.3}) rotate(${Math.random() * 60 - 30}deg)`;
      heart.style.opacity = '0';
    });

    setTimeout(() => {
      if (heart.parentNode) {
        heart.parentNode.removeChild(heart);
      }
    }, 1300);
  }
}
