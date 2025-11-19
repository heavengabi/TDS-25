function escolherRoupa()
{
    let temperatura = Number(prompt("Digite a temperatura atual(C°)"))

    if(temperatura > 30)
    {
        alert("Vista roupas leves, está bem quente☀️")
    }
    
    else if(temperatura >= 20 && temperatura <= 30)
    {
        alert("Use algo confortável, não está nem frio nem quente⛅")
    }
   
    else if(temperatura >= 10 && temperatura <= 19)
    {
        alert("Coloque um casaco, agora está fresquinho!🌥️")
    }

    else if(temperatura < 10) 
    {
        alert("Coloque bastante roupa. Está muito frio🌨️")
    }

    else 
    {
        alert("Temperatura não reconhecida. Insira a temperatura corretamente.")
    }


}

escolherRoupa()
