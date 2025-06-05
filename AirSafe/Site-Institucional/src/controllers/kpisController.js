var kpiModel = require("../models/kpisModel");

function mostrarUltimoVazamento(req, res) {

     var id_empresa = parseInt(req.params.id_empresa);

    kpiModel.mostrarUltimoVazamento(id_empresa).then(
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

     var id_empresa = parseInt(req.params.id_empresa);

    kpiModel.mostrarSensoresAtivos(id_empresa).then(
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

     var id_empresa = parseInt(req.params.id_empresa);

    kpiModel.mostrarSalaPerigosa(id_empresa).then(
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