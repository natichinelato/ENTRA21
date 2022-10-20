"use strict";
//*import pessoa from "./classe2"
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classe2_1 = __importDefault(require("./classe2"));
var jose = new classe2_1.default(1, "jose", 123456, "jose@gmail", 75, 1.75);
var maria = new classe2_1.default(2, "maria", 123789, "maria@gmail", 56, 1.60);
//pessoa1.imprimi()
//pessoa2.imprimi()//
let pessoas = [];
pessoas.push(jose);
pessoas.push(maria);
pessoas.push(new classe2_1.default(3, "antonia", 234, "anonia@gmail", 65, 1.69));
pessoas.forEach((p) => p.imprimi());
