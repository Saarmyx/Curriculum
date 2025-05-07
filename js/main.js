// Función para habilitar el scroll suave en los enlaces internos
function enableSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Función para manejar el menú hamburguesa en dispositivos móviles
function enableMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const headerMenu = document.querySelector('.header-menu');

    if (menuToggle && headerMenu) {
        menuToggle.addEventListener('click', () => {
            headerMenu.classList.toggle('menu-open');
        });
    }
}

// Inicializar todas las funciones
document.addEventListener('DOMContentLoaded', () => {
    enableSmoothScroll();
    handleActiveMenu();
    enableMobileMenu();
});