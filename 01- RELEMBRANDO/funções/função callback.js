// Função responsavel por receber o resultado e imprimir juntamente com uma frase 
const logOperacao = (resultado) => {
    console.log(`Resultado da operação: ${resultado}`)
}

// Função responsavel por fazer a multiplicação e retornar o resultado por meio de uma callback
function executarOperacao (numero1, numero2, callback) {
    callback(numero1 * numero2)
}

// chamando função com os parametros o ultimo sendo a função callback
executarOperacao(3, 4, logOperacao)