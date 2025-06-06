var graficoModel = require("../models/graficoIndividualModels");

function listarLinhaIndividual(req, res) {
    var id_empresa = parseInt(req.params.id_empresa);
    var id_salas = parseInt(req.params.id_salas);

    // console.log("1 - Cheguei no controller da linha, vamoo!");
    graficoModel.listarLinhaIndividual(id_empresa, id_salas).then(
        function (resultado) {
            res.status(200).json(resultado);
        }
    ).catch(
        function (erro) {
            console.log("1 - Deu merda aqui no controller da listarLinhaIndividual: /n");
            res.status(500).json({ erro: erro.sqlMessage || erro.message || erro });
        }
    )
}

function listarRelatorioSensor(req, res) {
    
    var id_empresa = parseInt(req.params.id_empresa);
    var id_salas = parseInt(req.params.id_salas);

    // console.log("1 - Cheguei no controller da linha, vamoo!");
    graficoModel.listarRelatorioSensor(id_empresa, id_salas).then(
        function (resultado) {
            res.status(200).json(resultado);
        }
    ).catch(
        function (erro) {
            console.log("1 - Deu merda aqui no controller da listarRelatorioSensor: /n");
            res.status(500).json({ erro: erro.sqlMessage || erro.message || erro });
        }
    )
}


module.exports = {
    listarLinhaIndividual,
    listarRelatorioSensor
}