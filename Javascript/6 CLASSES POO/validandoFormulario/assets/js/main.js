class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const camposValidos = this.camposSaoValidos()
        const senhasValidas = this.senhasSaoValidas()

        if(camposValidos && senhasValidas) {
            alert('Formulário enviado com sucesso!')
            this.formulario.submit()
        }
    }

    camposSaoValidos() {
        let valid = true

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove()
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerHTML
            if (!campo.value) {
                this.criaErro(campo, `Campo "${label}" não pode estar em branco.`)
                valid = false
            }

            if (campo.classList.contains('cpf')) {
                if (!this.validandoCPF(campo)) valid = false
            }

            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false
            }
        }
        return valid
    }

    validaUsuario(campo) {
        const usuario = campo.value
        let valid = true

        if (!usuario.match(/^[\p{L}\p{N}]{3,20}$/u)) {
            this.criaErro(campo, 'Usuário só pode conter letras e/ou números')
            this.criaErro(campo, 'Usuário deve ter entre 3 e 12 caracteres')
            valid = false
        }

        return valid
    }

    validandoCPF(campo) {
        const cpf = new CPF(campo.value)

        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido')
            return false
        }

        return true
    }

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

        return valid
    }

    criaErro(campo, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div)
    }
}


const valida = new ValidaFormulario()
