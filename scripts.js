document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById('cookie-banner');
    const botaoAceitar = document.getElementById('aceitar-cookies');

    if (!banner || !botaoAceitar) return;

    // 1. Verifica se já aceitou antes. Se sim, esconde o banner completamente e para o código.
    if (localStorage.getItem('cookies-aceitos') === 'true') {
        banner.style.display = 'none';
        return;
    }

    // 2. Se não aceitou, mostra o banner após 4 segundos
    setTimeout(() => {
        banner.classList.add('mostrar');
    }, 4000);

    // 3. Ação à prova de falhas para quando o utilizador clicar em "Aceitar"
    botaoAceitar.addEventListener('click', () => {
        banner.classList.remove('mostrar');
        banner.style.display = 'none'; // Garante que desaparece na hora!
        localStorage.setItem('cookies-aceitos', 'true'); // Grava a escolha
    });
});

