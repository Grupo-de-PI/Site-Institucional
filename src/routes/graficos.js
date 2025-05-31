var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.get("/linha", function (req,res) {
    console.log("Cheguei aqui no route");
    // graficos/listar
    graficoController.listarLinha(req, res);
} );

module.exports = router;