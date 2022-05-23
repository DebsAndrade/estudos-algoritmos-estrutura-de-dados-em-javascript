/* Desenvolva um algoritmopara ler uma quantidade N de alunos. Ler a nota de cada um dos N alunos e calcular a média aritmética das notas. Contar quantos alunos estão com a nota acima de 10. Obs.: Se nenhum aluno tirou nota acima de 10, mostrar mensagem: Não há nenhum aluno com nota acima de 10. A escala será de 0 a 20. */

function atribuirNota() {
    return Math.floor(Math.random() * 21)
}
var alunos = 4
var totalNotas = 0
var alunosAprovados = 0

for (var i = 0; i < alunos; i++) {
    var nota = atribuirNota() // Esta função simula a leitura da nota. 
    console.log(`A nota do aluno ${i} é ${nota}.`)
    totalNotas = totalNotas + nota
    if (nota > 10) {
        alunosAprovados++
        console.log("Aluno aprovado!")
    }
}

console.log(`A média das notas é de ${totalNotas / alunos}.`)
if (alunosAprovados == 0){
    console.log("Não há nenhum aluno com a nota acima de 10.")
}