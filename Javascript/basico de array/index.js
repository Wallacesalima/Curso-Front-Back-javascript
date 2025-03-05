let alunos = ['Luiz', 'Maria', 'João'];  
// alunos = 123

// console.log(typeof alunos)
// console.log(alunos instanceof Array) // verifica se é uma array

 // Adiciona no começo
alunos.unshift('Luiza') 

//Adicionando ao fim do Array
alunos.push('Eduardo')


console.log (alunos.slice(0, -2)) // corta o Array de acordo com o indice informado

// console.log(alunos[50]) // Indice que não existe - retorna undefined

delete alunos[1] // deleta o valor e deixa o indice existindo porem vazio

const removido = alunos.shift() // remove valor do inicio
console.log(removido)

// Adiciona ao fim usando o valor retornado do length queseria o numero de elementos dentro do array
// alunos[alunos.length] = 'Luiza'
// alunos[alunos.length] = 'Fabio'
// alunos[alunos.length] = 'Luana'

console.log(alunos)




