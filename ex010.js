/* Crie  um  menu  com 4opções  (1-Cálculo  da  área  do quadrado  (lado  x  lado),  2-Cálculo  da  área  do retângulo(lado  maior  x  lado menor), 3-Triângulo  (basexaltura/2), 0-Sair).  Para  cada  um  dos  casos resolva os algoritmos devidos. Utilize a estrutura escolhevalidando a opção. */

console.log("Escolha uma opção do menu:");
console.log("(1) Calcular área do quadrado.");
console.log("(2) Calcular área do retângulo.");
console.log("(3) Calcular área do triângulo.");
console.log("(4) Sair.\n");

var opcao;

menu(opcao)

function menu(opcao) {
    switch(opcao) {
        case 1:
            var lado = 5
            console.log(`A área do quadrado é de ${lado * lado}.\n`)
        break;
        case 2:
            var maior = 7
            var menor = 3
            console.log(`A área do retângulo é de ${maior * menor}.\n`)
        break;
        case 3:
            var base = 2
            var altura = 5
            console.log(`A área do triângulo é de ${(base * altura) / 2}.\n`)
        break;
        case 4:
            console.log("Saindo do programa...\n")
        break;
    }
}

menu(1);
menu(2);
menu(3);
menu(4);