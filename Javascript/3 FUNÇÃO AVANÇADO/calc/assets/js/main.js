// Cria uma função responsável por gerar a calculadora, retornando todos os métodos necessários
function criaCalculadora() {
    return {
        // Seleciona o input do HTML onde ficarão os valores digitados e o resultado das contas
        display: document.querySelector('.display'),

        // Método que inicializa os outros métodos
        inicia() {
            this.cliqueBotoes();
            this.pressionaBackSpace();
            this.pressionaEnter();
        },

        // Método que adiciona o valor recebido como parâmetro ao conteúdo atual do display
        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        // Método responsável por apagar todo o conteúdo do display
        clearDisplay() {
            this.display.value = '';
        },

        // Método que apaga o último caractere do display usando slice(0, -1)
        // slice(0, -1) → começa do índice 0 e vai até o penúltimo caractere, retirando o último
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        // Método responsável por realizar o cálculo da expressão no display
        realizaConta() {
            let conta = this.display.value;

            // O eval interpreta a string como código JavaScript. Ex: "5+5" vira 10.
            // ⚠️ ATENÇÃO: usar eval é perigoso se não houver controle do que é digitado
            try {
                conta = eval(conta);

                if (!conta && conta !== 0) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            } catch (e) {
                alert('Conta inválida');
                return;
            }
        },

        // Método que detecta o clique nos botões da calculadora e executa as ações de acordo com a classe do botão
        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                this.display.focus();
            });
        },

        // Permite usar a tecla Enter para executar o cálculo
        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.key === 'Enter') {
                    this.realizaConta();
                }
            });
        },

        // Permite usar a tecla Backspace para apagar o último caractere
        pressionaBackSpace() {
            this.display.addEventListener('keydown', e => {
                if (e.key === 'Backspace') {
                    e.preventDefault();
                    this.apagaUm();
                }
            });
        }
    };
}

// Cria a calculadora e chama o método que a inicializa
const calculadora = criaCalculadora();
calculadora.inicia();
