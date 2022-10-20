"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    constructor(descricao, valoruni, qtdestoque) {
        this.descricao = descricao;
        this.valoruni = valoruni;
        this.qtdestoque = qtdestoque;
    }
    estoque() {
        return this.qtdestoque;
    }
    precodesconto() {
        let taxa = 0.2;
        return parseFloat((this.valoruni - (this.valoruni * taxa)).toFixed(2));
    }
    precoacrescimo() {
        let taxa2 = 0.2;
        return (this.valoruni + (this.valoruni * taxa2));
    }
    imprimi() {
        console.log(`Descricao: ${this.descricao}`);
        console.log(`Valoruni: ${this.valoruni}`);
        console.log(`Estoque: ${this.estoque()}`);
        console.log(`desconto: ${this.precodesconto()}`);
        console.log(`acresicmo: ${this.precoacrescimo()}`);
        console.log('');
    }
}
exports.default = Produto;
