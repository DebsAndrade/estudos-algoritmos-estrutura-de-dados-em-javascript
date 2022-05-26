/* Crie  um  programa  que  vá  solicitando  ao  utilizador  números  inteiros.  O  programa  termina  quando  o número inserido for o número “zero”. Como saída deve apresentar a soma dos números inseridos e quantos números foram inseridos. */

function gerarNumero() {
    return Math.floor(Math.random() * 101)
}

var numeroGerado
var somaFinal = 0
var quantidade = 0

do {
    numeroGerado = gerarNumero()
    console.log(`O número gerado é ${numeroGerado}.`)
    somaFinal = somaFinal + numeroGerado
    quantidade++
} while (numeroGerado != 0);

console.log(`O total da soma é ${somaFinal}.`)
console.log(`O total de repetição é ${quantidade}.`)