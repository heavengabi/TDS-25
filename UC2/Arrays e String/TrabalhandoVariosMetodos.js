console.log("====== EXERCICIO 1 ======")
let frase = " Eu adoro javaScript e estudar com os meus colegas incríveis! "


    console.log (frase.trim())//REMOVER ESPAÇO

    console.log (frase.toLowerCase ())//FRASE MINUSCULA

    console.log(frase.includes ("javaScript"))//TRUE

    console.log (frase.replaceAll("javaScript", "TypeScript"))//SUBSTITUIR JAVASCRIPT POR TYPESCRIPT


console.log("====== EXERCICIO 2 ======")
let frutas = ["maçã","banana","laranja"]

//ADICIONANDO MORANGO NO FINAL 
frutas.push("morango")

//ADICIONA ABACAXI
frutas.unshift("abacaxi")

//Remove o primeiro elemento
frutas.shift()

//REMOVE O ULTIMO ELEMENTO COM POP 
frutas.pop()

//REMOVO O ELEMENTO NA POSIÇÃO 1 E ADICIONA MANGA
frutas.splice(1,1, "manga")

console.log(frutas)