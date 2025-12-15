// CV-specific interactions placeholder
// This file is intentionally minimal to not break existing behavior
// You can add JS-powered features here later.

document.addEventListener('DOMContentLoaded', () => {
  // Future: add smooth scroll, interactive sections, etc.
  const nav = document.querySelector('.navbar, header nav, .nav');
  const burger = document.querySelector('.menu-toggle, .hamburger, .nav-toggle');
  const menu = document.querySelector('.nav-menu, .menu, .nav-links');

  if (!nav || !burger || !menu) return;

  burger.addEventListener('click', () => {
    burger.classList.toggle('is-open');
    menu.classList.toggle('is-open');
  });
});
