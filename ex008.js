/* Crie  um  programa  que  solicite  ao  utilizador  a  idade e  escreva  se  o  utilizador  já  tem  idade  para conduzir  (idade  superior  ou  igual  a  18),  caso  contrário  escreva  o  nº  anos  em  falta.Deve  dar oportunidade ao utilizador de repetir o programa. */

function idadeConducao(idade) {
    console.log(`Você tem ${idade} anos.`)
    if (idade < 18) {
        console.log("Não pode conduzir.")
        console.log(`Faltam ${18 - idade} ano(s).`)
    } else if (idade >= 18) {
        console.log("Pode conduzir.")
    }
}

idadeConducao(12) // simulando menor de idade
idadeConducao(18) // simulando exatamente 18
idadeConducao(25) // simulando maior de idade
