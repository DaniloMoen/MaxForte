document.addEventListener("DOMContentLoaded", atualizarTotais);

function atualizarTotais(){
    var clientes = document.querySelectorAll(".cliente");

    clientes.forEach(function(linha){
        var qtde = parseInt(linha.querySelector(".qtde").textContent);
        var unitario = parseFloat(linha.querySelector(".unitario").textContent);

        if(isNaN(qtde) || qtde <= 0){
            linha.querySelector(".qtde").textContent = "Inválido";
            return;
        }

        if(isNaN(unitario) || unitario <= 0){
            linha.querySelector(".unitario").textContent = "Inválido";
            return;
        }

        var total = qtde * unitario;

        linha.querySelector(".unitario").textContent = formataValor(unitario);
        linha.querySelector(".total").textContent = formataValor(total);
    });
}

function formataValor(valor){
    return parseFloat(valor).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}
