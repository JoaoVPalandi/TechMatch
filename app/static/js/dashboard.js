window.onload = function() {
    const textoSaudacao = document.getElementById("saudacao");
    
    if (textoSaudacao != null) {
        const horaAgora = new Date().getHours(); 
        
        if (horaAgora < 12) {
            textoSaudacao.innerText = "Bom dia, Empresa!";
        } else if (horaAgora < 18) {
            textoSaudacao.innerText = "Boa tarde, Empresa!";
        } else {
            textoSaudacao.innerText = "Boa noite, Empresa!";
        }
    }

    // O elemento do botão vira const
    const botaoSair = document.getElementById("btn-sair");

    if (botaoSair != null) {
        botaoSair.addEventListener("click", function(evento) {
            const resposta = confirm("Deseja mesmo deslogar do TechMatch?");
            
            if (resposta == false) {
                evento.preventDefault();
            }
        });
    }

};