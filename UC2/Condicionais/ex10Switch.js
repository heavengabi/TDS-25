function tipoDeEvento()
{
    let pergunta = prompt("Que tipo de evento você gostaria de organizar?").toLowerCase()


    switch(pergunta)

{
case "aniversário":
    ("Salão de festa ou espaço kids")
    break

case"formatura":
    alert("Buffet com pista de dança")
    break

case"casamento":
    alert("Jardim ou uma igreja charmosa")
    break

case"festa surpresa":
    alert("Casa de amigos ou rooftop")
    break
    
case"churrasco":
    alert("Área externa ou parque")
    break

default:
    alert("Digite um evento válido")
}

  
}
tipoDeEvento()