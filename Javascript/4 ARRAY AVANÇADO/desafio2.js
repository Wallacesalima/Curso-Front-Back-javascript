const alunos = [
    { nome: "Ana", notas: [8, 7, 9] },
    { nome: "Carlos", notas: [5, 6, 4] },
    { nome: "Beatriz", notas: [10, 9, 10] },
    { nome: "Diego", notas: [7, 8, 6] },
    { nome: "Fernanda", notas: [4, 5, 6] }
];


// reduce → calcule a média geral da turma.

alunos.forEach(aluno => {
    const notas = aluno.notas

    const soma = notas.reduce((ac, nota) => ac + nota, 0)

    aluno.media = soma / notas.length

    console.log(`${aluno.nome} - Média: ${aluno.media.toFixed(2)}`);
})

const aprovados = alunos.filter(aluno =>
    aluno.media >= 7)

console.log(aprovados)

const nomeMaisculo = alunos.map(aluno => aluno.nome.toUpperCase())

console.log(nomeMaisculo)

const mediaGeral = alunos.reduce((ac, aluno) => ac + aluno.media, 0) / alunos.length;


console.log(mediaGeral)

const novoAluno = { nome: "Mariana", notas: [9, 8, 9] };
const alunosAtualizado = [...alunos, novoAluno]; // ou alunos.concat(novoAluno)


aprovados.sort((a, b) => b.media - a.media)
const ranking = aprovados.map(aluno => ({
    nome: aluno.nome,
    media: aluno.media.toFixed(2)
}));

console.log(ranking)



