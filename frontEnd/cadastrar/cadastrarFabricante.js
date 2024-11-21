let res = document.getElementById('res')
let cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener('click', ()=>{
    const nomeFabricante = document.getElementById('nomeFabricante').value
    const marcaFabricante = document.getElementById('marcaFabricante').value
    const cnpjFabricante = document.getElementById('cnpjFabricante').value
    const telefoneFabricante = document.getElementById('telefoneFabricante').value
    const emailFabricante = document.getElementById('emailFabricante').value
    const logradouro = document.getElementById('logradouro').value
    const numero = document.getElementById('numero').value
    const complemento = document.getElementById('complemento').value
    const bairro = document.getElementById('bairro').value
    const localidade = document.getElementById('localidade').value
    const uf = document.getElementById('uf').value
    const cep = document.getElementById('cep').value

    const dados = {
        nomeFabricante: nomeFabricante,
        marcaFabricante: marcaFabricante,
        cnpjFabricante: cnpjFabricante,
        telefoneFabricante: telefoneFabricante,
        emailFabricante: emailFabricante,
        logradouro: logradouro,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        localidade: localidade,
        uf: uf,
        cep: cep,
    }

    fetch('http://localhost:3000/fabricante',{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(dados)
    })
    .then(res => res.json())
    .then(fabricante => {
        res.innerHTML = fabricante.message
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar Fabricante', err)
    })
})