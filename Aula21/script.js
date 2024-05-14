document.getElementById("form").addEventListener("login", function(event) {
    event.preventDefault();
    
    var senha = document.getElementById("senha").value;
    var usuario = document.getElementById("usuario").value;

    var cliente = {
        usuario: usuario,
        senha: senha,
     
    };
    console.log(cliente);
    if (typeof(Storage) !== "undefined") {
        if (sessionStorage.getItem("cliente")) {
            var clienteArray = JSON.parse(sessionStorage.getItem("cliente"));
            clienteArray.push(cliente);
            sessionStorage.setItem("cliente", JSON.stringify(clienteArray));
        } else {
            var novoArray = [cliente];
            sessionStorage.setItem("cliente", JSON.stringify(novoArray));
        }
        document.getElementById("form").reset();
        alert("Produto cadastrado com sucesso!");

        location.reload();
        
    } else {
        alert("Seu navegador não suporta a sessionStorage. Não é possível salvar os dados.");
    }
});


