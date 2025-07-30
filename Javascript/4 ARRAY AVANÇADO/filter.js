// Retorne os números maiores que 10

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//     console.log(valor, indice, array)
//     return valor > 10
// })
const numerosFiltrados = numeros.filter(valor => valor > 10)

// console.log(numerosFiltrados)

// Retorne as pessoas que tem o nome com 5 letras ou mais 
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a letra 'a'

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
]

const pessoasCincoLetras = pessoas.filter(pessoa => pessoa.nome.length >= 5)
console.log(pessoasCincoLetras)

const pessoasMaisCinquentaAnos = pessoas.filter(pessoa => pessoa.idade > 50)
console.log(pessoasMaisCinquentaAnos)

// const pessoasTerminaComA = pessoas.filter(pessoa => pessoa.nome.slice(-1) === 'a'
// )
const pessoasTerminaComA = pessoas.filter(pessoa => pessoa.nome.toLowerCase().endsWith('a')
)

console.log(pessoasTerminaComA)