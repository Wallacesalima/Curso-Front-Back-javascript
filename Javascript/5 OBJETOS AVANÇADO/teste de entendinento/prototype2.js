function Livro(titulo, autor, preco) {
    this.titulo = titulo
    this.autor = autor
    this.preco = preco
}

Livro.prototype.descricao = function () {
    return console.log(`Título: ${this.titulo} | Autor: ${this.autor} | Preço: R$${this.preco.toFixed(2)} `)
}

Livro.prototype.desconto = function (valorDeDesconto) {
    return this.preco -= valorDeDesconto
}

const livro1 = new Livro('livro1', 'eu', 1)
const livro2 = new Livro('livro2', 'eu também', 5)

livro1.descricao()
livro1.desconto(0.50)
livro1.descricao()
livro2.descricao()
livro2.desconto(3)
livro2.descricao()


Array.prototype.ultimo = function () {
    return this[this.length - 1]
}

Array.prototype.sum = function () {
    return this.reduce(function (acumulador, valores) {
        acumulador += valores
        return acumulador
    })
}

Array.prototype.multiplica = function (fator) {
    return this.map(valor => valor * fator)
}


console.log([10, 20, 30].ultimo());
console.log([1, 2, 3, 4].sum())
console.log([1, 2, 3, 4].multiplica(2))

function Retangulo(largura, altura) {
    this.largura = largura
    this.altura = altura
}

Retangulo.prototype.area = function () {
    const area = this.largura * this.altura
    return `A area é ${area}`
}

Retangulo.prototype.perimetro = function () {
    const perimetro = 2 * (this.largura + this.altura)
    return `O perimetro é ${perimetro} `
}

Retangulo.prototype.scale = function (fator) {
    const multiplicaAltura = fator * this.altura
    const multiplicaLargura = fator * this.largura
    return `${multiplicaAltura} / ${multiplicaLargura}`
}

const Retangulo1 = new Retangulo(4, 5)

console.log(Retangulo1.area())
console.log(Retangulo1.perimetro())
console.log(Retangulo1.scale(2))

function ContaBancaria(numero, saldo) {
    this.numero = numero
    this.saldo = saldo
}

ContaBancaria.prototype.verSaldo = function () {
    return `Saldo: R$${this.saldo}`
}

ContaBancaria.prototype.depositar = function (valor) {
    if (typeof valor !== 'number') return 'Valor inválido'
    if (valor < 0) return 'Valor abaixo de zero não é permitido!'
    this.saldo += valor
    return this.verSaldo()
}

ContaBancaria.prototype.sacar = function (valor) {
    if (valor > this.saldo) return `valor maior que o saldo`
    if (typeof valor !== 'number') return 'Valor inválido'
    if (valor < 0) return 'Valor abaixo de zero não é permitido!'
    this.saldo -= valor
    return this.verSaldo()
}

ContaBancaria.prototype.transferir = function (valor, contaDestino) {
    if (valor > this.saldo) return `valor maior que o saldo`
    if (typeof valor !== 'number') return 'Valor inválido'
    if (valor < 0) return 'Valor abaixo de zero não é permitido!'
    this.sacar(valor)
    contaDestino.depositar(valor)

    return this.verSaldo()
}


const conta1 = new ContaBancaria(123, 1200)
const conta2 = new ContaBancaria(123, 100)

console.log(conta1.depositar(100))
console.log(conta1.sacar(200))
console.log(conta1.verSaldo())

conta1.transferir(200, conta2);

console.log(conta1.verSaldo())
console.log(conta2.verSaldo())




