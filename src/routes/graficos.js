var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.get("/linha", function (req,res) {
    console.log("1 - Cheguei aqui no route da linha");
    // graficos/linha
    graficoController.listarLinha(req, res);
} );

router.get("/barra", function (req,res) {
    console.log("2 - Cheguei aqui no route da barra");
    // graficos/barra
    graficoController.listarBarra(req, res);
} );

router.get("/novasLinhas", function (req,res) {
    console.log("1 - Cheguei aqui no route das novas linhas");
    // graficos/barra
    graficoController.listarNovasLinhas(req, res);
})
module.exports = router;