const pessoa = {
    nome: "Ana",
    idade: 25,
    cidade: "São Paulo",
    profissao: "" // Campo vazio
  };
  
  for (let chave in pessoa) {
    if (pessoa[chave] === "") {
      console.log(`${chave}: (campo vazio)`);
    } else {
      console.log(`${chave}: ${pessoa[chave]}`);
    }
  }