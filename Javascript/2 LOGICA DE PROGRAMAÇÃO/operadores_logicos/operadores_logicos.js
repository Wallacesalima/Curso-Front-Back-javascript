const idade = 20;
const temCNH = true;
const temCarro = false;
const chovendo = true;

// AND (&&) - Ambos precisam ser verdadeiros
const podeDirigir = idade >= 18 && temCNH;
console.log(`Pode dirigir: ${podeDirigir}`); // true

// OR (||) - Apenas um precisa ser verdadeiro
const podeTirarCNH = idade >= 18 || temCarro;
console.log(`Pode tirar CNH ou já tem carro: ${podeTirarCNH}`); // true

// NOT (!) - Nega a condição
const estaSol = !chovendo;
console.log(`Está sol: ${estaSol}`); // false
