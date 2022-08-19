"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var datasource_1 = require("./datasource");
var user_1 = require("./entity/user");
datasource_1.default
    .initialize()
    .then(function () {
    console.log("Data Source has been initialized!");
})
    .catch(function (err) {
    console.error("Error during Data Source initialization:", err);
});
app.use('/contatos', user_1.User);
app.use('/usuario', usuario);
var app = express();
app.use(express.json());
var PORT = process.env.PORT;
app.listen(PORT, function () { console.log("executando em http://localhost:".concat(PORT)); });
