function escolherPersonagem()
{
    let funcao = prompt("Escolha uma função: guerreiro, mago, arqueiro, bruxa ou chefe").toLowerCase()
    let nivel = Number(prompt("Qual seu nível entre 1 a 100"))
    
    if (funcao === "guerreiro" && nivel>=90)
    {
        alert("Você é um guerreiro.")
    }

    else if(funcao === "bruxa" && nivel >= 70)
    {
    alert("Você é uma bruxa!")
    }
    
    else if (funcao ==="chefe" && nivel >= 100)
    {
    alert("Você é um chefe!")
    }

    else if (funcao === "mago" && nivel >= 77)
    {
        alert("Você é um mago!")
    }
    
    else if (funcao === "arqueiro" && nivel >= 60)
    {
        alert("Você é um arqueiro")
    }
 
    else
    {
        alert("Continue treinando!")
    }



}


escolherPersonagem()