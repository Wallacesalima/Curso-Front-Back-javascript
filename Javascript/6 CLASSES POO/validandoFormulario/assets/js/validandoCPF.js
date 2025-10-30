class CPF {
    constructor(cpfEnviado) {
        this.cpfEnviado = cpfEnviado // Armazena o CPF enviado
    }

    // Retorna o CPF apenas com números (remove pontos e traços)
    get cpfLimpo() {
        return this.cpfEnviado.replace(/\D+/g, '')
    }

    // Verifica se o CPF é uma sequência repetida (ex: 111.111.111-11)
    isSequencia() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    }

    // Calcula o dígito verificador de um CPF parcial
    criaDigito(cpfParcial) {
        const cpfArray = Array.from(cpfParcial);
        let regressivo = cpfArray.length + 1;
        const total = cpfArray.reduce((ac, val) => {
            ac += regressivo * Number(val); // multiplica e acumula
            regressivo--; // decrementa a cada iteração
            return ac;
        }, 0);

        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }

    // Gera o CPF completo com os dois dígitos verificadores
    get novoCpf() {
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.criaDigito(cpfParcial);
        const digito2 = this.criaDigito(cpfParcial + digito1);

        return cpfParcial + digito1 + digito2;
    }

    // Valida o CPF verificando formato, sequência e dígitos
    valida() {
        if (typeof this.cpfLimpo === 'undefined') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.isSequencia()) return false;

        return this.novoCpf === this.cpfLimpo;
    }

    // Exibe mensagem de validação no console
    mensagem() {
        console.log(this.valida() ? 'CPF válido' : 'CPF inválido');
    }
}

// const cpf = new CPF('070.987.720-03');
// cpf.mensagem() // Chama método para mostrar resultado
