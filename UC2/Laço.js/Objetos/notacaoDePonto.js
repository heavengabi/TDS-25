const professor = 
{
    nome :"Vitor",
    idade: 27,
    email : 'vitor@gmail.com'
}
console.log(professor.email)

professor.nome = 'Mika'
professor ['email'] = 'profmika@gmail.com'

console.log(professor.nome)
console.log(professor.email)