function recuperainfo(){
    var userStr= localStorage.getItem("userDASH");
    if (!userStr){
        window.location = "index.html";
    }

    var user = JSON.parse(userStr);
 
    //document.getElementById("fotoUser").innerHTML = `<img src = "${user.linkFoto}" width="100%">`
    //document.getElementById("fotoUser").innerHTML = `<img src = "../eventdash_Front/imagem/fundo_relatorio2.jpg" width="100%" border="0%">`
    document.getElementById("bioUser").innerHTML = `<h4><font color=white>Olá ${user.nome}, você da área ${user.departamento}, selecione o relatório que deseja:</font></h4>
                                                    <hr>
                                                    <div class="container">
                                                        <div class="row">
                                                            <div class="col-xs-6 col-sm-6 col-lg-6 col-xl-6">
                                                                <div class="card" style="width: 20rem;" >
                                                                    <img src="../eventdash_Front/imagem/monitoramento-de-ti.png" class="card-img-top" alt="...">
                                                                    <div class="card-body">
                                                                    <h5 class="card-title">Relatorio por Eventos</h5>
                                                                        <p class="card-text">Selecione esta opção para gerar um relatorio dos eventos por período</p>
                                                                        <a href="eventos.html" class="btn btn-primary">Clique aqui</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xs-6 col-sm-6 col-lg-6 col-xl-6">
                                                                <div class="card" style="width: 20rem;">
                                                                    <img src="../eventdash_Front/imagem/alarme.png" class="card-img-top" alt="...">
                                                                    <div class="card-body">
                                                                        <h5 class="card-title">Relatorio por Alarmes</h5>
                                                                        <p class="card-text">Selecione esta opção para gerar um relatorio dos alarme</p>
                                                                        <a href="alarmes.html" class="btn btn-primary">Clique aqui</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <br><br>
                                                    <button type="button" class="btn btn-primary" onclick="logout()">Logout</button> `
                                                    // <strong>Racf:</strong> ${user.racf} <br>
                                                    //<strong>Email:</strong> ${user.email} <br>
                                                    //<strong>Ramal:</strong> ${user.ramal} <br>
                                                    //<strong>Departamento:</strong> ${user.departamento}<br><br> 
                                                    //<button type="button" class="btn btn-primary" onclick="logout()">Logout</button> `;

                                                    //<a href="eventos.html">  Relatório de Eventos por Período </a><br>
                                                    //</br><a href="alarmes.html"> Relatório de Alarmes Monitorados</a>

                                                }

function logout(){

        localStorage.removeItem("userDASH");
        window.location="index.html";


}