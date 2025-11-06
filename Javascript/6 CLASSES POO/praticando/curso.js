class Curso {
    constructor(nome, duracao) {
        this.nome = nome
        this.duracao = duracao
        this.alunos = []
    }


    adicionarAluno(nomeAluno) {
        if (!this.alunos.includes(nomeAluno)) {
            this.alunos.push(nomeAluno)
        } else {
            console.log(`Error: Aluno(a) ${nomeAluno} já cadastrado!`)
        }
    }
    removerAluno(nomeAluno) {
        if (!this.alunos.includes(nomeAluno)) {
            console.log(`Error: Aluno(a) ${nomeAluno} não cadastrado!`)
        } else {
            this.alunos = this.alunos.filter(aluno => aluno !== nomeAluno)
        }
    }
    listarAlunos() {
        const lista = this.alunos.length ? this.alunos.join(', ') : 'Nenhum aluno cadastrado';
        return `Curso:${this.nome} / Duração:${this.duracaoFormatada} / Alunos:${lista}.`
    }
    get duracaoFormatada() {
        return `${this.duracao} horas.`
    }

    static infoCurso() {
        return "Cursos online são uma forma prática de estudar."
    }
}

const c1 = new Curso('JavaScript Avançado', 40)
c1.adicionarAluno('Monique')
c1.adicionarAluno('Wallace')
c1.adicionarAluno('João')
c1.adicionarAluno('Wallace')
c1.removerAluno('Gigi')
c1.removerAluno('João')
console.log(c1.listarAlunos())

const info = Curso.infoCurso()
console.log(info)