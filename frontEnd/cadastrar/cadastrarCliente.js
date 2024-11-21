let res = document.getElementById('res')
let cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener('click', ()=>{
    const nomeCliente = document.getElementById('nomeCliente').value
    const sobrenomeCliente = document.getElementById('sobrenomeCliente').value
    const cpfCliente = document.getElementById('cpfCliente').value
    const telefoneCliente = document.getElementById('telefoneCliente').value
    const emailCliente = document.getElementById('emailCliente').value
    const senha = document.getElementById('senha').value
    const logradouro = document.getElementById('logradouro').value
    const numero = document.getElementById('numero').value
    const complemento = document.getElementById('complemento').value
    const bairro = document.getElementById('bairro').value
    const localidade = document.getElementById('localidade').value
    const uf = document.getElementById('uf').value
    const cep = document.getElementById('cep').value
    const status = document.getElementById('status').value

    const dados = {
        nomeCliente: nomeCliente,
        sobrenomeCliente: sobrenomeCliente,
        cpfCliente: cpfCliente,
        telefoneCliente: telefoneCliente,
        emailCliente: emailCliente,
        senha: senha,
        logradouro: logradouro,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        localidade: localidade,
        uf: uf,
        cep: cep,
        status: status,
    }

    fetch('http://localhost:3000/cliente',{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(dados)
    })
    .then(res => res.json())
    .then(cliente => {
        res.innerHTML = cliente.message
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar Cliente', err)
    })
})