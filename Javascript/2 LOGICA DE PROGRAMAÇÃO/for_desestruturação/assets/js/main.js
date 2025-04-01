const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' },
]

const section = document.querySelector('.container')

for (let i = 0; i < elementos.length; i++) { // Agora está correto
    const { tag, texto } = elementos[i] // Pegando tag e texto
    const elementosHtml = document.createElement(tag) // Criando o elemento
    elementosHtml.textContent = texto // Adicionando o texto
    section.appendChild(elementosHtml) // Inserindo na página
}

