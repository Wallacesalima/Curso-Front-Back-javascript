function teste() {
     console.log(`Esse método está vinculado ao objeto global`)
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
        teste()
    }

    // Métodos de instância
    aumentarVolume() {
        this.volume += 2
    }
    diminuirVolume() {
        this.volume -= 2
    }

    // Método estático
    static vinculado() {
        console.log(`Esse método está vinculado a`, this)
    }
}

const test = new ControleRemoto()
ControleRemoto.vinculado()