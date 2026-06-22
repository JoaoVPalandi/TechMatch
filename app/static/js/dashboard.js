// Aguarda o HTML carregar na tela
window.onload = function() {
    const textoSaudacao = document.getElementById("saudacao");
    
    if (textoSaudacao !== null) {
        const horaAgora = new Date().getHours(); // Pega a hora do computador (ex: 14)
        
        if (horaAgora < 12) {
            textoSaudacao.innerText = "Bom dia, Empresa!";
        } else if (horaAgora < 18) {
            textoSaudacao.innerText = "Boa tarde, Empresa!";
        } else {
            textoSaudacao.innerText = "Boa noite, Empresa!";
        }
    }

    const botaoSair = document.getElementById("btn-sair");

    if (botaoSair !== null) {
        botaoSair.addEventListener("click", function(evento) {
            const confirmou = confirm("Tem certeza que deseja sair?");
            
            if (confirmou === false) {
                evento.preventDefault();
            }
        });
    }

    const campoBusca = document.getElementById("campo-busca");

    if (campoBusca !== null) {
        campoBusca.addEventListener("input", function() {
            const textoDigitado = campoBusca.value.toLowerCase();
            
            const itensVagas = document.querySelectorAll(".item-vaga");

            itensVagas.forEach(function(vaga) {
                const cargo = vaga.querySelector(".titulo-cargo").innerText.toLowerCase();
                
                if (cargo.includes(textoDigitado)) {
                    vaga.style.display = "flex";
                } else {
                    vaga.style.display = "none";
                }
            });
        });
    }

};