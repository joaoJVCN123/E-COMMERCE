const tabelEstoque = document.getElementById("tabela-estoque");

    
function carregarEstoque() {
   
        fetch('http://localhost:3000/estoques')
        .then(resp => resp.json())
        .then(estoque=>{
            tabelEstoque.innerHTML = "";

            estoque.forEach(estoque => {
                const row = document.createElement("tr");
                console.log(estoque);

                row.innerHTML = `
                    <td>${estoque.codEstoque}</td>
                    <td>${estoque.produtoId}</td>
                    <td>${estoque.nomeProduto}</td>
                    <td>${estoque.quantidadeEstoque}</tr>
                    
                `;
                tabelEstoque.appendChild(row);
            });
        }).catch(err=>{
            console.error(err);
        }) }


window.onload = carregarEstoque;