// Usando classes o metodo falar já vai diretamente pa5ra o prototype
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar(assunto) {
        console.log(`${this.nome} ${this.sobrenome} está falando sobre ${assunto}!`)
    }
}

const pessoa1 = new Pessoa('Wallace', 'Almeida')
console.log(pessoa1)
pessoa1.falar('futebol')

// Usando função construtora preciso adicionar manualmente o metodo falar ao prototype

function Alguem(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

// Adicionando manualmente o metodo falar ao prototype
Alguem.prototype.falar = function (assunto) {
    console.log(`${this.nome} ${this.sobrenome} está falando sobre ${assunto}!`)
}

const pessoa2 = new Alguem("Wallace", 'Sá Lima')
console.log(pessoa2)
pessoa2.falar('Basquete')

// Classe se mostra superior a função construtora 