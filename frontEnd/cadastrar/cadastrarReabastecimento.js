let res = document.getElementById('res')
let cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener('click', ()=>{
    const nomeProduto = document.getElementById('nomeProduto').value
    const quantidadeEstoque = document.getElementById('quantidadeEstoque').value
    const dataReabastecimento = document.getElementById('dataReabastecimento').value
    const estoqueId = document.getElementById('estoqueId').value


    const dados = {
        nomeProduto: nomeProduto,
        quantidadeEstoque : quantidadeEstoque,
        dataReabastecimento: dataReabastecimento,
        estoqueId: estoqueId
    }

    fetch('http://localhost:3000/reabastecimento',{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(dados)
    })
    .then(res => res.json())
    .then(reabastecimento => {
        res.innerHTML = reabastecimento.message
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar Reabastecimento', err)
    })
})