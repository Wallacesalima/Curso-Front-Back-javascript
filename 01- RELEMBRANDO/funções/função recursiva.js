function contagemRegressiva(n) {
    if (n < 0) return
    console.log(n)
    contagemRegressiva(n - 1)
}

// contagemRegressiva(5)

function contagemProgressiva(limite, atual = 0) {
    if (atual <= limite) {
        console.log(atual)
        contagemProgressiva(limite, atual + 1)
    } return
}

contagemProgressiva(5)