var express = require("express");
var router = express.Router();

var buscarController = require("../controllers/buscarController");

router.get("/qtd/:id_empresa", function (req,res) {
    // buscar/qtd
    buscarController.buscarQtd(req, res);
} );

router.get("/linha/:qtdEmpresa/:id_empresa", function (req,res) {
    // /buscar/Linha/:qtdEmpresa
    buscarController.atualizarLinha(req, res);
} );

router.get("/barra/:id_empresa", function (req,res) {
    // /buscar/barra
    buscarController.atualizarBarra(req, res);
} );



module.exports = router;