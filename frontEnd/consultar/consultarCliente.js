let res = document.getElementById('res')
let consultar = document.getElementById('consultar')

consultar.addEventListener('click', ()=>{

    const codCliente = document.getElementById('codCliente').value

    fetch(`http://localhost:3000/cliente?codCliente=${codCliente}`)
    .then(res => res.json())
    .then(cliente => { 
                res.innerHTML = `<strong>Nome: </strong>`+ cliente.nomeCliente + ' ' + cliente.sobrenomeCliente + '<br>'
                res.innerHTML += `<strong>CPF: </strong>`+ cliente.cpfCliente + '<br>'
                res.innerHTML += `<strong>Telefone: </strong>`+ cliente.telefoneCliente + '<br>'
                res.innerHTML += `<strong>Email: </strong>`+ cliente.emailCliente + '<br>'
                res.innerHTML += `<strong>Logradouro: </strong>`+ cliente.logradouro + '<br>'
                res.innerHTML += `<strong>Número: </strong>`+ cliente.numero + '<br>'
                res.innerHTML += `<strong>Complemento: </strong>`+ cliente.complemento + '<br>'
                res.innerHTML += `<strong>Bairro: </strong>`+ cliente.bairro + '<br>' 
                res.innerHTML += `<strong>Localidade: </strong>`+ cliente.localidade + '<br>'
                res.innerHTML += `<strong>UF: </strong>`+ cliente.uf + '<br>'
                res.innerHTML += `<strong>CEP: </strong>`+ cliente.cep + '<br>'
                res.innerHTML += `<strong>Status: </strong>`+ cliente.statusCliente
    })
    .catch((err)=>{
        console.error('Erro ao consultar Cliente', err)
    })
})