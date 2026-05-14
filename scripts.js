document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // 1. LÓGICA DO BANNER DE COOKIES
    // ==========================================
    const banner = document.getElementById('cookie-banner');
    const botaoAceitar = document.getElementById('aceitar-cookies');

    if (banner && botaoAceitar) {
        if (localStorage.getItem('cookies-aceitos') === 'true') {
            banner.style.display = 'none';
        } else {
            setTimeout(() => {
                banner.classList.add('mostrar');
            }, 4000);
        }

        botaoAceitar.addEventListener('click', () => {
            banner.classList.remove('mostrar');
            banner.style.display = 'none'; 
            localStorage.setItem('cookies-aceitos', 'true'); 
        });
    }

    // ==========================================
    // 2. LÓGICA DO MENU HAMBÚRGUER (CELULAR)
    // ==========================================
    const btnMenu = document.getElementById('btn-menu');
    const menuPrincipal = document.getElementById('menu-principal');
    const linksMenu = menuPrincipal ? menuPrincipal.querySelectorAll('a') : [];

    if (btnMenu && menuPrincipal) {
        // Quando clica no botão hambúrguer
        btnMenu.addEventListener('click', function() {
            // Liga/Desliga a classe 'ativo'
            menuPrincipal.classList.toggle('ativo');
            
            // Troca o ícone (De Hambúrguer ☰ para um X ✖)
            if (menuPrincipal.classList.contains('ativo')) {
                btnMenu.innerHTML = '&#10006;'; // Símbolo de Fechar (X)
            } else {
                btnMenu.innerHTML = '&#9776;';  // Símbolo Hambúrguer (☰)
            }
        });

        // Quando clica num link do menu, ele fecha automaticamente
        linksMenu.forEach(link => {
            link.addEventListener('click', () => {
                menuPrincipal.classList.remove('ativo');
                btnMenu.innerHTML = '&#9776;'; // Volta ao Hambúrguer
            });
        });
    }
});