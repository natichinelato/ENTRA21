"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classe2_1 = __importDefault(require("./classe2"));
var pessoa1 = new classe2_1.default(1, "jose", 123456, "jose@gmail");
var pessoa2 = new classe2_1.default(2, "maria", 123789, "maria@gmail");
pessoa1.imprimi();
pessoa2.imprimi();
