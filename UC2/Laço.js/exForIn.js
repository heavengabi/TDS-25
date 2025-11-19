let celular =
{
    marca: 'Samsung',
    modelo: 'A22',
    cor: '',
    armazenamento: '256GB'
};

for (let seila in celular) {
    if (celular[seila] === "") {
        console.log(`${seila}: (campo vazio)`);
    } else {
        console.log(`${seila}: ${celular[seila]}`);
    }
}