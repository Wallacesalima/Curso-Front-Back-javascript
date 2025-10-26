// Criando classe 
class DispositivoEletronico {
    // passando atributos por meio do metodo constructor 
    constructor(nome) {
        // atributos da classe
        this.nome = nome
        this.ligado = false
    }

    // OBS: Metodos vão automaticamente para o prototype

    // criando metodos (ligar e desligar)
    ligar() {
        if (this.ligado) {
            console.log(this.nome + 'já ligado!')
            return
        }

        this.ligado = true
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + 'já desligado!')
            return
        }

        this.ligado = false
    }
}


// Criando classe filha que herda atributos e metodos de DispositivoEletronico(classe pai)
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo, bateria) {
        // chama o constructor da classe pai 
        super(nome)

        // atributos da classe filha
        this.cor = cor
        this.modelo = modelo
        this.bateria = bateria
    }

    // Sobrescrevendo metodo que foi herdado da classe pai
    ligar() {
        if (this.bateria < 15) {
            console.log(`${this.nome} com bateria baixa - ${this.bateria}%, minimo necessario de 15%.`)
            return
        }
        // reaproveitando o metodo da classe pai
        super.ligar()

    }
}

// cria uma instancia da classe filha
const s1 = new Smartphone('Samsung', 'Preto', 'Xr', 20)
// executa metodo 
s1.ligar()
// mostrando objeto criado apartir da classe no console
console.log(s1)

