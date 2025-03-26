function getDayWeekText(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            // break - poderia ser usado tambem
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda';
            // break - poderia ser usado tambem
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            // break - poderia ser usado tambem
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            // break - poderia ser usado tambem
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            // break - poderia ser usado tambem
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            // break - poderia ser usado tambem
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            // break - poderia ser usado tambem
            return diaSemanaTexto;
    }

    // return diaSemanaTexto; - seria necessario caso usasse somente o break
}

const data = new Date('1987-04-21 00:00:00')
const diaSemana = data.getDay()
const diaSemanaTexto = getDayWeekText(diaSemana)

console.log(diaSemana, diaSemanaTexto)