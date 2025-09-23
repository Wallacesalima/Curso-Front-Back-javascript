// Função construtora - usada para criar novos objetos "Pessoa"

function Pessoa(nome, idade) {
    // Cada novo objeto terá essas propriedades próprias
    this.nome = nome;
    this.idade = idade

    // Se eu colocasse o método aqui dentro, cada objeto teria
    // sua própria cópia, ocupando mais memória.
    // this.falar = function() {
    //   console.log(`Oi, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    // }
}

// Adicionando um método ao PROTOTYPE da função Pessoa
// Isso significa que TODOS os objetos criados com "new Pessoa"
// vão ter acesso a esse método, mas sem duplicar na memória.

Pessoa.prototype.falar = function () {
    console.log(`Oi, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
}

// Criando instâncias (objetos) a partir da função construtora
const p1 = new Pessoa("Ana", 25);
const p2 = new Pessoa("Carlos", 30);

// Ambos conseguem acessar o método "falar"
// porque o JavaScript procura primeiro dentro do objeto.
// Se não encontra, ele olha no PROTOTYPE.
p1.falar(); // Oi, meu nome é Ana e tenho 25 anos.
p2.falar(); // Oi, meu nome é Carlos e tenho 30 anos.