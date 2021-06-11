function gerarImpressao(){
    console.log(window.location.search);

    var txtIni = window.location.search.substr(5,10);
    console.log("Inicio = "+txtIni);
    var txtFim = window.location.search.substr(20,10);
    console.log("Fim = "+txtFim);

    fetch("http://localhost:8080/eventosporperiodo?inicio="+txtIni+"&fim="+txtFim)
        .then(res => res.json())
        .then(lista => preencheImpressaoRelatorio(lista));
}

function preencheImpressaoRelatorio(lista){
    var strTabela = `<table class="table table-hover">
                         <thead>
                            <tr>
                                <th class="col">#</th>
                                <th class="col">Data</th>
                                <th class="col">Alarme</th>
                                <th class="col">Equipamento</th>
                                <th class="col">IP</th>
                            </tr>
                         </thead>
                         <tbody>`;
    // loop para percorrer cada item da lista e montar uma nova linha na tabela (concatenando o conteúdo)
    for (i=0; i<lista.length; i++){
        var evento = lista[i];
        strTabela = strTabela + `<tr>
                                    <td class="col">${evento.numSeq}</td>
                                    <td class="col">${evento.data}</td>
                                    <td class="col">${evento.alarme.nome}</td>
                                    <td class="col">${evento.equipamento.hostname}</td>
                                    <td class="col">${evento.equipamento.ipAddr}</td>
                                </tr>`;
    }
    // fechar a tabela
    strTabela = strTabela + `</tbody>
                             </table>`;

    document.getElementById("tabelaRelatorio").innerHTML = strTabela; 
    window.print();                            
}

function voltar(){
    window.location = "eventos.html"
}

