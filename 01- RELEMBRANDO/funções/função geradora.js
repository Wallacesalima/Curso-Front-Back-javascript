function* contarAte(n) {
    for (let i = 1; n >= i; i++ ) {
        yield i
    }
}

const gen = contarAte(3);

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3