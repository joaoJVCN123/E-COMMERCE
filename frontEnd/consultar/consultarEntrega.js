let res = document.getElementById('res')
let consultar = document.getElementById('consultar')

consultar.addEventListener('click', ()=>{

    const codEntrega = document.getElementById('codEntrega').value

    fetch(`http://localhost:3000/entrega?codEntrega=${codEntrega}`)
    .then(res => res.json())
    .then(entrega => { 
                res.innerHTML = `<strong>Pedido ID: </strong>`+ entrega.pedidoId + '<br>'
                res.innerHTML += `<strong>Nome Produto: </strong>`+ entrega.nomeProduto + '<br>'
                res.innerHTML += `<strong>Quantidade Produto: </strong>`+ entrega.quantidadeProduto + '<br>'
                res.innerHTML += `<strong>Data Entrega: </strong>`+ entrega.dataEntrega
    })
    .catch((err)=>{
        console.error('Erro ao consultar entrega', err)
    })
})