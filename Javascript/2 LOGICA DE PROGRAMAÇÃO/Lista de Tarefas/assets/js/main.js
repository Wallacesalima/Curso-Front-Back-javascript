const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criarLi() {
    const li = document.createElement('li')
    return li
}

function criarTarefa(textInput) {
    const li = criarLi()
    tarefas.appendChild(li)
    li.innerText = textInput
    limpaInput()
    criaBotaoApagar(li)
    salvarTarefas()
}

function limpaInput() {
    inputTarefa.value = ''
    inputTarefa.focus()
}

function criaBotaoApagar(li) {
    li.innerText += '  '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerHTML = '❌'
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'Apagar essa tarefa')
    li.appendChild(botaoApagar)
}

function apagarTarefa() {
    document.addEventListener('click', function (e) {

        const el = e.target

        if (el.classList.contains('apagar')) {
            el.parentElement.remove()
            salvarTarefas()
        }
    })

}

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('❌', '').trim()
        listaDeTarefas.push(tarefaTexto)
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}

function addTarefaSalvas() {
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)

    for (let tarefa of listaDeTarefas) {
        criarTarefa(tarefa)
    }
}

btnTarefa.addEventListener('click', function (e) {
    inputTarefa.value === '' ? alert('digite uma tarefa') : criarTarefa(inputTarefa.value); limpaInput()
})


inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        inputTarefa.value === '' ? alert('digite uma tarefa') : criarTarefa(inputTarefa.value), limpaInput()
    }
})

addTarefaSalvas()
apagarTarefa()