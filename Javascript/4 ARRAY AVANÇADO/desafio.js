const pedidos = [
    { cliente: 'João', produto: 'Notebook', valor: 3500, entregue: true },
    { cliente: 'Maria', produto: 'Celular', valor: 2000, entregue: false },
    { cliente: 'Carlos', produto: 'Mouse', valor: 100, entregue: true },
    { cliente: 'Ana', produto: 'Monitor', valor: 1200, entregue: true },
    { cliente: 'José', produto: 'Teclado', valor: 200, entregue: false },
];

const nomeClientesEntregue = pedidos
    .filter(pedido => pedido.entregue)
    .map(pedido => pedido.cliente.toUpperCase())

console.log(nomeClientesEntregue)

const totalValoresClientesEntregue = pedidos
    .filter(pedido => pedido.entregue)
    .reduce(function (ac, pedido) {
        ac += pedido.valor
        return ac
    }, 0)

console.log(totalValoresClientesEntregue)

const descontoDezPorcento = pedidos.map((pedido) => {
    return {
        produto: pedido.produto,
        valor: pedido.valor * 0.90
    }
})

console.log(descontoDezPorcento)

pedidos.forEach(function (pedido) {
    if (pedido.entregue === true) {
        console.log(`Pedido de ${pedido.produto} para ${pedido.cliente} foi entregue com sucesso!`)
    } else {
        console.log(`Pedido de ${pedido.produto} para ${pedido.cliente} ainda não foi entregue!`)
    }
})
