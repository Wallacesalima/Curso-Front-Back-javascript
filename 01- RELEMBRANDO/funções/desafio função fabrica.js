// function criarFiltroMinimo(minimo) {
//     return (valor) => valor > minimo
// }

// const filtroMaiorQue10 = criarFiltroMinimo(10);

// console.log(filtroMaiorQue10(5));  // false
// console.log(filtroMaiorQue10(15)); // true

function criarFiltroMinimo(minimo) {
    return (valor) => valor > minimo
}

const numeros = [3, 12, 7, 22, 9, 15]
const resultado = numeros.filter(criarFiltroMinimo(10))

console.log(resultado)

function criarFormatadorDeNota(minimo) {
    return (nota) => {
        if (nota >= minimo) {
            return `Nota ${nota}: atingiu o esperado`
        } else {
            return `Nota ${nota}: abaixo do esperado`
        }
    }
}

const formatador = criarFormatadorDeNota(7);
const notas = [5, 7.5, 8, 6];
const resultadoNota = notas.map(formatador);

console.log(resultadoNota);