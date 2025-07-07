//  função que cria objetos com atributos e metodos 
function criarCarro(modelo, ano) {
    return {
        modelo,
        ano, 
        mostrarInfo() {
            console.log(this.modelo, this.ano)
        }
    }
}

// criando o carro 1
const carro1 = criarCarro("Civic", "2015")
// chamando o metodo para o carro 1 que ja foi informado os atributos
carro1.mostrarInfo()