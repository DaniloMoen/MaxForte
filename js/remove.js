var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    var linha = event.target.parentNode;
    linha.classList.add("fadeOut");

    setTimeout(function(){
        linha.remove();
    }, 500);
});
