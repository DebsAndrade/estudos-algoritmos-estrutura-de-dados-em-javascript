/* Elabore um programa que apresente o maior e menor de 5 números lidos. */

function gerarNumero() {
    return Math.floor(Math.random() * 100)
}

var menor = 0
var maior = 0

for (var i = 0; i < 5; i++) {
    var numero = gerarNumero()
    console.log(`Número: ${numero}.`)
    if (i == 0) {
        menor = numero
        maior = numero
    } else {
        if (numero > maior) {
            maior = numero
        } else if (numero < menor) {
            menor = numero
        }
    }
}

console.log()
console.log(`Maior: ${maior}`)
console.log(`Menor: ${menor}`)