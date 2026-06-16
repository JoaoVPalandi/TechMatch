// Aguarda a página carregar por completo
window.onload = function() {

    // Pegamos o formulário pelo ID exato do HTML
    const formularioLogin = document.getElementById("form-login");

    // Monitoramos quando o usuário tenta enviar o formulário (submit)
    if (formularioLogin !== null) {
        formularioLogin.addEventListener("submit", function(evento) {
            
            // Pegamos o que foi digitado nos campos de E-mail e Senha
            // O '.trim()' serve para ignorar se o usuário digitar apenas espaços em branco
            const emailDigitado = document.getElementById("email").value.trim();
            const senhaDigitada = document.getElementById("password").value.trim();

            // VALIDAÇÃO BÁSICA: Se algum campo estiver vazio...
            if (emailDigitado === "" || senhaDigitada === "") {
                
                // 1. Para o envio do formulário (não deixa ir para a página de Dashboard)
                evento.preventDefault(); 
                
                // 2. Avisa o usuário de forma simples
                alert("Ops! Por favor, preencha o e-mail e a senha para entrar.");
            }
        });
    }

};