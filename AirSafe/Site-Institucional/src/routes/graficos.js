var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.get("/linha", function (req,res) {
    // console.log("1 - Cheguei aqui no route da linha");
    // graficos/linha
    graficoController.listarLinha(req, res);
} );

router.get("/barra", function (req,res) {
    // console.log("2 - Cheguei aqui no route da barra");
    // graficos/barra
    graficoController.listarBarra(req, res);
} );


router.get("/monitoramentoIndividual/:id_empresa", function (req,res) {
    console.log("1 - Cheguei aqui no route do monitoramentoIndividual");
    // graficos/barra
    graficoController.monitoramentoIndividual(req, res);
})

module.exports = router;