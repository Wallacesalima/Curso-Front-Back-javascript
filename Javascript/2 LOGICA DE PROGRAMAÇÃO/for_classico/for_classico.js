// 1. Iterando sobre um array simples
const numeros = [1, 2, 3, 4, 5];
console.log('1. Iterando sobre um array simples:');
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]); // Imprime cada número do array
}
console.log('---');

// 2. Somando os elementos de um array
let soma = 0;
console.log('2. Somando os elementos de um array:');
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]; // Adiciona cada número ao total
}
console.log(soma); // 15
console.log('---');

// 3. Iterando sobre um array de objetos
const pessoas = [
    { nome: 'Ana', idade: 25 },
    { nome: 'Carlos', idade: 30 },
    { nome: 'Maria', idade: 35 }
];
console.log('3. Iterando sobre um array de objetos:');
for (let i = 0; i < pessoas.length; i++) {
    console.log(`${pessoas[i].nome} tem ${pessoas[i].idade} anos.`);
}
// Saída:
// Ana tem 25 anos.
// Carlos tem 30 anos.
// Maria tem 35 anos.
console.log('---');

// 4. Contando quantos números são maiores que 10
const numeros2 = [5, 12, 8, 14, 3, 9];
let contador = 0;
console.log('4. Contando quantos números são maiores que 10:');
for (let i = 0; i < numeros2.length; i++) {
    if (numeros2[i] > 10) {
        contador++;
    }
}
console.log(contador); // 2 (12 e 14 são maiores que 10)
console.log('---');

// 5. Invertendo um array
const numeros3 = [1, 2, 3, 4, 5];
let numerosInvertidos = [];
console.log('5. Invertendo um array:');
for (let i = numeros3.length - 1; i >= 0; i--) {
    numerosInvertidos.push(numeros3[i]);
}
console.log(numerosInvertidos); // [5, 4, 3, 2, 1]
console.log('---');

// 6. Buscando um valor específico em um array
const numeros4 = [5, 3, 8, 1, 2];
const valorProcurado = 8;
let encontrado = false;
console.log('6. Buscando um valor específico em um array:');
for (let i = 0; i < numeros4.length; i++) {
    if (numeros4[i] === valorProcurado) {
        encontrado = true;
        break;
    }
}
console.log(encontrado ? `Valor ${valorProcurado} encontrado!` : `Valor ${valorProcurado} não encontrado.`);
