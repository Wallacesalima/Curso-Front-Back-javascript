/*
Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.92
*/

const nome = 'Wallace'
const sobreNome = 'Sá Lima Almeida'
const idade = 25
const peso = 78
const altura = 1.79
let imc
let anoNascimento

imc = peso / (altura * altura)

console.log (nome, sobreNome, 'tem', idade, 'anos, pesa', peso ,'kg')
console.log (`tem ${altura} de altura e seu IMC é de ${imc.toFixed(2)}`)



