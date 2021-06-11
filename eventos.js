function verificaUsuario(){
    var strUser = localStorage.getItem("userDASH");
    if (!strUser){
        window.location = "index.html";
    }
}

function logout(){
    localStorage.removeItem("userDASH");
    window.location = "index.html"
}

function voltar(){
    window.location = "relatorios.html"
}

function gerarRelatorio(){
    var txtIni = document.getElementById("txtDataIni").value;
    var txtFim = document.getElementById("txtDataFim").value;

    console.log("Datas capturadas "+txtIni+" / "+txtFim);

    fetch("http://localhost:8080/eventosporperiodo?inicio="+txtIni+"&fim="+txtFim)
        .then(res => res.json())
        .then(lista => preencheRelatorio(lista));
}

function preencheRelatorio(lista){

    var dados = [];
    for (i=0;i<lista.length; i++){
        let evento= lista[i];

        let eventoAr = [];
        eventoAr.push(evento.numSeq);
        eventoAr.push(evento.data);
        eventoAr.push(evento.alarme.nome);
        eventoAr.push(evento.equipamento.hostname);
        eventoAr.push(evento.equipamento.ipAddr);
        console.log(eventoAr);

        dados.push(eventoAr);
    }

    $("#tabelaRelatorio").DataTable({
        data: dados,
        responsive: true,
        columns: [ 
            {title: "#"},
            {title: "Data"},
            {title: "Nome"},
            {title: "Hostname"},
            {title: "IPAddress"},
        ],
        autoWidth: true,
        columnDefs: [
            {
                targets: ['_all'],
                className: 'display'
            }
        ]
        
    });
                            
}

function relatorioRefresh(){
    location.reload()
}

function gerarImpressao(){
    var ini = document.getElementById("txtDataIni").value;
    var fim = document.getElementById("txtDataFim").value;

    window.location="impressao.html?ini="+ini+"&fim="+fim;
}