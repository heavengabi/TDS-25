class Heroi 
{
    nome : string ;
    universo : string;
    poder : string;


    constructor(nome:string, universo:string, poder:string)
    {
    this.nome = nome
    this.universo = universo
    this.poder = poder
    }

    lutar()
    {
    console.log(`O ${this.nome} usou ${this.poder}`)
    }
}

const thor = new Heroi ("Thor", "Marvel", "Manipulação do Trovão e Superforça")
const scarlet = new Heroi ("Scarlet Witch", "Marvel", "Magia do Caos")

scarlet.lutar()
thor.lutar()