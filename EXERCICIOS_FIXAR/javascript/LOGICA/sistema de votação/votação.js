const container = document.querySelector('.container')

// Título
const titulo = document.createElement('h2')
titulo.innerText = 'Sistema de Votação'
container.appendChild(titulo)

// Nome do eleitor
const labelEleitor = document.createElement('label')
labelEleitor.innerText = "Seu nome"
container.appendChild(labelEleitor)

const inputEleitor = document.createElement('input')
inputEleitor.type = 'text'
container.appendChild(inputEleitor)

// Escolha do candidato
const labelCandidato = document.createElement('label')
labelCandidato.innerText = " Escolha um candidato"
container.appendChild(labelCandidato)

const selectCandidato = document.createElement('select')
const candidatos = ['Ana', 'Bruno', 'Carlos']
for (let nome of candidatos) {
    const option = document.createElement('option')
    option.value = nome.toLowerCase()
    option.innerText = nome
    selectCandidato.appendChild(option)
}

container.appendChild(selectCandidato)

// Botão 'votar'
const botaoVotar = document.createElement('button')
botaoVotar.innerText = 'Votar'
container.appendChild(botaoVotar)

// Botão 'resultado'
const botaoResultado = document.createElement('button')
botaoResultado.innerText = 'Resultado'
container.appendChild(botaoResultado)

// Parágrafo de feedback
const feedback = document.createElement('p')
container.appendChild(feedback)

// Armazenar os votos
const votos = []

botaoVotar.addEventListener('click', () => {
    const eleitor = inputEleitor.value.trim()
    const candidato = selectCandidato.value

    if (!eleitor) {
        feedback.innerText = 'Nome não pode estar vazio'
    } else {
        votos.push(eleitor, candidato)
        feedback.innerText = `Obrigado por votar, ${eleitor} !`
    }
})

botaoResultado.addEventListener('click', () => {

    let contadorAna = 0
    let candidataAna = 'Ana'.toLowerCase()

    for (let i = 0; i < 100; i++) {
        if (candidataAna === votos[i]) {
            contadorAna++
        }
    }

    let contadorBruno = 0
    let candidatoBruno = 'Bruno'.toLowerCase()

    for (let i = 0; i < 100; i++) {
        if (candidatoBruno === votos[i]) {
            contadorBruno++
        }
    }

    let contadorCarlos = 0
    let candidatoCarlos = 'Carlos'.toLowerCase()

    for (let i = 0; i < 100; i++) {
        if (candidatoCarlos === votos[i]) {
            contadorCarlos++
        }
    }

    feedback.innerHTML = `${candidataAna} - ${contadorAna} voto(s)<br> ${candidatoBruno} - ${contadorBruno} voto(s)<br> ${candidatoCarlos} - ${contadorCarlos} voto(s)`

    if(contadorAna > contadorBruno && contadorCarlos) {
        feedback.innerHtml +=  `Ana está ganhando`
    } else if(contadorBruno > contadorAna && contadorCarlos) {
        feedback.innerHtml +=  `Bruno está ganhando`
    } else if(contadorCarlos > contadorBruno && contadorAna) {
        feedback.innerHtml +=  ` Carlos está ganhando`
    } else {
        feedback.innerHtml +=  `A disputa está empatada`
    }
})


