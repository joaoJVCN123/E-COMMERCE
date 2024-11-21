const tabelaFabricante = document.getElementById("tabela-fabricante");

    
function carregarFabricante() {
   
        fetch('http://localhost:3000/fabricantes')
        .then(resp => resp.json())
        .then(fabricante=>{
            tabelaFabricante.innerHTML = "";

            fabricante.forEach(fabricante => {
                const row = document.createElement("tr");
                console.log(fabricante);

                row.innerHTML = `
                    <td>${fabricante.codFabricante}</td>
                    <td>${fabricante.nomeFabricante}</td>
                    <td>${fabricante.marcaFabricante}</td>
                    <td>${fabricante.cnpjFabricante}</td>
                    <td>${fabricante.telefoneFabricante}</td>
                    <td>${fabricante.emailFabricante}</td>
                    <td>${fabricante.logradouro}</td>
                    <td>${fabricante.numero}</td>
                    <td>${fabricante.complemento}</td>
                    <td>${fabricante.bairro}</td>
                    <td>${fabricante.localidade}</td>
                    <td>${fabricante.uf}</td>
                    <td>${fabricante.cep}</td>
                    
                `;
                tabelaFabricante.appendChild(row);
            });
        }).catch(err=>{
            console.error(err);
        }) }


window.onload = carregarFabricante;