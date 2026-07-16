/* ============================================================
   Hiacynta Hess — hhess.de
   Zentrales Seiten-Script. Aktuell: mobiles Off-Canvas-Menü.
   Baut den Drawer aus dem vorhandenen Header-Markup auf, damit
   die Navigation NICHT pro Seite dupliziert werden muss.
   ============================================================ */
(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var inner = document.querySelector('.site-header__inner');
  var nav = inner && inner.querySelector(':scope > .main-nav');
  if (!toggle || !nav || !inner) return; // reduzierter Header: kein Menü

  var doc = document.documentElement;

  // Drawer wird AM BODY aufgebaut (nicht im Header) — sonst läge er im
  // Stacking-Kontext des Headers und würde vom Backdrop mit abgedunkelt.
  var drawer = document.createElement('aside');
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

  // Navigation + Newsletter-Button KLONEN (Original bleibt für Desktop im Header)
  drawer.appendChild(nav.cloneNode(true));
  var cta = inner.querySelector(':scope > .hh-btn--primary');
  if (cta) drawer.appendChild(cta.cloneNode(true));
  document.body.appendChild(drawer);

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

  // Klick auf einen Menü-Link im Drawer schließt ihn
  drawer.addEventListener('click', function (e) {
    if (e.target.closest('.main-nav a')) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen()) setOpen(false);
  });
})();
