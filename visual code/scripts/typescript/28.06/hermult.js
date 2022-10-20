"use strict";
class Bicho {
    constructor() {
        this.qtdmama = 10;
        this.raca = 'piata';
        this.especie = 'suina';
    }
    getqtdleite() {
        return 12;
    }
    barulho(x) {
        console.log(`Barulho de ${x}`);
    }
    display() {
        console.log(`Raca: ${this.raca}`);
        console.log(`Especie: ${this.especie}`);
        console.log(`n° mamas: ${this.qtdmama}`);
    }
}
let bicho;
bicho = new Bicho();
bicho.barulho('pocoto');
bicho.display();
