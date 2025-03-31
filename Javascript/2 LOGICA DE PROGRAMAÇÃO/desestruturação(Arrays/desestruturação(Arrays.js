// 📌 1. Desestruturação básica
const numeros = [10, 20, 30];
const [a, b, c] = numeros;
console.log(a, b, c); // 10 20 30

// 📌 2. Pulando elementos
const valores = [10, 20, 30, 40, 50];
const [primeiro, , terceiro] = valores; 
console.log(primeiro, terceiro); // 10 30

// 📌 3. Desestruturação com valor padrão
const apenasUmNumero = [10];
const [d, e = 20] = apenasUmNumero; 
console.log(d, e); // 10 20

// 📌 4. Desestruturação em funções
function retornaArray() {
    return ['Apple', 'Banana', 'Laranja'];
}
const [fruta1, fruta2] = retornaArray();
console.log(fruta1, fruta2); // Apple Banana

// 📌 5. Rest Operator (...) para pegar o restante dos elementos
const maisNumeros = [1, 2, 3, 4, 5];
const [n1, n2, ...resto] = maisNumeros;
console.log(n1, n2, resto); // 1 2 [3, 4, 5]

// 📌 1. Criando um array dentro de outro (Matriz)
const matriz = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

// 📌 2. Acessando elementos individuais
console.log(matriz[0][0]); // 10
console.log(matriz[1][1]); // 50
console.log(matriz[2][2]); // 90

// 📌 3. Desestruturação de um array dentro de outro
const [linhaA, linhaB, linhaC] = matriz;

console.log(linhaA); // [10, 20, 30]
console.log(linhaB); // [40, 50, 60]
console.log(linhaC); // [70, 80, 90]

// 📌 4. Desestruturando elementos individuais
const [[x, y, z], [m, n, o], [p, q, r]] = matriz;

console.log(x, y, z); // 10 20 30
console.log(m, n, o); // 40 50 60
console.log(p, q, r); // 70 80 90
