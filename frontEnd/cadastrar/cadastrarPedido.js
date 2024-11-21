let res = document.getElementById('res')
let cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener('click', ()=>{
    const dataPedido = document.getElementById('dataPedido').value
    const valorPedido = document.getElementById('valorPedido').value
    const clienteId = document.getElementById('clienteId').value

    const dados = {
        dataPedido: dataPedido,
        valorPedido: valorPedido,
        clienteId: clienteId
    }

    fetch('http://localhost:3000/pedido',{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(dados)
    })
    .then(res => res.json())
    .then(pedido => {
        res.innerHTML = pedido.message
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar pedido', err)
    })
})