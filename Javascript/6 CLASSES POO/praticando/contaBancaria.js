class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular
        this.saldo = saldo
    }

    depositar(valor) {
        return this.saldo += valor
    }
    sacar(valor) {
        const novoSaldo = valor <= this.saldo ? this.saldo -= valor : `Saldo: ${this.saldo} insuficiente.`

        return novoSaldo
    }
    verSaldo() {
        return `Saldo atual: ${this.saldo}`
    }
}

const c1 = new ContaBancaria('Wallace', 20)

console.log(c1.depositar(10))
console.log(c1.sacar(20))
console.log(c1.sacar(50))
console.log(c1.verSaldo())