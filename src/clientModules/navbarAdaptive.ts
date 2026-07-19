import type {ClientModule} from '@docusaurus/types';

let ticking = false;

function isOverDark(navEl: HTMLElement): boolean {
  const rect = navEl.getBoundingClientRect();
  const probeX = rect.left + rect.width / 2;
  const probeY = rect.top + rect.height / 2;
  const darkEls = document.querySelectorAll<HTMLElement>(
    '.os-torn-band, .os-section--dark, footer.footer',
  );

  for (const el of Array.from(darkEls)) {
    const r = el.getBoundingClientRect();
    if (probeY >= r.top && probeY <= r.bottom && probeX >= r.left && probeX <= r.right) {
      return true;
    }
  }
  return false;
}

function update() {
  ticking = false;
  const navEl = document.querySelector<HTMLElement>('.navbar');
  if (!navEl) return;
  document.body.classList.toggle('os-navbar-dark', isOverDark(navEl));
}

function onScroll() {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(update);
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('scroll', onScroll, {passive: true});
  window.addEventListener('resize', onScroll, {passive: true});
}

const module: ClientModule = {
  onRouteDidUpdate() {
    // Layout for the new route needs a tick to commit before we can measure it.
    setTimeout(update, 0);
  },
};

export default module;
