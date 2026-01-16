const alunos = [
    { nome: 'Julia', nota: 6},
    { nome: 'Fernando', nota: 8},
    { nome: 'Luis', nota: 4}
]

const aprovados = alunos.filter(aluno => aluno.nota >= 6)

console.log(aprovados)