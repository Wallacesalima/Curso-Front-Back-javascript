
// Seleciona o formulário e os campos de entrada (peso e altura)
const form = document.querySelector('.form')
const inputPeso = form.querySelector('.peso')
const inputAltura = form.querySelector('.altura')
const resultado = document.querySelector('.resultado');



// Função para validar as entradas do usuário
function validarEntradas() {

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    // Verifica se o peso não é um número ou está vazio
    if (isNaN(peso) || peso == '') {
        resultado.innerHTML = `Peso inválido`
        setCor(false)
        return
    }
    // Verifica se a altura não é um número ou está vazia
    if (isNaN(altura) || altura == '') {
        resultado.innerHTML = `Altura inválida`
        setCor(false)
        return
        // Se os valores forem válidos, chama a função para calcular e categorizar o IMC
    }

    setCor(true)
    categorizarImc(peso, altura)

}

function setCor(isValid) {
    if (isValid === false) {
        resultado.classList.remove('cor-positivo')
        resultado.classList.add('cor-erro')
    } else {
        resultado.classList.remove('cor-erro')
        resultado.classList.add('cor-positivo')
    }
}


function categorizarImc(peso, altura) {

    const imc = (peso / (altura * altura)).toFixed(2)

    // Classifica o IMC dentro das faixas estabelecidas
    if (imc < 18.5) {
        resultado.innerHTML = `Seu IMC é ${imc} - (Abaixo do peso)`
    } else if (imc >= 18.5 && imc < 25) {
        resultado.innerHTML = `Seu IMC é ${imc} - (Peso normal)`
    } else if (imc >= 25 && imc < 30) {
        resultado.innerHTML = `Seu IMC é ${imc} - (Sobrepeso)`
    } else if (imc >= 30 && imc < 35) {
        resultado.innerHTML = `Seu IMC é ${imc} - (Obesidade grau 1)`
    } else if (imc >= 35 && imc < 40) {
        resultado.innerHTML = `Seu IMC é ${imc} - (Obesidade grau 2)`
    } else if (imc > 40) {
        resultado.innerHTML = `Seu IMC é ${imc} - (Obesidade grau 3)`
    } else {
        console.error('Erro inesperado!') // Adiciona um log para depuração
    }
}


// Função para capturar o evento de envio do formulário
function recebeEventoForm(evento) {
    evento.preventDefault(); // Previne o comportamento padrão do formulário
    validarEntradas() // Chama a função para validar os inputs e calcular o IMC
}

// Adiciona um evento ao formulário para capturar o envio
form.addEventListener('submit', recebeEventoForm);



