let res = document.getElementById('res')
let cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener('click', ()=>{
    const nomeProduto = document.getElementById('nomeProduto').value
    const descricaoProduto = document.getElementById('descricaoProduto').value
    const precoProduto = document.getElementById('precoProduto').value
    const quantidadeProduto = document.getElementById('quantidadeProduto').value
    const fabricanteId = document.getElementById('fabricanteId').value

    const dados = {
        nomeProduto: nomeProduto,
        descricaoProduto: descricaoProduto,
        precoProduto: precoProduto,
       quantidadeProduto: quantidadeProduto,
       fabricanteId: fabricanteId,
    }

    fetch('http://localhost:3000/produto',{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(dados)
    })
    .then(res => res.json())
    .then(produto => {
        res.innerHTML = produto.message
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar Produto', err)
    })
})