

const nome = "Arthur"
const idade = 17

const frase = " Meu nome é " + nome + " e tenho " + idade + " anos. "
 console.log (frase)

const frase2 = ` meu nome é ${nome} e tenho ${idade} anos `
    console.log(frase2)



//Exercicio 1
let nome2 = "Gabriela"
let filmeFav = "Diário de uma paixão"
let idade2 = 17
let corFav = "preto e vermelho vinho"
let time = "não torço pra nenhum time"

let frase3 = " Meu nome é " + nome2 + " tenho " + idade2 + " anos. " +  "Minha cor favorita é " + corFav + ". Meu filme favorito é " + filmeFav + " e eu " +time
    console.log(frase3)

let frase4 = `meu nome é ${nome2} e tenho ${idade2} anos. Minha cor favorita é ${corFav}. Meu filme favorito é ${filmeFav} e eu ${time}.`
    console.log(frase4)

//Length

let nome5 = "Gabriela"
    console.log (nome5.length)

let comidaFav = "estrogonofe"
    console.log(comidaFav.length)


const frase5 = "OiOiOi"
const fraseMinuscula = frase5.toLowerCase()
const frase6 = "oIoIoi"
const fraseMaiuscula = frase6.toUpperCase()
    console.log(fraseMinuscula)
    console.log(fraseMaiuscula)


const nomeGatos = "Lucky Paçoco        "
console.log (nomeGatos.trim())


const frase10 = "Hoje eu comi cenoura"
frase10.includes("cenoura")
frase10.includes("batata")

    console.log(frase10.includes("cenoura"))
    console.log(frase10.includes("batata"))

//2
const frase20 = "Hoje comi cenoura, adoro cenoura"
const novaFrase1 = frase20.replaceAll("cenoura", "batata")
    console.log(novaFrase1)

console.log("===============UNSHIFT==============")
let cores = ["Azul","Verde"]
cores.unshift("vermelho")
console.log(cores)

let marcasCelulares = ["Samsung","Xiaomi","Iphone"]
    console.log (marcasCelulares)
marcasCelulares.unshift("Motorola")
    console.log(marcasCelulares)


console.log("=============SHIFT===============")
//Remove o primeiro item
let frutas = ["maçã","banana","laranja"]
    console.log(`A lista de frutas é ${frutas}`)
frutas.shift()
    console.log(`A lista sem o primeiro item fica assim ${frutas}`)


console.log("=================EXERCICIO 8=====================")
let cidades = ["Bagé","São Leopoldo","Gramado"]
    console.log(`A lista de cidades é ${cidades}`)
cidades.shift()
    console.log(`A lista de cidades sem a primeira fica assim: ${cidades}`)


console.log("=================MÉTODO POP======================")
//REMOVE O ULTIMO ELEMENTO DE UM ARRAY
let meusPeixes =["peixe palhaço", "peixe espada", "esturjão"]
console.log(`Tenho alguns peixes, conheçam eles: ${meusPeixes}`)
meusPeixes.pop()
console.log(`Acabei perdendo um dos meus peixes e os que me restaram foram esses: ${meusPeixes}`)


console.log("===============EXERCICIO 9=================")
//Vamos construir um gerenciador de tarefas

let tarefas = ["limpar a caixa de areia dos gatos","varrer a casa","lavar o banheiro","estudar para a prova","lavar a louça"]
console.log(`Montei minha lista de tarefas e ela ficou assim:
${tarefas}`)
    console.log (`A tarefa concluída foi ${tarefas[4]}`)
tarefas.pop ()
    console.log(tarefas)



console.log("======.SORT======")
let frutas1 = ["Banana", "Maçã", "Laranja"]
frutas1.sort()
console.log(frutas1)
