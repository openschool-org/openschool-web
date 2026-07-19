function onScroll() {
  document.body.classList.toggle('os-scrolled', window.scrollY > 12);
}

if (typeof window !== 'undefined') {
  window.addEventListener('scroll', onScroll, {passive: true});
  onScroll();
}

export {};
