var botaoAPI = document.querySelector("#api-encomenda");

botaoAPI.addEventListener("click", function(){
    var conectaAPI = new XMLHttpRequest();
    conectaAPI.open("GET", "http://localhost:3000/encomendas_web");

    conectaAPI.addEventListener("load", function(){
        var respostaAPI = JSON.parse(conectaAPI.responseText);

        respostaAPI.forEach(function(cadaEncomenda){
            addEncomendaTabela(cadaEncomenda);
        });
    });

    conectaAPI.send();
});
