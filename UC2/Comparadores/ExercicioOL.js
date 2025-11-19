//Caso 1 
//Variaveis

let idade = 23
let assinaturaPaga = true
//checar condições
let verificarIdade = (idade >= 18) && (assinaturaPaga == true)
//resultado
    console.log(verificarIdade)//true se pode entrar e false se não


//Caso 2 
let DocumentoValido = true
let verificarIdade2 = (idade >= 18) && (DocumentoValido == true)
    console.log(verificarIdade2)



//Caso 3 

let clienteVip = false
let compra100 = 80
let verificaClient = (compra100 > 100) || (clienteVip)
    console.log(verificaClient)

//Caso 4
//Velho e vaga especial
//Pessoa com deficiencia e vaga especial
// verificar se uma delas pode estacionar em alguma vaga

let vagaDeficiente = true
let vagaIdoso = false
let podeEstacionar = (vagaDeficiente ) || (vagaIdoso)
    console.log (podeEstacionar)

//Caso 5 
let temControle = true
let consoleConectado = false
let acessoJogo = (temControle) || (consoleConectado)
console.log (acessoJogo)

//Caso 6 

let usuarioLogado = true
let temPerm = false
let verificarPerm = (temPerm) && (usuarioLogado )
    console.log (verificarPerm)

//Caso 7 

//Nota trabalhos
let t1 = 10
let t2 = 7
let t3 = 6
let nf = 6.5
let nr = 8

let trabalhosAprovados = (t1 >6 ) + (t2 > 6) + (t3 > 6)
let aprovado = (nf > 7 ) || (nr >= 8 && trabalhosAprovados >= 2)
    console.log ("O aluno foi aprovado?", aprovado)

//caso 8
 
let alcance = true
let senha = false
let acessoWifi = (alcance) && (senha)
    console.log ("A pessoa pode acessar o wi-fi?", acessoWifi)


//Caso 9 

let renda = 1600
let nomeLimpo = true
let podeFazerEmprestimo = (renda > 2000) && (nomeLimpo)
    console.log ("A pessoa pode fazer empréstimo?", podeFazerEmprestimo)