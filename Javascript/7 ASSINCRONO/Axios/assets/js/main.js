// fetch('pessoas.json')
//     .then(resposta => resposta.json())
//     .then(pessoas => carregaPagina(pessoas))

axios('pessoas.json')
    .then(resposta => carregaPagina(resposta.data))

function carregaPagina(json) {
    const table = document.createElement('table')

    let td = document.createElement('td')
    td.innerHTML = `<p><strong>NOMES</strong>`
    table.appendChild(td)

    let td1 = document.createElement('td')
    td1.innerHTML = `<p><strong>IDADES</strong>`
    table.appendChild(td1)

    let td2 = document.createElement('td')
    td2.innerHTML = `<p><strong>SALARIOS</strong>`
    table.appendChild(td2)


    json.sort((a, b) => a.salario - b.salario)



    for (let pessoa of json) {


        const tr = document.createElement('tr')


        let td = document.createElement('td')
        td.innerHTML = pessoa.nome
        tr.appendChild(td)


        let td1 = document.createElement('td')
        td1.innerHTML = pessoa.idade
        tr.appendChild(td1)

        let td2 = document.createElement('td')

        const salario = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(Number(pessoa.salario));

        td2.innerHTML = salario
        tr.appendChild(td2)

        table.appendChild(tr)
    }

    const resultado = document.querySelector('.resultado')
    resultado.appendChild(table)
}
