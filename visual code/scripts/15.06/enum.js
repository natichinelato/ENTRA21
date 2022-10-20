"use strict";
var pessoa;
(function (pessoa) {
    pessoa[pessoa["FISICA"] = 0] = "FISICA";
    pessoa[pessoa["JURIDICA"] = 1] = "JURIDICA";
    pessoa[pessoa["setIdentificador"] = 2] = "setIdentificador";
})(pessoa || (pessoa = {}));
var cliente;
cliente = pessoa.FISICA;
console.log(cliente);
var senac;
senac = pessoa.JURIDICA;
console.log(senac);
