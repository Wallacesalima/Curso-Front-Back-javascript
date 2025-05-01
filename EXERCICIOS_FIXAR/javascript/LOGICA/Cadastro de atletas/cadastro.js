const container = document.querySelector('.container')
// Crie na página 3 campos de input:

// Nome (tipo texto)
const labelNome = document.createElement('label')
container.appendChild(labelNome)
labelNome.innerText = 'Nome:'

const inputNome = document.createElement('input')
inputNome.type = 'text'
container.appendChild(inputNome)

// Idade (tipo número)
const labelIdade = document.createElement('label')
container.appendChild(labelIdade)
labelIdade.innerText = ' Idade:'

const inputIdade = document.createElement('input')
inputIdade.type = 'number'
container.appendChild(inputIdade)

// Nacionalidade (tipo texto)
const labelNacionalidade = document.createElement('label')
container.appendChild(labelNacionalidade)
labelNacionalidade.innerText = ' Nacionalidade:'

const inputNacionalidade = document.createElement('input')
inputNacionalidade.type = 'text'
container.appendChild(inputNacionalidade)

// Esporte favorito (input texto)
const labelEsporte = document.createElement('label')
container.appendChild(labelEsporte)
labelEsporte.innerText = ' Esporte Favorito:'

const inputEsporte = document.createElement('input')
inputEsporte.type = 'text'
container.appendChild(inputEsporte)


// Crie um botão chamado Cadastrar
const botaoCadastrar = document.createElement('button')
botaoCadastrar.innerText = 'Cadastrar'
container.appendChild(botaoCadastrar)

// Criando o elemento p para mostrar informações
const informa = document.createElement('p')
informa.innerText = 'informações aqui!!!'
container.appendChild(informa)

// Quando clicar no botão Cadastrar:

// Se o nome estiver vazio, mostre: "Nome inválido!"

// Se a idade for menor que 16, mostre: "Idade mínima de 16 anos para cadastro."

// Se a nacionalidade não for brasileira, mostre: "Somente brasileiros podem se cadastrar."

// Se o esporte não for "futebol", "vôlei" ou "basquete", mostre: "Esporte não aceito."

// Se tudo estiver certo, mostre: "Atleta [nome] cadastrado com sucesso no esporte [esporte]!"

botaoCadastrar.addEventListener('click', function (e) {

    const nome = inputNome.value.trim()
    const idade = inputIdade.value
    const nacionalidade = inputNacionalidade.value.toLowerCase()
    const esporte = inputEsporte.value.toLowerCase()

    if (!nome) {
        informa.innerText = 'Nome inválido!'
    } else if (idade < 16) {
        informa.innerText = 'Idade mínima de 16 anos para cadastro.'
    } else if (nacionalidade !== 'brasileira') {
        informa.innerText = 'Somente brasileiros podem se cadastrar.'
    } else if (esporte !== "futebol" && esporte !== "vôlei" && esporte !== "basquete" ) {
        informa.innerText = `Esporte - ${esporte} não aceito!`
    } else {
        informa.innerText = `Atleta ${nome} cadastrado com sucesso no esporte ${esporte}!`

        setTimeout(function() {
            inputNome.value = ''
            inputIdade.value = ''
            inputNacionalidade.value = ''
            inputEsporte.value = ''
            informa.innerHTML += `<br>Está tudo certo para que o proximo cadastro seja feito! <br>`
        }, 3000)

    }
})
