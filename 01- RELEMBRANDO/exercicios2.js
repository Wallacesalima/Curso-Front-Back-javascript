// Selecionando input, lista e botões pelos seus respectilvos ids

const input = document.getElementById('nomeInput')
const adicionarBtn = document.getElementById('adicionarBtn')
const removerUltimoBtn = document.getElementById('removerUltimoBtn')
const lista = document.getElementById('lista')

// Função responsavel por adicionar o evento de destacar os itens da lista quando clicados.
function destacar(li) {
    li.addEventListener('click', () => {
        li.classList.toggle('destacado')
    })
}

// Adicionado itens a lista de acordo com oque é digitado no input por meio de evento de clique no botão 'adicionar'
// limpando o input após adicionar o item e também usando a função destacar
adicionarBtn.addEventListener('click', () => {
    if (input.value === '') {
        alert('Digite um nome');
        return; // impede o resto do código
    }
    const li = document.createElement('li')
    lista.appendChild(li)
    li.innerText += `${input.value}`
    input.value = ''
    destacar(li)
})

// removendo o ultimo item da lista
removerUltimoBtn.addEventListener('click', () => {
    const ultimoItem = lista.lastElementChild;
    if (ultimoItem) {
        lista.removeChild(ultimoItem);
    }
})




