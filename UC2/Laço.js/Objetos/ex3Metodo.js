const elenco = 
    [
    {
      ator: "Ryan Gosling",
      personagem: "Noah"
    },
    {
      ator: "Rachel McAdams",
      personagem: "Allie"
    },
    {
      ator: "Gena Rowlands",
      personagem: "Old Allie"
    }
  ]
  
  console.log(`${elenco[0].ator} interpreta ${elenco[0].personagem}`)
  console.log(`${elenco[1].ator} interpreta ${elenco[1].personagem}`)
  console.log(`${elenco[2].ator} interpreta ${elenco[2].personagem}`)

  elenco[0].ator = "xuxa"
  
  console.log(elenco)