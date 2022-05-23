/* Crie um algoritmo que solicite ao utilizador um número inteiro entre 1 e 7 correspondente ao dia da semana e escreva o nome do dia respetivo. Caso 1 escreve Domingo, Caso 2 escreve Segunda-feira e aí  por  diante.  Note,  caso  o  número  esteja  fora  do  intervalo  o  programa  deve  apresentar  uma mensagem de erro. */

var agora = new Date()
var diaSem = agora.getDay() + 1
    
/*
    1 = Domingo
    2 = Segunda
    3 = Terça
    4 = Quarta
    5 = Quinta
    6 = Sexta
    7 = Sábado
*/

console.log(diaSem)

switch(diaSem) {
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda")
        break
    case 3:
        console.log("Terça")
        break
    case 4:
        console.log("Quarta")
        break
    case 5:
        console.log("Quinta")
        break
    case 6:
        console.log("Sexta")
        break
    case 7:
        console.log("Sábado")
        break
    default:
        console.log("[ERRO] Dia inválido")
}
