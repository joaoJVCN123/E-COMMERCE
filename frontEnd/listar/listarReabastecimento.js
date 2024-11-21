const tabelaReabastecimento = document.getElementById("tabela-reabastecimento");

    
function carregarReabastecimento() {
   
        fetch('http://localhost:3000/reabastecimentos')
        .then(resp => resp.json())
        .then(reabastecimento=>{
            tabelaReabastecimento.innerHTML = "";

            reabastecimento.forEach(reabastecimento => {
                const row = document.createElement("tr");
                console.log(reabastecimento);

                row.innerHTML = `
                    <td>${reabastecimento.codReabastecimento}</td>
                    <td>${reabastecimento.estoqueId}</td>
                    <td>${reabastecimento.nomeProduto}</td>
                    <td>${reabastecimento.quantidadeEstoque}</td>
                    <td>${reabastecimento.dataReabastecimento}</td>
                `;
                tabelaReabastecimento.appendChild(row);
            });
        }).catch(err=>{
            console.error(err);
        }) }


window.onload = carregarReabastecimento;