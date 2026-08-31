(function () {
  'use strict';

  var root = document.documentElement;
  var body = document.body;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(pointer: fine) and (hover: hover)').matches;

  root.classList.add('js');

  initMobileMenu();
  initReadingProgress();
  initRevealMotion();
  initSectionTracking();

  if (!reduceMotion) {
    initPageOpening();
    initPageTransitions();
  }

  if (!reduceMotion && finePointer) {
    initPointerEffects();
    initTiltEffects();
  }

  function initMobileMenu() {
    var button = document.querySelector('.mobile-menu-button');
    var nav = document.querySelector('.profile-nav');

    if (!button || !nav) return;

    button.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
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
  }

  function initReadingProgress() {
    var rail = document.querySelector('.profile-rail');
    if (!rail) return;

    var progress = document.createElement('span');
    progress.className = 'reading-progress';
    progress.setAttribute('aria-hidden', 'true');
    rail.appendChild(progress);

    var update = function () {
      var maximum = document.documentElement.scrollHeight - window.innerHeight;
      var ratio = maximum > 0 ? window.scrollY / maximum : 0;
      progress.style.setProperty('--reading-progress', (8 + ratio * 92).toFixed(2) + '%');
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
  }

  function initRevealMotion() {
    var items = document.querySelectorAll(
      '.document-section, .resume-section, .dated-entry, .note-entry, .skill-group'
    );

    if (!items.length) return;

    items.forEach(function (item) {
      item.classList.add('reveal-item');
    });

    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (item) {
        item.classList.add('is-visible');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -4% 0px' });

    items.forEach(function (item) {
      observer.observe(item);
    });

    requestAnimationFrame(function () {
      root.classList.add('motion-ready');
    });
  }

  function initSectionTracking() {
    var nav = document.querySelector('.profile-nav');
    if (!nav || !('IntersectionObserver' in window)) return;

    var currentPath = normalizePath(window.location.pathname);
    var sectionLinks = Array.from(nav.querySelectorAll('a')).filter(function (link) {
      var url = new URL(link.href, window.location.href);
      return url.origin === window.location.origin &&
        normalizePath(url.pathname) === currentPath &&
        Boolean(url.hash) &&
        document.querySelector(url.hash);
    });

    if (!sectionLinks.length) return;

    var sections = sectionLinks.map(function (link) {
      return document.querySelector(new URL(link.href, window.location.href).hash);
    });

    var setActive = function (id) {
      sectionLinks.forEach(function (link) {
        var active = new URL(link.href, window.location.href).hash === '#' + id;
        link.classList.toggle('is-active', active);
      });
    };

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-20% 0px -68% 0px', threshold: 0 });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  function initPageOpening() {
    var wash = createWash('is-opening');
    window.setTimeout(function () {
      wash.remove();
    }, 1350);
  }

  function initPageTransitions() {
    document.addEventListener('click', function (event) {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      var link = event.target.closest('a[href]');
      if (!link || link.target === '_blank' || link.hasAttribute('download')) return;

      var href = link.getAttribute('href');
      if (!href || href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0 || href.indexOf('javascript:') === 0) return;

      var destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin) return;

      var sameDocument = normalizePath(destination.pathname) === normalizePath(window.location.pathname) &&
        destination.search === window.location.search;
      if (sameDocument && destination.hash) return;
      if (destination.href === window.location.href) return;

      event.preventDefault();
      createWash('is-leaving');
      window.setTimeout(function () {
        window.location.href = destination.href;
      }, 390);
    });
  }

  function createWash(stateClass) {
    var wash = document.createElement('div');
    wash.className = 'page-wash ' + stateClass;
    wash.setAttribute('aria-hidden', 'true');
    wash.innerHTML = '<span>LCX</span>';
    body.appendChild(wash);
    return wash;
  }

  function initPointerEffects() {
    var glow = document.createElement('div');
    var dot = document.createElement('div');
    var ring = document.createElement('div');
    var label = document.createElement('span');
    glow.className = 'pointer-glow';
    dot.className = 'cursor-dot';
    ring.className = 'cursor-ring';
    label.className = 'cursor-label';
    glow.setAttribute('aria-hidden', 'true');
    dot.setAttribute('aria-hidden', 'true');
    ring.setAttribute('aria-hidden', 'true');
    label.setAttribute('aria-hidden', 'true');
    ring.appendChild(label);
    body.append(glow, dot, ring);
    body.classList.add('custom-cursor-enabled');

    var targetX = window.innerWidth / 2;
    var targetY = window.innerHeight / 2;
    var ringX = targetX;
    var ringY = targetY;

    var getTargetElement = function (target) {
      if (target && target.closest) return target;
      return target && target.parentElement ? target.parentElement : null;
    };

    var getPointerLabel = function (target) {
      var anchor = target.closest('a[href]');
      var button = target.closest('button');

      if (anchor) {
        var href = anchor.getAttribute('href') || '';
        if (anchor.classList.contains('monogram')) return 'HOME';
        if (/^mailto:/i.test(href)) return 'MAIL';
        if (/github\.com/i.test(anchor.href)) return 'CODE';
        if (/orcid\.org/i.test(anchor.href)) return 'ID';
        if (anchor.closest('.profile-nav')) return 'GO';

        try {
          var url = new URL(anchor.href, window.location.href);
          if (url.origin === window.location.origin) {
            return url.pathname === window.location.pathname && url.hash ? 'GO' : 'READ';
          }
        } catch (error) {
          return 'OPEN';
        }

        return 'OPEN';
      }

      if (target.closest('summary')) return 'INFO';
      if (button && button.classList.contains('mobile-menu-button')) return 'MENU';
      if (button && button.closest('.print-action')) return 'PRINT';
      if (button) return 'SELECT';
      return '';
    };

    window.addEventListener('pointermove', function (event) {
      var target = getTargetElement(event.target);
      if (!target) return;

      targetX = event.clientX;
      targetY = event.clientY;
      root.style.setProperty('--pointer-x', targetX + 'px');
      root.style.setProperty('--pointer-y', targetY + 'px');
      dot.style.left = targetX + 'px';
      dot.style.top = targetY + 'px';

      var interactive = target.closest('a, button, summary');
      var pointerLabel = getPointerLabel(target);
      var overText = !interactive && Boolean(target.closest(
        'p, h1, h2, h3, h4, li, td, th, code, time, strong, em, blockquote, span'
      ));

      label.textContent = pointerLabel;
      body.classList.add('pointer-active');
      body.classList.toggle('pointer-link', Boolean(interactive));
      body.classList.toggle('pointer-label', Boolean(pointerLabel));
      body.classList.toggle('pointer-on-rail', Boolean(target.closest('.profile-rail')));
      body.classList.toggle('pointer-text', overText);
    }, { passive: true });

    window.addEventListener('pointerdown', function (event) {
      if (!event.isPrimary || event.button !== 0) return;

      var target = getTargetElement(event.target);
      var stamp = document.createElement('span');
      stamp.className = 'cursor-stamp';
      if (target && target.closest('.profile-rail')) stamp.classList.add('is-on-rail');
      stamp.setAttribute('aria-hidden', 'true');
      stamp.style.left = event.clientX + 'px';
      stamp.style.top = event.clientY + 'px';
      body.appendChild(stamp);

      var removeStamp = function () {
        if (stamp.parentNode) stamp.parentNode.removeChild(stamp);
      };

      stamp.addEventListener('animationend', removeStamp, { once: true });
      window.setTimeout(removeStamp, 520);
    }, { passive: true });

    document.documentElement.addEventListener('mouseleave', function () {
      label.textContent = '';
      body.classList.remove(
        'pointer-active',
        'pointer-link',
        'pointer-label',
        'pointer-on-rail',
        'pointer-text'
      );
    });

    var animateRing = function () {
      ringX += (targetX - ringX) * 0.16;
      ringY += (targetY - ringY) * 0.16;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
      window.requestAnimationFrame(animateRing);
    };

    animateRing();
  }

  function initTiltEffects() {
    var items = document.querySelectorAll('.dated-entry, .note-entry');

    items.forEach(function (item) {
      item.addEventListener('pointermove', function (event) {
        if (window.innerWidth <= 820) return;
        var rect = item.getBoundingClientRect();
        var rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -1.2;
        var rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 1.4;
        item.style.transform = 'perspective(900px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
      }, { passive: true });

      item.addEventListener('pointerleave', function () {
        item.style.transform = '';
      });
    });
  }

  function normalizePath(pathname) {
    if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1);
    return pathname;
  }
})();
