function sistemaVotacao(candidatos = []) {
    return {
        votar(nome) {
            for (index in candidatos) {
                for (this.nome of candidatos) {
                    if (this.nome === candidatos[index]) {
                        console.log(nome)
                    }
                }
            }
        }
    }
}

const sistema = sistemaVotacao(['Ana', 'João', 'Maria']);

sistema.votar('Ana')