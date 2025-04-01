const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' },
]
const section = document.querySelector('.container')

const {tag} = elementos[0]
const paragrafo = document.createElement(tag);
paragrafo.textContent = 'Este é um parágrafo criado dinamicamente!';
section.appendChild(paragrafo);
console.log(tag)
