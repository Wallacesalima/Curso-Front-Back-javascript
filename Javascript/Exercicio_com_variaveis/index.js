let varA = "A";//B
let varB = "B"; //C
let varC = "C";//A


/* 
*Jeito antigo*
let varATemp = varA
varA = varB
varB = varC
varC = varATemp
*/ 

// Jeito moderno
[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);