function recuperainfo(){
    var userStr= localStorage.getItem("userDASH");

    if (!userStr){
        window.location = "index.html";
    }
    var user = JSON.parse(userStr);

    var nome = user.nome;

    if (nome == "Cezar"){

    var user = JSON.parse(userStr);
 
    //document.getElementById("fotoUser").innerHTML = `<img src = "${user.linkFoto}" width="100%">`
    //document.getElementById("fotoUser").innerHTML = `<img src = "../eventdash_Front/imagem/fundo_relatorio2.jpg" width="100%" border="0%">`
    document.getElementById("bioUser").innerHTML = `<h4><font color=white>Olá ${user.nome}, você é da área de ${user.departamento}, selecione o tipo de relatório desejado:</font></h4>
                                                    <hr>
                                                    <br>
                                                    <div class="container">
                                                        <div class="row">
                                                            <div class="col-xs-5 col-sm-5 col-lg-6 col-xl-6">
                                                                <div class="card" style="width: 20rem;" >
                                                                    <img src="../eventdash_Front/imagem/monitoramento-de-ti.png" class="card-img-top" alt="...">
                                                                    <div class="card-body">
                                                                    <b><h5 class="card-title">Relatório por Eventos</h5></b>
                                                                        <p class="card-text">Selecione esta opção para gerar um relatório dos eventos por período</p>
                                                                        <a href="eventos.html" class="btn btn-primary">Clique aqui</a><br>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xs-1 col-sm-1 col-lg-1 col-xl-1">
                                                            <br>
                                                            </div>
                                                            <div class="col-xs-5 col-sm-5 col-lg-5 col-xl-5">
                                                                <div class="card" style="width: 20rem;">
                                                                    <img src="../eventdash_Front/imagem/alarme.png" class="card-img-top" alt="...">
                                                                    <div class="card-body">
                                                                        <b><h5 class="card-title">Relatório por Alarmes</h5></b>
                                                                        <p class="card-text">Selecione esta opção para gerar um relatório dos alarme</p>
                                                                        <a href="alarmes.html" class="btn btn-primary">Clique aqui</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xs-1 col-sm-1 col-lg-0 col-xl-0">
                                                            <br>
                                                            </div>
                                                        </div>
                                                    </div>`
    }
    else if (nome == "Mega Man"){

        var user = JSON.parse(userStr);
 
        //document.getElementById("fotoUser").innerHTML = `<img src = "${user.linkFoto}" width="100%">`
        //document.getElementById("fotoUser").innerHTML = `<img src = "../eventdash_Front/imagem/fundo_relatorio2.jpg" width="100%" border="0%">`
        document.getElementById("bioUser").innerHTML = `<h4><font color=white>Olá ${user.nome}, você é da área de ${user.departamento}, selecione o tipo de relatório desejado:</font></h4>
                                                        <hr>
                                                        <br>
                                                        <div class="container">
                                                            <div class="row">
                                                                <div class="col-xs-5 col-sm-5 col-lg-6 col-xl-6">
                                                                    <div class="card" style="width: 20rem;" >
                                                                        <img src="../eventdash_Front/imagem/monitoramento-de-ti.png" class="card-img-top" alt="...">
                                                                        <div class="card-body">
                                                                        <b><h5 class="card-title">Relatório por Eventos</h5></b>
                                                                            <p class="card-text">Selecione esta opção para gerar um relatório dos eventos por período</p>
                                                                            <a href="eventos.html" class="btn btn-primary">Clique aqui</a><br>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xs-1 col-sm-1 col-lg-0 col-xl-0">
                                                                <br>
                                                                </div>
                                                            </div>
                                                        </div>`

    }
}

function logout(){

        localStorage.removeItem("userDASH");
        window.location="index.html";


}