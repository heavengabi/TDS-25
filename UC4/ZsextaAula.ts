console.log("===============PESQUISA===============")
//Qual a diferença entre sobrescrita e sobrecarga no TypeScript

console.log("Sobrescrita é quando a filha redefine método da pai e a sobrecarga é várias assinaturas, mas uma única implementação.")

// O TypeScript realmente suporta sobrecarga de métodos como Java? Justifique.

console.log("TypeScript não suporta sobrecarga como Java; só permite várias assinaturas, mas com uma única implementação que trate todos os casos")

console.log("===============PRÁTICA 1===============")

class Animais 
{

    falar():void 
    {
        console.log(`Cacarejar...`)
    }
}

class Cachorros extends Animais
{
    falar(): void
    {
        console.log(`AU, AU`)
    
    }

}

class Gatos extends Animais 
{
    falar(): void 
    {
        
        console.log(`MIAU, MIAU`)
        
    }
}

class Pássaros extends Animais
{
    falar(): void 
    {
        console.log(`COO, COO`)
        
    }
}

const bidu = new Cachorros
const paçoco = new Gatos
const pipo = new Pássaros

bidu.falar()
paçoco.falar()
pipo.falar()


console.log("===============PRÁTICA 2===============")

interface Instrumento 
{
    tocar():void
    
}

class Guitarra implements Instrumento
{
    tocar(): void 
    {
        console.log(`🎶🎶`)
    }
}

class Bateria implements Instrumento
{
    tocar(): void 
    {
        console.log (`🎶🎶`)
    }
}

class Flauta implements Instrumento
{
    tocar(): void 
    {
        console.log(`🎶🎶`)
    }
}

const guitarra = new Guitarra
const bateria = new Bateria
const flauta = new Flauta

guitarra.tocar()
bateria.tocar()
flauta.tocar()


console.log("===============PRÁTICA 3===============")

class Mensagem
{
    constructor(){}
    enviar(mensagem: string, assunto:string):string;
    enviar(mensagem: string, assunto:string):number;

    enviar(mensagem: any, assunto: any) 
    {
    console.log(`Mensagem ${mensagem} Assunto ${assunto}`)
     return mensagem+assunto
    }
}

const mensagem1 = new Mensagem();
const mensagem2 = new Mensagem();

mensagem1.enviar("oi","tudo bem?");
mensagem2.enviar("oi","tudo bem?");