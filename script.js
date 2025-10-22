const toggleBtn = document.getElementById('theme-toggle');

const hamburger = document.getElementById('hamburger');

const navMenu = document.getElementById('nav-menu');

toggleBtn.addEventListener('click', () => {

  document.body.classList.toggle('dark');

  toggleBtn.textContent = document.body.classList.contains('dark') ? '🌙' : '🌞';

  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');

});

hamburger.addEventListener('click', () => {

  navMenu.classList.toggle('active');

});

window.addEventListener('load', () => {

  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {

    document.body.classList.add('dark');

    toggleBtn.textContent = '🌙';

  }

});

AOS.init({ duration: 800, once: true });