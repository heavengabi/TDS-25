interface Pagamento {
    
    valor:number

    pagar():void
    estornar():void
}

class Pix implements Pagamento{
    constructor(public valor:number){}
        
    pagar(): void 
    {
        console.log(`Pagando via pix :R$ ${this.valor}`)
    }

    estornar(): void 
    {
        console.log(`Estornando pix: R$ ${this.valor}`)
    }
}

class CartaoCredito implements Pagamento
{
    constructor(public valor:number){}
    pagar(): void {
        console.log(`Pagando no cartão de crédito: R$ ${this.valor}`)
    }

    estornar(): void 
    {
        console.log(`Estorno no cartão: R$ ${this.valor}`)
    }
}

const pixPagamento = new Pix(130)
const cartaoPagamento = new CartaoCredito(250)

pixPagamento.pagar()
pixPagamento.estornar()

cartaoPagamento.pagar()
cartaoPagamento.estornar()

//==========================================================================================//


abstract class Produto 
{
    public nome:string
    public preco:number
    

abstract calcularDesconto():number
    
constructor(nome:string, preco:number)
    {
    this.nome = nome
    this.preco = preco
    }

    detalhes():void
    {
        const precoFinal = this.calcularDesconto()
        console.log(`Produto ${this.nome}`)
        console.log(`Preço origianl : R$ ${this.preco}`)
        console.log(`Preço com desconto ${precoFinal}`)
        console.log(`==================================`)
        
    }
}
class ProdutoFisico extends Produto
{
    calcularDesconto():number
    {
        return this.preco > 50 ? this.preco * 0.8 : this.preco
    }
}
class ProdutoDigital extends Produto {
    calcularDesconto(): number 
    {
        return this.preco > 50 ? this.preco * 0.8 : this.preco
    
    }
}

const livro = new ProdutoFisico("Livro", 60)
const Ebook = new ProdutoDigital ("Ebook", 90)

console.log("================LIVRO=============")
livro.calcularDesconto
livro.detalhes()

console.log("===============EBOOK=============")
Ebook.calcularDesconto
Ebook.detalhes()
