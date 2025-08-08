// Filtre apenas os produtos com preço maior ou igual a 50.
// Retorne apenas os nomes em maiúsculo.

const produtos = [
    { nome: 'Camisa', preco: 50 },
    { nome: 'Calça', preco: 120 },
    { nome: 'Boné', preco: 30 },
    { nome: 'Jaqueta', preco: 300 }
];

const maioresQue50 = produtos
    .filter(obj => obj.preco >= 50)
    .map(obj => obj.nome.toUpperCase())

console.log(maioresQue50)

// Use o reduce para calcular o valor total dos pedidos.

const pedidos = [
    { produto: 'TV', valor: 2500 },
    { produto: 'Celular', valor: 1500 },
    { produto: 'Notebook', valor: 3500 }
];

const total = pedidos.reduce((ac, obj) => ac + obj.valor, 0)

console.log(total)

// Use forEach para imprimir no console:
// "Olá, João! Seja bem-vindo(a)!"

const alunos = ['João', 'Maria', 'Ana', 'Pedro'];

alunos.forEach(aluno => {
    console.log(`Olá, ${aluno}! Seja bem-vindo(a)!`)
})

// Filtre apenas os números maiores que 10.
// Use reduce para somar todos esses números filtrados.

const numeros = [5, 12, 8, 130, 44];

const totalFiltrados = numeros
.filter(numero => numero > 10)
.reduce((ac, numero) => ac + numero, 0)

console.log(totalFiltrados)