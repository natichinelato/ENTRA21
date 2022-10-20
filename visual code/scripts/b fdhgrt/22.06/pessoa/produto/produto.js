"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classe3_1 = __importDefault(require("./classe3"));
var produto1 = new classe3_1.default("leite", 5, 100);
var produto2 = new classe3_1.default("arroz", 7, 200);
//pessoa1.imprimi()
//pessoa2.imprimi()//
let pessoas = [];
pessoas.push(produto1);
pessoas.push(produto2);
pessoas.push(new classe3_1.default("chocolate", 10, 234));
pessoas.forEach((p) => p.imprimi());
