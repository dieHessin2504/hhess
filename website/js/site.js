/* ============================================================
   Hiacynta Hess — hhess.de
   Zentrales Seiten-Script. Aktuell: mobiles Off-Canvas-Menü.
   Baut den Drawer aus dem vorhandenen Header-Markup auf, damit
   die Navigation NICHT pro Seite dupliziert werden muss.
   ============================================================ */
(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  var inner = document.querySelector('.site-header__inner');
  if (!toggle || !nav || !inner) return; // reduzierter Header: kein Menü

  var doc = document.documentElement;

  // --- Drawer-Hülle ---
  var drawer = document.createElement('div');
  drawer.className = 'site-drawer';

  // Kopf: Logo (Klon) + Schließen-Button
  var head = document.createElement('div');
  head.className = 'site-drawer__head';

  var logoEl = inner.querySelector('.logo');
  if (logoEl) {
    var logo = logoEl.cloneNode(true);
    logo.removeAttribute('width');
    logo.removeAttribute('height');
    head.appendChild(logo);
  }

  var closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.className = 'drawer-close';
  closeBtn.setAttribute('aria-label', 'Menü schließen');
  closeBtn.innerHTML =
    '<svg class="icon" aria-hidden="true"><use href="assets/icons/sprite.svg#icon-xmark"></use></svg>';
  head.appendChild(closeBtn);
  drawer.appendChild(head);

  // Vorhandene Navigation + Newsletter-Button in den Drawer verschieben
  var cta = inner.querySelector(':scope > .hh-btn--primary');
  drawer.appendChild(nav);
  if (cta) drawer.appendChild(cta);
  inner.appendChild(drawer);

  // Backdrop (abgedunkelt + Blur über dem sichtbaren Website-Rest)
  var backdrop = document.createElement('div');
  backdrop.className = 'drawer-backdrop';
  document.body.appendChild(backdrop);

  function isOpen() {
    return doc.classList.contains('nav-open');
  }

  function setOpen(open) {
    doc.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    (open ? closeBtn : toggle).focus();
  }

  toggle.addEventListener('click', function () {
    setOpen(!isOpen());
  });
  closeBtn.addEventListener('click', function () {
    setOpen(false);
  });
  backdrop.addEventListener('click', function () {
    setOpen(false);
  });

  // Klick auf einen Menü-Link schließt den Drawer
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen()) setOpen(false);
  });
})();
