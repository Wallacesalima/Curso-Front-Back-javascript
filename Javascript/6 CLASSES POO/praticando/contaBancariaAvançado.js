class Contabancaria {
    constructor(titular, saldoInicial) {
        this.titular = titular
        this.saldoInicial = saldoInicial
    }
    depositar(valor) {
        if (!valor) return `Valor não pode ser em branco nem 0.`
        if (typeof valor !== 'number') return `Valor precisa ser um número.`

        return `Deposito realizado. Novo Saldo: R$${(this.saldoInicial += valor).toFixed(2)}`
    }

    verificacoes(valor) {
        if (!valor) {
            return `Valor não pode ser em branco nem 0.`
        }
        if (typeof valor !== 'number') {
            return `Valor precisa ser um número.`
        }
        if (valor >= this.saldoInicial) {
            return `Valor precisa ser menor que o saldo: R$${this.saldoInicial.toFixed(2)}`
        }

        return true
    }

    sacar(valor) {
        const valorVerificado = valor
        if (this.verificacoes(valorVerificado) === true) {
            return `Saque realizado. Novo Saldo: R$${(this.saldoInicial -= valor).toFixed(2)}`
        } else {
            return `${this.verificacoes(valorVerificado)}`
        }
    }
    verSaldo() {
        return `Saldo Atual: R$${this.saldoInicial.toFixed(2)}.`
    }
}

const c1 = new Contabancaria('Wallace', 20)

console.log(c1.depositar(30))
console.log(c1.depositar('qq'))
console.log(c1.sacar('qq'))
console.log(c1.sacar(0))
console.log(c1.sacar(60))
console.log(c1.sacar(20))
console.log(c1.verSaldo())

class ContaCorrente extends Contabancaria {
    constructor(titular, saldoInicial) {
        super(titular, saldoInicial)

        this.limiteEspecial = 500
        this.novoSaldo = this.saldoInicial + this.limiteEspecial
    }

    verificacoes(valor) {
        if (!valor) {
            return `Valor não pode ser em branco nem 0.`
        }
        if (typeof valor !== 'number') {
            return `Valor precisa ser um número.`
        }
        if (valor >= this.novoSaldo) {

            return `Valor precisa ser menor que o saldo: R$${this.novoSaldo.toFixed(2)}`
        }

        return true
    }

    sacar(valor) {

        const resultado = this.verificacoes(valor)

        if (resultado !== true) return resultado

        this.novoSaldo -= valor;
        return `Saque realizado. Novo Saldo: R$${this.novoSaldo.toFixed(2)} (Limite especial sendo usado)`;

    }
}

const cc = new ContaCorrente('Wallace', 50)
console.log(cc.sacar(0))
console.log(cc.sacar(300))
console.log(cc.sacar(40))


class contapoupanca extends Contabancaria {
    constructor(titular, saldoInicial) {
        super(titular, saldoInicial)

        this.rendimentoMensal = 0.02
    }

    aplicarRendimento() {
       this.saldoInicial += this.saldoInicial * this.rendimentoMensal
       return `Rendimento aplicado! Novo saldo: R$${this.saldoInicial.toFixed(2)}`;
    }
}

const cp = new contapoupanca('Wallace poupança', 100)
console.log(cp.aplicarRendimento())
// não preciso chamar o metodo super.sacar(valor) na classe contaPoupanca uma vez que usando o extends já se herda o metodo sacar e só faria um metodo sacar na classe poupanca se eu fosse sobreescreve-la.
console.log(cp.sacar(50))