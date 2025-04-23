const container = document.querySelector('.container')

// Um campo de input para o usuário digitar um número
const input = document.createElement('input')
input.setAttribute('class', 'input')
container.appendChild(input)

// Um botão "Verificar"
const button = document.createElement('button')
button.textContent = 'Verificar'
button.setAttribute('class', 'verificar')
container.appendChild(button)

// Um espaço para exibir o resultado (ex: <p>)
const p = document.createElement('p')
container.appendChild(p)


button.addEventListener('click', function (e) {
    const elemento = e.target
    const valorInput = Number(input.value)

    if (elemento.classList.contains('verificar')) {
        // Verifique se o número é maior que 10 e menor que 20 e Exiba no DOM: Está entre 10 e 20 ou Fora da faixa
        valorInput > 10 && valorInput < 20 ?
        p.textContent = 'Este número está entre 10 e 20' : p.textContent = 'Fora da faixa 10 - 20'
    }
})

