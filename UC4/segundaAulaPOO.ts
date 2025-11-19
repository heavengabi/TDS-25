// PESQUISA
// 1. O código fica vulnerável a alterações.
// 2.
// o private é acessível somente dentro da própria classe.
// protected acessível dentro da classe e nas distintas.
// 3.Cartão de crédito, controle remoto e carro.

// ======================================================= //

//PRÁTICAS
//  1.

class Pessoa {
    private idade:number

    constructor(idade:number){
        this.idade = idade
    }

    public fazerAniversario(): void
    {
        this.idade++
    }

    public mostrarIdade(): void
    {
        
        console.log(`Feliz Aniversário! você acaba de complentar ${this.idade} anos`)
    }

}

const pessoa = new Pessoa(27)
pessoa.mostrarIdade()
pessoa.fazerAniversario()
pessoa.mostrarIdade()



// ========================================================================================== //
//2.

class Celular{
    private nivelBateria : number

    constructor()
    {
    this.nivelBateria = 60
    }

    public carregar(): void
    {
        if(this.nivelBateria < 100)
        {
            this.nivelBateria += 10
        }

        if (this.nivelBateria > 100)
        {
            this.nivelBateria = 100
        }

        
    }

    public usar()
    {
        if(this.nivelBateria > 0)
        {
            this.nivelBateria -= 10
        }

        if(this.nivelBateria < 0)
        {
            this.nivelBateria = 0
        }
        
    }
    
    mostrarBateria(){
        console.log(`Você está com ${this.nivelBateria}% de bateria.`)
    }

}

const celular = new Celular()

celular.mostrarBateria()

celular.usar()
celular.usar()
celular.mostrarBateria()

celular.carregar()
celular.mostrarBateria()