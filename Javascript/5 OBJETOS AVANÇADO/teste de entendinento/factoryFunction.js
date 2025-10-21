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

const area = {
    area() {
        return this.largura * this.altura
    }
}
const perimetro = {
    perimetro() {
        return 2 * (this.largura + this.altura)
    }
}
const scale = {
    scale(fator) {
        this.altura *= fator
        this.largura *= fator
        const scale = `Altura:${this.altura}/Largura:${this.largura}`
        return scale
    }
}

const retanguloPrototype = { ...area, ...perimetro, ...scale }

function criarRetangulo(largura, altura) {
    const retangulo = Object.create(retanguloPrototype)
    retangulo.largura = largura
    retangulo.altura = altura
    return retangulo
}

const retangulo1 = criarRetangulo(9, 6)
console.log(retangulo1.area())
console.log(retangulo1.perimetro())
console.log(retangulo1.scale(2))


const info = {
    info() {
        return `Marca: ${this.marca} | Modelo: ${this.modelo} | Tipo: ${this.tipo}`
    }
}

const buzinar = {
    buzinar() {
        console.log(`BI BI BI!!`)
    }
}

const empinar = {
    empinar() {
        console.log(`É grau!!`)
    }
}

const veiculoPrototype = { ...info, ...buzinar, ...empinar }

function criarVeiculo(marca, modelo, tipo) {
    const veiculo = Object.create(veiculoPrototype)
    veiculo.marca = marca
    veiculo.modelo = modelo
    veiculo.tipo = tipo

    if (tipo.toUpperCase() === 'MOTO') veiculo.empinar()
    if (tipo.toUpperCase() === 'CARRO') veiculo.buzinar()

    return veiculo
}

const veiculo1 = criarVeiculo('teste', 'teste', 'moto')
console.log(veiculo1.info())