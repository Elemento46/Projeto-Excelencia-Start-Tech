// Theme toggle
const toggle = document.getElementById('toggle');
const body = document.body; // DECLARAR APENAS UMA VEZ

// Carregar preferência salva
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light');
    toggle.checked = true;
}

toggle.addEventListener('change', () => {
    body.classList.toggle('light');
    localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark');
});

// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
// REMOVER: const body = document.body; (JÁ FOI DECLARADO ACIMA)

// Criar overlay
const overlay = document.createElement('div');
overlay.classList.add('menu-overlay');
body.appendChild(overlay);

// Adicionar classe mobile-menu aos links em telas pequenas
function checkScreenSize() {
    if (window.innerWidth <= 768) {
        navLinks.classList.add('mobile-menu');
    } else {
        navLinks.classList.remove('mobile-menu', 'active');
        menuToggle.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = '';
    }
}

// Verificar tamanho inicial
checkScreenSize();

// Verificar ao redimensionar
window.addEventListener('resize', checkScreenSize);

// Toggle menu
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Prevenir scroll quando menu aberto
    if (navLinks.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
});

// Fechar menu ao clicar no overlay
overlay.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
    body.style.overflow = '';
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            body.style.overflow = '';
        }
    });
});