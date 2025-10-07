const produto = {
    _preco: 50,

    get preco() {
        return `R$${this._preco.toFixed(2)}`
    }
}

console.log(produto.preco) // R$50.00

const usuario = {
    _senha: "",

    set senha(senhaInserida) {
        if(senhaInserida.length < 6 ) {
            console.log("Senha muito curta!")
        } else {
            this._senha = senhaInserida
            console.log('Senha salva com sucesso!')
        }
    }
}

usuario.senha = "123"; // Senha muito curta!
usuario.senha = "123456"; // senha salva com sucesso

const pessoa = {
    _nome: "Wallace",
    _sobreNome: 'Sá',

    get nomeCompleto() {
        return `${this._nome} ${this._sobreNome}`
    },

    set nomeCompleto(nomeInserido) {
        const partes = nomeInserido.split(' ')
        this._nome = partes[0],
        this._sobreNome = partes[1]
    }
}
 
pessoa.nomeCompleto = "Wallace Almeida";
console.log(pessoa.nomeCompleto); // Wallace Almeida

