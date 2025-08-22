// Pegue apenas os números pares de um array:
const numeros = [1, 2, 3, 4, 5, 6];

const pares = numeros.filter(numero => numero % 2 === 0 )
console.log(pares)


// Transforme um array de nomes em letras maiúsculas:
const nomes = ['ana', 'joão', 'maria'];

const maiusculas = nomes.map(nome => nome.toUpperCase())
console.log(maiusculas)


// Some todos os números de um array:
const valores = [10, 20, 30, 40];
const total = valores.reduce((ac, valor)  => ac + valor)
console.log(total)

// Mostre no console cada fruta de um array:
const frutas = ['maçã', 'banana', 'uva'];
frutas.forEach(fruta => console.log(fruta))

// Junte dois arrays em um só:
const a = [1, 2];
const b = [3, 4];

const c = [...a, ...b]

console.log(c)