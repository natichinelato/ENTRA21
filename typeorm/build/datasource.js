"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var produ_1 = require("./entity/produ");
var user_1 = require("./entity/user");
var profile_1 = require("./entity/profile");
var categoria_1 = require("./entity/categoria");
var Usuario_1 = require("./entity/Usuario");
var foto_1 = require("./entity/foto");
var questoes_1 = require("./entity/questoes");
var cate_1 = require("./entity/cate");
var dataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "postgres",
    entities: [user_1.User, produ_1.Product, profile_1.Profile, categoria_1.Categoria, Usuario_1.Usuario, foto_1.Foto, questoes_1.Questao, cate_1.Categ],
    logging: false,
    synchronize: true,
});
exports.default = dataSource;
