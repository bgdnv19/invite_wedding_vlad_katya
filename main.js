const music = document.getElementById('bgMusic');
const btn = document.getElementById('musicBtn');

btn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    btn.classList.add('playing');
    btn.setAttribute('aria-label', 'Выключить музыку');
  } else {
    music.pause();
    btn.classList.remove('playing');
    btn.setAttribute('aria-label', 'Включить музыку');
  }
});

