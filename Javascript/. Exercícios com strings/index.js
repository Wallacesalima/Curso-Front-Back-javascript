// Solicita ao usuário que digite seu nome completo
const nome = prompt('Digite o seu nome completo:'); 

// Exibe o nome digitado na página
document.body.innerHTML = `Seu nome é: ${nome} <br/>`;

// Calcula o número de letras do nome, removendo os espaços em branco
const numLetrasNome = nome.replaceAll(' ', '').length;
document.body.innerHTML += `Seu nome tem ${numLetrasNome} letras <br/>`;

// Obtém a segunda letra do nome (índice 1, pois os índices começam do 0)
const segundaLetraNome = nome.charAt(1);
document.body.innerHTML += `A segunda letra do seu nome é: ${segundaLetraNome}<br/>`;

// Procura o primeiro índice da letra 'A' (ignora maiúsculas e minúsculas convertendo para uppercase)
const primeiroIndiceLetra = nome.toUpperCase().indexOf('A');
document.body.innerHTML += `Qual o primeiro índice da letra 'A' no seu nome? ${primeiroIndiceLetra}<br/>`;

// Procura o último índice da letra 'A' (também ignorando maiúsculas e minúsculas)
const ultimoIndiceLetra = nome.toUpperCase().lastIndexOf('A');
document.body.innerHTML += `Qual o último índice da letra 'A' no seu nome? ${ultimoIndiceLetra}<br/>`;

// Pega as três últimas letras do nome
const ultimas3Letras = nome.slice(-3);
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${ultimas3Letras}<br/>`;

// Divide o nome em palavras, separando por espaços
const palavrasDoNome = nome.split(' ');
document.body.innerHTML += `As palavras do seu nome são: ${palavrasDoNome}<br/>`;

// Converte o nome para letras maiúsculas
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br/>`;

// Converte o nome para letras minúsculas
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br/>`;
