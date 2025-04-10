// Escreva uma função chamada ePaisagem que recebe
//  dois argumentos, largura e altura de uma imagem.]
//   Retorne true se a imagem estiver no modo paisagem.

const ePaisagem = (larg, alt) => larg > alt
console.log(ePaisagem(30, 20))

const eRetrato = (larg, alt) => larg < alt
console.log(eRetrato(30, 20))

const eQuadrada = (larg, alt) => larg === alt
console.log(eQuadrada(30, 30))
