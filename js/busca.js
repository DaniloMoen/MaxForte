var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    var clientes = document.querySelectorAll(".cliente");

    if(this.value.length > 0){
        clientes.forEach(function(cliente){
            var nome = cliente.querySelector(".nome").textContent.toLowerCase();
            var filtro = campoFiltro.value.toLowerCase();

            if(!nome.startsWith(filtro)){
                cliente.classList.add("invisivel");
            } else {
                cliente.classList.remove("invisivel");
            }
        });
    } else {
        clientes.forEach(c => c.classList.remove("invisivel"));
    }
});
