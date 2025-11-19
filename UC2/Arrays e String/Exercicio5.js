//================================================================
// A jornada do heróis talentoso do reino dos talentos tecnológicos
//===============================================================

/** Em um reino distante, um jovems e talenctoso desenvolvedor descobre uma espada mágica que revela seu destino como herói. Com coragem e poucos recursos, ele parte em uma jornada desafiadora.
 *  O cenário 
 * O jogador é um herói que embarca em uma jornada épica. Ao longo do caminho, ele encontrará inimigos, coletará itens e enfrentará desafios.
 */

//2 - CRIANDO O INVENTÁRIO DO HERÓI :
//O herói começa a sua aventura com alguns itens básico. Vamos armazenar esses itens em um array.

let inventario = 
["Espada do destino: 3", "Amuleto do Guardião: 15", "Espada do Gigante: 4", "Botas da agilidade: 3", "Shuriken: 6"]

console.log (`O inventário do jogador é ${inventario}`)

//Encontrando um tesouro
// O herói encontra um baú de tesouro e ganha um novo item!!!!!!!!!!!!!

inventario.push("Arco das Variáveis: 5")
console.log(inventario)

console.log ("O jogador possui", inventario.length, "itens no seu inventário")

//Enfrentando um inimigo 
//O herói enfrenta um goblin chamado GoblinoDoTigrinho🐯. Qual arma voce vai usar?
console.log ("Um goblin se aproxima!!Prepare-se para a batalha!! Dano: 13")

let itemUsado1= inventario[2]
console.log (`Você ataca o goblin com a sua ${itemUsado1}`)

//O goblin sentiu o golpe..... agor ele tenta seu ultimo ataque com um dano de 3! Como voce finaliza ele?
let itemUsado2 = inventario[4]
console.log(`Você finalizou ele utilizando ${itemUsado2}`)

//Um golem aproveita sua distração e o ataca violentamente com um soco sismico! Dano:9 Como voce revida?
let itemUsado3 = inventario[5]
console.log(`Você ataca o Golem com ${itemUsado3}`)


let itemUsado4 = inventario[3]
console.log(`Você finaliza o Golem com ${itemUsado4}`)

//Calcule seus recursos 
let recursosResistencia = ["18 Pontos"]
console.log(`Meus recursos de resitência: ${recursosResistencia}`)