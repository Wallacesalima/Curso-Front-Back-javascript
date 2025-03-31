// FORMA USANDO SWITCH
//const dataNoHtml = document.querySelector('.dataHtml')

// function zeroAEsquerda(num) {
//     return num >= 10 ? num : `0${num}`;
// }

// function getDiaSemanaTexto(diaSemana) {
//     switch (diaSemana) {
//         case 0: return 'Domingo';
//         case 1: return 'Segunda-feira';
//         case 2: return 'Terça-feira';
//         case 3: return 'Quarta-feira';
//         case 4: return 'Quinta-feira';
//         case 5: return 'Sexta-feira';
//         case 6: return 'Sábado';
//         default: return '';
//     }
// }

// function getMesTexto(mes) {
//     switch (mes) {
//         case 1: return 'Janeiro';
//         case 2: return 'Fevereiro';
//         case 3: return 'Março';
//         case 4: return 'Abril';
//         case 5: return 'Maio';
//         case 6: return 'Junho';
//         case 7: return 'Julho';
//         case 8: return 'Agosto';
//         case 9: return 'Setembro';
//         case 10: return 'Outubro';
//         case 11: return 'Novembro';
//         case 12: return 'Dezembro';
//         default: return '';
//     }
// }

// function createDate() {
//     const data = new Date();

//     const diaSemanaTexto = getDiaSemanaTexto(data.getDay());

//     const mesTexto = getMesTexto(data.getMonth() + 1); // Aqui somamos 1 ao mês

//     const dia = data.getDate();
//     const ano = data.getFullYear();
//     const hora = zeroAEsquerda(data.getHours());
//     const mins = zeroAEsquerda(data.getMinutes());

//     dataNoHtml.innerHTML = `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano}<br/> ${hora}:${mins}`;
// }

// FORMA USANDO ARRAY
// const dataNoHtml = document.querySelector('.dataHtml');

// function zeroAEsquerda(num) {
//     return num >= 10 ? num : `0${num}`;
// }

// const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

// const mesesAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

// function createDate() {
//     const data = new Date();

//     const diaSemanaTexto = diasSemana[data.getDay()];
//     const mesTexto = mesesAno[data.getMonth()]; // Agora não precisa mais somar 1

//     const dia = data.getDate();
//     const ano = data.getFullYear();
//     const hora = zeroAEsquerda(data.getHours());
//     const mins = zeroAEsquerda(data.getMinutes());

//     dataNoHtml.innerHTML = `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano}<br/> ${hora}:${mins}`;
// }

// // Atualiza a cada 1 segundo
// setInterval(createDate, 1000);
// createDate();


// FORMA USANDO O TOLOCALESTRING
// Criando função que cria a data
function createDate() {
    const dataNoHtml = document.querySelector('.dataHtml')
    const data = new Date();
    dataNoHtml.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });
}
// Atualiza a cada 1 segundo
setInterval(createDate, 1000);
createDate()


