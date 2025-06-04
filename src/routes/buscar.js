var express = require("express");
var router = express.Router();

var buscarController = require("../controllers/buscarController");

router.get("/qtd", function (req,res) {
    // buscar/qtd
    buscarController.buscarQtd(req, res);
} );

router.get("/linha/:qtdEmpresa", function (req,res) {
    // /buscar/Linha/:qtdEmpresa
    buscarController.atualizarLinha(req, res);
} );



module.exports = router;