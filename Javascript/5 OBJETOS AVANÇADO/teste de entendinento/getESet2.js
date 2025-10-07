const carro = {
    _velocidade: 0,

    get velocidadeAtual() {
        return `${this._velocidade} km/h`
    },
    set velocidadeAtual(novaVelocidade) {
        if (novaVelocidade < this._velocidade) {
            console.log(`Não é possível diminuir a velocidade!`)
        }
        else {
            this._velocidade = novaVelocidade
        }
    }
}

carro.velocidadeAtual = 50;
console.log(carro.velocidadeAtual); // 50 km/h
carro.velocidadeAtual = 30;
console.log(carro.velocidadeAtual); // Não é possível diminuir a velocidade!


const termometro = {
    _celsius: 20,
    get kelvin() {
        return (this._celsius + 273.15).toFixed(2);
    },
    set kelvin(temperaturaKelvin) {
        this._celsius = Number((temperaturaKelvin - 273.15).toFixed(2));
    }
}

console.log(termometro.kelvin); // 293.15
termometro.kelvin = 300;
console.log(termometro._celsius); // 26.85

const aluno = {
    _nome: '',
    _nota: 0,
    get resumo() {
        return `Aluno:${this._nome} | Nota:${this._nota}`
    },
    set resumo(NomeENota) {
        const partes = NomeENota.split(', ')
        this._nome = partes[0]
        this._nota = partes[1]
    }
}

aluno.resumo = "Carlos, 9.5";
console.log(aluno.resumo); // Aluno: Carlos | Nota: 9.5
