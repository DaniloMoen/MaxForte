var botaoAdicionar = document.querySelector("#adicionar-encomenda");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var encomendaNova = obtemEncomenda(form);

    var tabela = document.querySelector(".tabela-cliente");

    tabela.appendChild(montaTR(encomendaNova));

    form.reset();
});

function addEncomendaTabela(novaEncomenda) {
    var tabela = document.querySelector(".tabela-cliente");
    tabela.appendChild(montaTR(novaEncomenda));
}

function obtemEncomenda(formulario){
    return {
        nome: formulario.nome.value,
        produto: formulario.produto.value,
        qtde: formulario.qtde.value,
        unitario: formulario.unitario.value
    };
}

function montaTR(dadosEncomenda){
    var tr = document.createElement("tr");
    tr.classList.add("cliente");

    tr.appendChild(montaTD(dadosEncomenda.nome, "nome"));
    tr.appendChild(montaTD(dadosEncomenda.produto, "produto"));
    tr.appendChild(montaTD(dadosEncomenda.qtde, "qtde"));
    tr.appendChild(montaTD(formataValor(dadosEncomenda.unitario), "unitario"));
    tr.appendChild(montaTD(formataValor(dadosEncomenda.qtde * dadosEncomenda.unitario), "total"));

    return tr;
}

function montaTD(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}
