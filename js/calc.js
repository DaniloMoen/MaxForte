
//Código para calcular o total de 1 Linha 
//document.querySelector(".total").textContent = document.querySelector(".unitario").textContent * 
//document.querySelector(".qtde").textContent

//Captura todas as encomendas para calcular o total
document.addEventListener("DOMContentLoaded", function () {
    // Pega todas as linhas da tabela com a classe .cliente
    var clientes = document.querySelectorAll(".cliente");

    for (var count = 0; count < clientes.length; count++) {
        // pega a linha atual do loop
        var linha = clientes[count];

        // pega a quantidade e o valor unitário dessa linha
        var qtde = parseInt(linha.querySelector(".qtde").textContent);
        var unitario = parseFloat(linha.querySelector(".unitario").textContent);

        // calcula o total
        var total = qtde * unitario;

        // escreve o resultado na coluna "total"
        linha.querySelector(".total").textContent = total.toFixed(2);
    }
});