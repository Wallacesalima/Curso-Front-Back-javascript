const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' },
]

const container = document.querySelector('.container') // selecionando a classe container
const div = document.createElement('div') // criando uma div

for (let i = 0; i < elementos.length; i++) {
    const { tag, texto } = elementos[i] // Pegando tag e texto
    const elementosHtml = document.createElement(tag) // Criando o elemento
    elementosHtml.textContent = texto // Adicionando o texto
    div.appendChild(elementosHtml) // Inserindo na div criada
}

container.appendChild(div) // adicionando a div dentro do container
