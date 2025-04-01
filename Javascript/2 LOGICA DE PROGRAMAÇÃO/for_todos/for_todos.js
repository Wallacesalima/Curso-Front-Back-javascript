// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

const pessoas = ["Alice", "Bruno", "Carlos"];

console.log("Usando for clássico:");
for (let i = 0; i < pessoas.length; i++) {
  console.log(i + ": " + pessoas[i]);
}

console.log("\nUsando for...in:");
for (let indice in pessoas) {
  console.log(indice + ": " + pessoas[indice]);
}

console.log("\nUsando for...of:");
for (let nome of pessoas) {
  console.log(nome);
}

console.log("\nUsando forEach:");
pessoas.forEach((nome, indice) => {
  console.log(indice + ": " + nome);
});
