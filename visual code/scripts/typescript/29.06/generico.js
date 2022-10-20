"use strict";
function dados(p1, p2) {
    let vetor = [];
    vetor.push(p1);
    vetor.push(p2);
    return vetor;
}
let numeros = dados(10, 20);
numeros.push(50);
console.log(numeros);
let fruta = dados('latanja', 'banana');
fruta.push('morango');
console.log(fruta);
function base(n1, n2) {
    console.log(`${n1}, ${n2}`);
}
let boleto = base('jose,', 7);
let func1 = base('joao', true);
let func2 = base('pedro', false);
