const usuario = 
{
    nome: 'julio',
    idade: 22,
    email : 'profjulio@gmail.com',
    cargo : 'professor',
    endereco: 'seila seila, Rio Grande do Sul',
    cpf: 129039290239
}

const novoUsuario = 
{
...usuario,
    nome:'jorge',
    idade:28,
    email : 'profjorge@gmail.com'
}

console.log(novoUsuario)

const novoUsuario1 = 
{
    ...usuario,
    nome: 'Gabriele',
    idade: 34,
    email: 'profgabi@gmail.com'
}

console.log(novoUsuario1)


const listaDeNomes = ['Mika','Paula','Vitor']

const copiaListaDeNomes = [...listaDeNomes]
copiaListaDeNomes[0] = 'Vitor'

console.log(copiaListaDeNomes)