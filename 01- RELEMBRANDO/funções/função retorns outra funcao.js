// Função para criar um multiplicador(outra função que multiplica os parametros)
const criarMultiplicador = (fator) => {
    return (numero) => numero * fator;
}

// Criando funções específicas a partir da função fábrica
const dobrar = criarMultiplicador(2);
console.log(dobrar(5))
const triplicar = criarMultiplicador(3);
console.log(triplicar(4)); // 12

// Função responsavel por criar um contador
const contador = () => {
    let count = 0
    return () => {
        count += 1
        return count
    }
}

const c1 = contador();
console.log(c1()); // 1
console.log(c1()); // 2

const c2 = contador();
console.log(c2()); // 1


function armazenar() {
    const armazenamento = {}; // objeto privado dentro da closure

    // função que pode guardar ou recuperar valores
    return function (chave, valor) {
        if (valor !== undefined) {
            // se valor foi passado, armazena
            armazenamento[chave] = valor;
        }
        // retorna o valor armazenado ou mensagem de erro
        return armazenamento[chave] !== undefined ? armazenamento[chave] : "Chave não encontrada";
    };
}

const cache = armazenar();

cache('nome', 'Wallace');      // armazena 'nome'
console.log(cache('nome'));     // retorna 'Wallace'
console.log(cache('idade'));    // retorna 'Chave não encontrada'

function criarCumprimento(saudacao) {
    return (nome) => console.log(`${saudacao}, ${nome}`)
}

const bomDia = criarCumprimento("Bom dia");
bomDia("Wallace"); // Bom dia, Wallace

const boaTarde = criarCumprimento("Boa tarde");
boaTarde("João"); // Boa tarde, João

// Função que recebe o status da situação sendo erro ou sucesso
function criarMensagemAutomatica(status) {
    // função sendo retornada para exibir a mensagem em cada caso de situação do status
    return (mensagem) => {
        console.log(`[${status.toUpperCase()}]: ${mensagem}`);
    };
}

const erro = criarMensagemAutomatica("erro");
erro("Usuário não encontrado");

const sucesso = criarMensagemAutomatica("sucesso");
sucesso("Cadastro realizado com sucesso");

function criarValidadorDeNota(minima) {
    return (nota) => {
        console.log(nota >= minima ? "Aprovado" : "Reprovado");
    }
}

const validarNota7 = criarValidadorDeNota(7);
validarNota7(8); // Aprovado
validarNota7(5); // Reprovado

const validarNota5 = criarValidadorDeNota(5);
validarNota5(4); // Reprovado