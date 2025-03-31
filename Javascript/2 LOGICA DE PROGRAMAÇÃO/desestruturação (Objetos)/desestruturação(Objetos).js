// 📌 1. Desestruturação básica de objetos
const pessoa1 = {
    nome1: 'João',
    idade1: 25,
    cidade1: 'São Paulo'
};

const { nome1, idade1, cidade1 } = pessoa1;
console.log('Desestruturação básica:');
console.log(nome1);   // João
console.log(idade1);  // 25
console.log(cidade1); // São Paulo
console.log('---');

// 📌 2. Desestruturação com nomes diferentes
const pessoa2 = {
    nome: 'Maria',
    idade: 30,
    cidade: 'Rio de Janeiro'
};

const { nome: nomePessoa, idade: idadePessoa, cidade: cidadePessoa } = pessoa2;
console.log('Desestruturação com nomes diferentes:');
console.log(nomePessoa);   // Maria
console.log(idadePessoa);  // 30
console.log(cidadePessoa); // Rio de Janeiro
console.log('---');

// 📌 3. Definindo valores padrão
const pessoa3 = {
    nome3: 'Pedro',
    idade3: 22
};

const { nome3, idade3, cidade3 = 'Desconhecida' } = pessoa3;
console.log('Desestruturação com valores padrão:');
console.log(nome3);   // Pedro
console.log(idade3);  // 22
console.log(cidade3); // Desconhecida
console.log('---');

// 📌 4. Desestruturação de objetos dentro de objetos
const pessoa4 = {
    nome4: 'Carlos',
    endereco: {
        rua: 'Rua 1',
        numero: 123,
        cidade: 'Fortaleza'
    }
};

const { nome4, endereco: { rua, numero, cidade } } = pessoa4;
console.log('Desestruturação de objetos dentro de objetos:');
console.log(nome4);   // Carlos
console.log(rua);    // Rua 1
console.log(numero); // 123
console.log(cidade); // Fortaleza
console.log('---');

// 📌 5. Rest operator para pegar o restante das propriedades
const pessoa5 = {
    nome: 'Ana',
    idade: 28,
    cidade: 'Curitiba',
    profissao: 'Engenheira'
};

const { nome, idade, ...resto } = pessoa5;
console.log('Rest operator para pegar o restante:');
console.log(nome);  // Ana
console.log(idade); // 28
console.log(resto); // { cidade: 'Curitiba', profissao: 'Engenheira' }
console.log('---');

// 📌 6. Desestruturação dentro de funções
const pessoa6 = {
    nome: 'Luiza',
    idade: 35,
    cidade: 'Salvador'
};

function exibirPessoa({ nome, idade, cidade }) {
    console.log(`Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`);
}

console.log('Desestruturação dentro de funções:');
exibirPessoa(pessoa6); // Nome: Luiza, Idade: 35, Cidade: Salvador
