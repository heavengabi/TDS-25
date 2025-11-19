class Ninja 
{
    nome:string;
    aldeia:string;
    jutsus :string;

    constructor (nome:string, aldeia:string, jutsus:string)
{
    this.nome = nome;
    this.aldeia = aldeia;
    this.jutsus = jutsus;

}

usarJutsu()
    {
    console.log(`${this.nome} utilizou ${this.jutsus}`)
    }


}

const kakashi = new Ninja ("Kakashi", "Vila Konohagakure", "Chidori")
const gaara = new Ninja ("Gaara", "Sunagakure", "Sabaku Kyū")

kakashi.usarJutsu()
gaara.usarJutsu()