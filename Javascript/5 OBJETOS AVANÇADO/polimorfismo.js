// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

// metodo sacar adicionado ao prototype de 'Conta'
Conta.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

// metodo depositar adicionado ao prototype de 'Conta'
Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
}

// metodo verSaldo adicionado ao prototype de 'Conta'
Conta.prototype.verSaldo = function () {
    console.log(
        `Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`
    );
}

// Subclass - conta corrente
function ContaCorrente(agencia, conta, saldo, limite) {
    // herda propriedades da SuperClass 'Conta'
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite;
}

// herda metodos do prototype da SuperClass 'Conta'
ContaCorrente.prototype = Object.create(Conta.prototype);
// corrige a propriedade 'constructor'
ContaCorrente.prototype.constructor = ContaCorrente;

// sobrescreve o metodo sacar no prototype da subclasse 'contacorrente'
ContaCorrente.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return
    }
    
    this.saldo -= valor;
    this.verSaldo();
}

// Subclass - conta poupança
function ContaPoupanca (agencia, conta, saldo) {
    // herda propriedades da SuperClass 'Conta'
    Conta.call(this, agencia, conta, saldo)
}

// herda metodos do prototype da SuperClass 'Conta'
ContaPoupanca.prototype = Object.create(Conta.prototype);
// corrige a propriedade 'constructor'
ContaPoupanca.prototype.constructor = ContaPoupanca;

const cc = new ContaCorrente(1, 12345, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

console.log();

const cp = new ContaPoupanca(2, 54321, 0);
cp.depositar(10);
cp.sacar(10);
cp.sacar(1);



