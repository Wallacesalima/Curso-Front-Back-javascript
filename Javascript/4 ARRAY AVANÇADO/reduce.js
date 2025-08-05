const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const total = numeros.reduce(function (acumulador, numero) 
{
    acumulador += numero
    return acumulador
}, 0)

console.log(total)

// Retorne a pessoa mais velha

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 10 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 63 }
]

const maisVelha = pessoas.reduce(function (pessoaComparada, pessoa) {
    if(pessoaComparada.idade > pessoa.idade) return pessoaComparada
    return pessoa
})

console.log(maisVelha)