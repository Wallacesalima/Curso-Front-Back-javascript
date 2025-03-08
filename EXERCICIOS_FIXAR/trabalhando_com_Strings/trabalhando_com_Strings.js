let frase = "JavaScript é incrível!";  // Definimos a string inicial

// A função .length retorna o comprimento (quantidade de caracteres) da string
const fraseComprimento = frase.length;

// A função .toUpperCase transforma toda a string em maiúsculas
const fraseEmMaiusculo = frase.toUpperCase();

// A função .replace substitui uma parte da string (no caso "incrível") por outra ("poderoso")
const fraseModificada = frase.replace("incrível", "poderoso");

// Usamos template literals para exibir os resultados de forma legível
console.log(`Frase original: ${frase}`);  // Exibe a frase original
console.log(`Comprimento da frase: ${fraseComprimento}`);  // Exibe o comprimento da frase
console.log(`Frase em maiúsculas: ${fraseEmMaiusculo}`);  // Exibe a frase em maiúsculas
console.log(`Frase modificada: ${fraseModificada}`);  // Exibe a frase com a palavra modificada
