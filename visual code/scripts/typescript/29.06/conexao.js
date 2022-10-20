"use strict";
class Conexao {
    constructor() {
        this.database = '';
    }
    static getConexao() {
        return this.path;
    }
}
Conexao.path = '';
let conexao;
conexao = new Conexao();
conexao.database = 'loja';
Conexao.path = 'kkkk';
console.log(Conexao.getConexao());
