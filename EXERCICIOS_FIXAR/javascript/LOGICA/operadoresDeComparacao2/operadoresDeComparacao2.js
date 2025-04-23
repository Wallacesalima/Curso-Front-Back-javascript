const container = document.querySelector('.container')

// Dois campos de input: um para número e outro para string

const inputNumero = document.createElement('input')
const inputString = document.createElement('input')

container.appendChild(inputNumero)
container.appendChild(inputString)

// Um botão “Comparar”
const button = document.createElement('button')
button.setAttribute('class', 'comparar')
button.textContent = 'Comparar'
container.appendChild(button)

// Um espaço para mostrar os resultados da comparação com == e ===
const espaco = document.createElement('p')
container.appendChild(espaco)

// Ao clicar no botão, compare os dois valores usando:
// == (valor)
// === (valor e tipo)
button.addEventListener('click' , function(e) {
    const elemento = e.target

    const numero = Number(inputNumero.value)
    const texto = inputString.value

    const comparaValor = numero == texto
    const comparaTipo = numero === texto

    if (elemento.classList.contains('comparar')) {
        espaco.innerHTML = `
        ${numero} == ${texto} : ${comparaValor} <br>
        ${numero} === ${texto} : ${comparaTipo} <br>
        (Tipos: ${typeof numero} e ${typeof texto})
      `
      
    }
})





