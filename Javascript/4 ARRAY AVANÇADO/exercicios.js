// Crie um array só com os números maiores que 40
const numeros = [10, 25, 50, 80, 5, 67];

const maioresQue40 = numeros.filter(numero => numero > 40)
console.log(maioresQue40)

// Crie um novo array com todos os valores dobrados
const valores = [2, 4, 6, 8];

const dobrados = valores.map(valor => valor * 2)
console.log(dobrados)

// Imprima no console cada nome com a frase “está presente”
const nomes = ['João', 'Maria', 'Carlos'];
// Saída esperada --> João está presente, Maria está presente ...

nomes.forEach(nome => console.log(`${nome} está presente.`))

// Some todos os números do array
const numeros2 = [12, 5, 8, 130, 44];

const somaDeTodos = numeros2.reduce((ac, valor) => ac + valor)
console.log(somaDeTodos)

/*
Do array abaixo, filtre apenas as pessoas com idade >= 30
e depois crie um novo array contendo apenas os nomes
dessas pessoas (em maiúsculo)
*/
const pessoas = [
  { nome: 'Ana', idade: 19 },
  { nome: 'Carlos', idade: 34 },
  { nome: 'Marina', idade: 28 },
  { nome: 'José', idade: 45 }
];

const maioresOuIgual30 = pessoas
.filter(pessoa => pessoa.idade >= 30)
.map(function (pessoa) {
    const newPessoa = {...pessoa}
    return  newPessoa.nome.toUpperCase() })

    console.log(maioresOuIgual30)
