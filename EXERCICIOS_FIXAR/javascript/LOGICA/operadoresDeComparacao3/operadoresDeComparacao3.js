const container = document.querySelector('.container')

// Crie inputs para o usuário digitar:

// Idade
const labelIdade = document.createElement('label')
labelIdade.innerHTML = 'Idade '
container.appendChild(labelIdade)
const inputIdade = document.createElement('input')
labelIdade.appendChild(inputIdade)

// Nacionalidade
const labelNacionalidade = document.createElement('label')
labelNacionalidade.innerHTML = ' Nacionalidade '
container.appendChild(labelNacionalidade)
const inputNacionalidade = document.createElement('input')
labelNacionalidade.appendChild(inputNacionalidade)

// botão “Verificar”
const botaoVerificar = document.createElement('button')
botaoVerificar.innerHTML = 'Verificar'
botaoVerificar.setAttribute('class', 'verificar')
container.appendChild(botaoVerificar)

const resultado = document.createElement('p')
container.appendChild(resultado)

botaoVerificar.addEventListener('click', function (e) {
  const elemento = e.target

  const idade = Number(inputIdade.value)
  const nacionalidade = inputNacionalidade.value.toLocaleLowerCase()

  if (idade >= 16 && nacionalidade === 'brasileira') {
    resultado.innerHTML = 'Pode Votar'
  } else {
    resultado.innerHTML = 'Não pode Votar'
  }
})