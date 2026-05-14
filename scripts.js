document.addEventListener("DOMContentLoaded", function() {
    
    // --- LÓGICA DO MENU HAMBÚRGUER COM ANIMAÇÃO EM X ---
    const btnMenu = document.getElementById('btn-menu');
    const menuPrincipal = document.getElementById('menu-principal');
    const links = menuPrincipal ? menuPrincipal.querySelectorAll('a') : [];

    if (btnMenu && menuPrincipal) {
        btnMenu.addEventListener('click', function() {
            menuPrincipal.classList.toggle('ativo');
            btnMenu.classList.toggle('ativo'); // Esta classe vai fazer o CSS transformar o botão num X
        });

        // Fecha o menu e volta ao hambúrguer se clicar nalgum link
        links.forEach(link => {
            link.addEventListener('click', () => {
                menuPrincipal.classList.remove('ativo');
                btnMenu.classList.remove('ativo');
            });
        });
    }

    // --- LÓGICA DO AVISO DE COOKIES ---
    const banner = document.getElementById('cookie-banner');
    const botaoAceitar = document.getElementById('aceitar-cookies');

    if (banner && botaoAceitar) {
        if (localStorage.getItem('cookies-aceitos') === 'true') {
            banner.style.display = 'none';
        } else {
            setTimeout(() => { banner.classList.add('mostrar'); }, 4000);
        }

        botaoAceitar.addEventListener('click', () => {
            banner.classList.remove('mostrar');
            banner.style.display = 'none'; 
            localStorage.setItem('cookies-aceitos', 'true'); 
        });
    }
});