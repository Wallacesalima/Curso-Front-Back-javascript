const destino = { a: 1, b: 2 }
const origem = { b: 4, c: 5 }

// Copiando as propriedades de origem para destino
const resultado = Object.assign({}, destino, origem)

console.log(resultado); // { a: 1, b: 4, c: 5 }

const destino2 = { a: 1, b: 2 }
const origem2 = { b: 4, c: 5 }

// Criando novo objetosem mutar os originais
const resultado2 = { ...destino2, ...origem2}
console.log(resultado2); // { a: 1, b: 4, c: 5 }

// Observação: 

// Object.assign(destino, origem) → altera o objeto destino (a não ser que use {} como primeiro arg).

// { ...destino, ...origem } → cria um novo objeto sem alterar os existentes.