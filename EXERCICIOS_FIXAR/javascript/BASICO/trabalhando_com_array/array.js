// Criando array 
const array = [1, 2, 3, 4, 5]

// Exibindo o Array antes das modificações
console.log(`Esse é o array sem modificação:`, array)

// Guardando nas variaveis os valores de primeiro e ultimo numero do array
const primeiroNumero = array[0] // pegando o primeiro numero

// const ultimoNumero = array.slice(-1)
const ultimoNumero = array[array.length - 1] // pegando o ultimo numero

// Exibindo o primeiro e ultimo numero
console.log(`Esse é o primeiro número do array : ${primeiroNumero}`)
console.log(`Esse é o último número do array: ${ultimoNumero}`)

// Modificando o array 
array.push(6) // adicionando o numero 6 ao final do array
array.shift() // removendo o primeiro numero do array

// Exibindo o array modificado
console.log(`Esse é o array modificado:`, array)
