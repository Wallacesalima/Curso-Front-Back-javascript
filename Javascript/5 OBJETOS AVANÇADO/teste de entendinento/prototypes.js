function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade

}

Pessoa.prototype.falar = function () {
    console.log(`Olá, meu nome é ${this.nome}`)
}

const pessoa1 = new Pessoa('João')

pessoa1.falar()

function Carro(marca, modelo) {
    this.marca = marca
    this.modelo = modelo
}

const meuCarro = new Carro('Honda', 'Civic')

Carro.prototype.info = function() {
    console.log(`${this.marca}/${this.modelo}`)
}

meuCarro.info()

function Animal(nome) {
    this.nome = nome
}

Animal.prototype.falar = function() { return console.log(`Eu sou ${this.nome}`)}

function Cachorro(nome) {
    Animal.call(this, nome) 
}

Cachorro.prototype = Object.create(Animal.prototype)
Cachorro.prototype.constructor = Cachorro

const meuCachorro = new Cachorro('Tobi')

meuCachorro.falar()