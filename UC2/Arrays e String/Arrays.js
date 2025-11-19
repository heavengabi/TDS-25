//Exercicio arrays

const listaRaca = ["Golden", "Husky", "PitBull", "Pinscher", "Rotweiller"]

console.log(listaRaca[0])
console.log(listaRaca[1])


//const listaMercado = ["feijão","batata","arroz","pinhão"]  

    //console.log(listaMercado[0])
    //console.log(listaMercado[1])
    //console.log(listaMercado[2])
    //console.log(listaMercado[3])

console.log("---------------EXERCICIO2----------------")

//Exercicio 2

const guardaRoupa = 
[

"Pantufa",   //0
"Body", //1
"Calça Jeans", //2
"Calça de moletom", //3
"Chapéu", //4
"Bolsa", //5
"Tênis", //6
"Brinco", //7
"Colar", //8
"Cardigã ", //9 
"Calça preta ",//10
"Salto", //11
"Meia calça", //12
"Saia preta", //13
"Camiseta xadrez", //14
"Botas", //15
"Blusa preta",    //16
"Regata", //17 
"Meia", //18
"Blusão", //19
"Mochila", //20
"Chapéu",

]


console.log (`"Meu guarda roupa é composto por", ${guardaRoupa}`)

console.log("----------------LOOK PASSEIO------------------")
//Look para um passeio no parque
console.log (guardaRoupa[2], guardaRoupa[17], guardaRoupa[18], guardaRoupa[7], guardaRoupa[20])


console.log("----------------LOOK ENTREVISTA-----------------")
//Look para uma entrevista de emprego
console.log (guardaRoupa [16], guardaRoupa[9], guardaRoupa[10], guardaRoupa[11], guardaRoupa[7], guardaRoupa[8], guardaRoupa[5])


console.log("----------------LOOK SHOW A NOITE------------------")
//Look para um show à noite 
console.log(guardaRoupa[1], guardaRoupa[2], guardaRoupa[6], guardaRoupa[7], guardaRoupa[8])


console.log("----------------LOOK ASSISTIR FILME------------------")
//look para ficar em casa assistindo filme
console.log(guardaRoupa[3], guardaRoupa[19], guardaRoupa[18], guardaRoupa[0])


console.log("----------------LOOK FESTA JUNINA------------------")
//look festa junina SENAC
console.log(guardaRoupa[14],guardaRoupa[13],guardaRoupa[12],guardaRoupa[15],guardaRoupa[21])


console.log ("----------------EXERCICIO3------------------")

const lancheHommer = ["rosquinha", "rosquinha", "rosquinha"]
const lancheScooby = ["hambúrguer", "batata frita", "milkshake", "biscoito scooby","pizza"]
const lancheMagali = ["melancia", "maçã", "banana", "abacata"]
const lancheEsponja= ["hambúrguer de siri", "refri","batata","sorvete","molho secreto"]

    console.log("A quantidade de itens do lanche do Hommer é", lancheHommer.length)
    console.log ("A quantidade de itens do lanche do Scooby Doo é",lancheScooby.length)
    console.log("A quantidade de itens do lanche da Magali é", lancheMagali.length)
    console.log("A quantidade de itens do lanche do Bob Esponja é", lancheEsponja.length)


 console.log ("----------------EXERCICIO3------------------")
const pokemonsCapturados =["Pikachu", "Charmander", "Bulbasaur", "Squirtle"]
console.log(pokemonsCapturados.includes("Pikachu"))
console.log(pokemonsCapturados.includes("Meowth"))


//Método Push
const numeros = [1, 2, 3]

numeros.push(4)
console.log(numeros)

numeros.push(5,6,7)
console.log (numeros)

console.log("------------------Exercicio5------------------")
//Exercicio 5
const listaMercado = ["feijão", "arroz","macarrão"]  
listaMercado.push ("leite", "farinha","banana","canela","café","frango","margarina","farofa")
console.log(listaMercado)