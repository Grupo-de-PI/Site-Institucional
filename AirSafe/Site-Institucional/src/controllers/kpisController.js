var kpiModel = require("../models/kpisModel");

function mostrarUltimoVazamento(req, res) {
    kpiModel.mostrarUltimoVazamento().then(
        function (resultado) {
            res.status(200).json(resultado);
        }
    ).catch(
        function (erro) {
            res.status(500).json({ erro: erro.sqlMessage || erro.message || erro });
        }
    )
}

function mostrarSensoresAtivos(req, res) {
    kpiModel.mostrarSensoresAtivos().then(
        function (resultado) {
            res.status(200).json(resultado);
        }
    ).catch(
        function (erro) {
            res.status(500).json({ erro: erro.sqlMessage || erro.message || erro });
        }
    )
}

function mostrarSalaPerigosa (req, res) {
    kpiModel.mostrarSalaPerigosa().then(
        function (resultado) {
            res.status(200).json(resultado);
        }
    ).catch(
        function (erro) {
            res.status(500).json({ erro: erro.sqlMessage || erro.message || erro });
        }
    )
}

module.exports = {
    mostrarUltimoVazamento,
    mostrarSensoresAtivos,
    mostrarSalaPerigosa
}