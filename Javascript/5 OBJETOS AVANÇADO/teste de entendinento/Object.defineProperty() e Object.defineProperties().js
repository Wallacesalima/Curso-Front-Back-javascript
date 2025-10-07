// Crie um objeto carro com propriedade modelo usando Object.defineProperty, que só possa ser lida (writable: false).

let valor = 2
const carro = {
    // Crie uma propriedade preco com getter e setter que multiplica o valor por 1.2 ao definir (simulando imposto).
    get preco() {
        return valor * 1.2
    },
    set preco(novoValor) {
        valor = novoValor;
    }
}

let modelo = 'civic'
Object.defineProperty(carro, 'modelo', {
    enumerable: true,
    value: modelo,
    writable: false,
    configurable: true
})

// Adicione uma propriedade ano usando defineProperties com valor inicial 2023 e enumerable: true.

Object.defineProperties(carro, {
    ano: {
        value: 2023,
        enumerable: true,
        writable: false,
        configurable: true
    }
})


carro.preco = 3

console.log(carro.preco)
