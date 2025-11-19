function podeEntrar(idade)
{
    if (idade >= 16)
    {
        alert("Pode entrar no cinema✅")
    }

    else
    {
        alert("Não pode entrar❌")
    }
}

let verificarIdade = Number(prompt("Digite a sua idade"))

podeEntrar(verificarIdade)