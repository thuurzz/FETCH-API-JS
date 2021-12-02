const FirstName = document.querySelector("#FirstName")
const LastName = document.querySelector("#LastName")
const EmailAddress = document.querySelector("#EmailAddress")
const CPF = document.querySelector("#CPF")
const btnBuscar = document.querySelector("#btnBuscar")
const idSerch = document.querySelector("#idSerch")

const BASE_API = 'http://localhost:3000/clientes';

// Teste de fetch GET no endpoint de cliente por id
function buscaCliente(id){
    fetch(`${BASE_API}/${id}`)
        .then((resp) => {
            return resp.json()
        })
        .then((respJSON)=>{
            preencherCampos(respJSON)

        })
        .catch((erro)=>{
            console.log(erro)
        })
}

// Função para preencher os campos no html
function preencherCampos(json){
    for(const campo in json){
        if(document.querySelector("#" + campo)){
            document.querySelector("#" + campo).value = json[campo]
        }
    }
}

// Listener do botão para quando clicar, preencher os campos
btnBuscar.addEventListener('click', (e) => {
    e.preventDefault();
    try {
        buscaCliente(idSerch.value)
    } catch (erro) {
        mensagemErro.innerHTML = erro.message;
    }
})



