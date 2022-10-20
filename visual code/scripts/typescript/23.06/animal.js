"use strict";
class Animais {
    constructor() {
        this.raca = '';
        this.especie = '';
    }
}
let animal;
animal = new Animais();
animal.raca = 'ruim';
animal.especie = 'pintcher';
class Mamifer extends Animais {
    constructor() {
        super(...arguments);
        this.numeromamas = 0;
    }
}
let mamifero;
mamifero = new Mamifer();
mamifero.numeromamas = 6;
mamifero.raca = 'chiuaua';
mamifero.especie = 'canina';
class Cacorro extends Mamifer {
    constructor() {
        super(...arguments);
        this.cor = '';
    }
}
let cachorro = new Cacorro();
cachorro.cor = 'preto';
cachorro.raca = 'bulldog';
cachorro.especie = 'canina';
cachorro.numeromamas = 6;
