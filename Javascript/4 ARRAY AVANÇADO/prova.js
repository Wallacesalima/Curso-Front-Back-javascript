const produtos = [
    { nome: "Notebook", preco: 2500, categoria: "eletrônicos" },
    { nome: "Camiseta", preco: 50, categoria: "roupas" },
    { nome: "Celular", preco: 1800, categoria: "eletrônicos" },
    { nome: "Tênis", preco: 300, categoria: "calçados" },
    { nome: "Fone", preco: 200, categoria: "eletrônicos" },
    { nome: "Calça", preco: 120, categoria: "roupas" }
];

// Lista todos os nomes dos produtos no console.
produtos.forEach(produto => {
    console.log(`Produto: ${produto.nome}`)
});

// Novo array apenas com os preços e em formato da moeda do Brasil(Real).
const precos = produtos.map(produto =>
    Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(produto.preco))
// Mostrando resultado no console
console.log(precos)

// Filtrando todos os produtos que possuem 'eletrônicos' informados na sua categoria.
const eletronicos = produtos.filter(produto => produto.categoria === 'eletrônicos')
// Mostrando resultado no console
console.log(eletronicos)

// Somando todos os preços dos produtos, resultando em um total dos preços.
const totalTodosProdutos = produtos.reduce((ac, produto) => ac + produto.preco, 0)
// Mostrando resultado no console
console.log(totalTodosProdutos)

// Comparando e ordenando os produtos do mais barato para o mais caro
const ordenar = produtos.sort((a,b) => a.preco - b.preco)
// Mostrando resultado no console
console.log(ordenar)

// Novos produtos à serem adicionados
const novosProdutos = [
  { nome: "Relógio", preco: 500, categoria: "acessórios" },
  { nome: "Mochila", preco: 150, categoria: "acessórios" }
];

// concatenando os dois arrays por meio de Spread
const todosProdutos = [...produtos, ...novosProdutos]
// Mostrando o array concatenado no console
console.log(todosProdutos)

// ordenando o array eletronicos ja filtrado anteriormente e trazendo somente os nomes desse array.
const desafioFinal = eletronicos.sort((a, b) => b.preco - a.preco).map(produto => produto.nome)
// Mostrando resultado no console
console.log(desafioFinal)