let res = document.getElementById('res')
let cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener('click', ()=>{
    const nomeProduto = document.getElementById('nomeProduto').value
    const quantidadeEstoque = document.getElementById('quantidadeEstoque').value
    const produtoId = document.getElementById('produtoId').value

    const dados = {
        nomeProduto: nomeProduto,
        quantidadeEstoque: quantidadeEstoque,
        produtoId: produtoId
    }

    fetch('http://localhost:3000/estoque',{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(dados)
    })
    .then(res => res.json())
    .then(estoque => {
        res.innerHTML = estoque.message
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar Estoque', err)
    })
})