
// AULA DIA 18/09- Classes abstratas e Interfaces

// De Pesquisa
// Qual a principal diferença entre classe abstrata e interface no TypeScript?
// Em quais casos você escolheria uma classe abstrata ao invés de uma interface?



//==============================  PESQUISA ==============================//
//1. A interface só fala o que tem que existir, enquanto a classe abstrata tem o código que voce pode reutilizar.
//2. Eu utilizaria quando quisesse reutilizar código.



console.log('============================== PRÁTICA 1 ==============================')

    abstract class Animal 
{
    abstract falar(): void
}

    class Gato extends Animal
{
    falar():void
    {
        console.log(`Miau Miau`)
    }
}

    class Cachorro extends Animal
{
    falar(): void
    {
        console.log(`Au Au`)
    }
}


const Lucky = new Gato()
const Maya = new Cachorro()

console.log(`====GATO====`)
Lucky.falar()
console.log(`====CACHORRO====`)
Maya.falar()


console.log('============================== PRÁTICA 2 ==============================')

interface Veiculo{
    marca:string
    modelo:string
    acelerar():void;
}
class Carro implements Veiculo
{
    constructor(public marca:string, public modelo:string){}

    acelerar(): void 
    {
        console.log(`O carro da marca ${this.marca}, modelo ${this.modelo} acelerou.`)
    }
}


class Moto implements Veiculo
    
{
    constructor(public marca:string, public modelo:string){}
    acelerar(): void 
    {
        console.log(`A moto da marca ${this.marca}, modelo ${this.modelo} acelerou.`)
    }
}


const moto1 = new Moto ("Yamaha","MT-07")
const carro1 = new Carro ("Toyota","Corolla")

console.log("====CARRO====")
carro1.acelerar()

console.log("====MOTO====")
moto1.acelerar()
