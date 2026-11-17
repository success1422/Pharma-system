/* =========================================================
   Success Pharmaceuticals — app.js
   Rendering, filtering, dialog, form, motion, utilities
   ========================================================= */
(function () {
  'use strict';

  const PRODUCTS = Array.isArray(window.SUCCESS_PRODUCTS) ? window.SUCCESS_PRODUCTS : [];

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (value) => String(value).replace(/[&<>"']/g, (ch) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[ch]));

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const scrollBehavior = reduceMotion ? 'auto' : 'smooth';

  /* ---------- Elements ---------- */
  const grid = $('#product-grid');
  const emptyState = $('#empty-state');
  const resultCount = $('#result-count');
  const searchInput = $('#product-search');
  const areaFilter = $('#area-filter');
  const typeChips = $$('.chip[data-type]');
  const resetBtn = $('#reset-filters');
  const emptyReset = $('#empty-reset');
  const dialog = $('#product-dialog');
  const dialogPanel = $('.modal__panel', dialog);
  const dialogBody = $('#dialog-body');
  const closeDialogBtn = $('#dialog-close');
  const toastEl = $('#toast');
  const header = $('#site-header');
  const backTop = $('#back-to-top');
  const menuBtn = $('#menu-toggle');
  const nav = $('#site-nav');
  const headerSearch = $('#header-search');
  const headerQ = $('#header-q');
  const contactForm = $('#contact-form');
  const successBox = $('#contact-success');

  /* ---------- State ---------- */
  const state = { query: '', type: 'all', area: 'all' };
  let lastFocused = null;
  let toastTimer;

  /* ---------- Toast ---------- */
  function toast(message) {
    toastEl.textContent = message;
    toastEl.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toastEl.classList.remove('is-visible'), 3200);
  }

  /* ---------- Filtering ---------- */
  function productMatches(p) {
    const q = state.query.trim().toLowerCase();
    const haystack = [
      p.name, p.generic, p.area, p.type, p.form, p.short, ...p.indications
    ].join(' ').toLowerCase();

    const matchesQuery = !q || haystack.includes(q);
    const matchesType = state.type === 'all' || p.type === state.type;
    const matchesArea = state.area === 'all' || p.area === state.area;

    return matchesQuery && matchesType && matchesArea;
  }

  function syncAreaCards() {
    $$('.area-card[data-area]').forEach((card) => {
      card.classList.toggle('is-active', card.dataset.area === state.area);
    });
  }

  function render() {
    const visible = PRODUCTS.filter(productMatches);

    grid.innerHTML = visible.map((p, index) => {
      const delay = Math.min(index, 8) * 35;
      return `
        <article class="product-card" data-id="${esc(p.id)}" style="animation-delay:${delay}ms">
          <div class="product-card__top">
            <span class="badge badge--${esc(p.type.toLowerCase())}">${esc(p.type)}</span>
            <span class="area-tag">${esc(p.area)}</span>
          </div>
          <h3>${esc(p.name)}</h3>
          <p class="product-card__generic">${esc(p.generic)}</p>
          <p class="product-card__desc">${esc(p.short)}</p>
          <dl class="product-card__meta">
            <div><dt>Form</dt><dd>${esc(p.form)}</dd></div>
            <div><dt>Strengths</dt><dd>${esc(p.strengths)}</dd></div>
          </dl>
          <button class="product-card__cta" type="button" data-id="${esc(p.id)}">
            View prescribing information <span aria-hidden="true">→</span>
          </button>
        </article>`;
    }).join('');

    grid.hidden = visible.length === 0;
    emptyState.hidden = visible.length > 0;
    resultCount.textContent = visible.length === PRODUCTS.length
      ? `Showing all ${PRODUCTS.length} medicines`
      : `${visible.length} of ${PRODUCTS.length} medicines shown`;

    syncAreaCards();

    $$('.product-card__cta', grid).forEach((btn) => {
      btn.addEventListener('click', () => openDialog(btn.dataset.id));
    });
  }

  /* ---------- Dialog ---------- */
  function openDialog(id) {
    const p = PRODUCTS.find((item) => item.id === id);
    if (!p) return;

    lastFocused = document.activeElement;

    dialogBody.innerHTML = `
      <div class="detail-head">
        <span class="badge badge--${esc(p.type.toLowerCase())}">${esc(p.type)}</span>
        <span class="area-tag">${esc(p.area)}</span>
      </div>
      <h2 class="detail-title" id="dialog-title">${esc(p.name)} <span class="detail-generic">${esc(p.generic)}</span></h2>
      <p class="detail-sub">${esc(p.short)}</p>

      <div class="detail-grid">
        <div class="detail-block">
          <h3>Indications</h3>
          <ul class="detail-list">${p.indications.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>
        </div>

        <div class="detail-block">
          <h3>Composition</h3>
          <p>${esc(p.composition)}</p>
        </div>

        <div class="detail-block">
          <h3>Dosage &amp; administration</h3>
          <p>${esc(p.dosage)}</p>
        </div>

        <div class="detail-block">
          <h3>Storage</h3>
          <p>${esc(p.storage)}</p>
        </div>

        <div class="detail-block detail-block--wide detail-block--warn">
          <h3>Warnings &amp; precautions</h3>
          <ul class="detail-list">${p.warnings.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>
        </div>

        <div class="detail-block detail-block--wide">
          <h3>Product details</h3>
          <p><strong>Pharmaceutical form:</strong> ${esc(p.form)} · <strong>Strengths:</strong> ${esc(p.strengths)}</p>
          <p style="margin-top:.35rem;color:var(--muted)">${esc(p.note)}</p>
        </div>
      </div>

      <div class="detail-actions">
        <a class="btn btn--primary" href="#contact" data-topic="Medical information" data-product="${esc(p.name)}">
          Request full prescribing information
        </a>
        <a class="btn btn--outline" href="#contact" data-topic="Adverse event report" data-product="${esc(p.name)}">
          Report an adverse event
        </a>
      </div>`;

    if (dialog.open) dialog.close();
    dialog.showModal();
    dialogPanel.scrollTop = 0;
    document.body.classList.add('is-locked');

    $$('[data-topic]', dialogBody).forEach((link) => {
      link.addEventListener('click', () => {
        const topic = link.dataset.topic;
        const productName = link.dataset.product;
        const topicSelect = $('#cf-topic');
        const message = $('#cf-message');

        if (topicSelect) topicSelect.value = topic;
        if (message && !message.value.trim()) {
          message.value = `I would like more information about ${productName}.`;
        }

        dialog.close();
        document.body.classList.remove('is-locked');
        toast(`Request type set to “${topic}”.`);
      });
    });
  }

  function closeDialog() {
    if (dialog.open) dialog.close();
  }

  closeDialogBtn.addEventListener('click', closeDialog);

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) closeDialog();
  });

  dialog.addEventListener('close', () => {
    document.body.classList.remove('is-locked');
    if (lastFocused && typeof lastFocused.focus === 'function') {
      lastFocused.focus();
    }
  });

  /* ---------- Filter controls ---------- */
  typeChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      state.type = chip.dataset.type;

      typeChips.forEach((item) => {
        const isActive = item === chip;
        item.classList.toggle('is-active', isActive);
        item.setAttribute('aria-pressed', String(isActive));
      });

      render();
    });
  });

  searchInput.addEventListener('input', () => {
    state.query = searchInput.value;
    render();
  });

  areaFilter.addEventListener('change', () => {
    state.area = areaFilter.value;
    render();
  });

  function resetFilters() {
    state.query = '';
    state.type = 'all';
    state.area = 'all';

    searchInput.value = '';
    areaFilter.value = 'all';

    typeChips.forEach((chip) => {
      const isActive = chip.dataset.type === 'all';
      chip.classList.toggle('is-active', isActive);
      chip.setAttribute('aria-pressed', String(isActive));
    });

    render();
  }

  resetBtn.addEventListener('click', () => {
    resetFilters();
    toast('Filters reset.');
  });

  emptyReset.addEventListener('click', () => {
    resetFilters();
    toast('Filters reset.');
  });

  $$('.area-card[data-area]').forEach((card) => {
    card.addEventListener('click', () => {
      const area = card.dataset.area;

      if (state.area === area) {
        state.area = 'all';
      } else {
        state.area = area;
      }

      areaFilter.value = state.area;
      render();

      document.getElementById('products').scrollIntoView({ behavior: scrollBehavior });
      toast(state.area === 'all' ? 'Showing all therapeutic areas.' : `Showing ${state.area} medicines.`);
    });
  });

  /* ---------- Header search ---------- */
  headerSearch.addEventListener('submit', (event) => {
    event.preventDefault();

    const q = headerQ.value.trim();
    state.query = q;
    searchInput.value = q;
    render();

    document.getElementById('products').scrollIntoView({ behavior: scrollBehavior });
    if (q) toast(`Showing results for “${q}”.`);
  });

  /* ---------- Mobile navigation ---------- */
  menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    menuBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  $$('#site-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', 'Open menu');
    });
  });

  /* ---------- Contact form ---------- */
  $$('input, select, textarea', contactForm).forEach((field) => {
    const clearError = () => field.removeAttribute('aria-invalid');
    field.addEventListener('input', clearError);
    field.addEventListener('change', clearError);
  });

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const required = $$('[required]', contactForm);
    let firstInvalid = null;

    required.forEach((field) => {
      const invalid = field.type === 'checkbox' ? !field.checked : !field.value.trim();
      field.setAttribute('aria-invalid', String(invalid));
      if (invalid && !firstInvalid) firstInvalid = field;
    });

    if (firstInvalid) {
      firstInvalid.focus();
      toast('Please complete the highlighted fields.');
      return;
    }

    const name = $('#cf-name').value.trim().split(/\s+/)[0] || 'there';
    const topic = $('#cf-topic').value.toLowerCase();

    successBox.innerHTML =
      `<strong>Thank you, ${esc(name)}.</strong> Your ${esc(topic)} request has been recorded in this demo. ` +
      'In production, the medical information team would respond within two business days.';
    successBox.hidden = false;

    contactForm.hidden = true;
    successBox.focus();
    toast('Request submitted (demo).');
  });

  /* ---------- Scroll effects ---------- */
  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 10);
    backTop.classList.toggle('is-visible', y > 700);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: scrollBehavior });
  });

  /* ---------- Number counters ---------- */
  function animateNumber(el) {
    const target = Number(el.dataset.count) || 0;
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(target * eased).toLocaleString('en-US') + suffix;
      if (t < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  const counters = $$('.num');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    counters.forEach((el) => {
      el.textContent = Number(el.dataset.count).toLocaleString('en-US') + (el.dataset.suffix || '');
    });
  } else {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateNumber(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });

    counters.forEach((el) => counterObserver.observe(el));
  }

  /* ---------- Reveal on scroll ---------- */
  if (reduceMotion || !('IntersectionObserver' in window)) {
    $$('.reveal').forEach((el) => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    $$('.reveal').forEach((el) => revealObserver.observe(el));
  }

  /* ---------- Init ---------- */
  render();
})();