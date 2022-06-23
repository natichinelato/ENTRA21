interface compra {
    id: number
    produto: string
    qtd: number
    preco: string
    
}

var carrinho: compra = {id:0, produto:'', qtd:0, preco:''}

carrinho.id = 10
carrinho.produto = 'pão'
carrinho.qtd= 5
carrinho.preco = '10,20'

console.log(carrinho)
