function main() {
    const form = document.querySelector('.form')
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')

    const calcularImc = peso.value / (altura.value * altura.value)

    function recebeEventoForm(evento) {
        evento.preventDefault(); // Previne o comportamento padrão do formulário (não recarregar a página)
        console.log(calcularImc)
    }


    form.addEventListener('submit', recebeEventoForm);
}

main()