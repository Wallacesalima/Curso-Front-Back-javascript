const validaCPF = (cpf) => {
    cpf = cpf.replace(/\D+/g, '')

    if (cpf.length !== 11) {
        console.log('CPF Inválido.')
        return
    }

    cpf = Array.from(cpf)

    const multiplicaCpf = cpf.slice(0, 9).reduce((ac, digito, i) => {
        const multiplicadores = 10 - i
        return ac + Number(digito) * multiplicadores

    }, 0)

    const primeiroDigito = 11 - (multiplicaCpf % 11)
    console.log(primeiroDigito)

    const cpfComUmdigito = [...cpf.slice(0, 9)]
    cpfComUmdigito.push(primeiroDigito)

    const multiplicaCpfComUmDigito = cpfComUmdigito.reduce((ac, digito, i) => {
        const multiplicadores = 11 - i
        return ac + Number(digito) * multiplicadores
    }, 0)

     const segundoDigito = 11 - (multiplicaCpfComUmDigito % 11)
    console.log(segundoDigito)

    const cpfCompleto = [...cpfComUmdigito]
    cpfCompleto.push(segundoDigito)

    console.log(cpf)
}




validaCPF('705.484.450-52')