"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class imc {
    constructor(id, nome, peso, altura) {
        this.id = id;
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularimc() {
        let imc = (this.peso / (this.altura * this.altura)).toFixed(2);
        return parseFloat(imc);
    }
    imprimimc() {
        console.log(`Nome: ${this.nome}`);
        console.log(`IMC: ${this.calcularimc()}`);
    }
}
exports.default = imc;
