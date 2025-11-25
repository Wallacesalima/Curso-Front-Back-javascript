function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject(`A mensagem precisa ser uma String.`)
            return
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise no tempo -> ' + tempo)
            return
        }, tempo)
    })
}

// promisse.all, promisse.race, promisse.resolve, promisse.reject

const promises = [
    // 'Primeiro valor',
    esperaAi('Promisse 1', rand(1, 5)),
    esperaAi('Promisse 2', rand(1, 5)),
    esperaAi('Promisse 3', rand(1, 5)),
    // 'Outro valor'
]

// Promise.all(promises)
//     .then(valor => console.log(valor))
//     .catch(erro => console.log(erro))

// Promise.race(promises)
//     .then(valor => console.log(valor))
//     .catch(erro => console.log(erro))

function baixaPagina() {
    const emCache = true

    if (emCache) {
        return Promise.reject('Página em cache.')
        // return Promise.resolve('Página em cache.')   
    } else {
        return esperaAi('Baixei a página.', 3000)
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log('ERRO:', e))