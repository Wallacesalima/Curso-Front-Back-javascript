// Criando array números 
const numeros = [1, 2 , 3, 4, 5 ]

// Criando função para somar os valores da array
function somarNumeros (numeros){
    const soma = numeros[0] + numeros[1] + numeros[2]+ numeros[3] + numeros[4]
    console.log(`Essa é a soma dos valores: ${soma}`)

}

// Criando função para pegar a media dos valores da array
function media (numeros) {
    const total = numeros[0] + numeros[1] + numeros[2]+ numeros[3] + numeros[4]
    const media = total / numeros.length
    console.log(`Essa é a media dos valores ${media}`)
}

// Exibindo respectivamente a soma e a media dos valores
somarNumeros(numeros)
media(numeros)