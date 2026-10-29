/* Strength Companion — interface layer (v6.0.0)
   Presentation-only behavior: toasts, settings panes, day stepping, set notes,
   sync indicator, and dashboard bars. No workout data or sync logic lives here. */
(function () {
  'use strict';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const ui = (window.SCUI = window.SCUI || {});

  /* ---------- Toast ---------- */
  let toastTimer;
  ui.toast = function (message, quiet) {
    const t = $('#toast');
    if (!t) return;
    t.textContent = message;
    t.classList.toggle('quiet', !!quiet);
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), quiet ? 1200 : 2400);
  };

  /* ---------- Overview: time-by-activity bars ---------- */
  ui.paintMinutes = function () {
    const items = $$('#dashMinutes li');
    if (!items.length) return;
    const values = items.map(li => parseFloat($('b', li).textContent) || 0);
    const max = Math.max(...values, 1);
    items.forEach((li, i) => {
      const bar = $('u', li);
      if (bar) bar.style.width = (values[i] / max) * 100 + '%';
      li.classList.toggle('zero', values[i] === 0);
    });
  };

  /* ---------- Settings panes ---------- */
  ui.showPane = function (name) {
    $$('.seg-btn').forEach(b => {
      const on = b.dataset.pane === name;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', String(on));
    });
    $$('.pane').forEach(p => p.classList.toggle('active', p.id === name));
  };
  $$('.seg-btn').forEach(b => b.addEventListener('click', () => ui.showPane(b.dataset.pane)));
  ui.showPane('goals');

  /* Links like data-goto="settings:goals" */
  document.addEventListener('click', e => {
    const link = e.target.closest('[data-goto]');
    if (!link) return;
    const [view, pane] = link.dataset.goto.split(':');
    if (typeof showView === 'function') showView(view);
    if (pane) ui.showPane(pane);
  });

  /* ---------- Today: step through days ---------- */
  const dateInput = $('#workoutDate');
  function stepDay(delta) {
    if (!dateInput || !dateInput.value || typeof addDays !== 'function') return;
    dateInput.value = addDays(dateInput.value, delta);
    dateInput.dispatchEvent(new Event('change'));
  }
  const prev = $('#prevDay'), next = $('#nextDay');
  if (prev) prev.addEventListener('click', () => stepDay(-1));
  if (next) next.addEventListener('click', () => stepDay(1));

  /* ---------- Today: per-set notes ---------- */
  document.addEventListener('click', e => {
    const btn = e.target.closest('.note-toggle');
    if (!btn) return;
    const row = btn.closest('.setrow');
    if (!row) return;
    const open = row.classList.toggle('show-note');
    if (open) {
      const input = $('.notes', row);
      if (input) input.focus();
    }
  });

  /* ---------- Today: overflow menu ---------- */
  const menu = $('#dayMenu');
  document.addEventListener('click', e => {
    if (!menu || !menu.open) return;
    if (!menu.contains(e.target) || e.target.closest('.menu-item')) menu.open = false;
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu && menu.open) {
      menu.open = false;
      const s = $('summary', menu);
      if (s) s.focus();
    }
  });

  /* ---------- Today: keep the active day visible in the strip ---------- */
  const daybar = $('#daybar');
  if (daybar) {
    new MutationObserver(() => {
      const a = $('.daybtn.active', daybar);
      if (a && daybar.scrollWidth > daybar.clientWidth) {
        a.scrollIntoView({ inline: 'center', block: 'nearest' });
      }
    }).observe(daybar, { childList: true });
  }

  /* ---------- Header: cloud sync indicator ---------- */
  const chip = $('#syncChip');
  const cloudStatus = $('#cloudStatus');
  let wasReady = false;
  const labels = { ready: 'Synced', syncing: 'Syncing…', error: 'Sync problem', local: 'Local only' };
  function updateChip() {
    if (!chip || !cloudStatus) return;
    const state = ['ready', 'syncing', 'error', 'local'].find(c => cloudStatus.classList.contains(c)) || 'local';
    chip.dataset.state = state;
    $('span', chip).textContent = labels[state];
    if (state === 'ready' && !wasReady) {
      /* Once connected, tuck the setup steps away. */
      ['cfgStep', 'signinStep'].forEach(id => { const d = document.getElementById(id); if (d) d.open = false; });
    }
    wasReady = state === 'ready';
  }
  if (chip) {
    chip.addEventListener('click', () => {
      if (typeof showView === 'function') showView('settings');
      ui.showPane('cloud');
    });
  }
  if (cloudStatus) {
    new MutationObserver(updateChip).observe(cloudStatus, { attributes: true, attributeFilter: ['class'] });
    updateChip();
  }

  ui.paintMinutes();
})();
