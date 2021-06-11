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


function gerarAlarme(){
    
     fetch("http://localhost:8080/alarmes")
        .then(res => res.json())
        .then(lista => preencheAlarme(lista));
}

function preencheAlarme(lista){
 
    var dados = [];
    for (i=0;i<lista.length; i++){
         let alarme= lista[i];
         let alarmeAR = [];
        alarmeAR.push(alarme.id);
        alarmeAR.push(alarme.nome);
        alarmeAR.push(alarme.descricao);
        console.log(alarmeAR);

        dados.push(alarmeAR);
    }

    $("#tabelaAlarme").DataTable({
        data: dados,
        responsive: true,
        columns: [ 
            {title: "ID"},
            {title: "Nome"},
            {title: "Descricao"}
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

function gerarEquipamentos(){
    
    fetch("http://localhost:8080/equipamentos")
       .then(res => res.json())
       .then(lista => preencheEquipamento(lista));
}

function preencheEquipamento(lista){

   var dados = [];
   for (i=0;i<lista.length; i++){
        let equip = lista[i];
        let equipAR = [];
       equipAR.push(equip.id);
       equipAR.push(equip.hostname);
       equipAR.push(equip.ipAddr);
       console.log(equipAR);

       dados.push(equipAR);
   }

   $("#tabelaEquipamento").DataTable({
       data: dados,
       responsive: true,
       columns: [ 
           {title: "ID"},
           {title: "hostname"},
           {title: "IP"}
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

function gerarImpressaoAlarme(){
 
    window.location="alarmeImpressao.html";
}

function gerarImpressaoEquipamentos(){
 
    window.location="equipamentoImpressao.html";
}