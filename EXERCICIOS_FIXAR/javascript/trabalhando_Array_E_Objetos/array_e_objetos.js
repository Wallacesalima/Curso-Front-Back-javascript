// Criando o array pessoas, com 3 objetos (pessoa1, pessoa2 e pessoa3)
const pessoas = [
    {
        nome: "Wallace",
        idade: 25,
        cidade: "São Paulo"
    },
    {
        nome: "Andre",
        idade: 35,
        cidade: "Bahia"
    },
    {
        nome: "Alfonso",
        idade: 76,
        cidade: "Ceará"
    },
]

// Exibindo o array pessoas
console.log(`O array pessoas contém esses dados:`, pessoas)

// Exibindo o nome do objeto pessoa2
console.log(`Nome do segundo objeto:`, pessoas[1].nome)

// Modificando a idade do objeto pessoa3
pessoas[2].idade = 57

// Adicionando o Objeto pessoa4 ao array pessoas
pessoas.push({
        nome: "Poatan",
        idade: 34,
        cidade: "Paraíba"
})

// Exibindo o array pessoas após mudanças
console.log(`O array pessoas atualizado contém esses dados:`, pessoas)



