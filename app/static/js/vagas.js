window.onload = function() {
    const botaoAdd = document.getElementById("add-tag");
    const inputTecnologia = document.getElementById("tech-input");
    const containerDasTags = document.getElementById("tags-container");
    const inputInvisivel = document.getElementById("tecnologias_vaga");


    const listaDeTecnologias = [];

    botaoAdd.addEventListener("click", function(evento) {
        evento.preventDefault(); 

        const textoDigitado = inputTecnologia.value;

        if (textoDigitado != "") {
            listaDeTecnologias.push(textoDigitado);
            
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