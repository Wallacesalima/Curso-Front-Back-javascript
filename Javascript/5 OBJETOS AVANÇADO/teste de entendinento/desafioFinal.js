// Função que cria uma entidade, base para os outros
function criarEntidade(nome, tipo) {
    const entidade = Object.create(entidadePrototype)
    entidade.nome = nome
    entidade.tipo = tipo
    entidade.id = Math.floor(Math.random() * 10000)
    return entidade
}

// metodo retorna informações já organizadas
const exibirInfo = {
    exibirInfo() {
        return `Nome:${this.nome}/id:${this.id}/tipo:${this.tipo}`
    }
}

// metodo que clona as informações 
const clonar = {
    clonar() {
        return structuredClone(this)
    }
}

// adicionando ao prototype da entidade metodos
const entidadePrototype = { ...exibirInfo, ...clonar }

function criarProduto(nome, preco) {
    const produtoLoja = Object.create(produtoPrototypeLoja)
    produtoLoja.nome = nome
    produtoLoja.preco = preco
    produtoLoja.tipo = "produto"
    produtoLoja.id = Math.floor(Math.random() * 10000)
    return produtoLoja
}

const aplicarDesconto = {
    aplicarDesconto(percentual) {
        const valorDesconto = this.preco * (percentual / 100)
        this.preco = this.preco - valorDesconto
        return this.preco
    }
}

const reajustarPreco = {
    reajustarPreco(percentual) {
        const valorReajuste = this.preco * (percentual / 100)
        this.preco = this.preco + valorReajuste
        return this.preco
    }
}
const depositar = {
    depositar(valor) {
        return this.saldo += valor
    }
}

const produtoPrototypeLoja = { ...entidadePrototype, ...aplicarDesconto, ...reajustarPreco }

function criarCliente(nome, saldoInicial) {
    const cliente = Object.create(clientePrototype)
    cliente.nome = nome
    cliente.saldo = saldoInicial
    cliente.tipo = 'cliente'
    cliente.id = Math.floor(Math.random() * 10000)
    return cliente
}

const comprar = {
    comprar(produto) {
        if (this.saldo >= produto.preco) {
            this.saldo -= produto.preco
            console.log(`Compra feita com sucesso!!`)
            console.log(`Produto: ${produto.nome}`)
            console.log(`Saldo:${this.saldo}`)
        } else {
            console.log('Tentativa de compra falhou!!')
            console.log('Saldo insuficiente!')
            console.log(`Seu saldo: ${this.saldo} / Preço do produto: ${produto.preco}`)
        }
    }
}

const clientePrototype = { ...entidadePrototype, ...depositar, ...comprar }


const adicionarItem = {
    adicionarItem(produto) {
        this.itens.push(produto)
        return this.itens
    }
}

const resumo = {
    resumo() {
        return this.itens.map(item => ({
            nome: item.nome,
            preco: item.preco,
            cliente: this.cliente.nome
        }))
    }

}

const pedidoPrototype = { ...adicionarItem, ...resumo }

function criarPedido(cliente) {
    const pedido = Object.create(pedidoPrototype)
    pedido.cliente = cliente
    pedido.itens = []
    return pedido
}

const p1 = criarProduto('Notebook', 3000);
const p2 = criarProduto('Mouse Gamer', 150);

const c1 = criarCliente('Wallace', 2000);

c1.depositar(1000);
c1.comprar(p1);
c1.comprar(p2);

const pedido1 = criarPedido(c1);
pedido1.adicionarItem(p1)
pedido1.adicionarItem(p2);
console.log(pedido1.resumo());

const cloneProduto = p1.clonar();
cloneProduto.preco = 5000; // altera o clone
console.log(p1.preco); // deve continuar 3000

const e1 = criarEntidade('Base Genérica', 'entidade');
console.log(e1.exibirInfo()); // "Nome: Base Genérica | ID: 2345 | Tipo: entidade"
console.log(c1.exibirInfo()); 
console.log(p1.exibirInfo()); 
console.log(p2.exibirInfo()); 


