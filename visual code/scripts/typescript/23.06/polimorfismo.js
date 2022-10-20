"use strict";
class Veiculo {
    constructor(placa, marca, modelo) {
        this.placa = '';
        this.marca = '';
        this.modelo = '';
        this.placa = placa;
        this.marca = marca;
        this.modelo = modelo;
    }
    display() {
        console.log(`Placa: ${this.placa}`);
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
    }
}
let carro = new Veiculo('abc-1234', 'honda', 'civic');
class Moto extends Veiculo {
    constructor() {
        super(...arguments);
        this.cilindradas = 160;
    }
    display() {
        super.display();
        console.log(`Cilin: ${this.cilindradas}`);
    }
}
let moto = new Moto('de-345', 'honda', 'broz');
moto.display();
