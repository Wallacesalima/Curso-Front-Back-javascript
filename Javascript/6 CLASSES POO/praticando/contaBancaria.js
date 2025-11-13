class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor
        return `Depósito realizado. Novo saldo: R$${this.saldo.toFixed(2)}`
    }
    sacar(valor) {

        if(valor <= this.saldo) {
            this.saldo - valor
            console.log( `Saque realizado. Novo saldo: R$${this.saldo.toFixed(2)}`)
        } else {
            console.log( `Saldo Insuficiente. Saldo: R$${this.saldo.toFixed(2)}`)  
        }
    }
    verSaldo() {
        return `Saldo atual: ${ this.saldo } `
    }
}

const c1 = new ContaBancaria('Wallace', 20)

console.log(c1.depositar(10))
c1.sacar(20)
c1.sacar(50)
console.log(c1.verSaldo())