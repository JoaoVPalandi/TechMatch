window.onload = function() {
    const campoCep = document.getElementById("cep");
    const campoGithub = document.getElementById("github_user");

    // === PARTE DO CEP === 
    campoCep.addEventListener("blur", async function() {
        const cep = campoCep.value;

        if (cep.length == 8) {
            const link = "https://viacep.com.br/ws/" + cep + "/json/";
            
            const resposta = await fetch(link);
            const dados = await resposta.json();

            if (dados.erro != true) {
                document.getElementById("bairro").value = dados.bairro;
                document.getElementById("cidade").value = dados.localidade;
            } else {
                alert("CEP não encontrado! Número inválido.");
            }
        }
    });

    // === PARTE DO GITHUB === 
    campoGithub.addEventListener("blur", async function() {
        const usuario = campoGithub.value;

        if (usuario != "") {
            const linkGit = "https://api.github.com/users/" + usuario;
            
            const respostaGit = await fetch(linkGit);
            const dadosGit = await respostaGit.json();

            if (dadosGit.bio != null) {
                document.getElementById("bio").value = dadosGit.bio;
            }
        }
    });
};