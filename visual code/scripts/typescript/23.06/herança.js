"use strict";
class Person {
    constructor(name) {
        this.name = '';
        this.name = name;
    }
}
class Empregado extends Person {
    constructor(name, matricula) {
        super(name);
        this.matricula = '';
        this.matricula = matricula;
    }
}
let emp;
emp = new Empregado('josé', '123');
emp.matricula = '123';
emp.name = 'jose';
console.log(emp);
