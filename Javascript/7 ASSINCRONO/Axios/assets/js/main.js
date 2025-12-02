fetch('pessoas.json')
    .then(resposta => resposta.json())
    .then(text => {
       const nomes = text.map(text => text.idade)
       carregaPagina(nomes)
    })

    function carregaPagina(html) {
        const resultado = document.querySelector('.resultado')
        resultado.innerHTML = html
    }