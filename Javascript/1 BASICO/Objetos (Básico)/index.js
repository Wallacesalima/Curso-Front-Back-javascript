// Função para criar objetos do tipo "pessoa"
function criarPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade } // Retorna um objeto com os valores passados como parâmetros
}

// Criando duas pessoas usando a função criarPessoa
const pessoa1 = criarPessoa('Wallace', 'Sá Lima', 25)
const pessoa2 = criarPessoa('Monique', 'Teruya', 21)

// Exibindo os objetos no console
console.log(pessoa1) // Exibe o objeto completo da pessoa1
console.log(pessoa1.nome) // Exibe apenas o nome da pessoa1
console.log(pessoa2) // Exibe o objeto completo da pessoa2
console.log(pessoa2.idade) // Exibe apenas a idade da pessoa2

// Criando um objeto diretamente com propriedades e métodos
const pessoa3 = {
    nome: 'Naruto',
    sobrenome: 'Uzumaki',
    idade: 30,

    // Método para exibir a idade atual da pessoa3
    fala() {
        console.log(`A minha idade atual é ${this.idade}`) // "this" se refere ao próprio objeto
    },

    // Método para incrementar a idade da pessoa3
    incrementaIdade() {
        this.idade++ // Aumenta a idade em 1
    }
}

// Chamando o método "fala" para exibir a idade inicial
pessoa3.fala()

// Chamando o método "incrementaIdade" e depois "fala" para mostrar a idade atualizada
pessoa3.incrementaIdade()
pessoa3.fala()

// Repetindo o processo para incrementar e exibir a idade mais algumas vezes
pessoa3.incrementaIdade()
pessoa3.fala()

pessoa3.incrementaIdade()
pessoa3.fala()
