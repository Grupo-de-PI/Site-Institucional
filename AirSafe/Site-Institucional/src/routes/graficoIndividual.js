var express = require("express");
var router = express.Router();

var graficoIndividualController = require("../controllers/graficoIndividualController");

router.get("/linha/:id_salas/:id_empresa", function (req,res) {
    // console.log("1 - Cheguei aqui no route da linha");
    // graficoIndividual/linha/:id_salas/:id_empresa
    graficoIndividualController.listarLinhaIndividual(req, res);
} );



module.exports = router;