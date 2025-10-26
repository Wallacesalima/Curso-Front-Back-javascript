// const _velocidade = Symbol('velocidade') FORMA ANTIGA DE FAZER
// Teria que usar this[_velocidade]

class Carro {

    #velocidade = 0 //  FORMA MODERNA DE FAZER

    constructor(nome) {
        this.nome = nome
        this.#velocidade = 0
    }

    set velocidade(valor) {
        console.log('SETTER')
        if (typeof valor !== 'number') return
        if (valor >= 100 || valor <= 0) return
        this.#velocidade = valor
    }

    get velocidade() {
        console.log('GETTER')
        return this.#velocidade
    }

    acelerar() {
        if (this.#velocidade >= 100) return
        this.#velocidade++
    }

    freiar() {
        if (this.#velocidade <= 0) return
        this.#velocidade--
    }
}

const c1 = new Carro('Fusquinha')
c1.velocidade = 99
console.log(c1.velocidade)

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    get nomecompleto() {
        return this.nome + ' ' + this.sobrenome
    }

    set nomecompleto(valor) {
        valor = valor.split(' ')
        this.nome = valor.shift()
        this.sobrenome = valor.join(' ')
    }
}

const p1 = new Pessoa('Wallace', 'Almeida')

p1.nomecompleto = 'Wallace Sá Lima Almeida'

console.log(p1)