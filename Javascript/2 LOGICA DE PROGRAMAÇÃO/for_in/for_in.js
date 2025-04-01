// 1. Iterando sobre as propriedades de um objeto
const pessoa = {
    nome: "Wallace",
    idade: 25,
    profissao: "Programador"
  };
  
  console.log("Iterando sobre as propriedades de um objeto:");
  for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
  }
  // Saída:
  // nome: Wallace
  // idade: 25
  // profissao: Programador
  
  
  // 2. Iterando sobre os índices de um array
  const frutas = ['maçã', 'banana', 'laranja'];
  
  console.log("\nIterando sobre os índices de um array:");
  for (let indice in frutas) {
    console.log(indice + ": " + frutas[indice]);
  }
  // Saída:
  // 0: maçã
  // 1: banana
  // 2: laranja