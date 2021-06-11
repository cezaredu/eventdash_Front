function gerarImpressaoEquipamentos(){
    console.log(window.location.search);

    fetch("http://localhost:8080/equipamentos")
        .then(res => res.json())
        .then(lista => preencheImpressaoEquipamento(lista));
}

function preencheImpressaoEquipamento(lista){
    var strTabela = `<table class="table table-hover">
                         <thead>
                            <tr>
                                <th class="col">ID</th>
                                <th class="col">Hostname</th>
                                <th class="col">IP Address</th>
                            </tr>
                         </thead>
                         <tbody>`;
    // loop para percorrer cada item da lista e montar uma nova linha na tabela (concatenando o conteúdo)
    for (i=0; i<lista.length; i++){
        var equip = lista[i];
        strTabela = strTabela + `<tr>
                                    <td class="col">${equip.id}</td>
                                    <td class="col">${equip.hostname}</td>
                                    <td class="col">${equip.ipAddr}</td>
                                </tr>`;
    }
    // fechar a tabela
    strTabela = strTabela + `</tbody>
                             </table>`;

    document.getElementById("tabelaEquipamento").innerHTML = strTabela; 
    window.print();                            
}

function voltar(){
        window.location = "alarmes.html"
    }
