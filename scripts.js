document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById('cookie-banner');
    const botaoAceitar = document.getElementById('aceitar-cookies');

    // 1. Verificar se o usuário já aceitou os cookies anteriormente
    if (!localStorage.getItem('cookies-aceitos')) {
        
        // 2. Aguarda 4 segundos (4000ms) após carregar a página para mostrar
        setTimeout(() => {
            banner.classList.add('mostrar');
        }, 4000);
    }

    // 3. Ao clicar no botão, remove o banner e salva a decisão
    botaoAceitar.addEventListener('click', () => {
        banner.classList.remove('mostrar');
        
        // Salva no navegador para não incomodar o cliente novamente
        localStorage.setItem('cookies-aceitos', 'true');
    });
});