var express = require("express");
var router = express.Router();

var kpiController = require("../controllers/kpisController");

router.get("/ultimo/:id_empresa", function (req, res) {
    // kpis/ultimo
    kpiController.mostrarUltimoVazamento(req, res);
});

router.get("/ativos/:id_empresa", function (req, res) {
    // kpis/ativos
    kpiController.mostrarSensoresAtivos(req, res);
});

router.get("/perigo/:id_empresa", function (req,res) {
    // kpis/perigo
    kpiController.mostrarSalaPerigosa(req,res);
});


module.exports = router; 