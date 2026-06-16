window.onload = function() {
    
    // Captura os elementos do HTML usando os IDs exatos
    const botaoAdd = document.getElementById("add-tag");
    const inputTecnologia = document.getElementById("tech-input");
    const containerDasTags = document.getElementById("tags-container");
    const inputInvisivel = document.getElementById("tecnologias_vaga");

    // Array (lista) para guardar os nomes das tecnologias digitadas
    const listaDeTecnologias = [];

    if (botaoAdd !== null) {
        botaoAdd.addEventListener("click", function(evento) {
            // Impede que o botão dê "submit" no formulário antes da hora
            evento.preventDefault(); 

            // Pega o texto digitado e limpa os espaços inúteis
            const textoDigitado = inputTecnologia.value.trim();

            // Só faz alguma coisa se o campo não estiver vazio
            if (textoDigitado !== "") {
                
                // 1. Adiciona a tecnologia dentro da nossa lista (array)
                listaDeTecnologias.push(textoDigitado);

                // 2. Cria um elemento <span> do zero no HTML para ser a Tag visual
                const quadradoTag = document.createElement("span");
                quadradoTag.className = "tag-badge"; // Classe para o CSS estilizar
                quadradoTag.innerText = textoDigitado;

                // 3. Coloca essa nova tag dentro do container para ela aparecer na tela
                containerDasTags.appendChild(quadradoTag);

                // 4. Limpa o campo de texto para o usuário digitar a próxima
                inputTecnologia.value = "";

                // 5. Junta a lista toda com vírgulas (Ex: "Python,Flask,SQL") e joga no input invisível
                if (inputInvisivel !== null) {
                    inputInvisivel.value = listaDeTecnologias.join(",");
                }
            }
        });
    }
};