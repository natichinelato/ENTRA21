"use strict";
class employe {
    constructor(code, name, matricula) {
        this.empcode = 0;
        this.empname = '';
        this.empmatricula = '';
        this.empcode = code;
        this.empname = name;
        this.setmatricula(matricula);
    }
    setmatricula(matricula) {
        if (matricula.length < 5) {
            console.log('numero deve ter no miinimo 5 digitos');
        }
        else {
            this.empmatricula = matricula;
        }
    }
}
let emp1;
emp1 = new employe(10, 'jose', '123');
/*emp1.empcode = 10
emp1.empname ='jose da silva'
emp1.setmatricula('123')

console.log(emp1)*/ 
