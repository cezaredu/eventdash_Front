function enviarDados(){
    var txtLogin = document.getElementById("txtLogin").value;
    var txtSenha = document.getElementById("txtSenha").value;

    // passo 1 - Montar o corpo da mensagem

    var msgBody = {
        email : txtLogin,
        racf  : txtLogin,
        senha : txtSenha
    }

    // passo 2 - Definir o cabecalho
    var cabecalho = {
        method : "POST",
        body   : JSON.stringify(msgBody),
        headers : {
            "content-type" : "application/json"
        }
    }

    // passo 3 - Enviar para o back end
    fetch("http://localhost:8080/login", cabecalho).then(resp => trataResposta(resp));

}

// passo 4 - Tratar o resultado
function trataResposta(resp){
    document.getElementById("msg").style.color = "white"
    if (resp.status == 200) {
        resp.json().then(user => {
            localStorage.setItem("userDASH", JSON.stringify(user));
            window.location = "relatorios.html"
        }
        )
    }
    else if (resp.status == 404){
        document.getElementById("msg").innerHTML = "Usuário não encontrado"
    }
    else if (resp.status == 403){
        document.getElementById("msg").innerHTML = "Senha inválida"
    }
    else {
        document.getElementById("msg").innerHTML = "Erro Desconhecido"
    }
}