"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class empregado {
    constructor(nome, valorhora, totalsemanal) {
        this.nome = nome;
        this.valorhora = valorhora;
        this.totalsemanal = totalsemanal;
    }
    calculasalario() {
        return parseFloat((this.valorhora * this.totalsemanal).toFixed(2));
    }
    imprimedados() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Valor R$: ${this.valorhora}`);
        console.log(`Horas Semana: ${this.totalsemanal}`);
        console.log(`Salario reais: ${this.calculasalario()}`);
    }
}
exports.default = empregado;
