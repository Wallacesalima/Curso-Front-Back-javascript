function Carro(modelo, ano){
    this.modelo = modelo
    this.ano = ano
    this.mostrarInfo = function() {
         console.log(this.modelo, this.ano)
    }
}

const carro1 = new Carro('Fit', 2018)
carro1.mostrarInfo()