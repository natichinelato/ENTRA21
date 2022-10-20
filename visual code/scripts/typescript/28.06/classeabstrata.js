"use strict";
class Computador {
    constructor() {
        this.memoria = 12;
    }
    display() {
        console.log(this.memoria);
    }
}
class notebook extends Computador {
    getCapacProcessa() {
        return 500;
    }
}
class tablet extends Computador {
    getCapacProcessa() {
        return 200;
    }
}
let cp1;
cp1 = new notebook();
let cp2;
cp2 = new tablet();
