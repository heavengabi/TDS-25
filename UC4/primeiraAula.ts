// EXERCÍCIO 1

function dobrar (a: number):number
{
    return a*2
}
console.log(dobrar(4));


//EXERCÍCIO 2

let nome : string = "Gabriela"

function saudacao (nome:string) : string 
{
    return (nome);
}
console.log(saudacao(`Olá meu nome é ${nome}`))

// EXERCÍCIO 3

let nomeAmigos : string[] = ["Gabriela","Arthur","Miguel"]

nomeAmigos.forEach((amigo =>
        {
        console.log(amigo)
        }
    )
)

//EXERCÍCIO 4
let pessoa : [string,number] = ["Gabriela", 17]
console.log(pessoa)

// EXERCÍCIO 5

enum Nivel 
{
Admin,
User,
Guest
}

console.log(Nivel)

let pessoa1:
{
    nome : string,
    idade : number,
    email : string
} = {
    nome:"Gabriela",
    idade: 17,
    email:"silvadarosagabriela@gmail.com"
}
console.log(pessoa1);

// EXERCÍCIO 6

function throwError(message: string): never {
    throw new Error(message);
}

throwError("Algo deu errado!")
