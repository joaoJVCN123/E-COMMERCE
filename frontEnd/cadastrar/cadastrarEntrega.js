let res = document.getElementById('res')
let cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener('click', ()=>{
    const nomeProduto = document.getElementById('nomeProduto').value
    const quantidadeProduto = document.getElementById('quantidadeProduto').value
    const dataEntrega = document.getElementById('dataEntrega').value
    const pedidoId = document.getElementById('pedidoId').value

    const dados = {
        nomeProduto: nomeProduto,
        quantidadeProduto: quantidadeProduto,
        dataEntrega: dataEntrega,
        pedidoId: pedidoId,
    }

    fetch('http://localhost:3000/entrega',{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(dados)
    })
    .then(res => res.json())
    .then(entrega => {
        res.innerHTML = entrega.message
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar Entrega', err)
    })
})