// Gera um número aleatório entre 1 e 100
let numeroAleatorio = Math.random() * 100 + 1 
numeroAleatorio = Number (numeroAleatorio.toFixed(2))

// Arredonda o número aleatório para baixo...
const arredondaParaBaixo = Math.floor(numeroAleatorio)
// e para cima
const arredondaParaCima = Math.ceil(numeroAleatorio)

// Solicita ao usuário para inserir um número e calcula a raiz quadrada
let numeroInserido = Number (prompt("Insira um número:"))
raizQuadrada = numeroInserido ** 0.5

// Exibe os resultados
console.log(`Número aleatorio: ${numeroAleatorio}`)
console.log(`Número aleatorio arredondado para Baixo: ${arredondaParaBaixo}`)
console.log(`Número aleatorio arredondado para Cima: ${arredondaParaCima}`)
console.log(`A raiz quadrada de ${numeroInserido} é ${raizQuadrada}.`)