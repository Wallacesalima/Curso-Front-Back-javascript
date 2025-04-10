// Escreva uma função que receba 2 números e retorne o maior deles

// function maiorNumero(numero1, numero2) {
//     return numero1 > numero2 ? numero1 : numero2
// }

// console.log(maiorNumero(5, 2))

const max = (n1, n2) => n1 > n2 ? n1 : n2;
console.log(max(10, 20));

// Caso tenha mais valores deve se usar o 'Math.max'
const max2 = (n1, n2) => Math.max(n1, n2);
console.log(max2(10, 20)); // Vai exibir: 20

// Caso tenha mais valores deve se usar o 'Math.min'
const min = (n1, n2) => Math.min(n1, n2);
console.log(min(10, 20)); // Vai exibir: 10

// pega o menor número
const numeros = [15, 3, 22, 9];
console.log(Math.min(...numeros)); // 3

// pega o maior número
const numeros2 = [15, 3, 22, 9];
console.log(Math.max(...numeros2)); // 22



