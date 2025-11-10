class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    falar() {
        return `Meu nome é ${this.nome} e tenho ${this.idade} anos`
    }
}

const p1 = new Pessoa('teste', 18)
const p2 = new Pessoa('teste2', 90)

console.log(p1.falar())
console.log(p2.falar())