class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + 'já ligado!')
            return
        }

        this.ligado = true
    }

    desligado() {
        if (!this.ligado) {
            console.log(this.nome + 'já desligado!')
            return
        }

        this.ligado = false
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo, bateria) {
        super(nome)

        this.cor = cor
        this.modelo = modelo
        this.bateria = bateria
    }

    ligar() {
        if (this.bateria < 15) {
            console.log(`${this.nome} com bateria baixa - ${this.bateria}%, minimo necessario de 15%.`)
            return
        }

        if (this.ligado) {
            console.log(this.nome + 'já ligado!')
            return
        }

        this.ligado = true

    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Xr', 20)
s1.ligar()
console.log(s1)

