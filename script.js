document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA MODO OSCURO / CLARO ---
    const toggleBtnDesktop = document.getElementById('theme-toggle-desktop');
    const toggleBtnMobile = document.getElementById('theme-toggle-mobile');
    
    // Función única para cambiar el tema
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

    // Cargar tema guardado
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    // Asignar evento a ambos botones (si existen en el DOM)
    if(toggleBtnDesktop) toggleBtnDesktop.addEventListener('click', toggleTheme);
    if(toggleBtnMobile) toggleBtnMobile.addEventListener('click', toggleTheme);


    // --- LÓGICA MENÚ HAMBURGUESA ---
    const burgerBtn = document.getElementById('burger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuBtn = document.getElementById('close-menu-btn');

    if (burgerBtn && mobileMenu && closeMenuBtn) {
        // Abrir menú
        burgerBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });

        // Cerrar menú con la X
        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });

        // Cerrar menú si hacen clic fuera del contenido (en el fondo oscuro)
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                mobileMenu.classList.remove('active');
            }
        });
    }

});