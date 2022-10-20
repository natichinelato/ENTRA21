"use strict";
class Produto {
    constructor() {
        this.descricao = "";
        this.preco = 0;
    }
}
class Produtofinal extends Produto {
    consultar(id) {
        return `consultando por ${id}`;
    }
    salvar() {
        throw new Error("Method not implemented.");
    }
    update(id) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
}
let p1 = new Produtofinal();
p1.descricao = 'arroz';
p1.preco = 10;
console.log(p1.consultar());
let p2 = new Produtofinal();
console.log(p2.consultar(10));
