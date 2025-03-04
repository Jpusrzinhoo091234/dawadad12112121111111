// Adiciona animação de rolagem suave para links de navegação
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.container > section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// Inicialmente, exibe apenas a seção "home"
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});
