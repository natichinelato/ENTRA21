"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var typeorm_1 = require("typeorm");
var categoria_1 = require("./categoria");
var Product = /** @class */ (function () {
    function Product() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Product.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Product.prototype, "descri\u00E7\u00E3o", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Product.prototype, "preco", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Product.prototype, "estoque", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return categoria_1.Categoria; }),
        (0, typeorm_1.JoinColumn)({ name: 'id_categoria' }),
        __metadata("design:type", categoria_1.Categoria)
    ], Product.prototype, "categoria", void 0);
    Product = __decorate([
        (0, typeorm_1.Entity)("tb_produto")
    ], Product);
    return Product;
}());
exports.Product = Product;
