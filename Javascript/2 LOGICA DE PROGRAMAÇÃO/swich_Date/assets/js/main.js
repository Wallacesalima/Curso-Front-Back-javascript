const container = document.querySelector('.container')
const dataNoHtml = container.querySelector('.dataHtml')

function zeroAEsquerda (num) {
    return num >10 ? num : `0${num}`
}

function formataData (data) {
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth() + 1) // Mês começa no zero - janeiro = 0 e dezembro = 11
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())
    const seg = zeroAEsquerda(data.getSeconds())
    // const diaSemana = data.getDay() Dia da semana começa em 0 - domindo = 0 e Sábado = 6


    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date() 
const dataBrasil = formataData(data)

dataNoHtml.innerHTML = `'Essa é a data: ${dataBrasil}`