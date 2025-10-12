function Animal(nome, idade) {
    this.nome = nome
    this.idade = idade
}

Animal.prototype.falar = function () {
    console.log(`Eu sou ${this.nome}`)
}

Animal.prototype.aniversario = function () {
    this.idade += 1
    console.log(`Parabéns por completar ${this.idade} ano(s)`)
}

function Cachorro(nome, idade) {
    Animal.call(this, nome, idade)
}

Cachorro.prototype = Object.create(Animal.prototype)
Cachorro.prototype.constructor = Cachorro

Cachorro.prototype.falar = function () {
    console.log(`AU AU! Eu sou ${this.nome}`)
}


function Gato(nome, idade) {
    Animal.call(this, nome, idade)
}

Gato.prototype = Object.create(Animal.prototype)
Gato.prototype.constructor = Gato

Gato.prototype.falar = function () {
    console.log(`MIAU! sou ${this.nome}`)
}

const animal1 = new Animal('Capivara', 2)
animal1.falar()
animal1.aniversario()

const Cachorro1 = new Cachorro('Rex', 5)
Cachorro1.falar()
Cachorro1.aniversario()

const gato1 = new Gato('Jurubebo', 0)
gato1.falar()
gato1.aniversario()

//==============================================//

function Conta(numero, saldo) {
    this.numero = numero
    this.saldo = saldo
}

Conta.prototype.verSaldo = function () {
    return `Conta:${this.numero} / Saldo:${this.saldo.toFixed(2)}`
}

Conta.prototype.depositar = function (valor) {
    if (valor === undefined) return `Campo em branco, adicione um valor valido.`
    if (!Number.isFinite(valor)) return `Valor inserido: ${valor} - Inválido, precisa ser um número.`
    if (valor < 0) return `Valor inserido: ${valor} - Inválido, precisa ser maior que 0.`

    this.saldo += valor
    return this.verSaldo()

}
Conta.prototype.sacar = function (valor) {
    if (valor === undefined) return `Campo em branco, adicione um valor valido`
    if (!Number.isFinite(valor)) return `Valor inserido:${valor} - Inválido, precisa ser um número`
    if (valor < 0) return `Valor inserido: ${valor} - Inválido, precisa ser maior que 0.`
    if (valor > this.saldo) return `Valor inserido: ${valor} - valor maior que o saldo em conta.`
    this.saldo -= valor
    return this.verSaldo()
}

function CC(numero, saldo, limite) {
    Conta.call(this, numero, saldo)
    this.limite = limite
}

CC.prototype = Object.create(Conta.prototype)
CC.prototype.constructor = CC

function CP(numero, saldo) {
    Conta.call(this, numero, saldo)
}

CP.prototype = Object.create(Conta.prototype)
CP.prototype.constructor = CP

CC.prototype.sacar = function (valor) {
    if (valor === undefined) return `Campo em branco, adicione um valor valido`
    if (!Number.isFinite(valor)) return `Valor inserido:${valor} - Inválido, precisa ser um número`
    if (valor < 0) return `Valor inserido: ${valor} - Inválido, precisa ser maior que 0.`
    if (valor > this.saldo + this.limite) return `Valor inserido: ${valor} - valor maior que o saldo + limite da conta.`
    this.saldo -= valor
    return this.verSaldo()
}

const conta1 = new Conta(123, 100)
const contaCorrente1 = new CC(321, 10, 100)
const contaPoupanca1 = new CP(213, 200)

console.log(conta1.depositar(10))
console.log(conta1.sacar(50))
console.log(conta1.verSaldo())

console.log(contaCorrente1.depositar(10))
console.log(contaCorrente1.sacar(50))
console.log(contaCorrente1.verSaldo())
console.log(contaCorrente1.sacar(80))

console.log(contaPoupanca1.depositar(10))
console.log(contaPoupanca1.sacar(131))
console.log(contaPoupanca1.verSaldo())
console.log(contaPoupanca1.sacar(80))


function Veiculo(marca, modelo) {
    this.marca = marca
    this.modelo = modelo
}

function Carro(marca, modelo) {
    Veiculo.call(this, marca, modelo)
    this.tipo = 'Carro'
}
function Moto(marca, modelo) {
    Veiculo.call(this, marca, modelo)
    this.tipo = 'Moto'
}

Veiculo.prototype.info = function () {
    if (this.tipo === undefined) return console.log(`Marca: ${this.marca} | Modelo: ${this.modelo}`)

    return console.log(`Marca: ${this.marca} | Modelo: ${this.modelo} | Tipo: ${this.tipo}`)

}
function SUV(marca, modelo, tracao) {
    Carro.call(this, marca, modelo)
    this.tracao = tracao
}

SUV.prototype = Object.create(Carro.prototype)
SUV.prototype.constructor = SUV

SUV.prototype.info = function () {
    Carro.prototype.info.call(this)
    console.log(`| Tração: ${this.tracao}`)
}



Carro.prototype = Object.create(Veiculo.prototype)
Carro.prototype.constructor = Carro

Moto.prototype = Object.create(Veiculo.prototype)
Moto.prototype.constructor = Moto

const carro1 = new Carro('Honda', 'Civic')
const carro2 = new Carro('Toyota', 'Corolla')

const moto1 = new Moto('Honda', '160')
const moto2 = new Moto('Honda', '150')

const veiculo = new Veiculo('teste', 'teste')

const suv1 = new SUV('Jeep', 'Compass', '4x2')

carro1.info()
carro2.info()

moto1.info()
moto2.info()

veiculo.info()
suv1.info()

// QUESTIONARIO

// GABARITO

// 1-A, 2-A, 3-B, 4-B, 5-A

