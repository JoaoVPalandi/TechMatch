window.onload = function() {
    const formularioLogin = document.getElementById("form-login");

    formularioLogin.addEventListener("submit", function(evento) {
        const email = document.getElementById("email").value;
        const senha = document.getElementById("password").value;

        
        if (email == "" || senha == "") {
            evento.preventDefault(); 
            alert("Preencha todos os campos antes de continuar!");
        }
    });
};