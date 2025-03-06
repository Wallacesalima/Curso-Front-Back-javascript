// Função que vai envolver toda a lógica do código
function meuEscopo() {
    // Seleciona o formulário e a área de resultado no HTML
    const form = document.querySelector('.form');  // Referência ao formulário
    const resultado = document.querySelector('.resultado');  // Referência ao local onde os resultados serão mostrados

    // Array para armazenar as informações das pessoas
    const pessoas = [];

    // Função que vai ser executada quando o formulário for enviado
    function recebeEventoForm(evento) {
        evento.preventDefault(); // Previne o comportamento padrão do formulário (não recarregar a página)

        // Selecionando os campos do formulário
        const nome = form.querySelector('.nome');  // Campo para o nome
        const sobrenome = form.querySelector('.sobrenome');  // Campo para o sobrenome
        const peso = form.querySelector('.peso');  // Campo para o peso
        const altura = form.querySelector('.altura');  // Campo para a altura

        // Adicionando os dados preenchidos ao array 'pessoas'
        pessoas.push({
            nome: nome.value,  // Pegando o valor preenchido no campo de nome
            sobrenome: sobrenome.value,  // Pegando o valor preenchido no campo de sobrenome
            peso: peso.value,  // Pegando o valor preenchido no campo de peso
            altura: altura.value  // Pegando o valor preenchido no campo de altura
        });

        // Exibindo as informações preenchidas na tela (dentro da div 'resultado')
        resultado.innerHTML += `${nome.value} ${sobrenome.value}, ${peso.value}, ${altura.value}.<br>`;

        // Exibindo os dados no console para você verificar (opcional)
        console.log(pessoas);
    }

    // Adicionando o evento 'submit' ao formulário para que ele execute a função 'recebeEventoForm' ao ser enviado
    form.addEventListener('submit', recebeEventoForm);
}

// Chamando a função para que tudo aconteça quando o script rodar
meuEscopo();
