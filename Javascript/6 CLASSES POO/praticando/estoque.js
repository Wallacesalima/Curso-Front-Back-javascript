class ProdutoEstoque {
    constructor(nome, preco, quantidade) {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    adicionarEstoque(qtd) {
        return this.quantidade += qtd
    }
    removerEstoque(qtd) {
        if (qtd <= this.quantidade) {
            this.quantidade = this.quantidade - qtd
        } else {
            console.log('Error: Quantidade maior que estoque.')
        }

        return this.quantidade
    }

    get valorTotal() {
        return this.preco * this.quantidade
    }

    get resumo() {
        return `Produto: ${this.nome} / Preço: ${this.preco} / Quantidade: ${this.quantidade} / Total: ${this.valorTotal}`
    }

    get emFalta() {
        return this.quantidade === 0
    }

    static infoGeral() {
        return `Controle de estoque iniciado com sucesso!`
    }
}

class EstoqueGeral extends ProdutoEstoque {
    constructor(nome, preco, quantidade) {
        super(nome, preco, quantidade)

        this.produtos = []
    }

    adicionarProduto(produto) {
        if (produto instanceof ProdutoEstoque) {
            this.produtos.push(produto)
            console.log(`✅ Produto "${produto.nome}" adicionado ao estoque.`)

        } else {
            console.log('❌ Erro: O item fornecido não é uma instância de ProdutoEstoque.')
        }
        return this.produtos
    }


    removerProduto(nome) {
        if (this.produtos.nome === nome) {
            this.produtos = this.produtos.filter(produto => produto.nome !== nome)
        } else {
            console.log(`❌ Erro: Produto "${nome}" não encontrado.`)
        }

        return this.produtos
    }

    listarProdutos() {
        const listaDeProdutos = this.produtos.map((produto) => `Produto: ${produto.nome} | Preço: ${produto.preco.toFixed(2)} |  Quantidade: ${produto.quantidade}
        `)

        return `
        📦 Produtos em estoque:
         ${listaDeProdutos}`
    }
    get valorTotalEstoque() {
        const total = this.produtos.reduce((ac, produto) => {
            ac += produto.preco
            return ac
        }, 0)
        return total
    }
}

const p1 = new ProdutoEstoque('Mouse', 50, 10)
const p2 = new ProdutoEstoque('Teclado', 120, 5)
const p3 = new ProdutoEstoque('Monitor', 800, 2)

const estoque = new EstoqueGeral()

estoque.adicionarProduto(p1)
estoque.adicionarProduto(p2)
estoque.adicionarProduto(p3)
estoque.adicionarProduto('qualquerCoisa') // não é instância

console.log(estoque.listarProdutos())
console.log('Valor total do estoque:', estoque.valorTotalEstoque)

estoque.removerProduto('Teclado')
estoque.removerProduto('Headset')// não existe
console.log(estoque.listarProdutos())



// console.log(p1.adicionarEstoque(10))
// console.log(p1.removerEstoque(10))
// console.log(p1.removerEstoque(10))
// console.log(p1.removerEstoque(10))
// console.log(p1.adicionarEstoque(10))
// console.log(p1.valorTotal)
// console.log(p1.resumo)
// console.log(p1.emFalta)

// console.log(ProdutoEstoque.infoGeral())

