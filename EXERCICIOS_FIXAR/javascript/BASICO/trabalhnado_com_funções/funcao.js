// Criando Objeto carro
const carro = {
    marca: "Honda",
    modelo: "Fit",
    ano: 2014
}

// Exibindo o objeto carro
console.log (`Esse é o objeto carro:`, carro)

// criando função para exibir os atributos do objeto carro de formna organizada
function exibirCarro (carro) {
    console.log(`Essa é a marca do carro: ${carro.marca}`)
    console.log(`Esse é o modelo do carro: ${carro.modelo} `)
    console.log(`Esse é o ano do carro: ${carro.ano}`)
}

// Chama a função e passa o objeto carro
exibirCarro(carro)