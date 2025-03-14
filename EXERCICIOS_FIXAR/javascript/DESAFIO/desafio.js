// Pergunta o nome do usuário e armazena na variável nome
const nome = prompt("Digite o seu nome:")

// Criando um objeto para armazenar os dados do cliente
const dadosCliente = {
    nome: nome, // Atribui o nome digitado
    cidade: "São Paulo" // Cidade padrão (poderia ser alterada depois)
}

// Pegando o elemento do HTML onde vou exibir os dados
const dadosNoHtml = document.querySelector('.dados')

// Criando função para exibir os dados na tela
function exibirDados() {
    // Adicionando os dados do cliente na tela de forma estilizada
    dadosNoHtml.innerHTML += `Esse é o seu nome: <strong>${dadosCliente.nome.toUpperCase()}</strong> <br/>`
    dadosNoHtml.innerHTML += `Essa é a sua cidade: <strong>${dadosCliente.cidade.toUpperCase()}</strong>`
}

// Criando array que contém numeros
const numeros = [1, 2, 3, 4, 5]

// Pegando o elemento do HTML onde vou exibir os números
const numerosNoHtml = document.querySelector('.numerosNoHtml')

// Criando função para exibir os numeros na tela
function exibirNumeros() {
    numerosNoHtml.innerHTML += `Esse é o primeiro número da array: ${numeros[0]}  <br/>`
    numerosNoHtml.innerHTML += `Esse é o último número da array: ${numeros[numeros.length - 1]} <br/>`
    numerosNoHtml.innerHTML += `Esse é o tamanho da array: ${numeros.length}`
}

// invocando as funções para exibir os dados e os números
exibirDados(dadosCliente)
exibirNumeros(dadosCliente)