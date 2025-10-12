function Animal(nome, idade) {
    this.nome = nome
    this.idade = idade
}

Animal.prototype.falar = function () {
    return `Eu sou ${this.nome}.`
}

Animal.prototype.aniversario = function () {
    this.idade += 1
    console.log(`Agora tenho ${this.idade} anos.`)
}

function Cachorro(nome, idade) {
    Animal.call(this, nome, idade)
}

Cachorro.prototype = Object.create(Animal.prototype)
Cachorro.prototype.constructor = Cachorro

Cachorro.prototype.falar = function () {
    console.log(`AU AU! ${Animal.prototype.falar.call(this)}`)
}

Cachorro.prototype.correr = function () {
    console.log(`${this.nome} está correndo!`)
}

function Gato(nome, idade) {
    Animal.call(this, nome, idade)
}

Gato.prototype = Object.create(Animal.prototype)
Gato.prototype.constructor = Gato


Gato.prototype.falar = function () {
    console.log(`Miau! ${Animal.prototype.falar.call(this)}`)
}

Gato.prototype.arranhar = function () {
    console.log(`${this.nome} está arranhando!`)
}

const cachorro1 = new Cachorro('Rex', 3)
cachorro1.falar()
cachorro1.correr()
cachorro1.aniversario()

const gato1 = new Gato('Jurubebo', 5)
gato1.falar()
gato1.arranhar()
gato1.aniversario()

function Conta(numero, saldo) {
    this.numero = numero
    this.saldo = saldo
}

Conta.prototype.verSaldo = function () {
    console.log(`Conta: ${this.numero} / Saldo: ${this.saldo}`)
}

Conta.prototype.validaValor = function (valor) {
    if (valor === undefined) return `Campo em branco, adicione um valor valido`
    if (!Number.isFinite(valor)) return `Valor inserido:${valor} - Inválido, precisa ser um número`
    if (valor <= 0) return `Valor inserido: ${valor} - Inválido, precisa ser maior que 0.`
}

Conta.prototype.depositar = function (valor) {
    if (this.validaValor(valor) !== undefined) console.log(this.validaValor(valor))
    this.saldo += valor

    return this.verSaldo()
}

Conta.prototype.sacar = function (valor) {
    if (this.validaValor(valor) !== undefined) console.log(this.validaValor(valor))
    if (valor > this.saldo) {
        console.log(`Valor inserido: ${valor} - valor maior que o saldo em conta.`)
        return this.verSaldo()
    }
    this.saldo -= valor

    return this.verSaldo()
}

function CC(numero, saldo, limite) {
    Conta.call(this, numero, saldo)
    this.limite = limite
}

CC.prototype = Object.create(Conta.prototype)
CC.prototype.constructor = CC

CC.prototype.sacar = function (valor) {
    if (this.validaValor(valor) !== undefined) console.log(this.validaValor(valor))
    if (valor > this.saldo + this.limite) {
        console.log(`Valor inserido: ${valor} - valor maior que o saldo + limite da conta. Saldo + Limite: ${this.saldo + this.limite}`)
        return this.verSaldo()
    }

    this.saldo -= valor

    return this.verSaldo()
}

function CP(numero, saldo) {
    Conta.call(this, numero, saldo)
}

CP.prototype = Object.create(Conta.prototype)
CP.prototype.constructor = CP



const conta1 = new Conta(123, 10)
conta1.verSaldo()
conta1.depositar(1)
conta1.sacar(3)

const contaCorrente1 = new CC(321, 40, 100)
contaCorrente1.verSaldo()
contaCorrente1.depositar(10)
contaCorrente1.sacar(70)

const contaPoupanca1 = new CP(213, 50)
contaPoupanca1.verSaldo()
contaPoupanca1.depositar(10)
contaPoupanca1.sacar(50)


function Veiculo(marca, modelo) {
    this.marca = marca
    this.modelo = modelo
}

Veiculo.prototype.info = function () {
    return `Marca: ${this.marca} | Modelo: ${this.modelo} `
}

function Carro(marca, modelo) {
    Veiculo.call(this, marca, modelo)
    this.tipo = 'Carro'
}
function Moto(marca, modelo) {
    Veiculo.call(this, marca, modelo)
    this.tipo = 'Moto'
}
function SUV(marca, modelo, tracao) {
    Carro.call(this, marca, modelo)
    this.tracao = tracao
}

Carro.prototype = Object.create(Veiculo.prototype)
Carro.prototype.constructor = Carro

Moto.prototype = Object.create(Veiculo.prototype)
Moto.prototype.constructor = Moto

SUV.prototype = Object.create(Carro.prototype)
SUV.prototype.constructor = SUV

SUV.prototype.info = function () {
    return `${Carro.prototype.info.call(this)} | Tração: ${this.tracao}`
}


const carro1 = new Carro('Honda', 'Civic')
const carro2 = new Carro('Toyota', 'Corolla')

const moto1 = new Moto('Honda', '160')
const moto2 = new Moto('Honda', '150')

const suv1 = new SUV('Jeep', 'Compass', '4x2')

console.log(carro1.info());
console.log(carro2.info());

console.log(moto1.info());
console.log(moto2.info());

console.log(suv1.info());