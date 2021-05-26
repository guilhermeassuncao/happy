//Importar Dependencias
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

//Iniciar o express
const server = express();

server
    //Utilizar body do req
    .use(express.urlencoded({ extended: true }))

    //Iniciando Arquivos Estaticos
    .use(express.static("public"))

    //Configurar Template Engine
    .set("views", path.join(__dirname, "views"))
    .set("view engine", "hbs")

    //Criar uma Rota
    .get("/", pages.index)
    .get("/orphanage", pages.orphanage)
    .get("/orphanages", pages.orphanages)
    .get("/create-orphanage", pages.createOrphanage)
    .post("/save-orphanage", pages.saveOrphanage)

    //Ligar Servidor
    .listen(process.env.PORT || 8080);