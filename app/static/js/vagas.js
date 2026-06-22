// Aguarda o HTML da página carregar por completo
window.onload = function() {
    
    // Captura os elementos do formulário usando os IDs do seu HTML
    const botaoAdd = document.getElementById("add-tag");
    const inputTecnologia = document.getElementById("tech-input");
    const containerDasTags = document.getElementById("tags-container");
    const inputInvisivel = document.getElementById("tecnologias_vaga");

    // Cria a lista (array) vazia que vai guardar os textos das tecnologias
    const listaDeTecnologias = [];

    // Verifica se o botão de adicionar existe na tela antes de programar o clique
    if (botaoAdd !== null) {
        botaoAdd.addEventListener("click", function(evento) {
            
            // Impede o botão "+" de enviar o formulário inteiro e atualizar a página
            evento.preventDefault(); 

            // Pega o que o usuário digitou e limpa espaços vazios desnecessários
            const textoDigitado = inputTecnologia.value.trim();

            // Só executa a lógica se o usuário realmente tiver digitado alguma coisa
            if (textoDigitado !== "") {
                
                // 1. Guarda a palavra dentro da nossa lista JavaScript
                listaDeTecnologias.push(textoDigitado);

                // 2. Cria um elemento <span> do zero direto na memória do navegador
                const quadradoTag = document.createElement("span");
                quadradoTag.className = "tag-badge"; // Aplica a classe para o CSS deixar bonito
                quadradoTag.innerText = textoDigitado; // Coloca o texto da tecnologia dentro dele

                // 3. Joga esse <span> novo para dentro da div #tags-container para aparecer na tela
                containerDasTags.appendChild(quadradoTag);

                // 4. Limpa o campo de texto para o usuário poder digitar outra tecnologia
                inputTecnologia.value = "";

                // 5. Junta toda a lista com vírgulas (ex: "React,Node,Python") e joga no input hidden
                if (inputInvisivel !== null) {
                    inputInvisivel.value = listaDeTecnologias.join(",");
                }
            }
        });
    }
};