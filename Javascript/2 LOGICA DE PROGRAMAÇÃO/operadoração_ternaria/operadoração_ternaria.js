// ( condição ) ? 'valor para verdadero' : 'valor para falso'

const pontuacaoUsuario = 1000
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normasl'

const corUsuario = 'Pink'
const corPadrao = corUsuario || 'preta'

console.log(nivelUsuario, corPadrao)