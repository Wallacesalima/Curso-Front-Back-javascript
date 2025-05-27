function criaCalculadora() {
    return {
        // Seleciona onde o 'td' do html onde ficará os valores selecionados e resultados das contas.
        display: document.querySelector('.display'),

        // Metodo que inicia os demais metodos
        inicia() {
            this.cliqueBotoes();
            this.pressionaBackSpace();
            this.pressionaEnter();

        },

        btnParaDisplay(valor) {
            this.display.value += valor
        },

        clearDisplay() {
            this.display.value = ''
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaConta() {
            let conta = this.display.value

            try {
                conta = eval(conta)

                if (!conta) {
                    alert('Conta inválida')
                    return
                }

                this.display.value = String(conta)
            } catch (e) {
                alert('Conta inválida')
                return
            }
        },

        // Pega quais os botoes são clicados por meio da captura do evento e pegando por meio do target oque foi clicado e jogando em uma constante
        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;
                // Condições para cada situação a depender de qual classe esse elemento(el) possui.
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm()
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta()
                }

                this.display.focus()
            })
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    this.realizaConta();
                }
            });
        },

        pressionaBackSpace() {
            this.display.addEventListener('keydown', e => {
                if (e.keyCode === 8) {
                    e.preventDefault()
                    this.apagaUm()
                }
            })
        }
    }
}


const calculadora = criaCalculadora()
calculadora.inicia()