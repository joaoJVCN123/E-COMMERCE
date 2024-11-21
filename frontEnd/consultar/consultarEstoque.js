let res = document.getElementById('res')
let consultar = document.getElementById('consultar')

consultar.addEventListener('click', ()=>{

    const codEstoque = document.getElementById('codEstoque').value

    fetch(`http://localhost:3000/estoque?codEstoque=${codEstoque}`)
    .then(res => res.json())
    .then(estoque => { 
                res.innerHTML = `<strong>Pedido ID: </strong>`+ estoque.produtoId + '<br>'
                res.innerHTML += `<strong>Nome Produto: </strong>`+ estoque.nomeProduto + '<br>'
                res.innerHTML += `<strong>Quantidade Produto: </strong>`+ estoque.quantidadeEstoque + '<br>'
    })
    .catch((err)=>{
        console.error('Erro ao consultar estoque', err)
    })
})