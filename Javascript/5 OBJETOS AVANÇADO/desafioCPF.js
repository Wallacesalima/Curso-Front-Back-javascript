// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5xa
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/


// função responsavel por validar o CPF 
function ValidaCPF(cpfEnviado) {
    // Criando a propriedade cpfLimpo que será acessada via getter.
    // Sempre que cpfLimpo for chamado, ele pega cpfEnviado, remove os caracteres não numéricos (regex com replace)
    // e retorna o CPF somente com os dígitos (sem pontos e traços).

    // enumerable: true → faz a propriedade cpfLimpo aparecer em laços (for...in, Object.keys)
    // enumerable: false → a propriedade fica "oculta" nesses laços, mas ainda pode ser acessada diretamente.

    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}


// estou adicionando ao prototype do validaCPF um metodo chamdo valida
ValidaCPF.prototype.valida = function () {
    // Verificações para saber se o dado fornecido é realmete um cpf valido
    // Verifica em sequência:
    // 1. Se o CPF é undefined
    // 2. Se possui exatamente 11 caracteres numéricos
    // 3. Se não é uma sequência repetida (ex: 11111111111)

    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    // Por meio do slice está tirando os 2 últimos números do cpflimpo
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    // usando o metodo cria digito para fazer as contas e obter o primeiro digito do cpf 
    const digito1 = this.criaDigito(cpfParcial);
    // usando o metodo cria digito para fazer as contas e obter o segundo digito do cpf 
    const digito2 = this.criaDigito(cpfParcial + digito1);

    // Concatena os dois dígitos calculados ao cpfParcial, formando o novoCpf
    const novoCpf = cpfParcial + digito1 + digito2;

    // Verifica se o novoCpf gerado é idêntico ao cpfLimpo original
    return novoCpf === this.cpfLimpo;

};

// Cria um método no prototype para calcular cada dígito verificador do CPF
ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    // Transforma a string cpfParcial em um array de caracteres
    const cpfArray = Array.from(cpfParcial);

    // Variável de controle usada como multiplicador regressivo (ex: 10, 9, 8, ...)
    let regressivo = cpfArray.length + 1;

    // Soma o resultado das multiplicações de cada dígito pelo valor regressivo
    const total = cpfArray.reduce((ac, val) => {
        ac += regressivo * Number(val); // multiplica e acumula
        regressivo--; // decrementa o multiplicador a cada iteração
        return ac; // retorna o acumulado
    }, 0);

    // Calcula o dígito: 11 menos o resto da divisão
    const digito = 11 - (total % 11);

    // Se o resultado for maior que 9, retorna '0', senão retorna o próprio dígito
    return digito > 9 ? '0' : String(digito);
};

// Método para verificar se o CPF é uma sequência de dígitos repetidos (ex: 11111111111)

ValidaCPF.prototype.isSequencia = function () {
   // Cria uma string repetindo o primeiro dígito de cpfLimpo pelo comprimento total

    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);

    // Retorna true se todo o CPF for igual ao dígito repetido (CPF inválido), senão false

    return sequencia === this.cpfLimpo;
};

// Instancia o objeto ValidaCPF com o CPF a ser verificado
const cpf = new ValidaCPF('070.987.720-03');

// Exibe no console se o CPF é válido ou inválido

if (cpf.valida()) {
    console.log('Cpf válido');
} else {
    console.log('Cpf inválido');
}
