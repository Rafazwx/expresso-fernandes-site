

document.addEventListener("DOMContentLoaded", function() {
    
    // =========================================================
    // 1. LÓGICA DO MENU HAMBÚRGUER (CELULAR) - COM "X"
    // =========================================================
    const btnMenu = document.getElementById('btn-menu');
    const menuPrincipal = document.getElementById('menu-principal');

    if (btnMenu && menuPrincipal) {
        // Ao clicar no hambúrguer
        btnMenu.addEventListener('click', function() {
            menuPrincipal.classList.toggle('ativo'); // Abre/fecha o menu
            btnMenu.classList.toggle('ativo'); // Faz a animação do X rodar
        });

        // Fecha o menu se a pessoa clicar num link
        const linksMenu = menuPrincipal.querySelectorAll('a');
        linksMenu.forEach(link => {
            link.addEventListener('click', () => {
                menuPrincipal.classList.remove('ativo');
                btnMenu.classList.remove('ativo'); // Desfaz o X
            });
        });
    }

    // =========================================================
    // 2. LÓGICA DO BANNER DE COOKIES (SEU CÓDIGO ORIGINAL)
    // =========================================================
    const banner = document.getElementById('cookie-banner');
    const botaoAceitar = document.getElementById('aceitar-cookies');

    if (!banner || !botaoAceitar) return;

    if (localStorage.getItem('cookies-aceitos') === 'true') {
        banner.style.display = 'none';
        return;
    }

    setTimeout(() => {
        banner.classList.add('mostrar');
    }, 4000);

    botaoAceitar.addEventListener('click', () => {
        banner.classList.remove('mostrar');
        banner.style.display = 'none'; 
        localStorage.setItem('cookies-aceitos', 'true'); 
    });
});