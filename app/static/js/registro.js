window.onload = function() {
    
    // Os campos do HTML viram const porque os elementos da tela são fixos
    const campoCep = document.getElementById("cep");
    const campoGithub = document.getElementById("github_user");

    // === PARTE DO CEP === 
    campoCep.addEventListener("blur", async function() {
        // O valor do CEP vira const porque ele só lê o texto e não muda durante a execução
        const cep = campoCep.value;

        if (cep.length == 8) {
            // O link, a resposta e os dados viram const (boas práticas de segurança)
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
        // O nome do usuário vira const
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