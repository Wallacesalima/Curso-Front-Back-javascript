// função construtora que cria Pessoa
function Pessoa(nome, idade) {
    // valores do objeto criado(Pessoa)
    this.nome = nome;
    this.idade = idade;
}

// adiciona ao prototype o metodo fazAniversario
Pessoa.prototype.fazAniversario = function () {
    // adiciona + 1 ao valor idade e o retorna
    this.idade++;
    return this.idade;
};

// instancia criando nova pessoa 
const joao = new Pessoa("João", 25);

// Exibe o resultado no console
console.log(joao.fazAniversario());
