function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(`A mensagem precisa ser uma String.`)

        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

esperaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Buscando dados da BASE', rand(1, 3))

    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Tratando dados da BASE', rand(1, 3))

    })
    .then(resposta => {
        console.log(resposta)
    })
    .then(() => {
        console.log('Exibe os dados na tela.')
    })
    .catch(e => {
        console.log('Error', e)
    })

    console.log('Isso aqui será exibido antes de qualquer promisse.')