import Produto from "./classe3"




var produto1 = new Produto("leite" , 5, 100)
var produto2 = new Produto("arroz" , 7, 200)

//pessoa1.imprimi()
//pessoa2.imprimi()//

let pessoas: Produto[] =[]
pessoas.push(produto1)
pessoas.push(produto2)
pessoas.push(new Produto("chocolate", 10, 234,))

pessoas.forEach((p) => p.imprimi());