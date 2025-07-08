function criarListaDeTarefas(callback) {
    const tarefas = []

    function adicionarTarefas(tarefa) {
        if (tarefa !== undefined) {
            tarefas.push(tarefa)
            callback(`Tarefa adicionada: ${tarefa}`)
        } else {
            callback(`Erro ao adicionar tarefa!`)
        }
    }

    function listar() {
        console.log('Tarefas:', tarefas)
    }

    function removerTarefas(tarefa) {
        let indice = tarefas.indexOf(tarefa)
        if (indice !== -1) {
            tarefas.splice(indice, 1)
            callback(`Tarefa removida: ${tarefa}`);
        } else {
            callback(`Tarefa não encontrada: ${tarefa}`);
        }

    }
    return { adicionarTarefas, listar, removerTarefas }
}

const lista = criarListaDeTarefas((msg) => console.log(`[LOG]: ${msg}`));

lista.adicionarTarefas("Estudar funções");
lista.adicionarTarefas("Praticar DOM");
lista.listar();

lista.removerTarefas("Estudar funções");
lista.listar();