const animalPrototype = {
    apresentar() {
        console.log(`Eu sou um ${this.tipo} chamado ${this.nome}`)
    }
}

function criarAnimal(nome, tipo) {
    const animal = Object.create(animalPrototype)
    animal.nome = nome
    animal.tipo = tipo
    return animal

}

const animal1 = criarAnimal('teste', 'teste')
animal1.apresentar()

const contaPrototype = {
    depositar(valor) {
        return this.saldo += valor
    },
    sacar(valor) {
        return this.saldo -= valor
    }
}

function criarConta(numero, saldo) {
    const conta = Object.create(contaPrototype)
    conta.numero = numero
    conta.saldo = saldo
    return conta
}

const conta1 = criarConta(123, 200)
console.log(conta1.depositar(10))
console.log(conta1.sacar(110))

const produtoPrototype = {
    desconto(percentual) {
        const valorDesconto = this.preco * (percentual / 100)
        this.preco = this.preco - valorDesconto
        return this.preco
    },
    info() {
        console.log(`Nome: ${this.nome} | Preço: R$${this.preco} `)
    }
}

function criarProduto(nome, preco) {
    const produto = Object.create(produtoPrototype)
    produto.nome = nome
    produto.preco = preco
    return produto
}

const produto1 = criarProduto('teste', 120)
produto1.desconto(10)
produto1.info()