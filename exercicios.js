
// const array = ['nome1', 'nome2', 'nome3', 'nome4', 'nome5']

// for (let nomes of array) {
//     console.log(nomes)
// }

// const objeto = {
//     nome: 'Wallace',
//     idade: 25,
//     cidade: 'São Paulo'
// }

// for (let chave in objeto) {
//     console.log(`${chave}: ${objeto[chave]}`)
// }

// function calcularIMC (peso, altura) {
//     const IMC = peso / (altura * altura)

//     return IMC.toFixed(2)
// }

// const parOuImpar = (numero) => numero % 2 !== 0 ? 'Impar' : 'Par'

// console.log(calcularIMC(70, 1.75))
// console.log(parOuImpar(7))

const botao = document.getElementById('botao')
const paragrafo = document.getElementById('texto')

const lista = document.createElement('ul')
lista.id = 'lista'
document.body.appendChild(lista)

const array = ['nome1', 'nome2', 'nome3', 'nome4', 'nome5']

for (let nomes of array) {
    const li = document.createElement('li')
    lista.appendChild(li)
    li.innerHTML = nomes
}

const botaoRemove = document.createElement('button')
botaoRemove.innerText = 'Remove'
document.body.appendChild(botaoRemove)
botaoRemove.addEventListener('click', () => {
    const ultimoItem = lista.lastElementChild;
    if (ultimoItem) {
        lista.removeChild(ultimoItem);
    }
})

botao.addEventListener('click', () => {
    paragrafo.innerText = 'Texto modificado!'
    paragrafo.style.color = 'red'
    paragrafo.classList.toggle('destacado')
})


