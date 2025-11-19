// o método splice(i, n) remove n elementos a partid da posição i do array

const letras = ["A","B","C","D","E", "F","G","H"]
    console.log(letras)

letras.splice(2, 1) // ["A","B","D","E", "F","G","H"]
//indices                0   1   2   3    4   5   6     
                                                        //da array letras, na posição 2(C) remove 1 (o próprio c)

console.log(letras)
letras.splice(3 ,2) // ["A","B","D", "F","G","H"]
//indices                0   1   2    3    4   5   
                                                        // da array letras, na posição 3(D) remove o 2 (E e F)
    console.log(letras)

console.log("=========EXERCICIO SPLICE===========")

let deck = ["Pikachu","Charmander","Bulbasaur","Pikachu","Squirtle","Meowth"]
    console.log(deck)

//Removendo a carta do Pikachu 
deck.splice(3,1)
    console.log(deck)

//Adicionando Snorlax
deck.splice (3,0, "Snorlax")
    console.log(deck)

//Adicionando Eevee no lugar do Meowth
deck.splice(5,1, "Eevee")
    console.log(deck)

console.log("============CONCAT============")
let frutas = ["Maçã","banana"]
let legumes=["cenoura","batata"]
let cesta = frutas.concat(legumes)
    console.log(cesta)


console.log("===========EXERCICIO 1============")

let pacote1=["Pikachu","Bulbasaur","Charmander"]
let pacote2=["Squirtle","Jigglypuff"]
let pacote3=["Meowth","Snorlax","Eevee"]

let todasAsCartas = pacote1.concat(pacote2, pacote3)
    console.log(`Vamos ver como ficaram todas as cartas ${todasAsCartas}`)

let quantidadeCartas = todasAsCartas.length
   console.log(`A quantidade de cartas é ${quantidadeCartas}`)