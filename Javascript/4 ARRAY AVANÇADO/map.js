// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numeroEmDobro = numeros.map(valor => valor * 2)
console.log(numeroEmDobro)

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
]

const nomePessoas = pessoas.map(pessoa => pessoa.nome)
console.log(nomePessoas)

const somenteIdades = pessoas.map(pessoa => ({ idade: pessoa.idade }))
console.log(somenteIdades)

const comIds = pessoas.map(function (pessoa, indice) {
    const newPessoa = {...pessoa}
    newPessoa.id = indice + 1 
    return newPessoa
})

console.log(comIds)