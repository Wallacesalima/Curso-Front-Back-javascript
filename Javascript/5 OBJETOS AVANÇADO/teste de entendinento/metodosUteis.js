const usuario = {
    nome: "Ana",
    idade: 28,
    cidade: "Recife"
}

console.log(`Propriedades: ${Object.keys(usuario)}`)
console.log(`valores: ${Object.values(usuario)}`)

const produto = {
    nome: "Notebook",
    preco: 3500
}
const detalhe = {
    garantia: "1 ano"
}
const produtoFinal = { ...produto, ...detalhe } // melhor e mais moderno que Object.assign

// Object.assign(produtoFinal, produto, detalhe)

console.log(produtoFinal)

const config = {
    modo: "dark",
    volume: 80
}

Object.freeze(config)

config.volume = 100
config.tema = "azul"

console.log(config)
