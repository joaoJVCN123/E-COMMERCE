const tabelaPagamento = document.getElementById("tabela-pagamento");

    
function carregarPagamento() {
   
        fetch('http://localhost:3000/pagamentos')
        .then(resp => resp.json())
        .then(pagamento=>{
            tabelaPagamento.innerHTML = "";

            pagamento.forEach(pagamento => {
                const row = document.createElement("tr");
                console.log(pagamento);

                row.innerHTML = `
                    <td>${pagamento.codPagamento}</td>
                    <td>${pagamento.pedidoId}</td>
                    <td>${pagamento.dataVencimento}</td>
                    <td>${pagamento.valorPagamento}</td>
                `;
                tabelaPagamento
                .appendChild(row);
            });
        }).catch(err=>{
            console.error(err);
        }) }


window.onload = carregarPagamento;