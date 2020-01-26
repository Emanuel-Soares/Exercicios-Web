const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

const bolsista = aluno => aluno.bolsista

// Desafio 1: Todos os alunos são bolsistas?

const todosBolsistas = (acumulador, atual) => acumulador && atual
const desafio1 = alunos.map(bolsista).reduce(todosBolsistas)

console.log(desafio1)

// Desafio 2: Algum aluno é bolsista?

const algumBolsista = (acumulador, atual) => acumulador || atual
const desafio2 = alunos.map(bolsista).reduce(algumBolsista)

console.log(desafio2)