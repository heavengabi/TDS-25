let pessoa = 
{
    nome :"Lucas",
    idade : 14,
    gostoDe: "Pepino em conserva",
    estudo: 'Pedro Schneider',
    apresentar : function()
    {
        console.log(`Olá, meu nome é ${pessoa.nome} tenho ${pessoa.idade} anos. Gosto de ${pessoa.gostoDe}. Estudo na escola ${pessoa.estudo}`)
    }
}

pessoa.apresentar()
delete pessoa.gostoDe
console.log(pessoa)