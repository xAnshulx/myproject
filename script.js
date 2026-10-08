document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const button = document.querySelector('.nav-button');
  const visual = document.querySelector('.hero-visual');

  if (button && visual) {
    button.addEventListener('click', () => {
      visual.classList.remove('pulse');
      void visual.offsetWidth;
      visual.classList.add('pulse');
      setTimeout(() => visual.classList.remove('pulse'), 600);
    });
  }
});
