"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class pessoa {
    constructor(id, nome, fone, email, peso, altura) {
        this.id = id;
        this.nome = nome;
        this.fone = fone;
        this.email = email;
        this.peso = peso;
        this.altura = altura;
    }
    salvar() {
        console.log("Salvo com sucesso");
    }
    validar() {
        if (this.id == 0) {
            console.log("Insira id");
        }
        else if (this.nome == "") {
            console.log("Insira nome");
        }
        else if (this.fone == 0) {
            console.log("Insira fone");
        }
        else
            (this.email == "");
        {
            console.log("Insira email");
        }
    }
    imprimi() {
        console.log(`ID: ${this.id}`);
        console.log(`NOME: ${this.nome}`);
        console.log(`FONE: ${this.fone}`);
        console.log(`EMAIL: ${this.email}`);
        console.log(`IMC: ${this.calcularimc()}`);
        console.log('');
    }
    calcularimc() {
        let imc = (this.peso / (this.altura * this.altura)).toFixed(2);
        return parseFloat(imc);
    }
}
exports.default = pessoa;
