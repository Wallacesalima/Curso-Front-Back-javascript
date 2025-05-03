const container = document.querySelector('.container')

// Nome (tipo texto)
const labelNome = document.createElement('label')
labelNome.innerText = 'Nome:'
container.appendChild(labelNome)

const inputNome = document.createElement('input')
inputNome.type = 'text'
container.appendChild(inputNome)

// Idade (tipo número)
const labelIdade = document.createElement('label')
labelIdade.innerText = ' Idade:'
container.appendChild(labelIdade)

const inputIdade = document.createElement('input')
inputIdade.type = 'number'
container.appendChild(inputIdade)

// Nacionalidade (tipo texto)
const labelNacionalidade = document.createElement('label')
labelNacionalidade.innerText = ' Nacionalidade:'
container.appendChild(labelNacionalidade)

const inputNacionalidade = document.createElement('input')
inputNacionalidade.type = 'text'
container.appendChild(inputNacionalidade)

// Botão "Cadastrar"
const botaoCadastrar = document.createElement('button')
botaoCadastrar.innerText = 'Cadastrar'
container.appendChild(botaoCadastrar)

// Parágrafo para mensagens
const informa = document.createElement('p')
informa.innerText = 'informações aqui!!!'
container.appendChild(informa)

// Evento de clique no botão
botaoCadastrar.addEventListener('click', function () {
    const nome = inputNome.value.trim()
    const idade = Number(inputIdade.value)
    const nacionalidade = inputNacionalidade.value.trim().toLowerCase()

    if (!nome) {
        informa.innerText = 'Nome não pode ser vazio!'
    } else if (idade < 18) {
        informa.innerText = 'Você precisa ser maior de idade para cadastrar.'
    } else if (nacionalidade !== 'brasileira') {
        informa.innerText = 'Cadastro permitido apenas para brasileiros.'
    } else {
        // Cria array de cadastro com os dados (apenas exemplo, pois só um cadastro)
        const cadastros = [{
            name: nome,
            years: idade,
            nacionalidad: nacionalidade
        }]

        informa.innerText = `Cadastro realizado com sucesso, ${nome}!\n`

        for (let indice in cadastros) {
            informa.innerText += `Nome: ${cadastros[indice].name}\n`
            informa.innerText += `Idade: ${cadastros[indice].years}\n`
            informa.innerText += `Nacionalidade: ${cadastros[indice].nacionalidad}\n`
        }
    }
})
