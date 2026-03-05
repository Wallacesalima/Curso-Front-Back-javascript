//Pocura os usuarios
async function seachUsers() {
      // Tenta pegar a div criar p com carregando dentro ant6es do resultado da fetch depois que a fetch retorna tudo certinho já verificado o status da requisição, apaga o result e chama a função renderUsers.
      try {
            const result = document.querySelector('.resultado')
            const usersHtml = document.createElement('p')
            usersHtml.innerHTML = 'Carregando...'
            result.appendChild(usersHtml)

            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            usersHtml.innerHTML = ''

            if (!response.ok) throw new Error('Errou')

            const json = await response.json()
            renderUsers(json)

            // se caso acontecer algum erro cai nessa parte onde apenas estou mostrando o erro no console poderia colocar no alert por exemplo ou mesmo jogar o erro na tela de ua forma mais amigavel ao usuario do sistema mas isso não foi pedido
      } catch (error) {
            console.log(error)
      }
}

// Usada para redenrizar os usuarios na tela foi chamada na função anterior
function renderUsers(json) {

      // o for pega cada user do json que veio da requisição e foi convertido em json dento dele e redenriza na pagina
      for (users of json) {
            const result = document.querySelector('.resultado')

            const usersHtml = document.createElement('p')

            usersHtml.innerHTML += `NOME - ${users.name} | EMAIL - ${users.email} | CIDADE - ${users.address.city}`

            result.appendChild(usersHtml)

      }
}

//chama as outras funções a serem executadas e trata se tiver algum erro, caso o sistema venha acrescer será bem mais util
function initialApp(json) {
      try {
            seachUsers()
      } catch (e) {
            alert('Erro ao carregar usuários', e)
      }
}

initialApp()

