function gerarImpressaoAlarme(){
    console.log(window.location.search);

    fetch("http://localhost:8080/alarmes")
        .then(res => res.json())
        .then(lista => preencheImpressaoAlarme(lista));
}

function preencheImpressaoAlarme(lista){
    var strTabela = `<table class="table table-hover">
                         <thead>
                            <tr>
                                <th class="col">ID</th>
                                <th class="col">Nome</th>
                                <th class="col">Descrição</th>
                            </tr>
                         </thead>
                         <tbody>`;
    // loop para percorrer cada item da lista e montar uma nova linha na tabela (concatenando o conteúdo)
    for (i=0; i<lista.length; i++){
        var alarme = lista[i];
        strTabela = strTabela + `<tr>
                                    <td class="col">${alarme.id}</td>
                                    <td class="col">${alarme.nome}</td>
                                    <td class="col">${alarme.descricao}</td>
                                </tr>`;
    }
    // fechar a tabela
    strTabela = strTabela + `</tbody>
                             </table>`;

    document.getElementById("tabelaAlarme").innerHTML = strTabela; 
    window.print();                            
}

function voltar(){
        window.location = "alarmes.html"
    }
