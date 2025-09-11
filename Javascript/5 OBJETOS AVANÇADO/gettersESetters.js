 const pessoa  = {
    nome: "Wallace",
    sobrenome: "Almeida",

    // getter: lê valores
    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    },

    // setter: altera valores
    set nomeCompleto(valor) {
        const partes = valor.split(" ")
        this.nome = partes[0]
        this.sobrenome = partes[1]
    }
 }

 console.log(pessoa.nomeCompleto); // "Wallace Almeida"

 pessoa.nomeCompleto = "Carlos Silva";
console.log(pessoa.nome);      // "Carlos"
console.log(pessoa.sobrenome); // "Silva"