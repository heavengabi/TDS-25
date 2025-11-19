
class Personagem 
{
  nome: string;
  poder: number;

    constructor(nome: string, poder: number) 
    {
    this.nome = nome;
    this.poder = poder;
    }

    atacar()
    {
    console.log(`${this.nome} atacou com um poder de ${this.poder}`)
    }

    flutuar()
    {
    console.log(`${this.nome} flutuou!`)
    }
}

const saitama = new Personagem ("Saitama", 500000000)
const goku = new Personagem ("Goku", 8001)
const anakin = new Personagem ("Darth Vader", 27000)

console.log(`Nome :${saitama.nome}, Poder:${saitama.poder}`)


saitama.atacar()
goku.atacar()
anakin.atacar()

saitama.flutuar()