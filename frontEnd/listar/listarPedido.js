const tabelaPedido = document.getElementById("tabela-pedido");

    
function carregarPedido() {
   
        fetch('http://localhost:3000/pedidos')
        .then(resp => resp.json())
        .then(pedido=>{
            tabelaPedido.innerHTML = "";

            pedido.forEach(pedido => {
                const row = document.createElement("tr");
                console.log(pedido);

                row.innerHTML = `
                    <td>${pedido.codPedido}</td>
                    <td>${pedido.clienteId}</td>
                    <td>${pedido.dataPedido}</td>
                    <td>${pedido.valorPedido}</td>
                `;
                tabelaPedido.appendChild(row);
            });
        }).catch(err=>{
            console.error(err);
        }) }


window.onload = carregarPedido;