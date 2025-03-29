const dataNoHtml = document.querySelector('.dataHtml')

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function getDiaSemanaTexto(diaSemana) {
    switch (diaSemana) {
        case 0: return 'Domingo';
        case 1: return 'Segunda-feira';
        case 2: return 'Terça-feira';
        case 3: return 'Quarta-feira';
        case 4: return 'Quinta-feira';
        case 5: return 'Sexta-feira';
        case 6: return 'Sábado';
        default: return '';
    }
}

function getMesTexto(mes) {
    switch (mes) {
        case 1: return 'Janeiro';
        case 2: return 'Fevereiro';
        case 3: return 'Março';
        case 4: return 'Abril';
        case 5: return 'Maio';
        case 6: return 'Junho';
        case 7: return 'Julho';
        case 8: return 'Agosto';
        case 9: return 'Setembro';
        case 10: return 'Outubro';
        case 11: return 'Novembro';
        case 12: return 'Dezembro';
        default: return '';
    }
}

function main() {
    const data = new Date();

    const diaSemanaTexto = getDiaSemanaTexto(data.getDay());
    
    const mesTexto = getMesTexto(data.getMonth() + 1); // Aqui somamos 1 ao mês

    const dia = data.getDate();
    const ano = data.getFullYear();
    const hora = zeroAEsquerda(data.getHours());
    const mins = zeroAEsquerda(data.getMinutes());
    
    dataNoHtml.innerHTML = `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano}<br/> ${hora}:${mins}`;
}

// Atualiza a cada 1 segundo
setInterval(main, 1000);
main();
