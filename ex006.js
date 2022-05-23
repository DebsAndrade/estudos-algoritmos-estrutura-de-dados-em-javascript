/* Crie  um  algoritmo que gere um  número  entre  0 e  100. O utilizador tem  5  tentativas  para  acertar.  À medida  que  o  processo  vai  decorrendo  vamos  informar  se  o número está  acima  ou  abaixo ou  se acertou. No final deve dar oportunidade para repetir e apresentar o número gerado. */

function gerarNumero() {
    return Math.floor(Math.random() * 101)
}

function jogoTenteAcertar() {
    const tentativas = 5
    const numeroSecreto = gerarNumero()

    for (var i = 0; i < tentativas; i++) {
        console.log("Informe um valor entre 0 e 100.")
        const sugestaoUsuario = gerarNumero() // Simular a sugestão de número do usuário.
        console.log(`O usuario sugeriu o número ${sugestaoUsuario}`)
        if (sugestaoUsuario > numeroSecreto) {
            console.log("O valor sugerido está acima.")
        } else if (sugestaoUsuario < numeroSecreto) {
            console.log("O valor sugerido está abaixo.")
        } else {
            console.log("Você acertou!")
            break
        }
        console.log()   
    }
    console.log(`O número secreto é ${numeroSecreto}.\n`)
    console.log("Gostaria de jogar novamente?")
    var tentarNovamente = "n"
    if (tentarNovamente == "s") {
        jogoTenteAcertar()
    }
}

jogoTenteAcertar()
