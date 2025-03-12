// Criando array números 
const numeros = [1, 2 , 3, 4, 5 ]

// Função para exibir os números de forma organizada
function exibirNumeros(numeros) {
    console.log(`Esses são todos os números dentro do array`, numeros)
    console.log(`Esse é o primeiro número dentro do array`, numeros[0])
    console.log(`Esse é o último número dentro do array`, numeros[ numeros.length -1 ])
    console.log(`Esse é o tamanho do array`, numeros.length)
}

// Chamando a função e passando a array numeros
exibirNumeros(numeros)