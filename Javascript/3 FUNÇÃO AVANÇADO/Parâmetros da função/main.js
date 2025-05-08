// arguments - sustenta todos os argumentos enviados
// Só funciona em funções com a palavra 'function'

function funcao() {
    let total = 0
    for (let argumento of arguments) {
        total += argumento
    }

    console.log(total)
}

funcao(1, 2, 3, 4, 5, 6, 7)

// Usando o rest operador(...) forma mais moderna
// O rest operator em JavaScript é um elemento sintático
// representado por três pontos (...) que permite coletar
// os argumentos restantes.

const formaMaisModerna = (...argumentos) => {
    let total = 0
    for (let argumento of argumentos) {
        total += argumento
    }
    console.log(total)
}

formaMaisModerna(10, 20, 30)

function viaDesestruturacaoComObjeto({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade)
}

let objeto = { nome: 'Wallace', sobrenome: 'Almeida', idade: 25 }

viaDesestruturacaoComObjeto(objeto)

function viaDesestruturacaoComArray([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3)
}

let array = [1, 2, 3]
viaDesestruturacaoComArray(array)