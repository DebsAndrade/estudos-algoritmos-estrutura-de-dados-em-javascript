/* Crie um algoritmo que gere um nº aleatório entre 0 e 100. No final informa se o nº é par ou ímpar.No final deve dar oportunidade ao utilizador de repetir o programa. */

function gerarNumero() {
    return Math.floor(Math.random() * 101)
}

function jogoParOuImpar() {
    const numeroSecreto = gerarNumero()
    if (numeroSecreto % 2 == 0) {
        console.log(`O número é par: ${numeroSecreto}\n`)
    } else {
        console.log(`O número é ímpar: ${numeroSecreto}\n`)
    }

    console.log("Gostaria de jogar novamente?")
    var tentarNovamente = "n"
    if (tentarNovamente == "s") {
        jogoParOuImpar()
    }
}

jogoParOuImpar()
