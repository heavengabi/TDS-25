//============================= EXERCÍCIO 1 ===================================//

// 1. Veículo, móvel e pessoal.
// 2. A classe pai é a que fornece os atribulos, enquanto a classe filha herda as características da classe pai.
// 3. Alguma das linguages que tem herança é Java e C#.

//============================= EXERCÍCIO 2 ===================================//

class Pessoa1 
{
    nome:string;
    

    constructor(nome:string)
    {
        this.nome = nome 
    }

    apresentar(){
        console.log(`Meu nome é ${this.nome}!`)
    }
    
}
    
    class Aluno extends Pessoa1
{
    estudar(professor : Professor){
        console.log(`Teacher, I have a question ${professor.nome}`)
    }
}

class Professor extends Pessoa1 
{
    ensinar(aluno : Aluno)
    {
        console.log(`Pode perguntar ${aluno.nome}`)
    }
}



const aluno1 = new Aluno("Miguel")
const prof1 = new Professor("Daniel")

aluno1.apresentar()
aluno1.estudar(prof1)

prof1.apresentar()
prof1.ensinar(aluno1)


//============================= EXERCÍCIO 3 ===================================//

class Funcionario 
{   
    nome : string
    salario : number

    constructor(nome:string, salario:number)
    {
        this.nome = nome
        this.salario = salario
    }

    mostrarSalario()
    {
        console.log(`Esse é o seu salário ${this.salario} .`)
    }
}

class Gerente extends Funcionario {
    aumentarSalario()
    {
    console.log(`O meu salário aumentou.`)
     return this.salario += 450
    }
}

class Estagiario extends Funcionario 
{
    ajudaDeCusto(){
        console.log (`Quanto recebo de vale alimentação?`)
        return this.salario += 500
    }
}

const gerente1 = new Gerente("Juliano", 1900)
const estagiario1 = new Estagiario("Carlos", 1520)

estagiario1.mostrarSalario()
estagiario1.ajudaDeCusto()
estagiario1.mostrarSalario()



gerente1.mostrarSalario()
gerente1.aumentarSalario()
gerente1.mostrarSalario()


