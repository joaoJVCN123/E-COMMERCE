const tabelaProduto = document.getElementById("tabela-produto");

    
function carregarProduto() {
   
        fetch('http://localhost:3000/produtos')
        .then(resp => resp.json())
        .then(produto=>{
            tabelaProduto.innerHTML = "";

            produto.forEach(produto => {
                const row = document.createElement("tr");
                console.log(produto);

                row.innerHTML = `
                    <td>${produto.codProduto}</td>
                    <td>${produto.fabricanteId}</td>
                    <td>${produto.nomeProduto}</td>
                    <td>${produto.descricaoProduto}</td>
                    <td>${produto.precoProduto}</td>
                    <td>${produto.quantidadeProduto}</td>
                `;
                tabelaProduto.appendChild(row);
            });
        }).catch(err=>{
            console.error(err);
        }) }


window.onload = carregarProduto;