/* Resolva o exercício anterior recorrendo à estrutura se...senão..fimse. */

var hoje = new Date()
var diaSem = hoje.getDay() + 1

if (diaSem == 1) {
    console.log("Hoje é Domingo.")
} else if (diaSem == 2) {
    console.log("Hoje é Segunda.")
} else if (diaSem == 3) {
    console.log("Hoje é Terça.")
} else if (diaSem == 4) {
    console.log("Hoje é Quarta.")
} else if (diaSem == 5) {
    console.log("Hoje é Quinta.")
} else if (diaSem == 6) {
    console.log("Hoje é Sexta.")
} else if (diaSem == 7) {
    console.log("Hoje é Sábado.")
}
