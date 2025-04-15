// Création du Theme toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');
const body = document.body;

// Conservation du choix de thème dans le localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
body.classList.add(`${savedTheme}-mode`);
themeIcon.textContent = savedTheme === 'light' ? '🌞' : '🌙';

themeToggle.addEventListener('click', () => {
    const isLight = body.classList.contains('light-mode');
    body.classList.remove(isLight ? 'light-mode' : 'dark-mode');
    body.classList.add(isLight ? 'dark-mode' : 'light-mode');
    themeIcon.textContent = isLight ? '🌙' : '🌞';
    localStorage.setItem('theme', isLight ? 'dark' : 'light');
});
