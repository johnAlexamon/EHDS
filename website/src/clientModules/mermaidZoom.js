// Adds click-to-fullscreen with drag-to-pan and wheel/button zoom to every
// rendered Mermaid diagram. Docusaurus's theme-mermaid renders diagrams
// client-side and asynchronously, so a MutationObserver is used to catch
// SVGs as they appear (rather than a fixed timeout).

function isBrowser() {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

function buildOverlay() {
  const overlay = document.createElement('div');
  overlay.className = 'mermaid-zoom-overlay';

  const toolbar = document.createElement('div');
  toolbar.className = 'mermaid-zoom-toolbar';

  const zoomInBtn = document.createElement('button');
  zoomInBtn.type = 'button';
  zoomInBtn.className = 'mermaid-zoom-btn';
  zoomInBtn.setAttribute('aria-label', 'Zoom in');
  zoomInBtn.textContent = '+';

  const zoomOutBtn = document.createElement('button');
  zoomOutBtn.type = 'button';
  zoomOutBtn.className = 'mermaid-zoom-btn';
  zoomOutBtn.setAttribute('aria-label', 'Zoom out');
  zoomOutBtn.textContent = '−';

  const resetBtn = document.createElement('button');
  resetBtn.type = 'button';
  resetBtn.className = 'mermaid-zoom-btn';
  resetBtn.setAttribute('aria-label', 'Reset zoom');
  resetBtn.textContent = '↺';

  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.className = 'mermaid-zoom-btn mermaid-zoom-close';
  closeBtn.setAttribute('aria-label', 'Close');
  closeBtn.textContent = '✕';

  toolbar.append(zoomInBtn, zoomOutBtn, resetBtn, closeBtn);

  const stage = document.createElement('div');
  stage.className = 'mermaid-zoom-stage';

  const content = document.createElement('div');
  content.className = 'mermaid-zoom-content';
  stage.appendChild(content);

  overlay.append(toolbar, stage);

  return {overlay, stage, content, zoomInBtn, zoomOutBtn, resetBtn, closeBtn};
}

function attachOverlayBehavior({overlay, stage, content, zoomInBtn, zoomOutBtn, resetBtn, closeBtn}) {
  let scale = 1;
  let originX = 0;
  let originY = 0;
  let dragging = false;
  let startX = 0;
  let startY = 0;

  const MIN_SCALE = 0.5;
  const MAX_SCALE = 6;

  function apply() {
    content.style.transform = `translate(${originX}px, ${originY}px) scale(${scale})`;
  }

  function reset() {
    scale = 1;
    originX = 0;
    originY = 0;
    apply();
  }

  function zoomBy(factor, clientX, clientY) {
    const prevScale = scale;
    scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale * factor));
    if (clientX !== undefined && clientY !== undefined) {
      const rect = stage.getBoundingClientRect();
      const px = clientX - rect.left - rect.width / 2;
      const py = clientY - rect.top - rect.height / 2;
      originX -= (px - originX) * (scale / prevScale - 1);
      originY -= (py - originY) * (scale / prevScale - 1);
    }
    apply();
  }

  zoomInBtn.addEventListener('click', () => zoomBy(1.3));
  zoomOutBtn.addEventListener('click', () => zoomBy(1 / 1.3));
  resetBtn.addEventListener('click', reset);
  closeBtn.addEventListener('click', () => close());

  stage.addEventListener('wheel', (e) => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.15 : 1 / 1.15;
    zoomBy(factor, e.clientX, e.clientY);
  }, {passive: false});

  stage.addEventListener('mousedown', (e) => {
    if (e.target.closest('.mermaid-zoom-btn')) return;
    dragging = true;
    startX = e.clientX - originX;
    startY = e.clientY - originY;
    stage.classList.add('mermaid-zoom-dragging');
  });
  window.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    originX = e.clientX - startX;
    originY = e.clientY - startY;
    apply();
  });
  window.addEventListener('mouseup', () => {
    dragging = false;
    stage.classList.remove('mermaid-zoom-dragging');
  });

  let touchStartDist = null;
  let touchStartScale = 1;
  stage.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      dragging = true;
      startX = e.touches[0].clientX - originX;
      startY = e.touches[0].clientY - originY;
    } else if (e.touches.length === 2) {
      dragging = false;
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      touchStartDist = Math.hypot(dx, dy);
      touchStartScale = scale;
    }
  }, {passive: true});
  stage.addEventListener('touchmove', (e) => {
    if (e.touches.length === 1 && dragging) {
      originX = e.touches[0].clientX - startX;
      originY = e.touches[0].clientY - startY;
      apply();
    } else if (e.touches.length === 2 && touchStartDist) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, touchStartScale * (dist / touchStartDist)));
      apply();
    }
  }, {passive: true});
  stage.addEventListener('touchend', () => {
    dragging = false;
    touchStartDist = null;
  });

  function onKeyDown(e) {
    if (e.key === 'Escape') close();
  }

  function open(svg) {
    content.innerHTML = '';
    const clone = svg.cloneNode(true);
    clone.removeAttribute('height');
    clone.style.width = '100%';
    clone.style.height = '100%';
    content.appendChild(clone);
    reset();
    document.body.appendChild(overlay);
    document.body.classList.add('mermaid-zoom-open');
    document.addEventListener('keydown', onKeyDown);
  }

  function close() {
    if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
    document.body.classList.remove('mermaid-zoom-open');
    document.removeEventListener('keydown', onKeyDown);
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });

  return {open, close};
}

let controller = null;

function getController() {
  if (!controller) {
    const {overlay, ...rest} = buildOverlay();
    controller = attachOverlayBehavior({overlay, ...rest});
  }
  return controller;
}

function decorate(svg) {
  if (!svg || svg.dataset.zoomable === 'true') return;
  svg.dataset.zoomable = 'true';
  const container = svg.closest('.docusaurus-mermaid-container') || svg.parentElement;
  if (container) container.classList.add('mermaid-zoom-target');
  svg.addEventListener('click', () => getController().open(svg));
}

function scan() {
  document.querySelectorAll('.docusaurus-mermaid-container svg').forEach(decorate);
}

let observerStarted = false;

function ensureObserver() {
  if (observerStarted) return;
  observerStarted = true;
  const observer = new MutationObserver(() => scan());
  observer.observe(document.body, {childList: true, subtree: true});
}

function setup() {
  if (!isBrowser()) return;
  ensureObserver();
  scan();
}

if (isBrowser()) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
}

export function onRouteDidUpdate() {
  if (isBrowser()) setup();
}
