// Classe responsável pela validação do formulário
class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        if (!this.formulario) return;
        this.eventos()
    }

    // Captura o evento de submit e direciona para handleSubmit
    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    // Impede o envio padrão e só envia se os campos forem válidos
    handleSubmit(e) {
        e.preventDefault()
        const camposValidos = this.camposSaoValidos()
        const senhasValidas = this.senhasSaoValidas()

        if (camposValidos && senhasValidas) {
            alert('Formulário enviado com sucesso!')
            this.formulario.submit()
        }
    }

    // Valida os campos com base nas regras definidas
    camposSaoValidos() {
        let valid = true

        // Remove mensagens de erro anteriores
        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove()
        }

        // Percorre todos os campos com a classe 'validar'
        for (let campo of this.formulario.querySelectorAll('.validar')) {
            // seleciona o elemento irmão anterior do input 'campo' ou seja seleciona o label e pega o innerHTML do mesmo
            const label = campo.previousElementSibling.innerHTML

            // Verifica campos vazios
            if (!campo.value) {
                this.criaErro(campo, `Campo "${label}" não pode estar em branco.`)
                valid = false
            }

            // Validação específica para CPF
            if (campo.classList.contains('cpf')) {
                if (!this.validandoCPF(campo)) valid = false
            }

            // Validação específica para nome de usuário
            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false
            }

            if (valid) {
                campo.classList.add('sucesso')
            }
        }
        return valid
    }

    // Valida o nome de usuário (somente letras/números, 3 a 12 caracteres)
    validaUsuario(campo) {
        const usuario = campo.value
        let valid = true

        // verifica se o usuario possui algum caracter que não seja letras e números
        if (!usuario.match(/^[\p{L}\p{N}]+$/u)) {
            this.criaErro(campo, 'Usuário só pode conter letras e/ou números')
            valid = false
        }

        // verifica se está entre 3 e 12 caracteres
        if (usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário deve ter entre 3 e 12 caracteres')
            valid = false
        }

        if (valid) {
            campo.classList.add('sucesso')
        }

        return valid
    }

    // Valida o CPF utilizando uma classe auxiliar
    validandoCPF(campo) {
        let valid = true
        const cpf = new CPF(campo.value)

        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido')
            valid = false
            return false
        }
        if (valid) {
            campo.classList.add('sucesso')
        }

        return true
    }

    // Valida senha e repetição
    senhasSaoValidas() {
        let valid = true

        const senha = this.formulario.querySelector('.senha')
        const repetirSenha = this.formulario.querySelector('.repetir_senha')

        const entradaSenha = senha.value

        if (entradaSenha.length < 6 || entradaSenha.length > 12) {
            this.criaErro(senha, 'Senha precisa ter entre 6 e 12 caracteres')
            valid = false
        }

        if (senha.value !== repetirSenha.value) {
            this.criaErro(senha, 'Senha e repetir senha devem ser iguais.')
            this.criaErro(repetirSenha, 'Senha e repetir senha devem ser iguais.')
            valid = false
        }

        if (valid) {
            senha.classList.add('sucesso')
            repetirSenha.classList.add('sucesso')
        }


        return valid
    }

    // metodo para criar o erro
    criaErro(campo, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        // adidiona a div abaixo dos inputs 
        campo.insertAdjacentElement('afterend', div)
    }
}

// Inicializa a validação
const valida = new ValidaFormulario()
