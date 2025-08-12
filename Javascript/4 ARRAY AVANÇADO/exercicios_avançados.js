// Filtre apenas clientes que tenham gastoTotal >= 1000.
// Retorne apenas os nomes em maiúsculo desses clientes.

const clientes = [
    { nome: 'João', compras: 5, gastoTotal: 1200 },
    { nome: 'Maria', compras: 2, gastoTotal: 300 },
    { nome: 'Carlos', compras: 8, gastoTotal: 4000 },
    { nome: 'Ana', compras: 4, gastoTotal: 1500 }
];

const cliantesVip = clientes
    .filter(cliente => cliente.gastoTotal >= 1000)
    .map(cliente => cliente.nome.toUpperCase())

console.log(cliantesVip)

// Some apenas os valores maiores que 500 usando reduce (sem usar filter).
const vendas = [150, 800, 1200, 90, 600];

const somaMaisQue500 = vendas.reduce((ac, venda) => {
    if (venda > 500) return ac + venda
    return ac
}, 0)

console.log(somaMaisQue500)

// Crie um novo array aplicando 10% de desconto em todos os preços.
// Retorne o novo array com nome e preço já com desconto.

const produtos = [
    { nome: 'Notebook', preco: 3000 },
    { nome: 'Mouse', preco: 50 },
    { nome: 'Teclado', preco: 150 },
    { nome: 'Monitor', preco: 800 }
];

const produtosComDesconto = produtos.map((produto) => {
    const produtos10Porcento = { ...produto }
    produtos10Porcento.preco = produtos10Porcento.preco - produtos10Porcento.preco * 0.10
    return produtos10Porcento
})

console.log(produtosComDesconto)

// Use forEach para imprimir no console:
// "Usuário Wallace cadastrado com sucesso."
// e assim por diante para todos.

const usuarios = ['Wallace', 'Ana', 'José', 'Marina'];

usuarios.forEach(usuario =>  console.log(`Usuário ${usuario} cadastrado com sucesso.`))