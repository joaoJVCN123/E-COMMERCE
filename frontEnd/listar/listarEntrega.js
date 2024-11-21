const tabelaEntrega = document.getElementById("tabela-entrega");

    
function carregarEntrega() {
   
        fetch('http://localhost:3000/entregas')
        .then(resp => resp.json())
        .then(entrega=>{
            tabelaEntrega.innerHTML = "";

            entrega.forEach(entrega => {
                const row = document.createElement("tr");
                console.log(entrega);

                row.innerHTML = `
                    <td>${entrega.codEntrega}</td>
                    <td>${entrega.pedidoId}</td>
                    <td>${entrega.nomeProduto}</td>
                    <td>${entrega.quantidadeProduto}</td>
                    <td>${entrega.dataEntrega}</td>
                `;
                tabelaEntrega.appendChild(row);
            });
        }).catch(err=>{
            console.error(err);
        }) }


window.onload = carregarEntrega;