// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');
const body = document.body;

// Load saved theme from localStorage
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

// Scroll reveal animation
const revealElements = document.querySelectorAll('.action-button');

const reveal = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('reveal', 'active');
        }
    });
};

// Initial check for elements in view
window.addEventListener('load', reveal);
window.addEventListener('scroll', reveal);

// Button ripple effect
document.querySelectorAll('.action-button').forEach(button => {
    button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 1000);
    });
});