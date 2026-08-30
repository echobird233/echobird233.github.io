(function () {
  const button = document.querySelector('.mobile-menu-button');
  const nav = document.querySelector('.profile-nav');

  if (!button || !nav) return;

  button.addEventListener('click', function () {
    const open = nav.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? 'CLOSE' : 'MENU';
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
      button.textContent = 'MENU';
    });
  });
})();
