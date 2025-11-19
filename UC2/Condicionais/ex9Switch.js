function modoTransporte()
{
    let transporte = prompt("Qual meio de transporte você irá utilizar?").toLowerCase()

    switch(transporte)

{

case "ônibus":
    alert("Fique de olho no ponto para nao perder")
    break
    
case "carro":
    alert("Não esqueça de revisar o combustível")
    break

case "metrô":
    alert("Evite horários de pico para viajar tranquilo")
    break

case "bicicleta":
    alert("Use capacete e respeite as regras de trânsito")
    break
    
case "andar a pé":
    alert("Aproveite para escutar música e relaxar")
    break
    
    default:
    alert("Insira um meio de transporte válido.")

}

}



modoTransporte()