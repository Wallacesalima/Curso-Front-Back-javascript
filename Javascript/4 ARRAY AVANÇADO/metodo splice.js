const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia']

// Push
// nomes.splice(nomes.length, 0, 'Luiz', 'Otávio')
// console.log(nomes)

// Unshift
// nomes.splice(0, 0, 'Luiz', 'Otávio')
// console.log(nomes)

// pop
// const removidos = nomes.splice(-1, 1)
// console.log(nomes, removidos)

// Shift
const removidos = nomes.splice(0, 1)
console.log(nomes, removidos)
