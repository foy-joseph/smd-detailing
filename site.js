/* SMD Detailing — site interactions */
(function () {
  'use strict';

  /* ---------- Sticky header shrink + reveal ---------- */
  const header = document.querySelector('.site-header');
  if (header) {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 16) header.classList.add('scrolled');
          else header.classList.remove('scrolled');
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Mobile menu ---------- */
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const backdrop = document.getElementById('menuBackdrop');
  if (menuBtn && mobileMenu) {
    const close = () => {
      mobileMenu.classList.remove('open');
      if (backdrop) backdrop.classList.remove('show');
      document.body.classList.remove('menu-open');
      menuBtn.setAttribute('aria-expanded', 'false');
    };
    const open = () => {
      mobileMenu.classList.add('open');
      if (backdrop) backdrop.classList.add('show');
      document.body.classList.add('menu-open');
      menuBtn.setAttribute('aria-expanded', 'true');
    };
    menuBtn.addEventListener('click', () => {
      if (mobileMenu.classList.contains('open')) close();
      else open();
    });
    if (backdrop) backdrop.addEventListener('click', close);
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }

  /* ---------- Fade-up reveal ---------- */
  const fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    fadeEls.forEach(el => io.observe(el));
  } else {
    fadeEls.forEach(el => el.classList.add('in'));
  }

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = el.getAttribute('data-count');
          const suffix = el.getAttribute('data-suffix') || '';
          const prefix = el.getAttribute('data-prefix') || '';
          const numeric = parseFloat(target);
          if (Number.isNaN(numeric)) {
            el.textContent = prefix + target + suffix;
          } else {
            const duration = 1400;
            const start = performance.now();
            const animate = (now) => {
              const elapsed = now - start;
              const p = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              const value = Math.round(numeric * eased);
              el.textContent = prefix + value + suffix;
              if (p < 1) requestAnimationFrame(animate);
              else el.textContent = prefix + numeric + suffix;
            };
            requestAnimationFrame(animate);
          }
          countObserver.unobserve(el);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(c => countObserver.observe(c));
  }

  /* ---------- Before/After slider ---------- */
  document.querySelectorAll('.before-after').forEach((wrap) => {
    const afterWrap = wrap.querySelector('.after-wrap');
    const handle = wrap.querySelector('.slider-handle');
    if (!afterWrap || !handle) return;
    let active = false;

    const setPos = (clientX) => {
      const rect = wrap.getBoundingClientRect();
      let x = clientX - rect.left;
      x = Math.max(0, Math.min(x, rect.width));
      const pct = (x / rect.width) * 100;
      afterWrap.style.width = pct + '%';
      handle.style.left = pct + '%';
    };

    const start = (e) => {
      active = true;
      wrap.classList.add('dragging');
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      setPos(x);
    };
    const move = (e) => {
      if (!active) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      setPos(x);
    };
    const end = () => { active = false; wrap.classList.remove('dragging'); };

    handle.addEventListener('mousedown', start);
    wrap.addEventListener('mousedown', start);
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', end);
    handle.addEventListener('touchstart', start, { passive: true });
    document.addEventListener('touchmove', move, { passive: true });
    document.addEventListener('touchend', end);
  });

  /* ---------- Gallery filter ---------- */
  const filterBar = document.querySelector('.filter-bar');
  if (filterBar) {
    const buttons = filterBar.querySelectorAll('button');
    const items = document.querySelectorAll('.gallery-item');
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        items.forEach((item) => {
          if (filter === 'all' || item.getAttribute('data-tier') === filter) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });
  }

  /* ---------- Form: friendly client-side feedback ---------- */
  const bookingForm = document.querySelector('form.booking');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = bookingForm.querySelector('[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';
      }
      // Demo only: in production this would POST to a Formspree/Resend endpoint.
      setTimeout(() => {
        const success = document.createElement('div');
        success.style.cssText = 'text-align:center; padding:30px 10px;';
        const h = document.createElement('h3');
        h.style.cssText = 'color: var(--accent); margin-bottom: 10px;';
        h.textContent = 'Got it — message received.';
        const p = document.createElement('p');
        p.style.cssText = 'color: var(--text-dim); margin: 0; line-height: 1.6;';
        p.textContent = "I read every enquiry myself. You'll hear from me by text within 24 hours with the next available slot.";
        const sig = document.createElement('p');
        sig.style.cssText = 'color: var(--text); margin-top: 14px; font-weight: 700;';
        sig.textContent = '— Shay';
        success.appendChild(h);
        success.appendChild(p);
        success.appendChild(sig);
        bookingForm.replaceChildren(success);
        bookingForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 700);
    });
  }
})();
