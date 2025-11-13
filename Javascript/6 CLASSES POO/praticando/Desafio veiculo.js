class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca
        this.modelo = modelo
        this.velocidade = 0
    }

    acelerar(valor) {
        return this.velocidade += valor
    }
    frear(valor) {
        if (valor > this.velocidade) return `Freio demais!! kkk`
        return this.velocidade -= valor
    }
    get status() {
        return `Marca: ${this.marca} - Modelo: ${this.modelo} - Velocidade: ${this.velocidade}Km/h`
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo) {
        super(marca, modelo)

        this.combustivel = 0
    }

    acelerar(valor) {
        if (this.combustivel <= 0) return `Sem combustível!!!`

        super.acelerar(valor)
        
        this.combustivel -= valor / 5
        return this.status
    }
    abastecer(qtd) {
        return this.combustivel += qtd
    }

    get status() {
        return `Marca: ${this.marca} - Modelo: ${this.modelo} - Velocidade: ${this.velocidade}Km/h - Combustível: ${this.combustivel} L.`
    }
}

const veiculo1 = new Veiculo ('Honda', 'Civic')
console.log(veiculo1.acelerar(10))
console.log(veiculo1.frear(20))
console.log(veiculo1.frear(5))
console.log(veiculo1.acelerar(10))
console.log(veiculo1.status)

const carro1 = new Carro ('Toyota', 'Corolla')
console.log(carro1.acelerar(10))
console.log(carro1.abastecer(10))
console.log(carro1.acelerar(10))
console.log(carro1.acelerar(10))
console.log(carro1.frear(5))
