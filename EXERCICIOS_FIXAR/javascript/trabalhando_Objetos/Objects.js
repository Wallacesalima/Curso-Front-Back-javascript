// Criando Objeto pessoa
const pessoa = {
    nome: "Wallace",
    idade: 25,
    cidade: "São Paulo"
}

// Exibindo o Objeto inicial
console.log(`Exibindo o Objeto sem modificações:`, pessoa)

// Exibindo somente o Nome Odo objeto pessoa
console.log(`Nome dentro do objeto pessoa:`, pessoa.nome)

// Mudando a cidade
pessoa.cidade = "Curitiba"

// Adicionando profissao ao objeto pessoa
pessoa.profissao = "Eng de Software"

// Exibindo o Objeto modificado
console.log(`Esse é o Objeto modificado:`, pessoa)