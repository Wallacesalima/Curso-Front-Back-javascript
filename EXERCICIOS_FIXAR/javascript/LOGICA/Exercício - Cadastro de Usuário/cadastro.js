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

// Crie um botão chamado Cadastrar
const botaoCadastrar = document.createElement('button')
botaoCadastrar.innerText = 'Cadastrar'
container.appendChild(botaoCadastrar)

// Criando o elemento p para mostrar informações
const informa = document.createElement('p')
informa.innerText = 'informações aqui!!!'
container.appendChild(informa)

// Quando clicar no botão:

// Se o Nome estiver vazio, mostre a mensagem: "Nome não pode ser vazio!"
// Se a Idade for menor que 18, mostre: "Você precisa ser maior de idade para cadastrar."
// Se a Nacionalidade NÃO for "brasileira" (não importa se digitar com letra maiúscula/minúscula), mostre: "Cadastro permitido apenas para brasileiros."
// Caso todas as informações estejam corretas, mostre: "Cadastro realizado com sucesso, [Nome]!

botaoCadastrar.addEventListener('click', function (e) {
    const nome = inputNome.value.trim()
    const idade = inputIdade.value
    const nacionalidade = inputNacionalidade.value.toLowerCase()

    if (!nome) {
        informa.innerText = 'Nome não pode ser vazio!'
    } else if (idade < 18) {
        informa.innerText = 'Você precisa ser maior de idade para cadastrar.'
    } else if (nacionalidade !== 'brasileira') {
        informa.innerText = 'Cadastro permitido apenas para brasileiros.'
    } else {
        informa.innerText = `Cadastro realizado com sucesso, ${nome}`
    }
})
