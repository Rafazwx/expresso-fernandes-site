

document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById('cookie-banner');
    const botaoAceitar = document.getElementById('aceitar-cookies');

    if (!banner || !botaoAceitar) return;

    // 1. Verifica se já aceitou antes
    if (localStorage.getItem('cookies-aceitos') === 'true') {
        banner.style.display = 'none';
        return;
    }

    // 2. Mostra o banner após 4 segundos
    setTimeout(() => {
        banner.classList.add('mostrar');
    }, 4000);

    // 3. Ação para quando o utilizador clicar em "Aceitar"
    botaoAceitar.addEventListener('click', () => {
        banner.classList.remove('mostrar');
        banner.style.display = 'none'; 
        localStorage.setItem('cookies-aceitos', 'true'); 
    });
});