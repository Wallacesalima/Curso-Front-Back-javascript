/*

Crie um programa que:

Pergunte ao usuário dois números usando prompt
Some, subtraia, multiplique e divida esses números
Mostre os resultados no console 

*/

// Recebe string pelo Prompt no navegador e converte para número.
const numero_1 = Number (prompt('Digite o primeiro número:')) 
const numero_2 = Number (prompt('Digite o segundo número:'))


// Faz as contas necessarias para o exercicio e salva nas constantes.
const soma = numero_1 + numero_2
const subtrai = numero_1 - numero_2
const multiplica = numero_1 * numero_2
const divide = numero_1 / numero_2

// Mostra no console os resultados dos calculos.
console.log(`${numero_1} + ${numero_2} = ${soma}`)
console.log(`${numero_1} - ${numero_2} = ${subtrai}`)
console.log(`${numero_1} * ${numero_2} = ${multiplica}`)
console.log(`${numero_1} / ${numero_2} = ${divide}`)