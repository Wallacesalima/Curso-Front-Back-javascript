const validaCPF = (cpf) => {
    cpf = cpf.replace(/\D+/g, '')

    if (cpf.length !== 11) {
        console.log('CPF Inválido.')
        return
    }

    cpf = Array.from(cpf)

    const primeiroDigito = cpf.slice(0, 9).map(digito => digito).reduce((ac, digito) => {
        
        for (let i = 0; i < cpf.length; i++) {
            ac = multiplicadores * digito
        }
        let multiplicadores = (cpf.length + 1 - i)

        return ac
    }, 0)



    // console.log(cpf)
    console.log(primeiroDigito)
    console.log(multiplicadores)
}

validaCPF('931.254.220-60')