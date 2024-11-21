let res = document.getElementById('res')
let cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener('click', ()=>{
    const dataVencimento = document.getElementById('dataVencimento').value
    const valorPagamento = document.getElementById('valorPagamento').value
    const pedidoId = document.getElementById('pedidoId').value

    const dados = {
        dataVencimento: dataVencimento,
        valorPagamento: valorPagamento,
        pedidoId: pedidoId
    }

    fetch('http://localhost:3000/pagamento',{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(dados)
    })
    .then(res => res.json())
    .then(pagamento => {
        res.innerHTML = pagamento.message
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar Pagamento', err)
    })
})