/* Programa para calcular a área de um círculo(A = π . r2). Desta vez, se o utilizador introduzir um valor negativo para o raio, o programa volta a pedir um valor para o raio e só depois calcula a área.  */

function geraNumero() {
    return Math.floor(Math.random() * 21) - 10
}

function calculaAreaCirculo(raio) {
    const PI = 3.14159
    return PI * (raio * raio)
}

var raio = 0

do {
    raio = geraNumero()
    console.log(`O raio informado foi: ${raio}`)
    if (raio < 0) {
        console.log("O raio não pode ser negativo, informe-o novamente.")
    } 
} while (raio < 0)

var area = calculaAreaCirculo(raio)

console.log(`Àrea do circulo é: ${area}`)
