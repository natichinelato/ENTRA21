"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classe_1 = __importDefault(require("./classe"));
var emp1 = new classe_1.default("jose", 7.89, 40);
console.log(emp1);
console.log(emp1.calculasalario());
emp1.imprimedados();
