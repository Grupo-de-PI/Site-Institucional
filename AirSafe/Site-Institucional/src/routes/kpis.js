var express = require("express");
var router = express.Router();

var kpiController = require("../controllers/kpisController");

router.get("/ultimo", function (req, res) {
    // kpis/ultimo
    kpiController.mostrarUltimoVazamento(req, res);
});

router.get("/ativos", function (req, res) {
    // kpis/ativos
    kpiController.mostrarSensoresAtivos(req, res);
});

router.get("/perigo", function (req,res) {
    // kpis/perigo
    kpiController.mostrarSalaPerigosa(req,res);
});


module.exports = router; 