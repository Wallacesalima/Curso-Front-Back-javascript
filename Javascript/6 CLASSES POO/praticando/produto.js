class Produto {
    constructor(nome, preco, desconto) {
        this.nome = nome
        this.preco = preco
        this.desconto = desconto
    }

    get precoDescontado() {
        return this.preco - this.desconto
    }

    resumo() {
        console.log(`Produto:${this.nome} tem preço R$${this.preco.toFixed(2)} reais.`)
    }
}

const p1 = new Produto('Tênis', 20, 10)
p1.resumo()

console.log(Produto.precoDescontado)
