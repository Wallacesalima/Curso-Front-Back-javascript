function criarPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade }
}

const pessoa1 = criarPessoa('Wallace', 'Sá Lima', 25)
const pessoa2 = criarPessoa('Monique', 'Teruya', 21)

console.log(pessoa1)
console.log(pessoa1.nome)
console.log(pessoa2)
console.log(pessoa2.idade)

const pessoa3 = {
    nome: 'Naruto',
    sobrenome: 'Uzumaki',
    idade: 30,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade() {
        this.idade++
    }
}

pessoa3.fala()
pessoa3.incrementaIdade()
pessoa3.fala()
pessoa3.incrementaIdade()
pessoa3.fala()
pessoa3.incrementaIdade()
pessoa3.fala()
