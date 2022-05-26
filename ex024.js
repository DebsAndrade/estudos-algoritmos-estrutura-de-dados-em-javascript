/* Elabore  um  programa  que  permite  efetuar  operações  de  crédito  ou  débito  numa  conta  bancária.  O programa deverá perguntar qual o saldo inicial da conta e qual a operação que o utilizador pretende efetuar  (débito  ou  crédito),  assim  como  o montante  a  debitar,  atualizando  o  saldo  da conta  sempre que se efetue uma operação. No final deverá devolver o saldo da conta. */

function geraValor() {
    return Math.floor(Math.random() * 100000)
}

function transacaoBancaria(saldo, operacao, valorOperacao) {
    console.log(`Saldo inicial: $${saldo}`)
    switch(operacao) {
        case 1:
            console.log(`Debitando o valor $${valorOperacao}`)
            if(saldo < valorOperacao) {
                console.log(">>> Saldo insuficiente! <<<")
            } else {
                saldo = saldo - valorOperacao
            }
            break
        case 2:
            console.log(`Creditando o valor $${valorOperacao}`)
            saldo = saldo + valorOperacao
            break
        default:
            console.log(`Operação inválida!`)
    }
    console.log(`Saldo final: $${saldo}\n`)
}

console.log("(1) Operação de Débito")
console.log("(2) Operação de Crédito")
console.log()

transacaoBancaria(geraValor(), 1, geraValor()) // simula débito
transacaoBancaria(geraValor(), 2, geraValor()) // simula crédito
transacaoBancaria(geraValor(), 3, geraValor()) // simula operação inválida