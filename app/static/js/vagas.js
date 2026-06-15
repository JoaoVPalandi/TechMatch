window.onload = function() {
    // Todos os elementos do HTML viram const porque eles nunca mudam de ID
    const botaoAdd = document.getElementById("add-tag");
    const inputTecnologia = document.getElementById("tech-input");
    const containerDasTags = document.getElementById("tags-container");
    const inputInvisivel = document.getElementById("tecnologias_vaga");

    // A lista vira const! Podemos dar .push() nela normalmente, só não podemos fazer lista = [] de novo
    const listaDeTecnologias = [];

    botaoAdd.addEventListener("click", function(evento) {
        evento.preventDefault(); 

        // O texto digitado vira const porque ele só nasce, lê o valor e morre a cada clique
        const textoDigitado = inputTecnologia.value;

        if (textoDigitado != "") {
            listaDeTecnologias.push(textoDigitado);

            // O elemento que estamos criando nasce e morre aqui dentro, então é const
            const quadradoTag = document.createElement("span");
            quadradoTag.className = "tag-badge";
            quadradoTag.innerText = textoDigitado;

            containerDasTags.appendChild(quadradoTag);

            inputTecnologia.value = "";

            if (inputInvisivel != null) {
                inputInvisivel.value = listaDeTecnologias.join(",");
            }
        }
    });
};