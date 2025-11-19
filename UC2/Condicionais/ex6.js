function chapeuSeletor()

{
    let qualidade = prompt("Qual qualidade mais define você: coragem, ambição, amizade ou sabedoria").toLowerCase()

    if (qualidade === "coragem")
    {
        alert("Você foi escolhido para Grifinória")
    }

    else if (qualidade === "ambição")
    {
        alert("Você foi escolhido para Lufa-Lufa")
    }
    
    else if(qualidade === "amizade") 
    {
        alert("Você foi escolhido para Sonserina")
    }

    else if (qualidade === "sabedoria")
    {
        alert("Você foi escolhido para Corvinal")
    }

    else
    {
        alert("Essa casa ainda não existe")
    }
}

chapeuSeletor()