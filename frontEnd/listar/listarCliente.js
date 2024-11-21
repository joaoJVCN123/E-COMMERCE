const tabelaClientes = document.getElementById("tabela-clientes");

    
function carregarClientes() {
   
        fetch('http://localhost:3000/clientes')
        .then(resp => resp.json())
        .then(clientes=>{
            tabelaClientes.innerHTML = "";

            clientes.forEach(cliente => {
                const row = document.createElement("tr");
                console.log(clientes);

                row.innerHTML = `
                    <td>${cliente.codCliente}</td>
                    <td>${cliente.nomeCliente}</td>
                    <td>${cliente.sobrenomeCliente}</td>
                    <td>${cliente.cpfCliente}</td>
                    <td>${cliente.telefoneCliente}</td>
                    <td>${cliente.emailCliente}</td>
                    <td>${cliente.logradouro}</td>
                    <td>${cliente.numero}</td>
                    <td>${cliente.complemento}</td>
                    <td>${cliente.bairro}</td>
                    <td>${cliente.localidade}</td>
                    <td>${cliente.uf}</td>
                    <td>${cliente.cep}</td>
                    <td>${cliente.statusCliente}</td>
                    
                `;
                tabelaClientes.appendChild(row);
            });
        }).catch(err=>{
            console.error(err);
        }) }


window.onload = carregarClientes;