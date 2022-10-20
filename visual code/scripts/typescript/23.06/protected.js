"use strict";
class Pessoa {
    constructor() {
        this.nome = '';
        this.identificador = 0;
        this.idade = 0;
    }
    setIdentificador(id) {
        this.identificador = id;
    }
    setIdade(idade) {
        this.idade = idade;
    }
}
let people;
people = new Pessoa();
people.nome = 'maria';
people.setIdentificador(1000);
console.log(people);
class Aluno extends Pessoa {
    constructor() {
        super(...arguments);
        this.media = 0;
    }
}
let aluno = new Aluno();
aluno.media = 10;
aluno.setIdade(15);
aluno.setIdentificador(125);
console.log(aluno);
