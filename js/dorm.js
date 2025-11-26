document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita recarregar a página

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefone").value.trim();

    if (nome === "" || email === "" || telefone === "") {
        alert("Por favor, preencha Nome, E-mail e Telefone.");
        return;
    }

    // Exibe mensagem de confirmação
    document.getElementById("mensagemRetorno").style.display = "block";
    document.getElementById("formContato").reset();
});
