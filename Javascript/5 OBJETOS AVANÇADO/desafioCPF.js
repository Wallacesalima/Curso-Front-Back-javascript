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

    let primeiroDigito = (11 - (multiplicaCpf % 11));
    primeiroDigito = primeiroDigito > 9 ? 0 : primeiroDigito;


    const cpfComUmdigito = [...cpf.slice(0, 9)]
    cpfComUmdigito.push(primeiroDigito)

    const multiplicaCpfComUmDigito = cpfComUmdigito.reduce((ac, digito, i) => {
        const multiplicadores = 11 - i
        return ac + Number(digito) * multiplicadores
    }, 0)

    let segundoDigito = (11 - (multiplicaCpfComUmDigito % 11));
    segundoDigito = segundoDigito > 9 ? 0 : segundoDigito;


    const cpfCompleto = [...cpfComUmdigito]
    cpfCompleto.push(segundoDigito)


    if (cpfCompleto.join('') === cpf.join('')) {
        console.log("CPF Válido ✅");
    } else {
        console.log("CPF Inválido ❌");
    }


    return cpfCompleto.join('') === cpf.join('');
}




validaCPF('705.484.450-52')